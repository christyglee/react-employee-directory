import React, { useContext } from "react";
import "./style.css";
import EmployeeDataContext from "../../utils/EmployeeDataContext";

const Search = () => {
    const context = useContext(EmployeeDataContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default Search;