import { getNoteById } from "@/actions/notes";
import { NoteEditor } from "@/components/NoteEditor";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface NotePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const note = await getNoteById(id);
    return {
      title: `${note.title || "Untitled Note"} — conote`,
    };
  } catch {
    return {
      title: "Note Not Found — conote",
    };
  }
}

export const dynamic = "force-dynamic";

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;

  let note;
  try {
    note = await getNoteById(id);
  } catch (error) {
    console.error("Note not found or fetch error:", error);
    notFound();
  }

  if (!note) {
    notFound();
  }

  return <NoteEditor initialNote={note} />;
}
