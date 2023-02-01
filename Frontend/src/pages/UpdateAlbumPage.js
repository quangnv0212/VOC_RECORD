import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
import { update } from "../store/album/albumSlice";
const schema = yup.object({});
const UpdateAlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState([]);
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const dispatch = useDispatch();
  const handleAddNewAlbum = (values) => {
    console.log(values);
    let data = { ...values, albumId };
    console.log(data);
    dispatch(update(data));
  };
  useEffect(() => {
    const fetchAlbumDetail = async (albumId) => {
      const response = await axios.get(
        `http://localhost:3100/api/v1/album/${albumId}`
      );
      setAlbum(response.data.data.data);
    };
    fetchAlbumDetail(albumId);
  }, [albumId]);
  const handleData = () => {
    setValue("name", album.name);
    setValue("artist", album.artist);
    setValue("year", album.year);
    setValue("genre", album.genre);
    setValue("price", album.price);
    setValue("color", album.color);
    setValue("caseStatus", album.caseStatus);
    setValue("vinylStatus", album.vinylStatus);
    setValue("price", album.price);
    setValue("country", album.country);
    setValue("countInStock", album.countInStock);
    setValue("record", album.record);
    setValue("image", album.image);
  };
  return (
    <div className="m-32">
      <button onClick={handleData}>Nhấn vào đây để lấy data</button>
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
          Update Album
        </Button>
      </form>
    </div>
  );
};

export default UpdateAlbumPage;
