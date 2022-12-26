import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, Detail } from "../pages";
import Layout from "./Layout.jsx";
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import CustomFAB from "../components/CustomFAB";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <CustomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <CustomFAB />
      <CustomFooter />
    </BrowserRouter>
  );
};

export default Router;
