import React, {Component} from 'react';
import styled from 'styled-components';
import HamburgerMenu from './ui/HamburgerMenu';

class Header extends Component {
    state ={
        open: false,
    };

    toggleMenu = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const {open} = this.state;
        return (
            <HeaderWrapper>
                <nav>
                    <span><a href='#'>Home</a></span>
                    <span><a href='#'>About</a></span>
                    <span><a href='#'>Portfolio</a></span>
                    <span><a id='resume' href='https://drive.google.com/open?id=1ELLKHUCs0a0avJfMyxlaqaCDowQw-czz'>Resume</a></span>
                </nav>
                <HamburgerMenu conClick={this.toggleMenu} className={open?'open': ''} />
            </HeaderWrapper>
        );
    }
}

const HeaderWrapper = styled.header`
    height: 58px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0 18 px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;

    nav {
        display: none;
        span {
            padding: 15px;

            &:hover {

                #resume {
                    background-color: blue;
                }
                a {
                    &:after {
                        opacity: 1;
                        transform: rotate3d(0, 0, 0, 90deg);
                    }
                }
            }
        }
        a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            position: relative;
            opacity: 0.7;
            transition: opacity 0.3s ease-in-out;

            &:after {
                content: '';
                position: absolute;
                bottom: -3px;
                left: 0;
                background-color: white;
                height: 3px;
                width: 100%;
                pointer-events: none;
                transform: rotate3d()(0, 1, 0, 90deg);
                transition: transform 0.3s ease-in-out;
            }
        }
    }
    /* tablet */
    @media screen and (min-width: 786px){
        padding: 0 28px;   
    }
    
    /* Desktop */
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        background-color: black;
        top: 20px;

        nav {
            display: block;
        }
    }

`;

export default Header;