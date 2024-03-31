import { Box, Typography } from "@mui/material";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
=======
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";
import { handleAlert } from "../functions/handleAlert";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { PrimaryButton } from "../mui/buttons/PrimaryButton";
<<<<<<< HEAD
import { getJobs } from "../store/jobsSlice";
import { AppDispatch, RootState } from "../store/store";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import JobsTable from "../tables/JobsTable/JobsTable";

const Jobs = () => {
  const { handleOpenAddJobModal } = useContext(FormsContext);
  const navigate = useNavigate();
<<<<<<< HEAD
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, jobs } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(getJobs());
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
            <Typography key="2">Jobs</Typography>
          </BreadCrumbs>
          <Box className={`flex justify-end items-center gap-2`}>
            <PrimaryButton
              className="!bg-excel"
              onClick={() =>
                navigate(`${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`)
              }
            >
              <RiFileExcel2Fill />
              <Typography variant="button">Upload Excel</Typography>
            </PrimaryButton>
            <PrimaryButton onClick={handleOpenAddJobModal}>
              Add Job
            </PrimaryButton>
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-8 grid-cols-2`}>
          <Forms type={"jobsOptions"} />
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
        <JobsTable data={jobs} isLoading={isLoading} />
=======
        <JobsTable />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Jobs;
