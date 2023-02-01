import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import { authUpdatePassword } from "../store/auth/auth-slice";

const ChangePasswordPage = () => {
  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, accessToken } = currentUser;
  const { handleSubmit, control } = useForm({});
  const handleUpdatePassword = (values) => {
    dispatch(authUpdatePassword({ ...values, email, token: accessToken }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdatePassword)}>
        <FormGroup>
          <Label htmlFor="passwordCurrent">Mật khẩu hiện tại</Label>
          <Input
            control={control}
            name="passwordCurrent"
            type="password"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu mới</Label>
          <Input control={control} name="password" type="password"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordConfirm">Xác nhận mật khẩu mới</Label>
          <Input
            control={control}
            name="passwordConfirm"
            type="password"
          ></Input>
        </FormGroup>

        <Button className="w-full bg-primary" type="submit">
          Đổi mật khẩu
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
