import {Route, Routes} from "react-router-dom";
import { Home } from "../../notes/components/Home";
import { Add } from "../../notes/components/Add";
import { List } from "../../notes/components/List";
import { Arrange } from "../../notes/components/Arrange";
import { Search } from "../../notes/components/Search";

export const Main = () => {
    return(<>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/view-all" element={<List/>}></Route>
            <Route path="/arrange" element={<Arrange/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
        </Routes>
    </>);
}