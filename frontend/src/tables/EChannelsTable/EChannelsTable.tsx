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
import { Link, useSearchParams } from "react-router-dom";
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getEChannelsCounter } from "../../store/eChannelsCounterSlice";
import { getEChannels, reverseEChannels } from "../../store/eChannelsSlice";
import { AppDispatch } from "../../store/store";
import { EmployeeTypes, OwnerTypes } from "../../types/store.types";
import { EChannelsTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import SortBox from "../SortBox";
import EChannelsTableMenu from "./EChannelsTableMenu";
import LoadingEChannelsRow from "./LoadingEChannelsRow";

const EChannelsTable = ({
  data,
  count,
  isLoading,
  noPagination,
  actions = true,
}: EChannelsTableTypes) => {
  const { handleOpenTableMenu, queries, handleAddQuery } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  // const { setEChannelIndex } = useContext(ExcelsContext);
  const { setEditableEChannelData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch<AppDispatch>();

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      handleAddQuery({ sort: "name_desc" });
      dispatch(reverseEChannels());
      setSearchParams({ ...queries, sort: "name_desc" });
    } else {
      handleAddQuery({ sort: "name_asc" });
      const all = { ...queries, sort: "name_asc" };
      dispatch(getEChannels(all));
      setSearchParams(all);
    }
  };

  // const handleView = () => {
  //   if (pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`) {
  //     handleAlert({ msg: "Under Development" });
  //   }
  // };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableEChannelData(data[index]);
    }
    // setEChannelIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  // useEffect(() => {
  //   if (pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`) {
  //     setSheet(true);
  //   } else {
  //     setSheet(false);
  //   }
  // }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getEChannelsCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"employees"}
      noPagination={noPagination}
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
          <PrimaryTableCell align="center">Username</PrimaryTableCell>
          {!smScreen && (
            <PrimaryTableCell align="center">Password</PrimaryTableCell>
          )}
          {!smScreen && (
            <PrimaryTableCell align="center">User Type</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Status</PrimaryTableCell>
          {!mdScreen && <PrimaryTableCell align="center">UID</PrimaryTableCell>}
          {!lgScreen && (
            <PrimaryTableCell align="center">Emirates Id</PrimaryTableCell>
          )}
          {actions && (
            <PrimaryTableCell align="right">Actions</PrimaryTableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.length > 0 &&
            data.map((row, i) => (
              <PrimaryTableRow key={i}>
                <PrimaryTableCell
                  // onClick={() => handleView()}
                  component="th"
                  scope="row"
                >
                  <Link
                    to={
                      row.owner
                        ? `${import.meta.env.VITE_OWNERS_ROUTE}/${
                            (row.owner as OwnerTypes)._id
                          }`
                        : `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
                            (row.employee as EmployeeTypes)._id
                          }`
                    }
                  >
                    <UserBox
                      username={
                        row.owner
                          ? (row.owner as OwnerTypes).name
                          : (row.employee as EmployeeTypes).name
                      }
                      head={"subtitle1"}
                      size={"small"}
                    />
                  </Link>
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.username}
                </PrimaryTableCell>
                {!smScreen && (
                  <PrimaryTableCell align="center">
                    {row.password}
                  </PrimaryTableCell>
                )}
                {!smScreen && (
                  <PrimaryTableCell align="center">
                    {row.type || "employee"}
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="center">
                  <StatusBox status={row.status} />
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">{row.uid}</PrimaryTableCell>
                )}
                {!lgScreen && (
                  <PrimaryTableCell align="center">
                    {row.emiratesId}
                  </PrimaryTableCell>
                )}
                {actions && (
                  <PrimaryTableCell align="right">
                    <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                      <MoreVertRounded />
                    </IconButton>
                  </PrimaryTableCell>
                )}
              </PrimaryTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingEChannelsRow actions={actions} key={i} />)}
      </TableBody>
      <EChannelsTableMenu />
    </PrimaryTable>
  );
};

export default EChannelsTable;
