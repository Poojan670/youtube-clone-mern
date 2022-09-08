import './App.css';
import Menu from "./components/Menu/Menu"
import Navbar from "./components/Navbar/Navbar"
import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";


function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark-mode');
    const toggleTheme = () => {
        theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode")
    }
    localStorage.setItem('theme', theme);

  return (
      <div className={`App ${theme}`}>
          <div className="app-container">
              <Router>
                  <Menu toggleTheme={toggleTheme} theme={theme}/>
                  <div className="app-main">
                      <Navbar/>
                      <div className="app-wrapper">
                          <Routes>
                              <Route path="/">
                                  <Route index element={<Home/>} />
                                  <Route path="video">
                                      <Route path=":id" element={<Video/>}/>
                                  </Route>
                              </Route>
                          </Routes>
                      </div>
                  </div>
              </Router>
          </div>
      </div>
  );
}

export default App;
