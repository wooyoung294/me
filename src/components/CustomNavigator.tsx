import styled from "styled-components";

export const CustomNavigator= styled.div`
    position: absolute;
    top: 45%;
    left: 95%;
    z-index: 10;
`
export const NavigatorItem= styled.div<{ step: number,idx:number }>`
    margin-top: 8px;
    margin-bottom: 8px;
    width: 11px;
    //height: 11px;
    height: ${({step,idx}) => step ===idx ? '30px' : '11px'};
    border-radius: 10px;
    background: ${({step,idx}) => step ===idx ? '#8738fd' : '#b6b6b6'};;
`
