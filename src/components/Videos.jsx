import React from 'react';
import styled from '../../node_modules/styled-components';

const Videos =() => {
    return (
        <MyVideos>
            <iframe className='my-videos' src="https://www.youtube.com/embed/Qp9Q6Eb7zVE?ecver=1" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
            <iframe className='my-videos' src="https://www.youtube.com/embed/C4EstqqST_M?ecver=1" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>
            <iframe className='my-videos' src="https://www.youtube.com/embed/vBXaO-fqhjM?ecver=1" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

        </MyVideos>
    );

}

const MyVideos = styled.div`
 .my-videos {
    width: 235px;
    height: 125px;
 }

`;

export default Videos;