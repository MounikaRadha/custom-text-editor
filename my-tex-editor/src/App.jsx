import Editingbar from "./components/EditingBar";
import MyFooter from "./components/MyFooter";
import MyTextBox from "./components/MyTextBox";
import { useRef, useState } from "react";

function App() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-none w-screen">
        <Editingbar editorRef={editorRef} />
      </div>
      <div className="flex-grow">
        <MyTextBox  editorRef={editorRef}
        content={content}
        setContent={setContent}/>
      </div>
      <div className="flex-none w-screen">
        <MyFooter />
      </div>
    </div>
  );
}


export default App;
