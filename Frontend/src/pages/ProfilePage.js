import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import { authToken, authUpdateAccount } from "../store/auth/auth-slice";
import { getToken } from "../utils/auth";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);

  console.log(currentUser);
  const { handleSubmit, control, reset, setFocus, setValue } = useForm({
    defaultValues: currentUser,
    mode: "onChange",
  });
  const handleUpdate = (values) => {
    dispatch(
      authUpdateAccount({
        token: currentUser.accessToken,
        name: values.user,
        ...values,
      })
    );
  };
  useEffect(() => {
    setFocus("user");
    reset(currentUser);
  }, [setFocus]);
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Thông tin cá nhân</p>
                  <p>Vui lòng điền đầy đủ các mục</p>
                </div>
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit(handleUpdate)}>
                    <FormGroup>
                      <Label htmlFor="user">Full Name *</Label>
                      <Input
                        control={control}
                        name="user"
                        defaultValues
                      ></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        control={control}
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        values
                      ></Input>
                    </FormGroup>
                    <Link to="changePassword">
                      <p className="m-2 font-bold">
                        Nhấn vào đây để đổi mật khẩu
                      </p>
                    </Link>

                    <Button className="w-full bg-primary" type="submit">
                      Update my account
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
