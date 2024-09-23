import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList"; // Import the new GithubUserList component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">GitHub Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Welcome name="Nunzia" />} />
          <Route path="/counter"  element={
              <div>
                <p>Not Found</p>
                <Link to="/">Go Home</Link>
              </div>} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
