import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href=""><a className="navbar-item">Home</a></Link>

          <Link href="/PublicRepositories"><a className="navbar-item">Public Repositories</a></Link>

          <Link href="/AboutMe"><a className="navbar-item">About me</a></Link>

          {/* <Link href="/PublicRepositories"><a className="navbar-item">Contact me</a></Link> */}
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a
            href="https://www.linkedin.com/in/cxcarvaj/"
            // className="button is-small"
          >
            <span className="icon is-medium">
              <img
                src="https://i.postimg.cc/NfMPFfVL/linkedin.png"
                className="fab fa-lg fa-linkedin"
              />
            </span>
          </a>
        </div>
        <div className="navbar-item">
        <a
            href="https://twitter.com/_CarlosXavier98"
            // className="button is-small"
          >
            <span className="icon is-medium">
              <img
                src="https://i.postimg.cc/rwgHwRyd/twitter.png"
                className="fab fa-lg fa-twitter"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
