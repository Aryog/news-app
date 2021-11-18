import React, { Component } from "react";
export class Newsitem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left:"90%",zIndex:"1"}}>
            {source}
          </span>
          </div>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-success"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
