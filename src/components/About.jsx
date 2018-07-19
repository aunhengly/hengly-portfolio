import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Detail>
      <div className="wrapperAbout">
        <h2>Hengly is a JavaScript Full Stack Developer.</h2>
        <div className="divider" />
        <p>
          I am an initiator, innovator, CEO, and entrepreneur. After a
          successful career leading water and sanitation non-profits in Cambodia
          I came to the United States to pursue a career in web development. I
          am confident that with my work ethic, positive attitude, team spirit,
          and motivation will lead me to be successful. I am looking for
          opportunity where I can prove myself and grow as a person and a
          professional.
        </p>
        <p>
          Some of the tools I'm proficient with are jQuery, HTML, CSS,
          BootStrap, EJS, MERN (MongoDB, Express.JS, React, Node.JS) stack.
        </p>
        <p>
          Beside of coding I like to explore new places, I like to learn new
          skills. I am a big fan of personal development, so I enjoy search the
          trick to train or grow people.
        </p>
        <p>
          I am passionate to problem solving, improve life. As I grow as a
          developer, I am aspiring to learn big data analyst.
        </p>
      </div>
    </Detail>
  );
};

const Detail = styled.div`
height: 100vh;
text-align: left;
line-height: 25px;
padding: 20px 400px;
    background-color: lightgrey;
    h2 {
        text-align: center;
        padding-top: 50px;
        line-height: 48px;
        font-size: 48px;
        font-weight: 400;
    }
    .divider {
        height: 50px;
    }
    p {
        padding: 27px;
        font-size: 20px;
        font-weight: 100%;
    }
    .other-video {

    }
}

/* Tablet */
@media screen and (min-width: 768px) {
    padding:0 28px ;
}

@media screen and (min-width: 1024px) {
    padding: 0 90px;
}
    
`;

export default About;
