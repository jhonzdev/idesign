import styled from 'styled-components';

export const PortContainer = styled.div`
    background: '#fff';

    
`

export const PortSemiCont = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 24px;
    justify-content: center;
    
`

export const PortWraperT = styled.div`
    padding-top: 110px;
    text-align: center;
    padding-bottom: 25px;
`

export const PortTitle = styled.h1`
    margin-bottom: 10px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #383838;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const PortSubtitle = styled.p`
    color: #383838;
    margin-bottom: 20px;
`

export const PortWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr, 1fr, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin-bottom: 100px;
    grid-template-areas: 
        'col1 col2 col3 col3'
        'col1 col4 col5 col6'
        'col7 col7 col8 col6';

    @media screen and (max-width: 800px) {
        grid-template-areas: 
        'col1 col1 col6 col6'
        'col1 col1 col6 col6'
        'col5 col8 col3 col3'
        'col7 col7 col2 col4';
    }

    @media screen and (max-width: 480px) {
        grid-template-areas: 
        'col1 col1 col1 col1'
        'col2 col2 col2 col2'
        'col3 col3 col3 col3'
        'col4 col4 col4 col4'
        'col5 col5 col5 col5'
        'col6 col6 col6 col6'
        'col7 col7 col7 col7'
        'col8 col8 col8 col8';
    }
`

export const ImgCol1 = styled.img`
    width: 100%;
    height: 600px;
    grid-area: col1;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        height: auto;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol2 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col2;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        height: 600px;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol3 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col3;
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol4 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col4;
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol5 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col5;
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol6 = styled.img`
    width: 100%;
    height: 600px;
    grid-area: col6;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        height: 600px;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ImgCol7 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col7;
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const ImgCol8 = styled.img`
    width: 100%;
    height: 300px;
    grid-area: col8;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        height: auto;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

