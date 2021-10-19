import "./App.scss";
import Greeting from "./components/js/greeting";
import Agitation from "./components/js/agitation";
import Investors from "./components/js/investors";
import Facts from "./components/js/facts";
import Form from "./components/js/form";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Agitation />
      <Investors />
      <Facts />
      <Form />
    </div>
  );
}

export default App;
