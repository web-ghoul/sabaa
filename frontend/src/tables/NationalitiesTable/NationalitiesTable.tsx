import { MoreVertRounded } from "@mui/icons-material";
import { IconButton, TableBody, TableHead, TableRow } from "@mui/material";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getNationalitiesCounter } from "../../store/nationalitiesCounterSlice";
import {
  getNationalities,
  reverseNationalities,
} from "../../store/nationalitiesSlice";
import { AppDispatch } from "../../store/store";
import { NationalitiesTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import LoadingNationalitiesRow from "./LoadingNationalitiesRow";
import NationalitiesTableMenu from "./NationalitiesTableMenu";
import { NationaltiesTableRow } from "./NationalitiesTableRow";

const NationalitiesTable = ({
  data,
  count,
  isLoading,
  noPagination,
  fileIndex,
}: NationalitiesTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setEditableNationalityData } = useContext(FormsContext);
  const { setNationalityIndex } = useContext(ExcelsContext);
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();

  const handleSortByNationality = () => {
    if (searchParams.get("sort") === "nationality_asc") {
      handleAddQuery({ sort: "nationality_desc" });
      dispatch(reverseNationalities());
      setSearchParams({ ...queries, sort: "nationality_desc" });
    } else {
      handleAddQuery({ sort: "nationality_asc" });
      const all = { ...queries, sort: "nationality_asc" };
      dispatch(getNationalities(all));
      setSearchParams(all);
    }
  };

  const handleSortByNationalityId = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "code_desc" });
      dispatch(reverseNationalities());
      setSearchParams({ ...queries, sort: "code_desc" });
    } else {
      handleAddQuery({ sort: "code_asc" });
      const all = { ...queries, sort: "code_asc" };
      dispatch(getNationalities(all));
      setSearchParams(all);
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

  useEffect(() => {
    dispatch(getNationalitiesCounter());
  }, [dispatch]);

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  return (
    <PrimaryTable
      count={count}
      variant={"nationalities"}
      noPagination={noPagination}
    >
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            {sheet ? (
              "Nationality"
            ) : (
              <SortBox
                title={"Nationality"}
                handling={handleSortByNationality}
                asc={searchParams.get("sort") === "nationality_asc"}
                desc={searchParams.get("sort") === "nationality_desc"}
              />
            )}
          </PrimaryTableCell>
          <PrimaryTableCell align="center">
            {sheet ? (
              "ID"
            ) : (
              <SortBox
                title={"ID"}
                handling={handleSortByNationalityId}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc={"center"}
              />
            )}
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
                <PrimaryTableCell align="center">{row.id}</PrimaryTableCell>
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
