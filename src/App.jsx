import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layouts/Main";
import ProductCatalog from "./Pages/PcBuilder/ProductCatalog";
import Signup from "./Pages/ManageUser/Signup";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<ErrorPage />} path="/" element={<Main />}>
          <Route index element={<ProductCatalog />}></Route>
        </Route>
        <Route path="signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
