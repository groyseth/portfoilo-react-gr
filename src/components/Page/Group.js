import React from 'react';
import "./group.scss"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { group } from "../../data";
import Footer from '../Footer';
export default function Projects() {
  return (
    <section id="groupStyle " className="">
      <div >
        <div className="group-box challenge-back" id='group'>
          <h1>
            Group Apps 
          </h1>
          <p>
            Take a look at the group projects!
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
      <div className='groupFooter'>
        <Footer />
      </div>
    </section>

  );
}
