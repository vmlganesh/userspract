/* eslint-disable eqeqeq */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Users />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/Profile/:id" element={<Profile />} />
              <Route path="/Employee/:id" element={<Employee />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
