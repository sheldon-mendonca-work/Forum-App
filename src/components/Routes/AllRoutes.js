import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SinglePost from "../Pages/SinglePost/SinglePost";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postID" element={<SinglePost />} />
    </Routes>
}

export default AllRoutes;