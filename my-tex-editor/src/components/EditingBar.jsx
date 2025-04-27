import functionhandlers from "../functions/functionHandlers";

export default function Editingbar() {
  return (
    <div className="w-screen flex justify-center gap-4 ">
      <button onClick={() => functionhandlers.makeBold()}>Bold</button>
      <button onClick={() => functionhandlers.makeItalic()}>Italic</button>
      <button onClick={() => functionhandlers.makeUnderline()}>
        Underline
      </button>
      <button onClick={() => functionhandlers.makeHeadingH1()}>Heading</button>
      <button onClick={() => functionhandlers.makeQuotes()}>Quotes</button>
      <button onClick={() => functionhandlers.makeCodeBlock()}>
        Code block
      </button>
      <button onClick={() => functionhandlers.makeUnorderedList()}>
        Unordered list
      </button>
      <button onClick={() => functionhandlers.makeOrderedList()}>
        Ordered list
      </button>
    </div>
  );
}
