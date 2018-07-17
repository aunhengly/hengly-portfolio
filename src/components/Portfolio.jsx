import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';

class Portfolio extends Component {
    render() {
        return(
            <Port>
                <h1>Portfolio</h1>
                <div>
                    <h3>Portal</h3>
                    <div className='projects'>
                        <div>
                            <p>This app is helping graduated student to find job.</p>
                            <p>The goal of this is app was created with a minimal viable product where users can sign up, edit their profile, and easily searchable by potential employer.</p>
                            <p>Technology Use: React, Redux, React-Router, Passport, Loopback, MongoDB, an Bootstrap</p>   
                        </div>
                        <div>
                            <img src='https://imgur.com/XJn1V2o.png'/>
                        </div>
                    </div>
                </div>
            </Port>
    
        );
    }
        
    }

const Port = styled.div`
    height: 100vh;
    background-color: white;
    padding: 30px;
    h1{
        text-align: left;
    }
    
    .projects {
        display:flex;
        justify-content: space-between;
    }

    img {
        width: 600px;
        height: 300px;
    }
`;


export default Portfolio;

