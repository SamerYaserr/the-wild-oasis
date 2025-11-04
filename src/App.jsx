import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check In")}>Check In</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
