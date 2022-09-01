import { useState } from "react";
import Projects from "./Projects";
import Blogs from "./Blogs";
export default function Main() {
  let [section, setSection] = useState("about");
  let projects = {
    "project-1": {
      name: ["Mark-1", "Do you know me? CLI Quiz App"],
      description:
        "Do u Know me ? Is quiz App designed using javascript along with chalk library to make the UI look intresting, I have involved other two quizes too,And i made it fun and intresting don't miss the fun. Do check it out .",
      gitLink: "https://github.com/sangeetha-13-99/MARK-1-CLI-QUIZZ-APP",
      projectLink:
        "https://replit.com/@sangeetha13/Mark-1-CLI-PROGRAM#index.js?embed=1&output=1",
      techList: [["#F0DB4F", "Javascript"]]
    },
    "project-2": {
      name: ["Mark-2", "the Tricky Quizz App. CLI Fandom Quiz App"],
      description:
        "the Tricky Quizz App is a Quiz App made using javascript along with chalk library to make the UI look intresting,packages used are readline ,implemeted using createInterface method, its tricky 😵, Do check it out",
      gitLink: "https://github.com/sangeetha-13-99/MARK-2-CLI-QUIZZ-APP",
      projectLink:
        "https://replit.com/@sangeetha13/Mark-2-CLI-PROGRAM#index.js?embed=1&output=1",
      techList: [["#F0DB4F", "Javascript"]]
    },
    "project-3": {
      name: ["Mark-3, Mark-4, Mark-5", "Portfolio site"],
      description:
        "I have developed my portfolio using React,html,css. I made it responsive and easy for users to navigate the sections. Do check it out ",
      gitLink: "#",
      projectLink: "#",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-6": {
      name: ["Mark-6", " Minions Speak App"],
      description:
        "I have made minion speak app which converts the  english we talk in to a gibbrish they talk, it is done using the API calls,API used is fun translation API,i used mentioned technologies, Do check out this fun app .",
      gitLink: "https://github.com/sangeetha-13-99/Banana-talk-app",
      projectLink: "https://banana-talk-app-sangeetha.netlify.app/",
      techList: [
        ["pink", "SCSS"],
        ["#F0DB4F", "javascript"],
        ["darkorange", "HTML"]
      ]
    },
    "project-7": {
      name: ["Mark-6", "Fun Translation App"],
      description:
        "I have made Fun Translation App which converts the  english we talk in to a gibbrish they talk, it is done using the API calls,API used is fun translation API,i used mentioned technologies, Do check out this fun app .",
      gitLink: "https://github.com/sangeetha-13-99/dolan-duck-translator",
      projectLink: "https://dolan-duck-translator-app.netlify.app/",
      techList: [
        ["pink", "SCSS"],
        ["#F0DB4F", "javascript"],
        ["darkorange", "HTML"]
      ]
    },
    "project-8": {
      name: ["Mark-8", "Emoji-face-interpreter"],
      description:
        "Emoji Face Interpreter App is an app which interpretes the emoji's and gives an actual output of emoji face expression,used the mentioned technologies and do check it out this app 😊",
      gitLink:
        "https://github.com/sangeetha-13-99/mark-five-emoji-face-interpreter",
      projectLink: "https://csb-yqjfci.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-9": {
      name: ["Mark-9", "Show-Recommendation-App"],
      description:
        "Show-Recommendation-App is an app in which i provided a ratings for various shows and movies that liked, i provided a tabs for different genre and based on select the type of genre u can see my ratings,i used mentioned technologies. Do check it out its cool",
      gitLink:
        "https://github.com/sangeetha-13-99/Mark-Six-Show-Recommendation-App",
      projectLink: "https://csb-21q55e.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-10": {
      name: ["Mark-10", "Cash Registor App"],
      description:
        "Cash register app is an app which provides the information of number denominations that would come back for the money you provided to pay the bill,do check it out.",
      gitLink: "https://github.com/sangeetha-13-99/cash-register-app",
      projectLink: "https://csb-dmw6ny.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-11": {
      name: ["Mark-11", "is-your-birthday-lucky"],
      description:
        "Is Your BirthDay Lucky app is an fun based app to check whether your birthday is lucky or not(dont care 😉) by using some logic,do check out yours and your friends birthdays 😁( note: we dont store any dates) ",
      gitLink:
        "https://github.com/sangeetha-13-99/mark-11-is-your-birthday-lucky",
      projectLink: "https://csb-jlks9g.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-12": {
      name: ["Mark-12", "do u know traingles"],
      description:
        "do u know triangles is fun based app on triangles, it is provided with different sections for having fun and for testing knowledge on  traingles, do checkout this cool app",
      gitLink: "https://github.com/sangeetha-13-99/mark-12-fun-with-triangles",
      projectLink: "https://csb-nzi1qn.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-13": {
      name: ["Mark-13", "Palindrome BirthDay "],
      description:
        "Palindrome BirthDay is an fun based app which calculates whether provided birthdate is palindrome or not if not a palindrome birthday then he/she ill be provided with message by how many days he missed the palindrome date, do check out the links",
      gitLink: "https://github.com/sangeetha-13-99/Mark-13-palindrome-birthday",
      projectLink: "https://csb-99d8n1.netlify.app/",
      techList: [
        ["#00FFFF", "React"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    },
    "project-14": {
      name: ["Mark-14", "Stock Purchase Profit & Loss"],
      description:
        "Stock Purchase Profit & Loss is an stock purchase calculating app which is used to tell the users whether he/she got profit or loss",
      gitLink:
        "https://github.com/sangeetha-13-99/mark14-stock-purchase-profit-loss",
      projectLink: "https://stock-purchaseprofit-and-loss.netlify.app/",
      techList: [
        ["#F0DB4F", "javascript"],
        ["darkorange", "HTML"],
        ["#0000FF", "CSS"]
      ]
    }
  };
  let blogs = {
    "blog-1": {
      name: ["Blog", "Javascript Architecture "],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"
    },
    "blog-2": {
      name: ["Blog", "Javascript Architecture "],
      description: ""
    }
  };
  setTimeout(function () {
    let firstNavList = document.querySelectorAll(".navbar-items");
    firstNavList.forEach((element) => {
      element.querySelector("li").classList.add("links");
    });
    let navList = document.querySelectorAll(".container .section");
    window.onscroll = function (e) {
      navList.forEach((element) => {
        let navText = element.getAttribute("id");
        let sectionTop = element.offsetTop;
        if (window.pageYOffset >= sectionTop - 500) {
          setLinksClass(navText);
        }
      });
    };
    function setLinksClass(text) {
      document.querySelectorAll(".navbar-items li").forEach((ele) => {
        ele.classList.remove("links");
        if (ele.textContent.toLowerCase() === text.toLowerCase()) {
          ele.classList.add("links");
        }
      });
    }
  }, 1000);
  function aboutclickHandler() {
    setSection("about");
  }
  function clickHandler(e) {
    let section = e.target.textContent;
    setSection(section);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  if (section === "about") {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-lg">
            <ul className="navbar-items">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="navbar-sm">
            <ul className="navbar-items">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="about section" id="about">
            <div className="about-text">
              <p className="about-heading">
                Hey 👋 , Iam <span className="about-name">Sangeetha</span>
              </p>
              <p className="about-subheading">Iam a Ui developer</p>
            </div>
            <div className="about-image">
              <img
                className="about-image-icon"
                src="../images/about-image.svg"
                alt="about"
              />
            </div>
          </div>
          <div id="skills" className="skills section">
            <h2 className="skills-heading">Skills</h2>
            {[
              "bootstrap",
              "css",
              "git",
              "html",
              "javascript",
              "jquery",
              "sass",
              "react"
            ].map((item, i) => {
              return (
                <div
                  key={`image-${i + 1}`}
                  className={`skill-image image-${i + 1}`}
                >
                  <img src={`../images/image-${i + 1}.png`} alt="skill" />
                  <p className="image-text">{item}</p>
                </div>
              );
            })}
          </div>
          <div id="projects" className="cards section">
            <h2 className="cards-heading">Projects</h2>
            <div className="cards-div">
              <p>
                I have completed level zero projects from mark1 to mark15
                checkout my level zero projects here.
              </p>
              <div>
                <a
                  type="button"
                  target="_blank"
                  href="https://github.com/sangeetha-13-99?tab=repositories"
                  className="links"
                >
                  <span className="link-icon"></span>
                  GitHub
                </a>
                <button type="button" className="btn" onClick={clickHandler}>
                  <span className="btn-link"></span>
                  projects
                </button>
              </div>
            </div>
          </div>
          <div id="blogs" className="cards section">
            <h2 className="cards-heading">Blogs</h2>
            <div className="cards-div">
              <p>check my blog section.which contains mini blogs.</p>
              <div>
                <button type="button" className="btn" onClick={clickHandler}>
                  <span className="btn-link"></span>
                  blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (section === "projects") {
    return (
      <div className="cards-page">
        <button
          target="_blank"
          className="btn back-to-website"
          onClick={aboutclickHandler}
        >
          Go Back to Main
        </button>
        <h2 className="cards-heading">Projects</h2>
        {Object.keys(projects).map((project) => {
          return (
            <Projects
              key={project}
              name={projects[project].name}
              description={projects[project].description}
              gitLink={projects[project].gitLink}
              projectLink={projects[project].projectLink}
              techList={projects[project].techList}
            />
          );
        })}
      </div>
    );
  } else if (section === "blogs") {
    return (
      <div className="cards-page">
        <button className="btn back-to-website" onClick={aboutclickHandler}>
          Go Back to Main
        </button>
        <h2 className="cards-heading">Blogs</h2>
        {Object.keys(blogs).map((blog) => {
          return (
            <Blogs
              key={blog}
              name={blogs[blog].name}
              description={blogs[blog].description}
            />
          );
        })}
      </div>
    );
  }
}
