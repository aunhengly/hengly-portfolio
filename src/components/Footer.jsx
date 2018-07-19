import React from 'react';
import styled from 'styled-components';

const Footer =() => {
    return(
        <FooterWrapper>
            2018 Hengly
        </FooterWrapper>
    );
}
export default Footer;

const FooterWrapper = styled.div`
    padding: 0 100px;
    display: flex;
    align-items: center;
    color: #fff;
    background-color: black;
    height:120px;
`;