import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import ExcelButtons from "../../components/ExcelButtons/ExcelButtons";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getJobs } from "../../store/jobsSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const JobsOptionsForm = ({ register, errors }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForJobs } = useContext(FormsContext);
  const { queries } = useContext(AppContext);
  const handleSearch = (value: string) => {
    setSearchForJobs(value);
    dispatch(getJobs({ ...queries, search: value }));
  };

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:p-3 sm:!p-2 md:gap-3 sm:!gap-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:grid-cols-1 md:gap-4 sm:!gap-2`}
      >
        <Box className={`w-[50%] md:w-[75%] sm:w-full`}>
          <Input
            label={"Search Name, MOHRE..."}
            name={"search"}
            type={"search"}
            register={register}
            errors={errors}
            change={handleSearch}
          />
        </Box>
        <ExcelButtons addBtn={"Add Job"} variant="jobs" all={false} />
      </Box>
    </Paper>
  );
};

export default JobsOptionsForm;
