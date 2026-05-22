"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Note, NoteUpdate } from "@/lib/types";
import { updateNote, deleteNote } from "@/actions/notes";
import { toast } from "sonner";
import {
  ArrowLeft,
  Trash2,
  Check,
  Loader2,
  AlertCircle,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";

interface NoteEditorProps {
  initialNote: Note;
}

export function NoteEditor({ initialNote }: NoteEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Local editor state
  const [title, setTitle] = useState(initialNote.title);
  const [content, setContent] = useState(initialNote.content);

  // Save tracking status: 'idle' | 'saving' | 'saved' | 'error'
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [showYoutube, setShowYoutube] = useState(false);

  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialMount = useRef(true);

  // Debounced auto-save triggers when title or content change
  useEffect(() => {
    // Prevent auto-save on initial mount load
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    setSaveStatus("saving");

    // Clear previous pending save timeout trigger
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      triggerSave();
    }, 1500);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [title, content]);

  // Actual function to save notes to database using Server Action
  const triggerSave = async (explicit: boolean = false) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    try {
      const updates: NoteUpdate = {
        title: title.trim() || "Untitled Note",
        content,
      };

      await updateNote(initialNote.id, updates);
      setSaveStatus("saved");

      if (explicit) {
        toast.success("Note saved successfully");
      }

      // Re-trigger router refresh to fetch fresh server state
      router.refresh();
    } catch (error: any) {
      console.error("Auto-save failed:", error);
      setSaveStatus("error");
      toast.error(`Auto-save failed: ${error.message}`);
    }
  };

  // Keyboard shortcut Ctrl+S / Cmd+S manual save triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        setSaveStatus("saving");
        triggerSave(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [title, content]);

  // Workspace Deletion Action
  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteNote(initialNote.id);
        toast.success("Note deleted successfully");
        setDeleteDialogOpen(false);
        router.push("/notes");
      } catch (error: any) {
        toast.error(`Failed to delete note: ${error.message}`);
      }
    });
  };

  // Content Textarea auto-sizing helper to naturally adapt page flow
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to calculate scroll height properly
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6 select-none">
      {/* 1. Header Toolbar pane */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 select-none">
        <div className="flex items-center gap-3">
          <Button
            disabled={saveStatus === "saving"}
            className="p-2 rounded-sm hover:bg-[#1C1B1B] text-[#CBC3D7] hover:text-[#E5E2E1] transition-all duration-200"
          >
            <Link href="/notes">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <span className="text-xs text-[#CBC3D7]/40 truncate max-w-[180px] sm:max-w-xs">
            {title || "Untitled Note"}
          </span>
        </div>

        {/* Status Indicators & Safe Deletes */}
        <div className="flex items-center gap-4">
          {/* Active Status Indicator labels */}
          <div className="flex items-center gap-1.5 text-xs">
            {saveStatus === "saving" && (
              <span className="flex items-center gap-1 text-[#CBC3D7]/60">
                <Loader2 className="h-3 w-3 animate-spin text-[#0D9488]" />{" "}
                Saving...
              </span>
            )}
            {saveStatus === "saved" && (
              <span className="flex items-center gap-1 text-[#0D9488] font-medium">
                <Check className="h-3.5 w-3.5" /> Saved
              </span>
            )}
            {saveStatus === "error" && (
              <span className="flex items-center gap-1 text-[#EF4444] font-medium">
                <AlertCircle className="h-3.5 w-3.5" /> Save failed
              </span>
            )}
            {saveStatus === "idle" && (
              <span className="text-[#CBC3D7]/30 text-[10px]">
                Auto-saves active
              </span>
            )}
          </div>

          <AlertDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-[#CBC3D7]/50 hover:bg-[#EF4444]/10 hover:text-[#EF4444] border-white/10 hover:border-[#EF4444]/20 rounded-sm cursor-pointer"
                title="Delete note"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#121212] border border-white/5 text-[#E5E2E1]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">
                  Delete Note Workspace
                </AlertDialogTitle>
                <AlertDialogDescription className="text-[#CBC3D7] text-xs">
                  Are you sure you want to delete this active lecture note? All
                  contents and recalled summaries will be permanently lost.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2 sm:gap-0">
                <AlertDialogCancel className="bg-transparent border border-white/10 hover:bg-white/5 text-[#E5E2E1] rounded-sm cursor-pointer text-xs">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete();
                  }}
                  disabled={isPending}
                  className="bg-[#EF4444] hover:bg-[#EF4444]/80 text-white rounded-sm border-none shadow-none cursor-pointer text-xs"
                >
                  {isPending ? "Deleting..." : "Delete Workspace"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowYoutube((v) => !v)}
            className="h-8 w-8 text-[#CBC3D7]/50 hover:bg-[#EF4444]/10 hover:text-[#EF4444] border-white/10 rounded-sm cursor-pointer"
            title="Toggle YouTube embed"
          >
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 2. Main Center-Weighted Typography Editor Input Elements */}
      <div className="space-y-6 pt-4">
        {/* Title Input field with Academic Teal focus border */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled Note"
          className="w-full text-2xl font-bold text-white bg-[#121212] p-4 rounded-sm border border-white/5 placeholder-[#CBC3D7]/20 focus:border-[#0D9488] focus:outline-none transition-all duration-300"
        />

        {/* Content text area with airy padding and line heights */}
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your recalled lecture details here..."
          className="w-full text-base bg-[#121212] p-6 rounded-sm border border-white/5 text-[#E5E2E1] placeholder-[#CBC3D7]/25 focus:border-[#0D9488] focus:outline-none min-h-[300px] leading-relaxed resize-none transition-all duration-300"
        />

        {showYoutube && (
          <YoutubeEmbed
            onRemove={() => {
              setShowYoutube(false);
              initialNote.video_url = "";
            }}
            url={initialNote.video_url}
          />
        )}

        {/* Helper footer */}
        <div className="flex justify-between items-center text-[10px] text-[#CBC3D7]/40 px-2 select-none">
          <span>Character count: {content.length}</span>
          <span>
            Press{" "}
            <kbd className="bg-white/5 border border-white/10 px-1 rounded-sm text-[9px] font-mono text-[#E5E2E1]">
              Ctrl + S
            </kbd>{" "}
            to save immediately
          </span>
        </div>
      </div>
    </div>
  );
}
