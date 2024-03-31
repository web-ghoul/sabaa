import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
<<<<<<< HEAD
import { MouseEvent, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { JobsTableTypes } from "../../types/tables.types";
=======
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import JobsTableMenu from "./JobsTableMenu";
import { JobsTableRow } from "./JobsTableRow";
<<<<<<< HEAD
import LoadingJobsRow from "./LoadingJobsRow";

const JobsTable = ({ data, isLoading, fileIndex }: JobsTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableJobData } = useContext(FormsContext);
  const { setJobIndex } = useContext(ExcelsContext);
=======

function createData(name: string, calories: number, protein: number) {
  return { name, calories, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
];

const JobsTable = () => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  const handleSortByJobTitle = () => {
    if (searchParams.get("sort") === "job_title_asc") {
      setSearchParams({ sort: "job_title_desc" });
    } else {
      setSearchParams({ sort: "job_title_asc" });
    }
  };

  const handleSortByMOHRECode = () => {
    if (searchParams.get("sort") === "MOHRE_code_asc") {
      setSearchParams({ sort: "MOHRE_code_desc" });
    } else {
      setSearchParams({ sort: "MOHRE_code_asc" });
    }
  };

<<<<<<< HEAD
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

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  return (
    <PrimaryTable>
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
          <PrimaryTableCell align="center">ENSCO Code</PrimaryTableCell>
          <PrimaryTableCell align="center">
            <SortBox
              title={"MOHRE Code"}
              handling={handleSortByMOHRECode}
              asc={searchParams.get("sort") === "MOHRE_code_asc"}
              desc={searchParams.get("sort") === "MOHRE_code_desc"}
              jc={"center"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
<<<<<<< HEAD
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <JobsTableRow key={i}>
                <PrimaryTableCell component="th" scope="row">
                  {row.jobTitle}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.ENSCOCode}
                </PrimaryTableCell>
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
=======
        {rows.map((row, i) => (
          <JobsTableRow key={i}>
            <PrimaryTableCell component="th" scope="row">
              {row.name}
            </PrimaryTableCell>
            <PrimaryTableCell align="center">{row.calories}</PrimaryTableCell>
            <PrimaryTableCell align="center">{row.protein}</PrimaryTableCell>
            <PrimaryTableCell align="right">
              <IconButton onClick={handleOpenTableMenu}>
                <MoreVertRounded />
              </IconButton>
            </PrimaryTableCell>
          </JobsTableRow>
        ))}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <JobsTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default JobsTable;
