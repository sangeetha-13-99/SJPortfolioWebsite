export default function Blogs(props) {
  return (
    <div className="cards">
      <div className="cards-div">
        <p className="cards-name">
          <span>{props.name[0]}</span>
          <span>{props.name[1]}</span>
        </p>
        <p>{props.description}</p>
        <div className="blog-details">
          <p><span>Published On : </span><span className="blog-date">{props.published}</span></p>
          <a href={props.link} target="_blank" className="link-button links">
            <span className="link-icon" style={{backgroundImage: "url('../images/link-solid.svg')"}}></span>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
