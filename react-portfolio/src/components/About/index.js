import React from 'react';
import coverImage from '../../assets/Emily/emily_website.png';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
        Privyet! My name is Emily Marshall and I have taken an extremely winding road to get to where I am today. I was born and raised in Michigan. At 18 years old I joined the United States Air Force. During the next 4 years I trained to be an Airborne Russian Linguist and lived all over the United States. Some of those places included Texas, California, Washington, and Nebraska. In 2004 I moved to England where I lived and went to school for two years. After returning to the United States I joined the Air National Guard in Arizona and became a sensor operator on the MQ-1 Predator unmanned airplane. Throughout this time I continued my education. Eventually I got out of the military and began my career in public education.

        At that time I started teaching 7th and 8th grade math at a middle school near Tucson. Shortly after joining the district I became the go-to person to help teachers who wanted to integrate technology into their classroom. Because of this reputation I was soon offered a position at my school as a Site Technology Coordinator. This position meant that I was in charge of all technology at my school including hardware, software, and the entire network. It was here that I learned that I loved being able to help teachers overcome their insecurities when it came to integrating technology into their class in meaningful ways. I shared my knowledge and enthusiasm with Site Technology Coordinators at other schools. When the district I worked in opened up a brand new position of Education Technology Coordinator I jumped at the opportunity. This position put me in a district level role in which I got to oversee technology education for teachers, our district-wide STEM program, and the overhall and expansion of computer science education for all students. I soon realized that I really enjoyed coding, web development, and the challenges these things brought. This is what led me to the University of Arizona Coding Bootcamp.        </p>
      </div>
    </section>
  );
}

export default About;