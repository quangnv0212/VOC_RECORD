import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import { authForgetPassword } from "../store/auth/auth-slice";

const ForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({});
  const handleForgetPassword = (values) => {
    dispatch(authForgetPassword(values));
  };

  return (
    <div>
      <p>
        Nhập email của bạn tại đây. Một email sẽ được gửi về tài khoản bạn đăng
        ký
      </p>
      <form onSubmit={handleSubmit(handleForgetPassword)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input control={control} name="email" type="email"></Input>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Gửi gmail
        </Button>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
