import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 910px;
    background: #fff;
    align-items: center;

    @media screen and (max-width: 968px) {
        height: 100%;
    }


    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 1150px;
    padding-top: 200px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(1fr, 1fr);
    grid-template-areas: 'col1 col2';
    border-radius: 10px;
    max-width: 1150px;
    

    @media screen and (max-width: 968px) {
        grid-template-areas: 
        'col1 col1'
        'col2 col2';
    }
`

export const ContactCol1 = styled.div`
    grid-area: col1;
    border-radius: 10px;
    margin: 25px
`

export const ContactCol2 = styled.div`
    grid-area: col2;
    border-radius: 10px;
    margin: 25px
`

export const ContactTitle = styled.h1`
    font-size: 2.5rem;
    line-height: 1.1;
    margin: 25px;
    color: #383838;
`

export const ContactSubTitle = styled.p` 
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.4px;
    color: #383838;
`
export const ContainerRow = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    margin: 25px;
`

export const ContactIcon = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 20px;
`

export const ContainerTextIcon = styled.p`
    font-size: 1rem;
    color: #383838;
`

export const ContactIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px
`


export const ContactImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`






