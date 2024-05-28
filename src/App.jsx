import "./App.css";
import { useState } from "react";
import userContext from "./Components/Context/Context";
import Useeffect from "./Components/ComponentLifecycle/Useeffect";
import EventHandler from "./Components/EventHandlers/EventHandler";
import Prop from "./Components/Props/Prop";
import Component from "./Components/ReactComponent/Component";
import Counter from "./Components/State/Counter";
import Reducer from "./Components/UseReducer/Reducer";
import ApiExample from "./Components/ApiExample/ApiExample"
import Linker from "./Components/Linker/Linker";

function App() {
  const [userName, setuserName] = useState("Fanny");
  const [surName, setsurName] = useState("Lightborn");

  return (
    <>
      <userContext.Provider
        value={{ userName, setuserName, surName, setsurName }}
      >
        {/* <Component />
        <Counter />
        <Prop name="Guest" age={32} />
        <EventHandler />
        <Useeffect />
        <Reducer />
        <ApiExample /> */}
        <Linker/>
      </userContext.Provider>
    </>
  );
}

export default App;
