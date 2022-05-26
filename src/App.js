import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Pagination from "./components/Pagination";

let name = "Pawan";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      {/*<Navbar/>*/}
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
        {/*<About/>*/}
        <Pagination />
      </div>
    </>
  );
}

export default App;
