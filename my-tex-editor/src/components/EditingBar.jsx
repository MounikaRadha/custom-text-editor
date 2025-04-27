import functionhandlers from "../functions/functionHandlers";

export default function Editingbar() {
  return (
    <div className="w-screen flex justify-center gap-4 ">
      <span>editing bar </span>
      &nbsp;
      <button onClick={() => functionhandlers.makeBold()}>Bold</button>
      <button onClick={() => functionhandlers.makeItalic()}>Italic</button>
      <button onClick={() => functionhandlers.makeUnderline()}>
        Underline
      </button>
      <button onClick={() => functionhandlers.makeHeadingH1()}>heading</button>
      <button onClick={() => functionhandlers.makeQuotes()}>quotes</button>
      <button onClick={() => functionhandlers.makeCodeBlock()}>
        code block
      </button>
      <button onClick={() => functionhandlers.makeUnorderedList()}>
        unordered list
      </button>
      <button onClick={() => functionhandlers.makeOrderedList()}>
        ordered list
      </button>
    </div>
  );
}
