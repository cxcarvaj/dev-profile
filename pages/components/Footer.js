const Footer = (props) => {
  const { avatarUrl } = props;
  return (
    <footer className="footer container">
      <div className="content has-text-centered is-flex">
        <figure className="image is-128x128">
          <img className="is-rounded" src={avatarUrl} alt="avatar image" />
        </figure>
        <p>
          Hi my name is Carlos, a CS grad student who works as a Software
          Developer focused in Front-End
        </p>
        <div className="ml-5">
          <a className="button is-linkedin">
            <span className="icon is-medium">
              <img
                src="https://i.postimg.cc/7PVZDm8w/linkedin-1.png"
                className="fab fa-lg fa-linkedin"
              />
            </span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
