import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-grey-100);
`;

const Button = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 500;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const StyledApp = styled.main`
  padding: 20px;
  background-color: var(--color-grey-50);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check In")}>Check In</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>

        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
