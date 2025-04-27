import Editingbar from "./components/EditingBar";
import MyFooter from "./components/MyFooter";
import MyTextBox from "./components/MyTextBox";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-none w-screen">
        <Editingbar />
      </div>
      <div className="flex-grow">
        <MyTextBox />
      </div>
      <div className="flex-none w-screen">
        <MyFooter />
      </div>
    </div>
  );
}


export default App;
