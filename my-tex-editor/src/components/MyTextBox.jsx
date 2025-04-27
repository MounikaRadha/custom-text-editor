export default function MyTextBox({ editorRef, content, setContent }) {
  return (
    <div
      ref={editorRef}
      className="h-full w-screen"
      contentEditable
      suppressContentEditableWarning
      dangerouslySetInnerHTML={{ __html: content }}
      onInput={(e) => setContent(e.currentTarget.innerHTML)}
    />
  );
}
