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
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getCompaniesCounter } from "../../store/companiesCounterSlice";
import { getCompanies, reverseCompanies } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import { CompaniesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import CompaniesTableMenu from "./CompaniesTableMenu";
import { CompaniesTableRow } from "./CompaniesTableRow";
import LoadingCompaniesRow from "./LoadingCompaniesRow";

const CompaniesTable = ({
  data,
  count,
  isLoading,
  fileIndex,
  noPagination,
}: CompaniesTableTypes) => {
  const { handleOpenTableMenu, queries, handleAddQuery } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setCompanyIndex } = useContext(ExcelsContext);
  const { setEditableCompanyData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      handleAddQuery({ sort: "name_desc" });
      dispatch(reverseCompanies());
      setSearchParams({ ...queries, sort: "name_desc" });
    } else {
      handleAddQuery({ sort: "name_asc" });
      const all = { ...queries, sort: "name_asc" };
      dispatch(getCompanies(all));
      setSearchParams(all);
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "code_desc" });
      dispatch(reverseCompanies());
      setSearchParams({ ...queries, sort: "code_desc" });
    } else {
      handleAddQuery({ sort: "code_asc" });
      const all = { ...queries, sort: "code_asc" };
      dispatch(getCompanies(all));
      setSearchParams(all);
    }
  };

  const handleView = () => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`) {
      handleAlert({ msg: "Under Development" });
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableCompanyData(data[index]);
    }
    setCompanyIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getCompaniesCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"companies"}
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
          {!lgScreen && (
            <PrimaryTableCell align="center">Phone</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            <SortBox
              title={mdScreen ? "MOL" : "MOL Code"}
              handling={handleSortByCode}
              asc={searchParams.get("sort") === "code_asc"}
              desc={searchParams.get("sort") === "code_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
          )}
          {!smScreen && (
            <PrimaryTableCell align="center">IMMG Expire Date</PrimaryTableCell>
          )}
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.length > 0 &&
            data.map((row, i) => (
              <CompaniesTableRow key={i}>
                <PrimaryTableCell
                  onClick={() => handleView()}
                  component="th"
                  scope="row"
                >
                  {sheet ? (
                    <UserBox
                      username={row.name}
                      head={"subtitle1"}
                      avatar={row.logo}
                      size={"small"}
                    />
                  ) : (
                    <Link
                      to={`${import.meta.env.VITE_COMPANIES_ROUTE}/${row._id}`}
                    >
                      <UserBox
                        username={row.name}
                        head={"subtitle1"}
                        avatar={row.logo}
                        size={"small"}
                      />
                    </Link>
                  )}
                </PrimaryTableCell>
                {!lgScreen && (
                  <PrimaryTableCell align="center">
                    {row.phone}
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="center">
                  {row.molCode}
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">
                    <StatusBox status={row.status} />
                  </PrimaryTableCell>
                )}
                {!smScreen && (
                  <PrimaryTableCell align="center">
                    {handleDate(row.immgCardExpiry)}
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </CompaniesTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingCompaniesRow key={i} />)}
      </TableBody>
      <CompaniesTableMenu />
    </PrimaryTable>
  );
};

export default CompaniesTable;
