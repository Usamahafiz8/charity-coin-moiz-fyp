import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default Layout;
