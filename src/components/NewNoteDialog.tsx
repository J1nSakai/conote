"use client";

import { createNote } from "@/actions/notes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Note } from "@/lib/types";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const NewNoteDialog = ({
  buttonText = "New Note",
}: {
  buttonText?: string;
}) => {
  const [title, setTitle] = useState("");
  const [addingNote, setAddingNote] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      setTitle("Untitled Note");
    }

    let newNote: Note | null = null;
    try {
      setAddingNote(true);
      newNote = await createNote({
        title,
        content: "",
      });

      setTitle("");
    } catch (error) {
      console.error("Failed to create note on server:", error);

      redirect("/notes?error=create_failed");
    }

    if (newNote && newNote.id) {
      redirect(`/notes/${newNote.id}`);
    } else {
      redirect("/notes");
    }
    setAddingNote(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-[#0D9488] hover:bg-[#0D9488]/85 text-white font-medium rounded-sm border-none shadow-none cursor-pointer flex items-center gap-1.5 px-4 py-2"
        >
          <Plus className="h-4 w-4" /> {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm" showCloseButton={false}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Note</DialogTitle>
            <DialogDescription>
              Add a title for your new note.
            </DialogDescription>
          </DialogHeader>

          <Field>
            <Input
              id="new-note-title"
              name="new-note-title"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={addingNote}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={addingNote}>
              Add note
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewNoteDialog;
