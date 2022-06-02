
import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { projects } from "../data";
import pic from "../assets/textback/planetY.png"
import "./project.scss"
export default function Projects() {


  return (
    <section id="projects" className="py-5">
      <div >
        <div className="box group-back" >
          <h1>
            APPS I'VE BUILT
          </h1>
          <p>
            More projects on <a href="https://github.com/groyseth" className="githubStyle">GitHub</a>!
          </p>
        </div>
          <Container >
          <div className="row  " style={{ margin: 'auto' }} >

            {projects.map((group, key) => (

              <Card style={{ width: '18rem' }} className="spacing" key={key}>
                <Card.Img variant="top" src={require(`../assets/projects/${group.title}.png`)} className="projectImg" />

                <Card.Body className="scrolled">
                  <Card.Title>{group.title}</Card.Title>
                  <p><strong>{group.subtitle}</strong></p>
                  <Card.Text>
                    
                    {group.description}
                    
                  </Card.Text>
                  <div className='buttons'>
                    <a href={group.link}>
                      <Button variant="primary" className="mx-2">Repo</Button>
                    </a>
                    <a href={group.live}>
                      <Button variant="primary">Live Page</Button>
                    </a>
                  </div>
                </Card.Body>

              </Card>
            ))}
          </div>
        </Container>
      </div>
     
    </section>

  );
}


