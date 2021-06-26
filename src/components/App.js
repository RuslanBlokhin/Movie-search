import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./Container/Container";
import Header from "./Header/Header";
import MyLoader from "./MyLoader/MyLoader";

const HomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

const App = () => (
  <Container>
    <Header />
    <Suspense fallback={<MyLoader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
