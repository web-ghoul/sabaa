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
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getOwnersCounter } from "../../store/ownersCounterSlice";
import { getOwners, reverseOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { OwnersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingOwnersRow from "./LoadingOwnersRow";
import OwnersTableMenu from "./OwnersTableMenu";
import { OwnersTableRow } from "./OwnersTableRow";

const OwnersTable = ({ data, isLoading, fileIndex }: OwnersTableTypes) => {
  const { handleOpenTableMenu, setOwnersPage } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setOwnerIndex } = useContext(ExcelsContext);
  const { setEditableOwnerData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch<AppDispatch>();
  const { ownersCounter } = useSelector(
    (state: RootState) => state.ownersCounter
  );

  const getAllParams = () => {
    setOwnersPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    return allParams;
  };

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      setSearchParams({ ...getAllParams(), sort: "name_desc" });
      dispatch(reverseOwners());
    } else {
      dispatch(getOwners({ ...getAllParams(), sort: "name_asc" }));
      setSearchParams({ ...getAllParams(), sort: "name_asc" });
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      setSearchParams({ ...getAllParams(), sort: "code_desc" });
      dispatch(reverseOwners());
    } else {
      dispatch(getOwners({ ...getAllParams(), sort: "code_asc" }));
      setSearchParams({ ...getAllParams(), sort: "code_asc" });
    }
  };

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

  useEffect(() => {
    dispatch(getOwnersCounter());
  }, [dispatch]);

  return (
    <PrimaryTable count={ownersCounter} variant={"owners"}>
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
          {!mdScreen && (
            <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            <SortBox
              title={"Code"}
              handling={handleSortByCode}
              asc={searchParams.get("sort") === "code_asc"}
              desc={searchParams.get("sort") === "code_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          {!lgScreen && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Emirates ID</PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <OwnersTableRow key={i}>
                <PrimaryTableCell
                  onClick={() => handleView(row._id)}
                  component="th"
                  scope="row"
                >
                  <Link to={`${import.meta.env.VITE_OWNERS_ROUTE}/${row._id}`}>
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
                <PrimaryTableCell align="center">
                  {row.personCode}
                </PrimaryTableCell>
                {!lgScreen && (
                  <PrimaryTableCell align="center">
                    {row.nationality}
                  </PrimaryTableCell>
                )}
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
        <OwnersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default OwnersTable;
