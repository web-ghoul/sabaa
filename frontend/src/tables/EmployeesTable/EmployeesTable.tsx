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
import { Link, useLocation, useSearchParams } from "react-router-dom";
import NationalityBox from "../../components/NationalityBox/NationalityBox";
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getEmployeesCounter } from "../../store/employeesCounterSlice";
import { getEmployees, reverseEmployees } from "../../store/employeesSlice";
import { AppDispatch } from "../../store/store";
import { EmployeesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import EmployeesTableMenu from "./EmployeesTableMenu";
import { EmployeesTableRow } from "./EmployeesTableRow";
import LoadingEmployeesRow from "./LoadingEmployeesRow";

const EmployeesTable = ({
  data,
  count,
  isLoading,
  fileIndex,
  noPagination,
  actions = true,
  sort = true,
  recent,
}: EmployeesTableTypes) => {
  const { handleOpenTableMenu, queries, handleAddQuery } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEmployeeIndex } = useContext(ExcelsContext);
  const { setEditableEmployeeData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);

  const handleSortByRes = () => {
    if (searchParams.get("sort") === "res_asc") {
      handleAddQuery({ sort: "res_desc" });
      dispatch(reverseEmployees());
      setSearchParams({ ...queries, sort: "res_desc" });
    } else {
      handleAddQuery({ sort: "res_asc" });
      const all = { ...queries, sort: "res_asc" };
      dispatch(getEmployees(all));
      setSearchParams(all);
    }
  };

  const handleSortByLC = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "res_desc" });
      dispatch(reverseEmployees());
      setSearchParams({ ...queries, sort: "res_desc" });
    } else {
      handleAddQuery({ sort: "lc_asc" });
      const all = { ...queries, sort: "lc_asc" };
      dispatch(getEmployees(all));
      setSearchParams(all);
    }
  };

  const handleView = () => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`) {
      handleAlert({ msg: "Under Development" });
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableEmployeeData(data[index]);
    }
    setEmployeeIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getEmployeesCounter());
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
            {sheet || !sort ? (
              "Name"
            ) : (
              <SortBox
                title={"Name"}
                handling={handleSortByRes}
                asc={searchParams.get("sort") === "name_asc"}
                desc={searchParams.get("sort") === "name_desc"}
              />
            )}
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Person Code</PrimaryTableCell>
          {!lgScreen && !recent && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            {sheet || !sort ? (
              mdScreen ? (
                "Lc Expiry"
              ) : (
                "Lc Expire Date"
              )
            ) : (
              <SortBox
                title={mdScreen ? "LC Expiry" : "LC Expire Date"}
                handling={handleSortByLC}
                asc={searchParams.get("sort") === "lc_asc"}
                desc={searchParams.get("sort") === "lc_desc"}
                jc="center"
              />
            )}
          </PrimaryTableCell>
          {!smScreen && (
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            {sheet || !sort ? (
              mdScreen ? (
                "Residence Expiry"
              ) : (
                "Residence Expire Date"
              )
            ) : (
              <SortBox
                title={mdScreen ? "Residence Expiry" : "Residence Expire Date"}
                handling={handleSortByRes}
                asc={searchParams.get("sort") === "res_asc"}
                desc={searchParams.get("sort") === "res_desc"}
                jc="center"
              />
            )}
          </PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">Card Type</PrimaryTableCell>
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
              <EmployeesTableRow key={i}>
                <PrimaryTableCell
                  onClick={() => handleView()}
                  component="th"
                  scope="row"
                >
                  {sheet ? (
                    <UserBox
                      username={row.name}
                      head={"subtitle1"}
                      avatar={row.avatar}
                      size={"small"}
                    />
                  ) : (
                    <Link
                      to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}/${row._id}`}
                    >
                      <UserBox
                        username={row.name}
                        head={"subtitle1"}
                        avatar={row.avatar}
                        size={"small"}
                      />
                    </Link>
                  )}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.personCode}
                </PrimaryTableCell>
                {!lgScreen && !recent && (
                  <PrimaryTableCell align="center">
                    <NationalityBox nationality={row.nationality} />
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="center">
                  {handleDate(row.lcExpireDate)}
                </PrimaryTableCell>
                {!smScreen && (
                  <PrimaryTableCell align="center">
                    <StatusBox status={row.status} />
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="center">
                  {handleDate(row.residenceExpireDate)}
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">
                    {row.cardType}
                  </PrimaryTableCell>
                )}
                {actions && (
                  <PrimaryTableCell align="right">
                    <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                      <MoreVertRounded />
                    </IconButton>
                  </PrimaryTableCell>
                )}
              </EmployeesTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => (
                <LoadingEmployeesRow
                  actions={actions}
                  recent={recent}
                  key={i}
                />
              ))}
      </TableBody>
      <EmployeesTableMenu />
    </PrimaryTable>
  );
};

export default EmployeesTable;
