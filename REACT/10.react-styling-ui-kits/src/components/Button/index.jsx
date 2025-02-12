import styled from 'styled-components';

const Button = () => {
    return (
        <StyledButton>Button</StyledButton>
    )
}

const StyledButton = styled.button`
    border: 1px solid;
    background-color: tomato;
    padding: 1rem 2rem;
`


export default Button