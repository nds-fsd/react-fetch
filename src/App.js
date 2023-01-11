import "./App.css";
import { NoMatch } from "./components/noMatch/noMatch";
import ProductList from "./components/productList/productList";

import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoutes from "./components/privateRoute/privateRoute";
import Signup from "./components/signup/signup";
import { getUserToken, removeSession } from "./utils/localStorage.utils";
import { About } from "./components/about/about";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <h1> ROUTING EXAMPLES</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="app">App</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!getUserToken() && (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          <li>
            {getUserToken() && (
              <button
                onClick={() => {
                  removeSession();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div className="main-router">
        <Routes>
          <Route path="/" element={<Navigate to="/app" />} />
          <Route path="app" element={<PrivateRoutes />}>
            <Route path="" element={<ProductList />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/* <MyRouter /> */}
      </div>
    </div>
  );
}

export default App;
