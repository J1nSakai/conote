## This is Conote

Conote was supposed to be a an not etaking app for students that would take them out of tutorial hell. The idea is that the integrated AI "watches" a lecture with the user, pauses the video after N minutes, and tells user to takes notes and propmpts some questions so that user is actively engaged and understanding the lecture, rather than just watching it.

### What the app does so far

- Notes dashboard showing existing notes from Supabase.
- Create a new note with a title using the built-in note dialog.
- View a note detail page and edit content.
- Auto-save note edits using server actions.
- Delete notes from the dashboard or note detail page.
- Empty state experience when there are no notes yet.

### Available commands

- `bun --bun next dev` — start the development server.
- `bun --bun next build` — build the app for production.
- `bun --bun next start` — start the production server after build.
- `eslint` — run linting.

### Project notes

- Uses Next.js 16 with React 19 and Tailwind CSS.
- Stores notes in Supabase and uses server actions from `src/actions/notes.ts`.
- Includes a client-side `NewNoteDialog` for note creation and a `NoteEditor` with auto-save.
- Note cards support deletion and link to the individual note editor page.

### Installation

- You should have bun installed in your machine. "Install bun" in google.

```bash
bun  install
```

- You should also create a Supabase project, and paste the values into `.env.local` file.

```env
NEXT_PUBLIC_SUPABASE_URL = "your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY = "your_supabase_anon_key"
```

- **NOTE**: Supabase is a free database. You can create a project for free.

- After creation of the project in supabase, run the following SQL script in the SQL Editor to create the table.

```sql
create table public.notes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null default '',
  video_url text not null default '',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger notes_updated_at
  before update on public.notes
  for each row execute function update_updated_at();

```

- Finally, run the project through:

```bash
bun --bun next dev
```

- Your project should start at `http://localhost:3000`
- You should see the notes dashboard at `http://localhost:3000/notes`
- You should see the note detail page at `http://localhost:3000/notes/:id`
