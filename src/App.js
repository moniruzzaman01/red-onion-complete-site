import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ItemDetails from "./Components/Item-details/ItemDetails";
import Login from "./Components/Login/Login";
import OrderDetails from "./Components/Order-details/OrderDetails";
import RequireAuth from "./Components/Require-auth/RequireAuth";
import SignUp from "./Components/Sign-up/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/item-details/:id" element={<ItemDetails />}></Route>
        <Route
          path="/order-details"
          element={
            <RequireAuth>
              <OrderDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
