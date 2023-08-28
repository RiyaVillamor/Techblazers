import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Course from './pages/Courses.jsx';
import Exercises from './pages/Exercises.jsx';
import ClassRecording from './pages/ClassRecording.jsx';
import Notebooks from './pages/Notebooks.jsx';
import WebsiteProjects from './pages/WebsiteProjects.jsx';
import CodeSnippets from './pages/CodeSnippets.jsx';
import WD73Toolkit from './pages/WD73Toolkit.jsx';
import './styles/main.scss';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="page-content">
            <Routes>
              <Route path="/" element={
                <Home />
              } />
              <Route path="/courses" element={
                <Course />
              } />
              <Route path="/exercises" element={
                <Exercises />
              } />
              <Route path="/class-recording" element={
                <ClassRecording />
              } />
              <Route path="/notebooks" element={
                <Notebooks />
              } />
              <Route path="/website-projects"
                element={
                  <WebsiteProjects />
                } />
              <Route path="/code-snippets" element={
                <CodeSnippets />
              } />
              <Route path="/wd73-toolkit" element={
                <WD73Toolkit />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
