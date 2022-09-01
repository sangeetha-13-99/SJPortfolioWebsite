export default function Projects(props){
  return (
    <div className="cards">
    <div className="cards-div">
      <p className="cards-name">
      <span>{props.name[0]}</span>
      <span>{props.name[1]}</span>
      </p>
      <p>{props.description}</p>
      <div>
        <a href={props.gitLink} target="_blank" className="link-button links">
          <span className="link-icon"></span>
          GitHub
        </a>
        <a href={props.projectLink} target="_blank" className="btn links">
        <span className="btn-link"></span>
        project
        </a>
      </div>
      <div className="project-tech">
        {props.techList.map((item)=>{
          return(
            <div key={item[0]}>
              <span className="tech-color" style={{backgroundColor:(item[0])}}></span>
              <span>{item[1]}</span>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
  }