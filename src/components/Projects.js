
import React from "react";
import { Container, Row } from "react-bootstrap";
import { projects } from "../data";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";



export default function Projects() {


  return (
    <section id="projects" className="py-5">
      <div >
        <div className="box">
          <h1>
           Some Apps I've Built
          </h1>
          <p>
            Take a look a my projects!
          </p>
        </div>
        {/* <Container className=" py-5 
        
        ">
          <Row className="displaying " style={{ margin: 'auto'}}>

            {projects.map((project) => (

              <Card style={{ width: '18rem' }} className="spacing ">

                <Card.Img variant="top" src={require(`../assets/projects/${project.title}.png`)} className="projectImg" />

                <Card.Body >
                  <Card.Title>{project.title}</Card.Title>
                  <p1><strong>{project.subtitle}</strong></p1>
                  <Card.Text className="scrolled">
                    {project.description}
                  </Card.Text>
                  <div className="buttons">
                    <a href={project.link}>
                      <Button variant="primary" className="mx-2">Repo</Button>
                    </a>
                    <a href={project.live}>
                      <Button variant="primary">Live Page</Button>
                    </a>
                  </div>
                </Card.Body>

              </Card>



            ))}

          </Row>
        </Container>
      </div>
    </section>
  ); */}
          <Container className="container ">
          <div className="row " style={{ margin: 'auto' }}>

            {projects.map((group) => (

              <Card style={{ width: '18rem' }} className="spacing ">

                <Card.Img variant="top" src={require(`../assets/projects/${group.title}.png`)} className="projectImg" />

                <Card.Body className="scrolled">
                  <Card.Title>{group.title}</Card.Title>
                  <p1><strong>{group.subtitle}</strong></p1>
                  <Card.Text>
                    {group.description}
                  </Card.Text>
                  <div className='buttons'>
                    <a href={group.link}>
                      <Button variant="primary">Repo</Button>
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


