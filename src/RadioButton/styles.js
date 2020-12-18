import styled from 'styled-components';

export  const DivBall = styled.div`
  width: 50%;
  height: 80%;
  margin: 3px;
  border: none;
  box-shadow: 0px 1px 3px #0000004D;
  border-radius: 15px;
  background: #fff;
`;

export const Text = styled.div`
 color: #fff;
`;

export const DivRouded = styled.div`
  cursor: pointer;
  height: 30px;
  width: 72px;
  flex-direction: ${props => props.state ? 'row' : 'row-reverse'} ;
  border:  ${props => `1px solid ${props.color}`} ;
  box-shadow: 0px 1px 3px #0000004D;
  border-radius: 15px;
  background-color: ${props => props.state ? props.color : "#fff"};
  display: flex;
  ${DivBall}{
    background:  ${props => props.state ? "#fff" : props.color}
  }
  ${Text}{
    color:  ${props => props.state ? "#fff" : props.color}
  }
  &:hover{
    transform: scale(1.01)
  }
  justify-content: flex-end;
  align-items: center;
  transition: ${props => props.state ? '1s' : '1s'} ; 

`;