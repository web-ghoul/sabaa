import { CloudUploadRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { UploadImageTypes } from "../../types/components.types";

const UploadImage = ({ variant, title }: UploadImageTypes) => {
  const { defaultAvatar, defaultCompany } = useContext(AppContext);
  const {
    addCompanyImage,
    setAddCompanyImage,
    addOwnerImage,
    setAddOwnerImage,
<<<<<<< HEAD
    editOwnerImage,
    setEditOwnerImage,
    addUserImage,
    setAddUserImage,
    setEditCompanyImage,
    editCompanyImage,
    editUserImage,
    setEditUserImage,
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  } = useContext(FormsContext);
  const [chosenImage, setChosenImage] = useState(
    variant === "addCompany"
      ? addCompanyImage || defaultCompany
<<<<<<< HEAD
      : variant === "editCompany"
      ? editCompanyImage || defaultCompany
      : variant === "addOwner"
      ? addOwnerImage || defaultAvatar
      : variant === "editOwner"
      ? editOwnerImage || defaultAvatar
      : variant === "addUser"
      ? addUserImage || defaultAvatar
      : variant === "editUser"
      ? editUserImage || defaultAvatar
=======
      : variant === "addOwner"
      ? addOwnerImage || defaultAvatar
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      : defaultAvatar
  );

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const image = files[0];
      if (variant === "addCompany") {
        setAddCompanyImage(image);
<<<<<<< HEAD
      } else if (variant === "editCompany") {
        setEditCompanyImage(image);
      } else if (variant === "addOwner") {
        setAddOwnerImage(image);
      } else if (variant === "editOwner") {
        setEditOwnerImage(image);
      } else if (variant === "addUser") {
        setAddUserImage(image);
      } else if (variant === "editUser") {
        setEditUserImage(image);
=======
      } else if (variant === "addOwner") {
        setAddOwnerImage(image);
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      }
      setChosenImage(image);
    }
  };

  return (
    <Box
      className={`grid gap-2 justify-center items-center m-auto cursor-pointer group`}
      component={"label"}
      htmlFor="upload"
    >
      <Typography variant="h6" className="text-center !font-[700]">
        {title}
      </Typography>
      <Box
        className={`bg-no-repeat w-[150px] h-[150px] relative bg-cover bg-center rounded-full`}
        sx={{
          backgroundImage: `url(${
            chosenImage instanceof File
              ? URL.createObjectURL(chosenImage)
<<<<<<< HEAD
              : chosenImage.split("/")[1] === "images"
              ? chosenImage
              : `${import.meta.env.VITE_SERVER_URL}/${chosenImage}`.replaceAll(
                  "\\",
                  "/"
                )
=======
              : chosenImage
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
          })`,
        }}
      >
        <Box
          className={`absolute transition-all w-full h-full bg-[rgba(0,0,0,.5)] top-0 left-0 opacity-0 group-hover:opacity-100 grid justify-center items-center rounded-full text-white text-center content-center cursor-pointer`}
          component={"label"}
          htmlFor="upload"
        >
          <CloudUploadRounded className={`!text-[50px]`} />
          <Typography variant="subtitle2">Upload</Typography>
        </Box>
      </Box>
      <input
        type="file"
        className={`opacity-0 hidden absolute cursor-pointer`}
        id="upload"
        placeholder="Upload"
        onChange={handleUploadImage}
      />
    </Box>
  );
};

export default UploadImage;
