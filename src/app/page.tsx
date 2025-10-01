import React, { useState } from "react";

type NoteType = {
  title: string;
  id: number;
  content: string;
};

const notes_init_val = [
  {
    title: "Test Note 1!!!!!",
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "👁️ see you><>?@#(",
    id: 2,
    content: "this one is small",
  },
];

function NotesHeader() {
  return (
    <>
      <h1 className="text-xl mt-8">My Notes</h1>
      <p>
        Your notes are listed below, click Create to make a new one, Save once
        you&apos;re done editing, and Delete to remove notes you no longer need.
      </p>
    </>
  );
}

function NoteListItem({ note }: {note: NoteType}) {
  const title_preview = note.title.slice(0, 30);
  const content_preview = note.content.slice(0, 20);
  return (
    <tr>
      <td className="px-2">{title_preview}</td>
      <td className="px-2">{content_preview}</td>
    </tr>
  );
}

function NotesList({ notes }: { notes: Array<NoteType> }) {
  // render rows from notes array using map — use React.ReactElement[] for typing
  const rows: React.ReactElement[] = notes.map((note) => (
    <NoteListItem note={note} key={note.id} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function NoteEditor() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 justify-items-stretch">
        <label htmlFor="title" className="text-l">
          Enter a title
        </label>
        <input
          id="title"
          name="title"
          className="border rounded border-black mx-10"
        />
        <label htmlFor="note" className="text-l">
          Enter your note
        </label>
        <textarea
          id="note"
          name="note"
          className="border rounded border-black"
        />
      </div>
    </>
  );
}

export default function Home() {
  const [notesList, setNotesList] = useState<Array<NoteType>>(notes_init_val);

  return (
    <div>
      <main>
        <NotesHeader />
        <NoteEditor />
        <NotesList notes={notesList} />
      </main>
      <footer></footer>
    </div>
  );
}
