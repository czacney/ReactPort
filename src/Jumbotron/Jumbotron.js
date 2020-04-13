import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotronbg bg-white mt-2">
        <h1>About Me</h1>
        <img className="profileImg float-left m-3" src={require('../assets/images/me.png')} alt="Me" />
        <p>Hello, and welcome to my portfolio! My name is Casey Zacney and I am from Phoenixville, PA, a suburb of the Greater Philadelphia Area. I attended Gettysburg College and graduated with a B.A. in Environmental Studies with a focus in the humanities. My passion is to bring awareness and solutions to the general public concerning the environment and fighting for environmental justice.
        I decided to join the Penn LPS Coding Boot Camp to get into the world of eco-tech, as I hope to use technology to educate people about ongoing environmental issues as well as hopefully help find solutions for those problems.
                        </p>
                        <h2>
                        <button onclick="document.location src={require('../assets/Casey-Zacney.pdf')}">Resume</button>
                    </h2>
                    <h3>
                      <ul>Contact Me: 
                        <li>Email</li> 
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                      </ul>

                    </h3>
      </div>
    </div>
  );
}

export default Jumbotron;
