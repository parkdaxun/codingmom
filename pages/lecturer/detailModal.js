import styled from "styled-components"

export default function DetailModal(){
    const date = (new Date().toLocaleDateString()).replaceAll(" ", "")
    
    return(
       <ModalContainer>
            
            <Title>{date.substring(0, date.length-1)}</Title>
            <Box>
                <span>소프트웨어 수업</span>
                <Time>AM 9:40</Time>
            </Box>
            <Box>
                <span>소프트웨어 수업</span>
                <Time>PM 2:40</Time>
            </Box>
       </ModalContainer>       
    )
}

const ModalContainer = styled.div`
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Title = styled.h1`
    font-size: 50px;
    margin-top: 30px;
`

const Box = styled.div`
    width: 90%;
    height: 80px;
    background: #FFFFFF;
    border-radius: 15px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 17px;
    color: #000000;
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding-left: 20px;
    position: relative;
`

const Time = styled.span`
    position: absolute;
    right: 20px;
`