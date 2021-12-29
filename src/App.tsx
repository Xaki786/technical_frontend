import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container maxWidth="xl">
          <Switch>
            {routes.map(({ id, url, component }) => (
              <Route path={url} key={id}>
                {component}
              </Route>
            ))}
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
