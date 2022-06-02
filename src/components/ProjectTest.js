import React from "react";
import { projects } from "../data";
import "./projectTest.scss"
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
                {/* <Container > */}
                <div className="row grid " style={{ margin: 'auto' }} >

                    {projects.map((group, key) => (
                        <div className="projectBack">
                            <div className="titleSub">
                                <h1>{group.title}</h1>
                                <p>{group.subtitle}</p>
                            </div>
                            <section className="discriptPro scrolled">
                              <p>  {group.description}</p>
                                {/* <div>
                                <a href={group.link} >
                      <Button variant="primary" className="mx-2">Repo</Button>
                    </a>
                    <a href={group.live}>
                      <Button variant="primary">Live Page</Button>
                    </a>
                  
                                </div> */}
                            </section>
                            <div className='but'>
                            <img  src={require(`../assets/projects/${group.title}.png`)} className="img"/>
                            
                    {/* <a href={group.link} >
                      <Button variant="primary" className="mx-2">Repo</Button>
                    </a>
                    <a href={group.live}>
                      <Button variant="primary">Live Page</Button>
                    </a> */}
                  </div>
                        </div>

                    ))}
                </div>
                {/* </Container> */}
            </div>

        </section>

    );
}