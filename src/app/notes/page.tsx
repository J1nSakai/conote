import { getNotes } from "@/actions/notes";
import { EmptyState } from "@/components/EmptyState";
import NewNoteDialog from "@/components/NewNoteDialog";
import { NoteCard } from "@/components/NoteCard";
import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Notes — conote",
};

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="space-y-8 select-none">
      {/* Dashboard header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            My Notes
          </h2>
          <p className="text-xs sm:text-sm text-[#CBC3D7]">
            Analyze and synthesize your lectures with active recall checks.
          </p>
        </div>

        {notes.length > 0 && (
          // <Link href="/notes/new">
          //   <Button size="sm" className="bg-[#0D9488] hover:bg-[#0D9488]/85 text-white font-medium rounded-sm border-none shadow-none cursor-pointer flex items-center gap-1.5 px-4 py-2">
          //     <Plus className="h-4 w-4" /> New Note
          //   </Button>
          // </Link>
          <NewNoteDialog />
        )}
      </div>

      {/* Main dashboard content list */}
      {notes.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No notes yet"
          description="Create your first study workspace to begin active lecture recall."
          actionLabel="Create Note"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
