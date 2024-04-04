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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import RoleBox from "../../components/RoleBox/RoleBox";
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { TabsContext } from "../../contexts/TabsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { AppDispatch, RootState } from "../../store/store";
import { getUsersCounter } from "../../store/usersCounterSlice";
import { getUsers, reverseUsers } from "../../store/usersSlice";
import { UsersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingUsersRow from "./LoadingUsersRow";
import UsersTableMenu from "./UsersTableMenu";
import { UsersTableRow } from "./UsersTableRow";

const UsersTable = ({ data, isLoading }: UsersTableTypes) => {
  const { handleOpenTableMenu, setUsersPage } = useContext(AppContext);
  const { setUserTabsValue } = useContext(TabsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableUserData } = useContext(FormsContext);
  const navigate = useNavigate();
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const { usersCounter } = useSelector(
    (state: RootState) => state.usersCounter
  );
  const dispatch = useDispatch<AppDispatch>();

  const getAllParams = () => {
    setUsersPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    return allParams;
  };

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      setSearchParams({ ...getAllParams(), sort: "name_desc" });
      dispatch(reverseUsers());
    } else {
      dispatch(getUsers({ ...getAllParams(), sort: "name_asc" }));
      setSearchParams({ ...getAllParams(), sort: "name_asc" });
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
    setUserTabsValue(0);
  };

  useEffect(() => {
    dispatch(getUsersCounter());
  }, [dispatch]);

  return (
    <PrimaryTable count={usersCounter} variant={"users"}>
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
              <UsersTableRow key={i}>
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
              </UsersTableRow>
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
