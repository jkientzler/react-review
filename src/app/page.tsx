'use client'
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

function NoteListItem({ note, currNoteSetter }: {note: NoteType, currNoteSetter: React.Dispatch<React.SetStateAction<NoteType>>}) {
  const title_preview = note.title.slice(0, 30);
  const content_preview = note.content.slice(0, 20);
  return (
    <div className="border rounded border-black my-2" onClick={() => { currNoteSetter(note); console.log(note); }}>
      <p className="px-2">{title_preview}</p>
      <p className="px-2">{content_preview}</p>
    </div>
  );
}

function NotesList({ notes, currNoteSetter }: { notes: Array<NoteType>, currNoteSetter: React.Dispatch<React.SetStateAction<NoteType>> }) {
  // render rows from notes array using map — use React.ReactElement[] for typing
  const rows: React.ReactElement[] = notes.map((note) => (
    <NoteListItem note={note} key={note.id} currNoteSetter={currNoteSetter} />
  ));

  return (
      <div>{rows}</div>
  );
}

function NoteEditor({noteTitle, noteContent, notesListSetter}: {noteTitle: string, noteContent: string, notesListSetter: React.Dispatch<React.SetStateAction<Array<NoteType>>>}) {
  const [title, setTitle] = useState(noteTitle);
  const [content, setContent] = useState(noteContent);
  return (
    <>
      <form className="grid grid-cols-1 gap-4 justify-items-stretch">
        <label htmlFor="title" className="text-l mx-10">
          Enter a title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          className="border rounded border-black mx-10"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="note" className="text-l mx-10">
          Enter your note
        </label>
        <textarea
          id="note"
          name="note"
          placeholder="Note"
          className="border rounded border-black mx-10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" className="border rounded border-black px-4 py-2 mx-10" onClick={() => {
          const newNote: NoteType = {
            title,
            content,
            id: Date.now()
          };
          notesListSetter((prevNotes) => [...prevNotes, newNote]);
          setTitle("");
          setContent("");
        }}>Save</button>
      </form>
    </>
  );
}

export default function Home() {
  const [notesList, setNotesList] = useState<Array<NoteType>>(notes_init_val);
  const [currentNote, setCurrentNote] = useState<NoteType>({id: 0, title: "", content: ""});
  return (
    <div>
      <main>
        <NotesHeader />
        <NoteEditor notesListSetter={setNotesList} noteTitle={currentNote.title} noteContent={currentNote.content} />
        <NotesList notes={notesList} currNoteSetter={setCurrentNote} />
      </main>
      <footer></footer>
    </div>
  );
}
