import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";
import { handleAlert } from "../functions/handleAlert";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { PrimaryButton } from "../mui/buttons/PrimaryButton";
import { getNationalities } from "../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../store/store";
import NationalitiesTable from "../tables/NationalitiesTable/NationalitiesTable";

const Nationalities = () => {
  const { handleOpenAddNationalityModal } = useContext(FormsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { nationalities, isLoading } = useSelector(
    (state: RootState) => state.nationalities
  );

  useEffect(() => {
    dispatch(getNationalities());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-6`}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Typography key="2">Nationality</Typography>
          </BreadCrumbs>
          <Box className={`flex justify-end items-center gap-2`}>
            <PrimaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`)
              }
              className="!bg-excel"
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Upload Excel</Typography>
            </PrimaryButton>
            <PrimaryButton onClick={handleOpenAddNationalityModal}>
              Add Nationality
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-8 grid-cols-2`}>
          <Forms type={"nationalitiesOptions"} />
          <Box className={`flex justify-end items-center gap-4`}>
            <PrimaryButton
              className={`!bg-excel`}
              onClick={() => handleAlert({ msg: "Under Development" })}
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Excel</Typography>
            </PrimaryButton>
            <PrimaryButton
              className={`!bg-excel`}
              onClick={() => handleAlert({ msg: "Under Development" })}
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Excel All</Typography>
            </PrimaryButton>
          </Box>
        </Box>
        <NationalitiesTable data={nationalities} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Nationalities;
