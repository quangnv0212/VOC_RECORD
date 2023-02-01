import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import CheckoutStep from "../components/CheckoutStep";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
const ShippingPage = () => {
  const { handleSubmit, control } = useForm({});
  const handleShippingClick = ({ name, phoneNumber, address, city }) => {
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        name,
        phoneNumber,
        address,
        city,
      })
    );
  };
  return (
    <section>
      <CheckoutStep step1 step2 step3 step4></CheckoutStep>
      <div className="flex justify-center items-center my-5">
        <div className="w-1/2">
          <div>
            <h1>Shipping Address</h1>
            <form onSubmit={handleSubmit(handleShippingClick)}>
              <FormGroup>
                <Label htmlFor="name">Tên *</Label>
                <Input
                  control={control}
                  name="name"
                  type="text"
                  placeholder="Nguyễn Vũ Quang"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phoneNumber">Số điện thoại *</Label>
                <Input
                  control={control}
                  name="phoneNumber"
                  type="number"
                  placeholder="Nguyễn Vũ Quang"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Địa chỉ *</Label>
                <Input
                  control={control}
                  name="address"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn tại đây"
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="city">Thành phố *</Label>
                <Input
                  control={control}
                  name="city"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn tại đây"
                ></Input>
              </FormGroup>
              <Button className="w-full bg-primary" type="submit">
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingPage;
