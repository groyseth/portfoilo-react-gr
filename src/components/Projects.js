
import React from "react";
import { Container, Row } from "react-bootstrap";
import { projects } from "../data";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./project.css"


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
        
          <Container className="container ">
          <div className="row  " style={{ margin: 'auto' }}>

            {projects.map((group) => (

              <Card style={{ width: '18rem' }} className="spacing">

                <Card.Img variant="top" src={require(`../assets/projects/${group.title}.png`)} className="projectImg" />

                <Card.Body className="scrolled">
                  <Card.Title>{group.title}</Card.Title>
                  <p1><strong>{group.subtitle}</strong></p1>
                  <Card.Text>
                    <p>
                    {group.description}
                    </p>
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


