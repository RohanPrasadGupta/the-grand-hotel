import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import styled from "styled-components";

const SignupDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 5px;
`;

function NewUsers() {
  return (
    <SignupDiv>
      <Heading as="h1">
        SignUp
        <SignupForm />
      </Heading>
    </SignupDiv>
  );
}

export default NewUsers;
