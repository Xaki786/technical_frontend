import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
