import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
import { MouseEvent, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { NationalitiesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingNationalitiesRow from "./LoadingNationalitiesRow";
import NationalitiesTableMenu from "./NationalitiesTableMenu";
import { NationaltiesTableRow } from "./NationalitiesTableRow";

const NationalitiesTable = ({
  data,
  isLoading,
  fileIndex,
}: NationalitiesTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableNationalityData } = useContext(FormsContext);
  const { setNationalityIndex } = useContext(ExcelsContext);

  const handleSortByNationality = () => {
    if (searchParams.get("sort") === "nationality_asc") {
      setSearchParams({ sort: "nationality_desc" });
    } else {
      setSearchParams({ sort: "nationality_asc" });
    }
  };

  const handleSortByNationalityId = () => {
    if (searchParams.get("sort") === "nationality_id_asc") {
      setSearchParams({ sort: "nationality_id_desc" });
    } else {
      setSearchParams({ sort: "nationality_id_asc" });
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableNationalityData(data[index]);
    }
    setNationalityIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            <SortBox
              title={"Nationality"}
              handling={handleSortByNationality}
              asc={searchParams.get("sort") === "nationality_asc"}
              desc={searchParams.get("sort") === "nationality_desc"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">
            <SortBox
              title={"ID"}
              handling={handleSortByNationalityId}
              asc={searchParams.get("sort") === "nationality_id_asc"}
              desc={searchParams.get("sort") === "nationality_id_desc"}
              jc={"center"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => (
              <NationaltiesTableRow key={i}>
                <PrimaryTableCell component="th" scope="row">
                  {row.nationality}
                </PrimaryTableCell>
                <PrimaryTableCell align="center">{row._id}</PrimaryTableCell>
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </NationaltiesTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingNationalitiesRow key={i} />)}
        <NationalitiesTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default NationalitiesTable;
