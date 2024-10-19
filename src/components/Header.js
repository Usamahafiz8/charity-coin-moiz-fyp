import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
