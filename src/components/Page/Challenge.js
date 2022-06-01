import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { challenge } from '../../data'
import Footer from '../Footer'
import "./group.scss"
export default function Challenge() {
  return (
    <section id="challenge" className="py-5">
    <div >
      <div className="challenge-box challenge-back" >
        <h1>
         CHALLENGES
        </h1>
      
      </div>
        <Container >
        <div className="challengePlace " style={{ margin: 'auto' }} >

          {challenge.map((group, key) => (

            <Card style={{ width: '18rem' }} className="spacing" key={key}>
              <Card.Img variant="top" src={require(`../../assets/challenge/${group.title}.png`)} className="projectImg" />

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
    <div className='challengeFooter'>
      <Footer />
    </div>
  </section>
  )
}
