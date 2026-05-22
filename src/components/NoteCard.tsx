"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Note } from "@/lib/types";
import { Trash2, Calendar, FileText } from "lucide-react";
import { deleteNote } from "@/actions/notes";
import { toast } from "sonner";
import { useState, useTransition } from "react";
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

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const [isPending, startTransition] = useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteNote(note.id);
        toast.success("Note deleted successfully");
        setDialogOpen(false);
      } catch (error: any) {
        toast.error(`Failed to delete note: ${error.message}`);
      }
    });
  };

  const formattedDate = formatDistanceToNow(new Date(note.updated_at), {
    addSuffix: true,
  });

  // Truncate note content to avoid overflows
  const truncatedContent = note.content
    ? note.content.length > 140
      ? note.content.substring(0, 140) + "..."
      : note.content
    : "Empty note";

  return (
    <div className="group relative flex flex-col justify-between p-5 bg-[#121212] hover:bg-[#2A2A2A] rounded-md border border-white/5 transition-all duration-300 select-none">
      {/* Content wrapper */}
      <Link href={`/notes/${note.id}`} className="flex-1 cursor-pointer">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-sm bg-[#8B5CF6]/5 border border-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:bg-[#8B5CF6]/10 transition-colors shrink-0">
            <FileText className="h-4 w-4" />
          </div>
          <h4 className="text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors line-clamp-1">
            {note.title || "Untitled Note"}
          </h4>
        </div>
        <p className="text-xs text-[#CBC3D7] leading-relaxed mb-6 line-clamp-3">
          {truncatedContent}
        </p>
      </Link>

      {/* Footer metadata */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[10px] text-[#CBC3D7]/50 font-medium">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3 text-[#0D9488]" />
          <span suppressHydrationWarning>{formattedDate}</span>
        </div>

        {/* Delete Trigger Button */}
        <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <AlertDialogTrigger asChild>
            <button
              className="p-1.5 rounded-sm hover:bg-[#EF4444]/10 hover:text-[#EF4444] text-[#CBC3D7]/30 transition-all duration-200 cursor-pointer"
              title="Delete note"
              onClick={(e) => {
                e.stopPropagation(); // Avoid triggering parent Link
              }}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#121212] border border-white/5 text-[#E5E2E1]">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Delete Note
              </AlertDialogTitle>
              <AlertDialogDescription className="text-[#CBC3D7] text-xs">
                Are you sure you want to delete this note? This action cannot be
                undone.
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
                {isPending ? "Deleting..." : "Delete Note"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
