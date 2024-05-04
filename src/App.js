import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./component/header";
import Card from "./component/card";
import Todocontainer from "./component/todocontainer";
import Login from "./pages.js/Login";
import Signup from "./pages.js/Signup";
import LandingPage from "./pages.js/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [user, setuser] = useState([
    {
      username: "Joel",
      password: "Abc7",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login user={user} setuser={setuser} />}
          ></Route>

          <Route
            path="/signup"
            element={<Signup user={user} setuser={setuser} />}
          ></Route>

          <Route path="/landing" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
root.render(<App />);

export default App;
