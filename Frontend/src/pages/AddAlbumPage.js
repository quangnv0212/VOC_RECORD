import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormGroup from "../components/FormGroup/FormGroup";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button/Button";
import { addnew } from "../store/album/albumSlice";
import { useNavigate } from "react-router-dom";
const schema = yup.object({});
const AddAlbumPage = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleAddNewAlbum = async (values) => {
    try {
      dispatch(addnew(values));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log(album);
  }, [album]);
  return (
    <div className="m-32">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleAddNewAlbum)}
      >
        <div className="md:grid md:grid-cols-2 gap-5">
          <FormGroup>
            <Label htmlFor="name">Tên album</Label>
            <Input
              control={control}
              name="name"
              placeholder="Nhập tên Album"
            ></Input>
            {errors.name?.message ? <p>{errors.name.message}</p> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="artist">Nghệ sĩ</Label>
            <Input
              control={control}
              name="artist"
              placeholder="Nhập tên nghệ sĩ"
              error={errors.artist?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="year">Năm phát hành</Label>
            <Input
              control={control}
              name="year"
              placeholder="Example: 1969"
              error={errors.year?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="genre">Thể loại</Label>
            <Input
              control={control}
              name="genre"
              placeholder="Example: Rock,Blues,Jazz,..."
              error={errors.genre?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="price">Giá</Label>
            <Input
              control={control}
              name="price"
              placeholder="Example: 1000000"
              error={errors.price?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Màu sắc</Label>
            <Input
              control={control}
              name="color"
              placeholder="Example: Đen"
              error={errors.color?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="caseStatus">Tình trạng vỏ</Label>
            <Input
              control={control}
              name="caseStatus"
              placeholder="Example: new"
              error={errors.caseStatus?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="vinylStatus">Tình trạng đĩa</Label>
            <Input
              control={control}
              name="vinylStatus"
              placeholder="Example: new"
              error={errors.vinylStatus?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Quốc gia</Label>
            <Input
              control={control}
              name="country"
              placeholder="Example: US"
              error={errors.country?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="countInStock">Số lượng hàng sẵn có</Label>
            <Input
              control={control}
              name="countInStock"
              placeholder="Example: 6"
              error={errors.countInStock?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="record">Hãng phát hành</Label>
            <Input
              control={control}
              name="record"
              placeholder="Example: Apple Record"
              error={errors.record?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Hình ảnh</Label>
            <Input
              control={control}
              name="image"
              placeholder="Điền link hình ảnh vào đây"
              error={errors.record?.image}
            ></Input>
          </FormGroup>
          {/* <FormGroup>
            <Label htmlFor="image">Hình ảnh</Label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleUploadImage}
            />
          </FormGroup> */}
        </div>
        <Button className="w-full bg-primary" type="submit">
          Add New Album
        </Button>
      </form>
    </div>
  );
};

export default AddAlbumPage;
