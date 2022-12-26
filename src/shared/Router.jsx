import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, Detail } from "../pages";
import Layout from "./Layout.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
