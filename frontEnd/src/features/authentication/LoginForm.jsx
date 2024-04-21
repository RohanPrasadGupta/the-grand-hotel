import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";
import { GrLogin } from "react-icons/gr";
import Input from "../../ui/Input";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import toast from "react-hot-toast";

const LoginFormRow = styled.div`
  display: flex;
  padding: 20px;
  font-weight: bold;
  gap: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function LoginForm() {
  const { formState, register, reset, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { errors } = formState;

  const { mutate: loginUser, isLoading: isLogging } = useMutation({
    mutationFn: getUsers,
    onSuccess: (data) => {
      // console.log(data);
      // console.log(data.data.status);

      if (data && data.data.status === "success") {
        toast.success("Welcome");
        queryClient.invalidateQueries({ queryKey: "users" });
        reset();
        navigate("/dashboard");
      } else if (data.data.status === "failed") {
        toast.error(data.data.message);
      }
    },
    onError: () => toast.err("email or password is wrong..."),
  });

  function onClickLogin(data) {
    // console.log(data);
    loginUser(data);
  }

  function onError(error) {
    console.log(error);
  }

  function clickBtnSignup() {
    navigate("/signup");
  }

  return (
    <Form onSubmit={handleSubmit(onClickLogin, onError)}>
      <LoginFormRow>
        <p>Email: </p>
        <Input
          type="email"
          id="email"
          disabled={isLogging}
          autoComplete="username"
          {...register("email", { required: "Please Enter Email Address" })}
          error={errors?.email?.message}
        />
      </LoginFormRow>
      <LoginFormRow>
        <p>Password: </p>
        <Input
          type="password"
          id="password"
          disabled={isLogging}
          autoComplete="current-password"
          {...register("password", { required: "Please Enter Email Address" })}
          error={errors?.password?.message}
        />
      </LoginFormRow>
      <LoginFormRow>
        <Button size="large">
          Login <GrLogin />
        </Button>
        <Button variation="secondary" onClick={clickBtnSignup}>
          Signup
        </Button>
      </LoginFormRow>
    </Form>
  );
}

export default LoginForm;
