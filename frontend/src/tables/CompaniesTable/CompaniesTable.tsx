import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
import { MouseEvent, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
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
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setCompanyIndex } = useContext(ExcelsContext);
  const { setEditableCompanyData } = useContext(FormsContext);

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
          <PrimaryTableCell align="center">
            <SortBox
              title={"MOL Code"}
              handling={handleSortByCode}
              asc={searchParams.get("sort") === "code_asc"}
              desc={searchParams.get("sort") === "code_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Status</PrimaryTableCell>
          <PrimaryTableCell align="center">IMMG Expire Date</PrimaryTableCell>
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
                  <UserBox
                    username={row.name}
                    head={"subtitle1"}
                    avatar={row.logo}
                    size={"small"}
                  />
                </PrimaryTableCell>
                <PrimaryTableCell align="center">{row.phone}</PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.molCode}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">{row.status}</PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {handleDate(row.immgCardExpiry)}
                </PrimaryTableCell>
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
