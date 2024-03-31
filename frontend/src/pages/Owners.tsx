import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
import { handleAlert } from "../functions/handleAlert";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { PrimaryButton } from "../mui/buttons/PrimaryButton";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Owners = () => {
  const navigate = useNavigate();
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOwners());
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`grid justify-stretch items-start content-start gap-6`}
      >
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Typography key="2">Owners</Typography>
          </BreadCrumbs>
          <Box className={`flex justify-end items-center gap-4`}>
            <PrimaryButton
              className={`!bg-excel`}
              onClick={() =>
                navigate(`${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`)
              }
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Upload Excel</Typography>
            </PrimaryButton>
            <PrimaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_ADD_OWNER_ROUTE}`)
              }
            >
              Add Owner
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-8 grid-cols-2`}>
          <Forms type={"ownersOptions"} />
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
        <OwnersTable data={owners} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Owners;
