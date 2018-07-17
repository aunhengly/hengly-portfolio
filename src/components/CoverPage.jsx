import React from 'react';
import downSVG from '../assets/down.svg';
import styled from 'styled-components';

const CoverPage = () => {
    return (
        <Content>
            <div className="content">
                <video className='video-background' autoPlay muted loop>
                    <source src='https://i.imgur.com/nPNAVPN.mp4' type='video/mp4'/>
                </video>
                <div className='introduction'>
                    <h3>Welcome!</h3>
                    <h1>I'M HENGLY, A FULL STACK DEVELOPER.</h1>
                    <h3>Currently I am looking for a great team to growth together.</h3>
                    <h3>Passionate about problems solving, critical thinking, computer games, action movies.</h3>
                    <span className='social-icons'>
                        <a href='#'><i className="fab fa-github"></i></a>
                        <a href='#'><i className="fab fa-linkedin-in"></i></a>
                        <a href='#'>aunhengly@gmail.com</a>
                        <a>619-817-1489</a>
                    </span>
                    <h4>More about Hengly</h4>
                    <a href='#'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z'/>
                    </svg>
                    </a>
                </div>
            </div>
        </Content>
    )

}

const Content = styled.div`
    .content {
        height: 100vh;
    }
    .video-background {
        position: absolute;
        z-index: -1;
        background-size: cover;
        background-position: center;
        top: 0;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        filter: brightness(0.7);
    }
    .introduction {
        margin-top: 150px;
        color: #fff;
    }
    
    .socical-icons {
        color: #fff;
        width: 35px;
        height: 35px;
    }
    a {
        text-decoration: none;
        color: #fff;
        padding: 0 8px;
    }
    h3 {
        font-family: 'Cardo', serif;
        font-style: italic;
        font-size: 15px;
        padding: 10px;
    }

    h1 {
        padding: 30px;
        font-weight: 300;
        font-size: 30px;
    }

    h4 {
        font-family: 'Cardo', serif;
        font-size: 15px;
        padding-top: 50px;
        padding-bottom: -10px;
    }

    svg {
        fill: #fff;
        stroke: #fff;
        stroke-width: '2';
    }

    /*Tablet */
    @media screen and (min-width 1024px) {
        height: auto;
    }
`;

export default CoverPage;
