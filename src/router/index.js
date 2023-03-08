import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components/index";
import { MyPage, TweetsPage } from "../pages";
import About from "../pages/About";


const router =(
  <Route element={<Layout />}>
    <Route path="/" element={<TweetsPage />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/mypage" element={<MyPage />}></Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;