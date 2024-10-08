import styled from 'styled-components'

const ButtonStyled = styled.button`
  min-width:
    ${props => props.$width
      ? '120px'
      : 'initial'
    };
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: rgb(240, 240, 240);
  background-color:
    ${props => props.$primary
      ? 'rgb(0, 100, 100)'
      : 'rgb(179, 40, 40)'
    };
  transition: all 0.1s ease-out;
  letter-spacing: 1px;

  &:hover {
    background-color:
    ${props => props.$primary
      ? 'rgb(30, 128, 128)'
      : 'rgb(220, 40, 40)'
    };
  };

  &:active {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }
`

export default ButtonStyled