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
import StatusBox from "../../components/StatusBox/StatusBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getCompaniesCounter } from "../../store/companiesCounterSlice";
import { getCompanies, reverseCompanies } from "../../store/companiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CompaniesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import CompaniesTableMenu from "./CompaniesTableMenu";
import { CompaniesTableRow } from "./CompaniesTableRow";
import LoadingCompaniesRow from "./LoadingCompaniesRow";

const CompaniesTable = ({
  data,
  isLoading,
  fileIndex,
}: CompaniesTableTypes) => {
  const { handleOpenTableMenu, setCompaniesPage } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setCompanyIndex } = useContext(ExcelsContext);
  const { setEditableCompanyData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const { companiesCounter } = useSelector(
    (state: RootState) => state.companiesCounter
  );
  const dispatch = useDispatch<AppDispatch>();

  const getAllParams = () => {
    setCompaniesPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    return allParams;
  };

  const handleSortByName = () => {
    if (searchParams.get("sort") === "name_asc") {
      setSearchParams({ ...getAllParams(), sort: "name_desc" });
      dispatch(reverseCompanies());
    } else {
      dispatch(getCompanies({ ...getAllParams(), sort: "name_asc" }));
      setSearchParams({ ...getAllParams(), sort: "name_asc" });
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      setSearchParams({ ...getAllParams(), sort: "code_desc" });
      dispatch(reverseCompanies());
    } else {
      dispatch(getCompanies({ ...getAllParams(), sort: "code_asc" }));
      setSearchParams({ ...getAllParams(), sort: "code_asc" });
    }
  };

  const handleView = (id: string) => {
    navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}/${id}`);
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
    dispatch(getCompaniesCounter());
  }, [dispatch]);
  return (
    <PrimaryTable count={companiesCounter} variant={"companies"}>
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
              title={"MOL Code"}
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
                  onClick={() => handleView(row._id)}
                  component="th"
                  scope="row"
                >
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
