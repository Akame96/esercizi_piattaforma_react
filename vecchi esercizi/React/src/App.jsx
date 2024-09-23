import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Nunzia" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
