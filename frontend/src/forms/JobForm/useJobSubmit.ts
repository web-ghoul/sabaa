import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getJobsCounter } from "../../store/jobsCounterSlice";
import { getJobs } from "../../store/jobsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { JobFormTypes } from "../../types/forms.types";

const useJobSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,

    editableJobData,
  } = useContext(FormsContext);
  const { handleCloseJobModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { handleEditJobInSheet } = useContext(ExcelsContext);
  const { pathname } = useLocation();

  const addJob = async (values: JobFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/job-title`, values)
      .then(() => {
        handleAlert({ msg: "Job is Created Successfully", status: "success" });
        handleCloseJobModal();
        dispatch(getJobs({}));
        dispatch(getJobsCounter());
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editJob = async (values: JobFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`) {
      handleEditJobInSheet(values);
      handleCloseJobModal();
      handleAlert({
        msg: "Job is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(`/job-title/${editableJobData && editableJobData._id}`, values)
        .then(() => {
          handleAlert({
            msg: "Job is Updated Successfully",
            status: "success",
          });
          handleCloseJobModal();
          dispatch(getJobs({}));
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }

    handleCloseFormsLoading();
  };

  return { editJob, addJob };
};

export default useJobSubmit;
