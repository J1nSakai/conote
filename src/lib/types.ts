export type Note = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  video_url: string;
};

export type NoteInsert = Pick<Note, "title" | "content" | "video_url">;
export type NoteUpdate = Partial<NoteInsert>;
