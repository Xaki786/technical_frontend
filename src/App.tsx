import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("https://technical-backend.herokuapp.com/");
      console.log({ res });
    };
    fetchApi();
  }, []);
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
