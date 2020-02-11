import React from "react";
import {Link} from "react-router-dom";


const Page2 = ({match, history}) =>
    <div>

        <h1>Page 2 {match.params.message}</h1>

        <button onClick={() => {history.push("/page1")}}>Page 1</button>
    </div>


export default Page2