import styled from "styled-components";

export const VisitButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    background-color: #3badff;
    background-image: linear-gradient(315deg, #3badff 0%, #93cbf3 74%);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
    top: 83%;
    width: 200px;
    height: 50px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: 1s;
    text-decoration: none;
    outline: none;
    color: #000;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #8738fd;
        background-image: linear-gradient(315deg, #8738fd 0%, #a36df5 74%);
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
        transition: all 0.3s ease;
    }

    &:hover {
        color: #000;
    }

    &:hover {
        &:after {
            top: auto;
            bottom: 0;
            height: 100%;
        }
    }

    //&:before{
    //    transform: translate(-120%,-50%) translateZ(0)
    //}
    //
    //&:hover{
    //    &:before{
    //        transform: translate(-45%,-34%) translateZ(0)
    //    }
    //}
`
