import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
<<<<<<< HEAD
import { MouseEvent, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { NationalitiesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingNationalitiesRow from "./LoadingNationalitiesRow";
import NationalitiesTableMenu from "./NationalitiesTableMenu";
import { NationaltiesTableRow } from "./NationalitiesTableRow";

const NationalitiesTable = ({
  data,
  isLoading,
  fileIndex,
}: NationalitiesTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableNationalityData } = useContext(FormsContext);
  const { setNationalityIndex } = useContext(ExcelsContext);
=======
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import NationalitiesTableMenu from "./NationalitiesTableMenu";
import { NationaltiesTableRow } from "./NationalitiesTableRow";

function createData(name: string, protein: number) {
  return { name, protein };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
];

const NationalitiesTable = () => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  const handleSortByNationality = () => {
    if (searchParams.get("sort") === "nationality_asc") {
      setSearchParams({ sort: "nationality_desc" });
    } else {
      setSearchParams({ sort: "nationality_asc" });
    }
  };

  const handleSortByNationalityId = () => {
    if (searchParams.get("sort") === "nationality_id_asc") {
      setSearchParams({ sort: "nationality_id_desc" });
    } else {
      setSearchParams({ sort: "nationality_id_asc" });
    }
  };
<<<<<<< HEAD

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableNationalityData(data[index]);
    }
    setNationalityIndex({ fileIndex: fileIndex || 0, index });
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
              title={"Nationality"}
              handling={handleSortByNationality}
              asc={searchParams.get("sort") === "nationality_asc"}
              desc={searchParams.get("sort") === "nationality_desc"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">
            <SortBox
              title={"ID"}
              handling={handleSortByNationalityId}
              asc={searchParams.get("sort") === "nationality_id_asc"}
              desc={searchParams.get("sort") === "nationality_id_desc"}
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
              <NationaltiesTableRow key={i}>
                <PrimaryTableCell component="th" scope="row">
                  {row.nationality}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">{row._id}</PrimaryTableCell>
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </NationaltiesTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingNationalitiesRow key={i} />)}
=======
        {rows.map((row, i) => (
          <NationaltiesTableRow key={i}>
            <PrimaryTableCell component="th" scope="row">
              {row.name}
            </PrimaryTableCell>
            <PrimaryTableCell align="center">{row.protein}</PrimaryTableCell>
            <PrimaryTableCell align="right">
              <IconButton onClick={handleOpenTableMenu}>
                <MoreVertRounded />
              </IconButton>
            </PrimaryTableCell>
          </NationaltiesTableRow>
        ))}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <NationalitiesTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default NationalitiesTable;
