import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';

class Portfolio extends Component {
  render() {
    return (
      <Port>
        <h1>Portfolio</h1>
        <div>
          <h3>Portal</h3>
          <div className="projects">
            <div>
              <p>This app is helping graduated student to find job.</p>
              <p>
                The goal of this is app was created with a minimal viable
                product where users can sign up, edit their profile, and easily
                searchable by potential employer.
              </p>
              <p>
                <span>Technologies Used:</span> React, Redux, React-Router,
                Passport, Loopback, MongoDB, and Bootstrap.
              </p>
              {/* <a className="readMore" href="#">
                READ MORE
              </a> */}
            </div>
            <div>
              <a href="https://origin-portal.herokuapp.com/" target="_blank">
                <img src="https://imgur.com/XJn1V2o.png" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>Weather App</h3>
          <div className="projects">
            <div>
              <p>
                This app allow us to find out the weather for all cities all
                over the world.
              </p>
              <p>
                The goal for this app is to allow user to find any cities around
                the world by using weather api, and track the search history
                when did it searched.
              </p>
              <p>
                <span>Technologies Used:</span> React, Redux, NodeJS, CSS,
                Bootstrap, and Axios.
              </p>
              {/* <a className="readMore" href="#">
                READ MORE
              </a> */}
            </div>
            <div>
              <a
                href="https://react200-weather-app.herokuapp.com/"
                target="_blank"
              >
                <img src="https://imgur.com/KmCLf6h.png" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>Budget Tracker</h3>
          <div className="projects">
            <div>
              <p>This app is helping to keep track of incomes and expenses.</p>
              <p>
                The goal of this is app was created with a minimal viable
                product where users can entries the incomes and expenses, and
                have the summary of the each category. User can see easily the
                balance of their money.
              </p>
              <p>
                <span>Technologies Used:</span> React, Redux, NodeJs,CSS, and
                Bootstrap.
              </p>
              {/* <a className="readMore" href="#">
                READ MORE
              </a> */}
            </div>
            <div>
              <a
                href="https://hengly-react200-budget-tracker.herokuapp.com/"
                target="_blank"
              >
                <img src="https://imgur.com/nnMuSt5.png" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>Todo List</h3>
          <div className="projects">
            <div>
              <p>This app is helping user to keep track of their tasks.</p>
              <p>
                The goal of this is app was created with a minimal viable
                product where users can add their to do list and set priority,
                edit, or delete, or ticked as done.
              </p>
              <p>
                <span>Technologies Used:</span> React, Redux, NodeJs,CSS, and
                Bootstrap.
              </p>
              {/* <a className="readMore" href="#">
                READ MORE
              </a> */}
            </div>
            <div>
              <a href="#">
                <img src="https://imgur.com/ukhFGbz.png" />
              </a>
            </div>
          </div>
        </div>
      </Port>
    );
  }
}

const Port = styled.div`
    height: 100%;
    background-color: white;
    padding:20px 400px;
    text-align: left;
    h1 {
        font-size: 60px;
    }

    h3 {
        font-size: 40px;
        padding:30px 0 30px 0;
        font-weight: 300;
    }

    a {
    color: #000;
    }

    p {
        padding:0 80px 20px 10px;
        font-size: 20px;
        line-height: 30px;
    }

    span {
        font-weight: bold;
    }

    .readMore {
        border: 1px solid grey;
        padding: 8px;
        font-size: 10px;
        border-radius: 10px;
    }
    }
    .projects {
        display:flex;
        justify-content: space-around;
    }

    img {
        border-radius: 20px;
        width: 400px;
        height: 250px;
        radio
    }
`;
export default Portfolio;
