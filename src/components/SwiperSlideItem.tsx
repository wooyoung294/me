import React from 'react';
import SwiperSlideTitleImg from "./SwiperSlideTitleImg";
import SwiperSlideTextWrapper from "./SwiperSlideTextWrapper";
import styled from "styled-components";
import {SwiperSlideVo} from "../vo/SwiperSlideVo";

const SwiperSlideItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
const SliderItem = styled.div`
    display: flex;
    align-items: center;
    overflow: visible;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
`;
function SwiperSlideItem({swiperSlideVo}:{ swiperSlideVo: SwiperSlideVo }) {
    const {titleImg,title,items} = swiperSlideVo
    return (
        // <SwiperSlide>
        <>
            <SwiperSlideItemWrapper>
                <SliderItem>
                    <SwiperSlideTitleImg titleImg={titleImg}/>
                    <SwiperSlideTextWrapper title={title} items={items}/>
                </SliderItem>
            </SwiperSlideItemWrapper>
        </>
        // </SwiperSlide>
    );
}

export default SwiperSlideItem;
