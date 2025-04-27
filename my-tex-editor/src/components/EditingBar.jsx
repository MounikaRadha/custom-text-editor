export default function Editingbar() {
  const formatText = (command,value=null) => {
    document.execCommand(command,false, value);
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
      <button  onClick={()=>formatText("formatBlock","<h1>")}>
        heading
      </button>
    </div>
  );
}
