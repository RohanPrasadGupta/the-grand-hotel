import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 5px;
`;

const LoginHead = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

function Login() {
  return (
    <LoginLayout>
      <LoginHead>Login</LoginHead>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
