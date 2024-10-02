import { SWRConfig } from 'swr';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GithubUserList from './GithubUserList'; 
import fetcher from './fetcher';

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Router>
        <Routes>
          <Route path="/users/:username" element={<GithubUserList />} />
        </Routes>
      </Router>
    </SWRConfig>
  );
}
