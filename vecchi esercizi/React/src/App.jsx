
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users/Akame96">GitHub User: Akame</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Welcome name="Nunzia" />} />
          <Route path="/counter" element={<div><p>Not Found</p><Link to='/'>Go Home</Link></div>} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


