import { MoreVertRounded } from "@mui/icons-material";
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getJobsCounter } from "../../store/jobsCounterSlice";
import { getJobs, reverseJobs } from "../../store/jobsSlice";
import { AppDispatch } from "../../store/store";
import { JobsTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import JobsTableMenu from "./JobsTableMenu";
import { JobsTableRow } from "./JobsTableRow";
import LoadingJobsRow from "./LoadingJobsRow";

const JobsTable = ({
  data,
  noPagination,
  count,
  isLoading,
  fileIndex,
}: JobsTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableJobData } = useContext(FormsContext);
  const { setJobIndex } = useContext(ExcelsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  const handleSortByJobTitle = () => {
    if (searchParams.get("sort") === "job_title_asc") {
      handleAddQuery({ sort: "job_title_desc" });
      dispatch(reverseJobs());
      setSearchParams({ ...queries, sort: "job_title_desc" });
    } else {
      handleAddQuery({ sort: "job_title_asc" });
      const all = { ...queries, sort: "job_title_asc" };
      dispatch(getJobs(all));
      setSearchParams(all);
    }
  };

  const handleSortByMOHRECode = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "code_desc" });
      dispatch(reverseJobs());
      setSearchParams({ ...queries, sort: "code_desc" });
    } else {
      handleAddQuery({ sort: "code_asc" });
      const all = { ...queries, sort: "code_asc" };
      dispatch(getJobs(all));
      setSearchParams(all);
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

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  return (
    <PrimaryTable count={count} variant={"jobs"} noPagination={noPagination}>
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            {sheet ? (
              "Job Title"
            ) : (
              <SortBox
                title={"Job Title"}
                handling={handleSortByJobTitle}
                asc={searchParams.get("sort") === "job_title_asc"}
                desc={searchParams.get("sort") === "job_title_desc"}
              />
            )}
          </PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">ENSCO Code</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            {sheet ? (
              "MOHRE Code"
            ) : (
              <SortBox
                title={mdScreen ? "MOHRE" : "MOHRE Code"}
                handling={handleSortByMOHRECode}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc={"center"}
              />
            )}
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
                <PrimaryTableCell align="center">{row.MOHRE}</PrimaryTableCell>
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
