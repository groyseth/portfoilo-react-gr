
import React, {useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import { projects } from "../data";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./project.css"


export default function Projects() {


  useEffect(() =>{
    AOS.init({ duration:1500  });
  }, []);

  return (
    <section id="projects" className="py-5">
      <div >
        <div className="box group-back" data-aos="zoom">
          <h1>
            Apps I've Built
          </h1>
          <p>
            More projects on <a href="https://github.com/groyseth" className="githubStyle">GitHub</a>!
          </p>
        </div>
        
          <Container data-aos="zoom-in-down">
          <div className="row  " style={{ margin: 'auto' }} >

            {projects.map((group) => (

              <Card style={{ width: '18rem' }} className="spacing" >

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


