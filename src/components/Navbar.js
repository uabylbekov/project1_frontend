import React from "react";
import { Link } from "react-router-dom";
import Searchbar from '../elements/Searchbar'

function Navbar() {
  return (
    <div className="flex justify-between bg-white shadow h-12 px-5">
      <div className="flex justify-between">
        <Link className="pt-3" to="/">Logo</Link>
        <Searchbar/>
      </div>
      <div className="flex justify-between pt-3">
        <ul className="flex justify-between">
          <li className="mr-5">
            <Link to="/">log in</Link>
          </li>
          <li>
            <Link to="/create">new post</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
