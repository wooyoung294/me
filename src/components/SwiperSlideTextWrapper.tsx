import React from 'react';
import SwiperSlideListItem from "./SwiperSlideListItem";
import {SwiperSlideItemVo} from "../vo/SwiperSlideItemVo";
import styled from "styled-components";
type swiperSlideTextWrapperProps={
    title:string;
    items:SwiperSlideItemVo[]
}
const TextWrapper = styled.div`
    width: 65%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px;
    gap: 10px;
`
const Ul = styled.ul`
    padding-left: 10px;
`
function SwiperSlideTextWrapper({title,items}:swiperSlideTextWrapperProps) {
    return (
        <TextWrapper>
            <h2>{title}</h2>
            <Ul>
                {
                    items.map((item)=>
                        <SwiperSlideListItem
                            liType={item.liType}
                            label={item.label}
                            content={item.content}
                        />
                    )

                }
            </Ul>
        </TextWrapper>
    );
}

export default SwiperSlideTextWrapper;
