import {Routes, Route} from "react-router";

import "./App.css";
import {BasicBox, Sample} from "./components";
import {Nav} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<BasicBox />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </div>
  );
};

export default App;
