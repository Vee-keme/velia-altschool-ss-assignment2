import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="Contacts">
      <h1>This is my contacts page</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="socials">Visit my Socials</Link>{" "}
            </li>
            <li>
              <Link to="physical">Send Me An Email</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export { Contacts };
