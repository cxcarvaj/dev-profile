const Card = (props) => {
  return (
    <div className="card mx-4">
      <div className="card-content">
        <p className="title">{props.name}</p>
        <p className="subtitle">User: cxcarvaj</p>
        <p>{props.description}</p>
        <p>{props.language}</p>
        <span className="tag is-success">{props.license}</span>
      </div>
      <footer className="card-footer">
        <a href={props.html_url} className="card-footer-item">
          Open on Github
        </a>
      </footer>
    </div>
  );
};

export default Card;
