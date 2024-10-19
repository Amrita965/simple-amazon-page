import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layouts/Main";
import ProductCatalog from "./Pages/PcBuilder/ProductCatalog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
        <Route index element={<ProductCatalog />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;