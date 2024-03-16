import React from 'react';
import styled from "styled-components";
const ImgWrapper=styled.div`
    width: 220px;
`
const SliderIMG = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    transform: translateX(-80px);
    background: white;
    box-shadow:
            15px 15px 0 -10px #3badff,
            -15px -15px 0 -10px #8738fd;
    object-fit: contain;
`
type swiperSlideTitleImgProps={
    titleImg:string;
}
function SwiperSlideTitleImg({titleImg}:swiperSlideTitleImgProps) {
    return (
        <ImgWrapper>
            <SliderIMG
                 src={titleImg}
                 alt=""/>
        </ImgWrapper>
    );
}

export default SwiperSlideTitleImg;
