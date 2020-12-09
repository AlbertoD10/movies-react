import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
//Importo las paginas.
import Home from "./pages/home";
import Movie from "./pages/movie";
import Error from "./pages/error404";
import NewMovies from "./pages/new-movie";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Error404 from "./pages/error404";
import MenuTop from "./components/MenuTop";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/new-movie" exact={true}>
              <NewMovies />
            </Route>

            <Route path="/error404" exact={true}>
              <Error404 />
            </Route>

            <Route path="/popular" exact={true}>
              <Popular />
            </Route>

            <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
