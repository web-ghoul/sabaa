import { Box, Typography } from "@mui/material";
<<<<<<< HEAD
import { useEffect } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
=======
import { RiFileExcel2Fill } from "react-icons/ri";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
import { handleAlert } from "../functions/handleAlert";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { PrimaryButton } from "../mui/buttons/PrimaryButton";
<<<<<<< HEAD
import { getCompanies } from "../store/companiesSlice";
import { AppDispatch, RootState } from "../store/store";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import CompaniesTable from "../tables/CompaniesTable/CompaniesTable";

const Companies = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { companies, isLoading } = useSelector(
    (state: RootState) => state.companies
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-6`}>
=======
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-center gap-2`}>
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Typography key="2">Companies</Typography>
          </BreadCrumbs>
          <Box className={`flex justify-end items-center gap-2`}>
            <PrimaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`)
              }
              className="!bg-excel"
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Upload Excel</Typography>
            </PrimaryButton>
            <PrimaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_ADD_COMPANY_ROUTE}`)
              }
            >
              Add Company
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-8 grid-cols-2 `}>
          <Forms type={"companiesOptions"} />
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
<<<<<<< HEAD
        <CompaniesTable data={companies} isLoading={isLoading} />
=======
        <CompaniesTable />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Companies;
