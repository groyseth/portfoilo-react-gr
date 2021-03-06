import React from 'react';
import "./group.scss"
import { Card, Button, Container } from "react-bootstrap";
import { group } from "../../data";
export default function Projects() {
  return (
    <section id="groupStyle " className="groupBack">
      <div >
        <div className="group-box challenge-back" id='group'>
          <h1>
            GROUP APPS
          </h1>
          <p>
            GROUP PROJECTS I'VE BEEN APART OF
          </p>
        </div>
        <Container className="container">
          <div className="groupPlace" style={{ margin: 'auto' }}>
            {group.map((group, key) => (
              <Card style={{ width: '18rem' }} className="spacing " key={key}>
                <Card.Img variant="top" src={require(`../../assets/projects/${group.title}.png`)} className="projectImg" />
                <Card.Body className='scrolled'>
                  <Card.Title>{group.title}</Card.Title>
                  <p><strong>{group.subtitle}</strong></p>
                  <Card.Text>
                    {group.description}
                  </Card.Text>
                  <div className='buttons'>
                    <a href={group.link}>
                      <Button variant="primary" className='mx-2'>Repo</Button>
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
