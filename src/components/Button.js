import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border 0.05rem solid var(--lightBlue);
  border-color: ${props => 
    (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  color: ${props => 
    (props.cart ? 'var(--mainYellow)' : "var(--lightBlue)")};
  border-radius: 8px;
  padding: 4px 12px;
  margin: 4px 8px 4px 0;
  transition: all 0.5s ease-in-out;
&:hover {
  background: ${props => 
    (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  color: ${props => 
    (props.cart ? "var(--mainWhite)" : "var(--mainBlue)")};
}
&:focus {
  outline: none;
}
`;