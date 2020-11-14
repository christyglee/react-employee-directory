import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Use the search box to narrow or filter your results or click on a table header to sort</p>
        </div>
    );
}

export default Header;