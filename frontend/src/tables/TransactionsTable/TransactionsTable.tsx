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
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { AppDispatch } from "../../store/store";
import { getTransactionsCounter } from "../../store/transactionsCounterSlice";
import {
  getTransactions,
  reverseTransactions,
} from "../../store/transactionsSlice";
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
  actions = true,
  recent,
  type,
}: TransactionsTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const { setTransactionIndex } = useContext(ExcelsContext);
  const { setEditableTransactionData } = useContext(FormsContext);
  // const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  // const lgScreen = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByResidenceExpiry = () => {
    if (searchParams.get("sort") === "residenceExpiryDate") {
      handleAddQuery({ sort: "residenceExpiryDate_desc" });
      dispatch(reverseTransactions());
      setSearchParams({ ...queries, sort: "residenceExpiryDate_desc" });
    } else {
      handleAddQuery({ sort: "residenceExpiryDate" });
      const all = { ...queries, sort: "residenceExpiryDate" };
      dispatch(getTransactions(all));
      setSearchParams(all);
    }
  };

  const handleSortByCSDate = () => {
    if (searchParams.get("sort") === "changeStatusDate") {
      handleAddQuery({ sort: "changeStatusDate_desc" });
      dispatch(reverseTransactions());
      setSearchParams({ ...queries, sort: "changeStatusDate_desc" });
    } else {
      handleAddQuery({ sort: "changeStatusDate" });
      const all = { ...queries, sort: "changeStatusDate" };
      dispatch(getTransactions(all));
      setSearchParams(all);
    }
  };

  const handleSortByLCExpiry = () => {
    if (searchParams.get("sort") === "lcExpiryDate") {
      handleAddQuery({ sort: "lcExpiryDate_desc" });
      dispatch(reverseTransactions());
      setSearchParams({ ...queries, sort: "lcExpiryDate_desc" });
    } else {
      handleAddQuery({ sort: "lcExpiryDate" });
      const all = { ...queries, sort: "lcExpiryDate" };
      dispatch(getTransactions(all));
      setSearchParams(all);
    }
  };

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
    <PrimaryTable
      count={count}
      variant={"owners"}
      noPagination={noPagination}
      loading={isLoading}
    >
      <TableHead>
        {type === "all" && (
          <TableRow>
            <PrimaryTableCell className={`!flex gap-2`}>
              Transaction Number
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Employee Name</PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "Residence Expiry" : "Residence Expire Date"}
                handling={handleSortByResidenceExpiry}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "CS Date" : "Change Status Date"}
                handling={handleSortByCSDate}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "LC Expiry" : "LC Expire Date"}
                handling={handleSortByLCExpiry}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
            {actions && (
              <PrimaryTableCell align="right">Actions</PrimaryTableCell>
            )}
          </TableRow>
        )}
        {type === "pre" && (
          <TableRow>
            <PrimaryTableCell className={`!flex gap-2`}>
              Transaction Number
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Company</PrimaryTableCell>
            <PrimaryTableCell align="center">Employee Name</PrimaryTableCell>
            <PrimaryTableCell align="center">LC Number</PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={"Lc Expiry Date"}
                handling={handleSortByLCExpiry}
                asc={searchParams.get("sort") === "name_asc"}
                desc={searchParams.get("sort") === "name_desc"}
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Passport Expiry</PrimaryTableCell>
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
            {actions && (
              <PrimaryTableCell align="right">Actions</PrimaryTableCell>
            )}
          </TableRow>
        )}
        {(type === "new" || type === "renew") && (
          <TableRow>
            <PrimaryTableCell className={`!flex gap-2`}>
              Transaction Number
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Company Name</PrimaryTableCell>
            <PrimaryTableCell align="center">Employee Name</PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "Residence Expiry" : "Residence Expire Date"}
                handling={handleSortByResidenceExpiry}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "CS Date" : "Change Status Date"}
                handling={handleSortByCSDate}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Lc Number</PrimaryTableCell>
            <PrimaryTableCell align="center">
              <SortBox
                title={mdScreen ? "LC Expiry" : "LC Expire Date"}
                handling={handleSortByLCExpiry}
                asc={searchParams.get("sort") === "code_asc"}
                desc={searchParams.get("sort") === "code_desc"}
                jc="center"
              />
            </PrimaryTableCell>
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
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
              return type === "all" ? (
                <PrimaryTableRow key={i}>
                  <PrimaryTableCell align="left" component="th" scope="row">
                    {row.transactionNo}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <Link
                      to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
                        row.employeeId
                      }`}
                    >
                      {row.employeeName}
                    </Link>
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    {handleDate(row.residenceExpiryDate)}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    {handleDate(row.changeStatusDate)}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    {handleDate(row.lcExpiryDate)}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <StatusBox status={row.status} />
                  </PrimaryTableCell>
                  {actions && (
                    <PrimaryTableCell align="right">
                      <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                        <MoreVertRounded />
                      </IconButton>
                    </PrimaryTableCell>
                  )}
                </PrimaryTableRow>
              ) : type === "pre" ? (
                <PrimaryTableRow key={i}>
                  <PrimaryTableCell align="left" component="th" scope="row">
                    {row.transactionNo}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <Link
                      to={`${import.meta.env.VITE_COMPANIES_ROUTE}/${
                        row.companyId
                      }`}
                    >
                      {row.companyName}
                    </Link>
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <Link
                      to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
                        row.employeeId
                      }`}
                    >
                      {row.employeeName}
                    </Link>
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    {row.lcNumber}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <StatusBox status={handleDate(row.lcExpiryDate)} />
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    {handleDate(row.passportExpiry)}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="center">
                    <StatusBox status={row.status} />
                  </PrimaryTableCell>
                  {actions && (
                    <PrimaryTableCell align="right">
                      <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                        <MoreVertRounded />
                      </IconButton>
                    </PrimaryTableCell>
                  )}
                </PrimaryTableRow>
              ) : (
                (type === "new" || type === "renew") && (
                  <PrimaryTableRow key={i}>
                    <PrimaryTableCell align="left" component="th" scope="row">
                      {row.transactionNo}
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <Link
                        to={`${import.meta.env.VITE_COMPANIES_ROUTE}/${
                          row.companyId
                        }`}
                      >
                        {row.companyName}
                      </Link>
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <Link
                        to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
                          row.employeeId
                        }`}
                      >
                        {row.employeeName}
                      </Link>
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <StatusBox status={handleDate(row.residenceExpiryDate)} />
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <StatusBox status={handleDate(row.changeStatusDate)} />
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <StatusBox status={row.lcNumber} />
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <StatusBox status={handleDate(row.lcExpiryDate)} />
                    </PrimaryTableCell>
                    <PrimaryTableCell align="center">
                      <StatusBox status={row.status} />
                    </PrimaryTableCell>
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
                  type={type}
                  actions={actions}
                  recent={recent}
                  key={i}
                />
              ))}
        <TransactionsTableMenu type={type} />
      </TableBody>
    </PrimaryTable>
  );
};

export default TransactionsTable;
