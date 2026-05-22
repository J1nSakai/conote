export type Note = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type NoteInsert = Pick<Note, "title" | "content">;
export type NoteUpdate = Partial<NoteInsert>;
