import { AddRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const NationalitiesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenNationalityModal } = useContext(FormsContext);

  const handleSearch = (value: string) => {
    dispatch(getNationalities({ search: value }));
  };

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg  md:gap-3 sm:!gap-2  md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:grid-cols-1  md:gap-4 sm:!gap-2`}
      >
        <Input
          label={"Search Nationality, ID..."}
          name={"search"}
          type={"search"}
          formik={formik}
          change={handleSearch}
        />
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 flex-wrap`}
        >
          <Button
            handling={() => handleOpenNationalityModal("addNationality")}
            title={"Add Nationality"}
            icon={<AddRounded />}
          />
          <Button
            handling={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`)
            }
            title={"Upload Excel"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
          />
          <Button
            variant={"under development"}
            title={"Excel"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
          />
          <Button
            variant={"under development"}
            title={"Excel All"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default NationalitiesOptionsForm;
