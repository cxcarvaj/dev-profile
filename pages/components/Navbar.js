const Navbar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      {/* <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> */}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Public Repositories</a>

          <a className="navbar-item">About me</a>

          <a className="navbar-item">Contact me</a>
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
