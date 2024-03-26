import store from "./store";
import { Provider } from "react-redux";
import Assignment3 from "./a3";
import Nav from "../Nav";
import {Link} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Assignment4 from "./a4";

function Labs() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1>Labs</h1>
            <Nav/>
            
            <Link to="/Labs/a3">Assignment 3</Link>|
            <Link to="/Labs/a4">Assignment 4</Link>

            <Routes>
            <Route path="/a3/*" element={<Assignment3 />} />
            <Route path="/a4/*" element={<Assignment4/>}/>
            </Routes>

        </div>
        </Provider>
    );
}
export default Labs;