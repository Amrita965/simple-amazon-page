import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layouts/Main";
import ProductCatalog from "./Pages/PcBuilder/ProductCatalog";
import Signup from "./Pages/ManageUser/Signup";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<ErrorPage />} path="/" element={<Main />}>
          <Route index element={<ProductCatalog />}></Route>
        </Route>
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;