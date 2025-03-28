import React from "react";
import {Link} from "react-router-dom";

export default function NotFound404(){


    return(
        <div>
            <h1>404 Not Found</h1>
            <Link to="/">Go to Homepage</Link>
            {/* <a href="/">Go to Homepage</a> */}
        </div>
    );
}