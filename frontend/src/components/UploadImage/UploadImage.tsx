import { CloudUploadRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { UploadImageTypes } from "../../types/components.types";

const UploadImage = ({ variant, title }: UploadImageTypes) => {
  const { defaultAvatar, defaultCompany } = useContext(AppContext);
  const {
    companyImage,
    setCompanyImage,
    ownerImage,
    setOwnerImage,
    customerImage,
    setCustomerImage,
    proImage,
    setProImage,
    userImage,
    setUserImage,
    employeeImage,
    setEmployeeImage,
  } = useContext(FormsContext);

  const [chosenImage, setChosenImage] = useState(
    variant === "addCompany" || variant === "editCompany"
      ? companyImage || defaultCompany
      : variant === "addOwner" || variant === "editOwner"
      ? ownerImage || defaultAvatar
      : variant === "addPro" || variant === "editPro"
      ? proImage || defaultAvatar
      : variant === "addCustomer" || variant === "editCustomer"
      ? customerImage || defaultAvatar
      : variant === "addUser" || variant === "editUser"
      ? userImage || defaultAvatar
      : variant === "addEmployee" || variant === "editEmployee"
      ? employeeImage || defaultAvatar
      : defaultAvatar
  );

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const image = files[0];
      if (variant === "addCompany" || variant === "editCompany") {
        setCompanyImage(image);
      } else if (variant === "addOwner" || variant === "editOwner") {
        setOwnerImage(image);
      } else if (variant === "addPro" || variant === "editPro") {
        setProImage(image);
      } else if (variant === "addCustomer" || variant === "editCustomer") {
        setCustomerImage(image);
      } else if (variant === "addUser" || variant === "editUser") {
        setUserImage(image);
      } else if (variant === "addEmployee" || variant === "editEmployee") {
        setEmployeeImage(image);
      }
      setChosenImage(image);
    }
  };

  useEffect(() => {
    setChosenImage(
      variant === "addCompany" || variant === "editCompany"
        ? companyImage || defaultCompany
        : variant === "addOwner" || variant === "editOwner"
        ? ownerImage || defaultAvatar
        : variant === "addPro" || variant === "editPro"
        ? proImage || defaultAvatar
        : variant === "addCustomer" || variant === "editCustomer"
        ? customerImage || defaultAvatar
        : variant === "addUser" || variant === "editUser"
        ? userImage || defaultAvatar
        : variant === "addEmployee" || variant === "editEmployee"
        ? employeeImage || defaultAvatar
        : defaultAvatar
    );
  }, [
    companyImage,
    customerImage,
    defaultAvatar,
    defaultCompany,
    employeeImage,
    ownerImage,
    proImage,
    userImage,
    variant,
  ]);

  return (
    <Box
      className={`grid gap-2 justify-center items-center m-auto cursor-pointer group`}
      component={"label"}
      htmlFor="upload"
    >
      <Typography variant="h5" className="text-center !font-[700]">
        {title}
      </Typography>
      <Box
        className={`bg-no-repeat w-[150px] h-[150px] relative bg-cover bg-center rounded-full md:w-[125px] md:h-[125px] sm:!w-[100px] sm:!h-[100px]`}
        sx={{
          backgroundImage: `url(${
            chosenImage instanceof File
              ? URL.createObjectURL(chosenImage)
              : chosenImage.split("/")[1] === "images"
              ? chosenImage
              : `${import.meta.env.VITE_SERVER_URL}/${chosenImage}`.replaceAll(
                  "\\",
                  "/"
                )
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
