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
import { useLocation, useSearchParams } from "react-router-dom";
import StatusBox from "../../components/StatusBox/StatusBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getOwners, reverseOwners } from "../../store/ownersSlice";
import { AppDispatch } from "../../store/store";
import { getTransactionsCounter } from "../../store/transactionsCounterSlice";
import { TransactionsTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import SortBox from "../SortBox";
import LoadingTransactionsRow from "./LoadingTransactionsRow";
import TransactionsTableMenu from "./TransactionsTableMenu";

const TransactionsTable = ({
  data,
  count,
  noPagination,
  isLoading,
  fileIndex,
  sort = true,
  actions = true,
  recent,
  type,
}: TransactionsTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const { setTransactionIndex } = useContext(ExcelsContext);
  const { setEditableTransactionData } = useContext(FormsContext);
  const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByWorkPermitExpiry = () => {
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

  // const handleView = () => {
  //   if (sheet) {
  //     handleAlert({ msg: "Under Development" });
  //   }
  // };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableTransactionData(data[index]);
    }
    setTransactionIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_TRANSACTIONS_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getTransactionsCounter());
  }, [dispatch]);

  return (
    <PrimaryTable count={count} variant={"owners"} noPagination={noPagination}>
      <TableHead>
        {type === "pre" && (
          <TableRow>
            <PrimaryTableCell className={`!flex gap-2`}>
              Transaction Number
            </PrimaryTableCell>
            {!mdScreen && !recent && (
              <PrimaryTableCell align="center">Company</PrimaryTableCell>
            )}
            <PrimaryTableCell align="center">
              {sheet || !sort ? (
                "Employee Name"
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
            {!smScreen && (
              <PrimaryTableCell align="center">Status</PrimaryTableCell>
            )}
            {!smScreen && (
              <PrimaryTableCell align="center">Status Date</PrimaryTableCell>
            )}
            {!lgScreen && (
              <PrimaryTableCell align="center">
                {sheet || !sort ? (
                  "Work Permit Expiry"
                ) : (
                  <SortBox
                    title={"Work Permit Expiry"}
                    handling={handleSortByWorkPermitExpiry}
                    asc={searchParams.get("sort") === "name_asc"}
                    desc={searchParams.get("sort") === "name_desc"}
                  />
                )}
              </PrimaryTableCell>
            )}
            {actions && (
              <PrimaryTableCell align="right">Actions</PrimaryTableCell>
            )}
          </TableRow>
        )}
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => {
              return (
                type === "pre" && (
                  <PrimaryTableRow key={i}>
                    <PrimaryTableCell align="left">
                      {row.transactionNo}
                    </PrimaryTableCell>
                    {!mdScreen && !recent && (
                      <PrimaryTableCell align="center">
                        {row.companyName}
                      </PrimaryTableCell>
                    )}
                    <PrimaryTableCell align="center">
                      {row.employeeName}
                    </PrimaryTableCell>
                    {!smScreen && (
                      <PrimaryTableCell align="center">
                        <StatusBox status={row.status} />
                      </PrimaryTableCell>
                    )}
                    {!lgScreen && (
                      <PrimaryTableCell align="center">
                        {handleDate(row.statusDate)}
                      </PrimaryTableCell>
                    )}
                    {!lgScreen && (
                      <PrimaryTableCell align="center">
                        {handleDate(row.workPermitExpiryDate)}
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
                )
              );
            })
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => (
                <LoadingTransactionsRow
                  actions={actions}
                  recent={recent}
                  key={i}
                />
              ))}
        <TransactionsTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default TransactionsTable;
