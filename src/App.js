import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Components/Notfound";

import { Socials } from "./pages/Socials";
import Physical from "./pages/Physical";
import { Fallback } from "./pages/Components/Fallback";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./pages/Components/Loading";
const UsersLazyLoad = React.lazy(() => import("./pages/Users"));

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };
  return (
    <div className="App">
      <nav>
        <ul className="App-nav-li">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <React.Suspense fallback={<Loading />}>
                <UsersLazyLoad />
              </React.Suspense>
            }
          />
          <Route path="/contacts">
            <Route index element={<Contacts />} />
            <Route path="socials" element={<Socials />} />
            <Route path="physical" element={<Physical />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
