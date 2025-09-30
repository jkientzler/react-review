import Image from "next/image";

function NotesHeader() {
  return (
    <>
      <h1 className="text-xl">My Notes</h1>
      <p>
        Your notes are listed below, click Create to make a new one, Save once
        you're done editing, and Delete to remove notes you no longer need.
      </p>
    </>
  );
}

function NoteEditor() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 justify-items-stretch">
        <label for="title" className="text-l">
          Enter a title
        </label>
        <input
          id="title"
          name="title"
          className="border rounded border-black m-x-10"
        />
        <label for="note" className="text-l">
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
  return (
    <div>
      <main>
        <NotesHeader />
        <NoteEditor />
      </main>
      <footer></footer>
    </div>
  );
}
