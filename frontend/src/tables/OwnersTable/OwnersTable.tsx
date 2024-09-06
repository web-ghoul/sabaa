import { MoreVertRounded } from "@mui/icons-material";
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import NationalityBox from "../../components/NationalityBox/NationalityBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getOwnersCounter } from "../../store/ownersCounterSlice";
import { getOwners, reverseOwners } from "../../store/ownersSlice";
import { AppDispatch } from "../../store/store";
import { OwnersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import SortBox from "../SortBox";
import LoadingOwnersRow from "./LoadingOwnersRow";
import OwnersTableMenu from "./OwnersTableMenu";

const OwnersTable = ({
  data,
  count,
  noPagination,
  isLoading,
  fileIndex,
  sort = true,
  actions = true,
  recent,
}: OwnersTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const { setOwnerIndex } = useContext(ExcelsContext);
  const { setEditableOwnerData } = useContext(FormsContext);
  const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      handleAddQuery({ sort: "name_desc" });
      dispatch(reverseOwners());
      setSearchParams({ ...queries, sort: "name_desc" });
    } else {
      handleAddQuery({ sort: "name_asc" });
      const all = { ...queries, sort: "name_asc" };
      dispatch(getOwners(all));
      setSearchParams(all);
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "code_desc" });
      dispatch(reverseOwners());
      setSearchParams({ ...queries, sort: "code_desc" });
    } else {
      handleAddQuery({ sort: "code_asc" });
      const all = { ...queries, sort: "code_asc" };
      dispatch(getOwners(all));
      setSearchParams(all);
    }
  };

  const handleView = () => {
    if (sheet) {
      handleAlert({ msg: "Under Development" });
    }
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
    if (pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getOwnersCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"owners"}
      noPagination={noPagination}
      loading={isLoading}
    >
      <TableHead>
        <TableRow>
          <PrimaryTableCell className={`!flex gap-2`}>
            {sheet || !sort ? (
              "Name"
            ) : (
              <SortBox
                title={"Name"}
                handling={handleSortByName}
                asc={searchParams.get("sort") === "name_asc"}
                desc={searchParams.get("sort") === "name_desc"}
              />
            )}
          </PrimaryTableCell>
          {!mdScreen && !recent && (
            <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          )}
          {!lgScreen && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            {sheet || !sort ? (
              "Person Code"
            ) : (
              <SortBox
                title={mdScreen ? "Code" : "Person Code"}
                handling={handleSortByCode}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            )}
          </PrimaryTableCell>
          {!lgScreen && (
            <PrimaryTableCell align="center">
              Residence Expire Date
            </PrimaryTableCell>
          )}
          {!smScreen && <PrimaryTableCell align="center">UID</PrimaryTableCell>}
          {!recent && (
            <PrimaryTableCell align="center">Emirates ID</PrimaryTableCell>
          )}
          {actions && (
            <PrimaryTableCell align="right">Actions</PrimaryTableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => {
              return (
                <PrimaryTableRow key={i}>
                  <PrimaryTableCell onClick={() => handleView()}>
                    {sheet ? (
                      <UserBox
                        username={row.name}
                        head={"subtitle1"}
                        size={"small"}
                        avatar={row.avatar}
                      />
                    ) : (
                      <Link
                        to={`${import.meta.env.VITE_OWNERS_ROUTE}/${row._id}`}
                      >
                        <UserBox
                          username={row.name}
                          head={"subtitle1"}
                          size={"small"}
                          avatar={row.avatar}
                        />
                      </Link>
                    )}
                  </PrimaryTableCell>
                  {!mdScreen && !recent && (
                    <PrimaryTableCell align="center">
                      {row.phone}
                    </PrimaryTableCell>
                  )}
                  {!lgScreen && (
                    <PrimaryTableCell align="center">
                      <Box className={`flex justify-center items-center`}>
                        <NationalityBox nationality={row.nationality} />
                      </Box>
                    </PrimaryTableCell>
                  )}
                  <PrimaryTableCell align="center">
                    {row.personCode}
                  </PrimaryTableCell>
                  {!lgScreen && (
                    <PrimaryTableCell align="center">
                      {handleDate(row.residenceExpiryDate)}
                    </PrimaryTableCell>
                  )}
                  {!smScreen && (
                    <PrimaryTableCell align="center">
                      {row.uid}
                    </PrimaryTableCell>
                  )}
                  {!recent && (
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
              );
            })
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => (
                <LoadingOwnersRow actions={actions} recent={recent} key={i} />
              ))}
        <OwnersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default OwnersTable;
