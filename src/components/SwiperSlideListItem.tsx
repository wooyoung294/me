import React from 'react';
import {SwiperSlideItemVo} from "../vo/SwiperSlideItemVo";
import styled from "styled-components";

const Label = styled.div`
    font-size: 18px;
    font-weight: bold;
    width: 90px;
    padding: 10px;
    text-align: justify;
    line-height: 0;
    &:after{
        content: "";
        display: inline-block;
        width: 100%;
    }
    &:before{
        content: "";
        display: inline-block;
        width: 100%;
    }
`
const Li = styled.li<{ type?: 'Badge'|'Text' }>`
    display: flex;
    flex-direction: ${({type}) => type ==='Badge' ? 'column' : 'row'};
`

const BadgeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 5px;
    margin-left: 30px;
`
const Description = styled.span`
    padding: 5px;
`
const BadgeImageWrapper =styled.div`
    background: #444444;
    display: flex;
    align-items: center;
`
function SwiperSlideListItem({liType,label,content}:SwiperSlideItemVo) {
    return (
        <Li type={liType}>
            <Label>{label}</Label>
            {liType === 'Badge'
                ?
                <BadgeWrapper className={'badgeWrapper'}>
                    {
                        Array.isArray(content) && content.map((imgValue) =>
                        <BadgeImageWrapper>
                            <img
                                src={imgValue}
                                alt={imgValue}
                                key={imgValue}
                            />
                        </BadgeImageWrapper>
                        )
                    }
                </BadgeWrapper>
                :
                typeof content === 'string' &&
                content.includes('http')
                    ? <a href={content as string}><Description>{content}</Description></a>
                    : <Description>{content}</Description>
            }
        </Li>
    )
}

export default SwiperSlideListItem;
