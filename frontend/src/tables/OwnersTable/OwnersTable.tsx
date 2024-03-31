import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
<<<<<<< HEAD
import { MouseEvent, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { OwnersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingOwnersRow from "./LoadingOwnersRow";
import OwnersTableMenu from "./OwnersTableMenu";
import { OwnersTableRow } from "./OwnersTableRow";

const OwnersTable = ({ data, isLoading, fileIndex }: OwnersTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setOwnerIndex } = useContext(ExcelsContext);
  const { setEditableOwnerData } = useContext(FormsContext);
=======
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import OwnersTableMenu from "./OwnersTableMenu";
import { OwnersTableRow } from "./OwnersTableRow";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const OwnersTable = () => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      setSearchParams({ sort: "name_desc" });
    } else {
      setSearchParams({ sort: "name_asc" });
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      setSearchParams({ sort: "code_desc" });
    } else {
      setSearchParams({ sort: "code_asc" });
    }
  };

<<<<<<< HEAD
  const handleView = (id: string) => {
    navigate(`${import.meta.env.VITE_OWNERS_ROUTE}/${id}`);
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableOwnerData(data[index]);
    }
    setOwnerIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <PrimaryTableCell className={`!flex gap-2`}>
            <SortBox
              title={"Name"}
              handling={handleSortByName}
              asc={searchParams.get("sort") === "name_asc"}
              desc={searchParams.get("sort") === "name_desc"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          <PrimaryTableCell align="center">
            <SortBox
              title={"Code"}
              handling={handleSortByCode}
              asc={searchParams.get("sort") === "code_asc"}
              desc={searchParams.get("sort") === "code_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          <PrimaryTableCell align="center">Emirates ID</PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
<<<<<<< HEAD
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <OwnersTableRow key={i}>
                <PrimaryTableCell
                  onClick={() => handleView(row._id)}
                  component="th"
                  scope="row"
                >
                  <UserBox
                    username={row.name}
                    head={"subtitle1"}
                    size={"small"}
                    avatar={row.avatar}
                  />
                </PrimaryTableCell>
                <PrimaryTableCell align="center">{row.phone}</PrimaryTableCell>
                <PrimaryTableCell align="center">{row._id}</PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.nationality}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.emiratesId}
                </PrimaryTableCell>
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </OwnersTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingOwnersRow key={i} />)}
=======
        {rows.map((row, i) => (
          <OwnersTableRow key={i}>
            <PrimaryTableCell component="th" scope="row">
              <UserBox username={row.name} head={"subtitle1"} size={"small"} />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">{row.calories}</PrimaryTableCell>
            <PrimaryTableCell align="center">{row.fat}</PrimaryTableCell>
            <PrimaryTableCell align="center">{row.carbs}</PrimaryTableCell>
            <PrimaryTableCell align="center">{row.protein}</PrimaryTableCell>
            <PrimaryTableCell align="right">
              <IconButton onClick={handleOpenTableMenu}>
                <MoreVertRounded />
              </IconButton>
            </PrimaryTableCell>
          </OwnersTableRow>
        ))}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <OwnersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default OwnersTable;
