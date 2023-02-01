import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import { authResetPassword } from "../store/auth/auth-slice";

const ResetPasswordChange = () => {
  const { handleSubmit, control, reset } = useForm({});
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const handleResetPassword = async (values) => {
    try {
      dispatch(authResetPassword({ ...values, resetToken }));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordConfirm">Password Confirm *</Label>
          <Input
            control={control}
            name="passwordConfirm"
            type="password"
            placeholder="Confirm your Password"
          ></Input>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordChange;
