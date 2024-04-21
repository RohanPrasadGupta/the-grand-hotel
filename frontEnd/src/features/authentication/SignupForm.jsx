import { useForm } from "react-hook-form";
// import { useCreateuser } from "./useCreateUsers";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../services/apiUser";
import { GrLogin } from "react-icons/gr";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import toast from "react-hot-toast";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { register, formState, getValues, reset, handleSubmit } = useForm();
  const { errors } = formState;

  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data.data.status);

      if (data && data.data.status === "success") {
        toast.success("You are sucessfully registered");
        queryClient.invalidateQueries({ queryKey: "users" });
        reset();
        navigate("/login");
      } else {
        toast.error("Registration failed");
      }
    },
    onError: () => toast.error("Registration failed"),
  });

  function onSubmit(data) {
    // console.log(data);
    createUser(data);
  }

  function onError() {
    toast.error("Unable to create user");
  }

  function clickBtnLogin() {
    navigate("/login");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow lable="Full name" error={errors?.fullName?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="fullName"
          {...register("fullName", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow lable="Email address" error={errors?.email?.message}>
        <Input
          disabled={isCreating}
          type="email"
          id="email"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        lable="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isCreating}
          type="password"
          id="password"
          {...register("password", {
            required: "This Field is required",
            minLength: {
              value: 8,
              message: "Password Should be 8 Character",
            },
          })}
        />
      </FormRow>

      <FormRow lable="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          disabled={isCreating}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This Field is required",
            validate: (value) =>
              value === getValues().password || "password need to mactch",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" onClick={clickBtnLogin}>
          Login <GrLogin />
        </Button>
        <Button>SignUp</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
