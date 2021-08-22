import "./App.css";
import Nav from "./Components/General/Nav/Nav";
import Home from "./Routes/Home/Home.jsx";
import Merchant from "./Routes/Merchant/Merchant.jsx";
import Locations from "./Routes/Locations/Locations.jsx";
import Driver from "./Routes/Driver/Driver.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/merchant" component={Merchant} />
                  <Route exact path="/driver" component={Driver} />
                  <Route exact path="/locations" component={Locations} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
