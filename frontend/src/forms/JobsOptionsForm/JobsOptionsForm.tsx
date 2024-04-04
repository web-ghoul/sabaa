import { AddRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getJobs } from "../../store/jobsSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes, JobsOptionsFormikTypes } from "../../types/forms.types";

const JobsOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForJobs, handleOpenJobModal } = useContext(FormsContext);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { setJobsPage } = useContext(AppContext);

  const getAllParams = () => {
    setJobsPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setParams(allParams);
    return allParams;
  };

  const setAllParams = () => {
    const allParams = getAllParams();
    (formik as unknown as JobsOptionsFormikTypes).values.limit =
      allParams.limit;
    dispatch(getJobs(allParams));
  };

  const handleSearch = (value: string) => {
    dispatch(getJobs({ ...params, search: value }));
    setSearchForJobs(value);
  };

  const handleResetAll = () => {
    setSearchForJobs("");
    setSearchParams({});
    dispatch(getJobs({}));
    setParams({});
    (formik as unknown as JobsOptionsFormikTypes).values.limit = "";
  };

  useEffect(() => {
    setAllParams();
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getJobs({}));
    }
  }, [dispatch, searchParams]);
  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:p-3 sm:!p-2 md:gap-3 sm:!gap-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:grid-cols-1 md:gap-4 sm:!gap-2`}
      >
        <Input
          label={"Search Name, MOHRE..."}
          name={"search"}
          type={"search"}
          formik={formik}
          change={handleSearch}
        />
        <Box
          className={`flex justify-end items-center gap-4 flex-wrap md:gap-3 sm:!gap-2`}
        >
          <Button
            icon={<AddRounded />}
            handling={() => handleOpenJobModal("addJob")}
            title={"Add Job"}
          />
          <Button
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            handling={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`)
            }
            title={"Upload Excel"}
          />
          <Button
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            variant="under development"
            title={"Excel"}
          />
          <Button
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            variant="under development"
            title={"Excel All"}
          />
        </Box>
      </Box>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box className={`flex justify-end items-center`}>
          <Button
            handling={handleResetAll}
            title={"Reset All"}
            bg={"!bg-red-500"}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default JobsOptionsForm;
