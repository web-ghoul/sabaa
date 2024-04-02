import { MoreVertRounded } from "@mui/icons-material";
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getJobsCounter } from "../../store/jobsCounterSlice";
import { getJobs, reverseJobs } from "../../store/jobsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { JobsTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import JobsTableMenu from "./JobsTableMenu";
import { JobsTableRow } from "./JobsTableRow";
import LoadingJobsRow from "./LoadingJobsRow";

const JobsTable = ({ data, isLoading, fileIndex }: JobsTableTypes) => {
  const { handleOpenTableMenu, setJobsPage } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableJobData } = useContext(FormsContext);
  const { setJobIndex } = useContext(ExcelsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const { jobsCounter } = useSelector((state: RootState) => state.jobsCounter);
  const dispatch = useDispatch<AppDispatch>();

  const getAllParams = () => {
    setJobsPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    return allParams;
  };

  const handleSortByJobTitle = () => {
    if (searchParams.get("sort") === "job_title_asc") {
      setSearchParams({ ...getAllParams(), sort: "job_title_desc" });
      dispatch(reverseJobs());
    } else {
      dispatch(getJobs({ ...getAllParams(), sort: "job_title_asc" }));
      setSearchParams({ ...getAllParams(), sort: "job_title_asc" });
    }
  };

  const handleSortByMOHRECode = () => {
    if (searchParams.get("sort") === "code_asc") {
      setSearchParams({ ...getAllParams(), sort: "code_desc" });
      dispatch(reverseJobs());
    } else {
      dispatch(getJobs({ ...getAllParams(), sort: "code_asc" }));
      setSearchParams({ ...getAllParams(), sort: "code_asc" });
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableJobData(data[index]);
    }
    setJobIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    dispatch(getJobsCounter());
  }, [dispatch]);

  return (
    <PrimaryTable count={jobsCounter} variant={"jobs"}>
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            <SortBox
              title={"Job Title"}
              handling={handleSortByJobTitle}
              asc={searchParams.get("sort") === "job_title_asc"}
              desc={searchParams.get("sort") === "job_title_desc"}
            />
          </PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">ENSCO Code</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            <SortBox
              title={"MOHRE Code"}
              handling={handleSortByMOHRECode}
              asc={searchParams.get("sort") === "code_asc"}
              desc={searchParams.get("sort") === "code_desc"}
              jc={"center"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <JobsTableRow key={i}>
                <PrimaryTableCell component="th" scope="row">
                  {row.jobTitle}
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">
                    {row.ENSCOCode}
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="center">{row._id}</PrimaryTableCell>
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </JobsTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingJobsRow key={i} />)}
        <JobsTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default JobsTable;
