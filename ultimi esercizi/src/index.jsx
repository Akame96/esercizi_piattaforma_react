
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure App.jsx exists
import './index.css'; // Make sure index.css exists; change to index.scss if using SCSS
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

