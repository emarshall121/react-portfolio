import React from 'react';
import download from '../../assets/Emily/download.png';
// import {Box} from 'react-bulma-components';

function Resume() {
  return (
    <div class="box mt-6" style={{width: 900, margin: "auto"}}>
      <h1 class="has-text-weight-bold is-size-3">Resume</h1>
      <a href="https://docs.google.com/document/d/1YujFox8gDCb4zs5aMfXeNAa9UVjSZ2EtKJo5eIJ6bTQ/edit?usp=sharing" target="_blank" rel="noreferrer">*Click here to <img alt="download_button" style={{ width: "5%" }} src={download}/> my resume</a>
      <div><br />
        <h2 class="has-text-weight-semibold">Front End Proficencies</h2>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
          </ul><br />
        <h2 class="has-text-weight-semibold">Back End Proficencies</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Handlebars</li>
            <li>JavaScript</li>
            <li>NoSQL</li>
            <li>MySQL</li>
            <li>MongoDB and Mongoose</li>
            <li>MVC Architecture</li>
          </ul>
      </div>
    </div>
  )
}

export default Resume;