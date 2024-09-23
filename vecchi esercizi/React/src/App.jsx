import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="John Doe" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

