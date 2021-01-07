import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Resume from "./pages/Resume/resume";
import Portfolio from "./pages/Portfolio/portfolio";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
