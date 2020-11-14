import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Use the search box to narrow your results or click on carrots to filter</p>
        </div>
    );
}

export default Header;