import Header from "../components/header/Header";
import Project from "../components/projects/Project";

import { projects } from "../helpers/projectsList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section" id="1">
        <div className="conteiner">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project key={index} title={project.title} img={project.img} index={index}/>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
