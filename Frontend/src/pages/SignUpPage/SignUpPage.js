import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormGroup from "../../components/FormGroup/FormGroup";
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../components/Label";
import AuthenticationLayout from "../../components/Layout/AuthenticationLayout";
import { authSignup } from "../../store/auth/auth-slice";
const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  passwordConfirm: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleSignUp = async (values) => {
    try {
      dispatch(authSignup(values));
      if (currentUser.email) navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (currentUser.email) navigate("/");
  }, [currentUser, navigate]);
  console.log(errors);
  return (
    <AuthenticationLayout heading="ĐĂNG KÝ">
      <p className=" text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Có tài khoản rồi thì
        <Link to="/login" className="mx-1 underline font-bold text-primary">
          ĐĂNG NHẬP
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
          {errors.name?.message ? <p>{errors.name.message}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            {/* <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle> */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordConfirm">Password Confirm *</Label>
          <Input
            control={control}
            name="passwordConfirm"
            type="password"
            placeholder="Confirm your Password"
            error={errors.passwordConfirm?.message}
          ></Input>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </AuthenticationLayout>
  );
};

export default SignUpPage;
