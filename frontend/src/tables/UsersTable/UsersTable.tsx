import { MoreVertRounded } from "@mui/icons-material";
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import RoleBox from "../../components/RoleBox/RoleBox";
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { AppDispatch } from "../../store/store";
import { getUsersCounter } from "../../store/usersCounterSlice";
import { getUsers, reverseUsers } from "../../store/usersSlice";
import { UsersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import SortBox from "../SortBox";
import LoadingUsersRow from "./LoadingUsersRow";
import UsersTableMenu from "./UsersTableMenu";

const UsersTable = ({
  noPagination,
  count,
  data,
  isLoading,
}: UsersTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableUserData } = useContext(FormsContext);
  const navigate = useNavigate();
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");

  const dispatch = useDispatch<AppDispatch>();

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      handleAddQuery({ sort: "name_desc" });
      dispatch(reverseUsers());
      setSearchParams({ ...queries, sort: "name_desc" });
    } else {
      handleAddQuery({ sort: "name_asc" });
      const all = { ...queries, sort: "name_asc" };
      dispatch(getUsers(all));
      setSearchParams(all);
    }
  };

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

  useEffect(() => {
    dispatch(getUsersCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"users"}
      noPagination={noPagination}
      loading={isLoading}
    >
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
          {!mdScreen && (
            <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          )}
          {!smScreen && (
            <PrimaryTableCell align="center">Email</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Status</PrimaryTableCell>
          <PrimaryTableCell align="center">Role</PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <PrimaryTableRow key={i}>
                <PrimaryTableCell onClick={() => handleView(row._id)}>
                  <Link to={`${import.meta.env.VITE_USERS_ROUTE}/${row._id}`}>
                    <UserBox
                      username={row.name}
                      head={"subtitle1"}
                      size={"small"}
                      avatar={row.avatar}
                    />
                  </Link>
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">
                    {row.phone}
                  </PrimaryTableCell>
                )}
                {!smScreen && (
                  <PrimaryTableCell align="center">
                    {row.email}
                  </PrimaryTableCell>
                )}
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
              </PrimaryTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingUsersRow key={i} />)}
        <UsersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default UsersTable;
