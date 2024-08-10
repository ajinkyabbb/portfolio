import "./App.css";
import OffSideNavbar from "./components/OffSideNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/themeContext";
import { InfoProvider } from "./context/infoContext";
import MySkills from "./pages/MySkills";
function App() {
  return (
    <ThemeProvider>
      <InfoProvider>
        <Router>
          <div className="App">
            <OffSideNavbar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/About">
                  <About />
                </Route>
                <Route path="/MySkills">
                  <MySkills />
                </Route>
                <Route path="/Services">
                  <Services />
                </Route>
                <Route path="/Portfolio">
                  <Portfolio />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </InfoProvider>
    </ThemeProvider>
  );
}

export default App;
