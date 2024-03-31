import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
<<<<<<< HEAD
import { MouseEvent, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RoleBox from "../../components/RoleBox/RoleBox";
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { UsersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingUsersRow from "./LoadingUsersRow";
import UsersTableMenu from "./UsersTableMenu";
import { UsersTableRow } from "./UsersTableRow";

const UsersTable = ({ data, isLoading }: UsersTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableUserData } = useContext(FormsContext);
  const navigate = useNavigate();
=======
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import UsersTableMenu from "./UsersTableMenu";
import { UsersTableRow } from "./UsersTableRow";

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

const UsersTable = () => {
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

<<<<<<< HEAD
  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableUserData(data[index]);
    }
    handleOpenTableMenu(event);
  };

  const handleView = (id: string) => {
    navigate(`${import.meta.env.VITE_USERS_ROUTE}/${id}`);
  };

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            <SortBox
              title={"Name"}
              handling={handleSortByName}
              asc={searchParams.get("sort") === "name_asc"}
              desc={searchParams.get("sort") === "name_desc"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          <PrimaryTableCell align="center">Email</PrimaryTableCell>
          <PrimaryTableCell align="center">Status</PrimaryTableCell>
          <PrimaryTableCell align="center">Role</PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
<<<<<<< HEAD
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <UsersTableRow key={i}>
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
                <PrimaryTableCell align="center">{row.email}</PrimaryTableCell>
                <PrimaryTableCell align="center">
                  <StatusBox status={row.status} />
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  <RoleBox role={row.role} />
                </PrimaryTableCell>
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </UsersTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingUsersRow key={i} />)}
=======
        {rows.map((row, i) => (
          <UsersTableRow key={i}>
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
          </UsersTableRow>
        ))}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <UsersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default UsersTable;
