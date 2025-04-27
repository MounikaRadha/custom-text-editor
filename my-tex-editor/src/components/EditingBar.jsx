export default function Editingbar({ editorRef }) {
  const formatText = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };
  return (
    <div className="w-screen flex justify-center gap-4 ">
      <span>editing bar </span>
      &nbsp;
      <button onClick={() => formatText("bold")}>
        Bold
      </button>
      <button onClick={() => formatText("italic")} >
        Italic
      </button>
      <button onClick={() => formatText("underline")}>
        Underline
      </button>
    </div>
  );
}
