import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Post } from "./Post";
import { DetailPage } from "../Components/HomeComponent/DetailPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<Post />} />
        <Route path='/postdetail/:id' element={<DetailPage />} />
      </Routes>
    </>
  );
};
