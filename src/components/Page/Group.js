import React from 'react';

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import {removeHyphensAndCapitalize} from '../utils/helpers'
import { Container } from "react-bootstrap";
import { group } from "../../data";



export default function Projects() {
  // const { title, subtitle,  description } = projects;


  return (
    <section id="" className="">
      <div >
        <div className="box group-back">
          <h1>
            Group Apps I Helped Build
          </h1>
          <p>
            Take a look at the group projects!
          </p>
        </div>
        <Container className="container">
      <div className="row " style={{margin: 'auto'}}>
     
          {group.map((group) => (
        
<Card style={{ width: '18rem' }} className="spacing">
  
  <Card.Img variant="top" src={require(`../../assets/projects/${group.title}.png`)} className="projectImg" />
  
  <Card.Body>
    <Card.Title>{group.title}</Card.Title>
    <p1><strong>{group.subtitle}</strong></p1>
    <Card.Text>
      {group.description}
    </Card.Text>
    
    <a href={group.link}>
    <Button variant="primary">Repo</Button>
    </a>
    <a href={group.live}>
    <Button variant="primary">Live Page</Button>
    </a>
     
  </Card.Body>
  
</Card>


            
          ))}
         
          </div>
        </Container>
      </div>
    </section>
    
  );
}
