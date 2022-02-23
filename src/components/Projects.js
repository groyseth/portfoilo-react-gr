
import React from "react";
import { Container } from "react-bootstrap";
import { projects } from "../data";
// import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Col } from "react-bootstrap";
import {removeHyphensAndCapitalize} from '../utils/helpers'

export default function Projects() {
  // const { title, subtitle,  description } = projects;

  return (
    <section id="projects" className="box">
      <div >
        <div >
          <h1>
            Apps I've Built
          </h1>
          <p>
            Take a look a my projects!
          </p>
        </div>
        <Container className="container">
      <div className="row ">
     
          {projects.map((project) => (
        
<Card style={{ width: '18rem' }}>
  
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <p1>{project.subtitle}</p1>
    <Card.Text>
      {project.description}
    </Card.Text>
    {/* <img src={require(`../assets/projects/${project.title}.png`)}
        alt="hey"></img> */}
    <a href={project.link}>
    <Button variant="primary">Repo</Button>
    </a>
     
  </Card.Body>
  <img src={require(`../assets/projects/${project.title}.png`)}
       className='projectImg' alt="hey">  </img>
</Card>


            
          ))}
         
          </div>
        </Container>
      </div>
    </section>
  );
}

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{project.title}</Card.Title>
    <p1>{project.subtitle}</p1>
    <Card.Text>
      {project.description}
    </Card.Text>
    <img src={project.image} alt='project Pics'></img>
    <Button variant="primary">{project.link}</Button>
  </Card.Body>
</Card> */}
// import React from 'react';
// import { removeHyphensAndCapitalize } from '../utils/helpers';
// // import porject from '../projectData';

// function Project({ project }) {

//   const { name, repo, link, description } = project;

//   return (
//     <div className="project" key={name}>
//       {/* <img
//         src={require(`../assets/projects/${name}.jpg`)}
//         alt={removeHyphensAndCapitalize(name)}
//         className="project-bg"
//       /> */}
//       <div className="project-text">
//         <h3>
//           <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
//           <a href={repo}>
//             {/* <i className="fab fa-github"></i> */}
//           </a>
//         </h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Project;
