import React, { useContext } from "react";
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
            </form>
        </div>
    );
}
export default Search;