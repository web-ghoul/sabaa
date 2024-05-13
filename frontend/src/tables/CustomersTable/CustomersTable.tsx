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
import { getCustomersCounter } from "../../store/customersCounterSlice";
import { getCustomers, reverseCustomers } from "../../store/customersSlice";
import { AppDispatch } from "../../store/store";
import { CustomersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import SortBox from "../SortBox";
import EmployeesTableMenu from "./CustomersTableMenu";
import { CustomersTableRow } from "./CustomersTableRow";
import LoadingCustomersRow from "./LoadingCustomersRow";

const CustomersTable = ({
  data,
  count,
  isLoading,
  fileIndex,
  noPagination,
}: CustomersTableTypes) => {
  const { handleOpenTableMenu, queries, handleAddQuery } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setCustomerIndex } = useContext(ExcelsContext);
  const { setEditableCustomerData } = useContext(FormsContext);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [sheet, setSheet] = useState(false);

  const handleSortByRes = () => {
    if (searchParams.get("sort") === "res_asc") {
      handleAddQuery({ sort: "res_desc" });
      dispatch(reverseCustomers());
      setSearchParams({ ...queries, sort: "res_desc" });
    } else {
      handleAddQuery({ sort: "res_asc" });
      const all = { ...queries, sort: "res_asc" };
      dispatch(getCustomers(all));
      setSearchParams(all);
    }
  };

  const handleSortByLC = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "res_desc" });
      dispatch(reverseCustomers());
      setSearchParams({ ...queries, sort: "res_desc" });
    } else {
      handleAddQuery({ sort: "lc_asc" });
      const all = { ...queries, sort: "lc_asc" };
      dispatch(getCustomers(all));
      setSearchParams(all);
    }
  };

  const handleView = () => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_CUSTOMERS_ROUTE}`) {
      handleAlert({ msg: "Under Development" });
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableCustomerData(data[index]);
    }
    setCustomerIndex({ fileIndex: fileIndex || 0, index });
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_CUSTOMERS_ROUTE}`) {
      setSheet(true);
    } else {
      setSheet(false);
    }
  }, [pathname, sheet]);

  useEffect(() => {
    dispatch(getCustomersCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"customers"}
      noPagination={noPagination}
    >
      <TableHead>
        <TableRow>
          <PrimaryTableCell>
            <SortBox
              title={"Name"}
              handling={handleSortByRes}
              asc={searchParams.get("sort") === "name_asc"}
              desc={searchParams.get("sort") === "name_desc"}
            />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">Person Code</PrimaryTableCell>
          {!lgScreen && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            <SortBox
              title={mdScreen ? "LC Expire" : "LC Expire Date"}
              handling={handleSortByLC}
              asc={searchParams.get("sort") === "lc_asc"}
              desc={searchParams.get("sort") === "lc_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          {!smScreen && (
            <PrimaryTableCell align="center">Status</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">
            <SortBox
              title={mdScreen ? "Resdence Expire" : "Resdence Expire Date"}
              handling={handleSortByRes}
              asc={searchParams.get("sort") === "res_asc"}
              desc={searchParams.get("sort") === "res_desc"}
              jc="center"
            />
          </PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">Card Type</PrimaryTableCell>
          )}
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.length > 0 &&
            data.map((row, i) => (
              <CustomersTableRow key={i}>
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
                      to={`${import.meta.env.VITE_CUSTOMERS_ROUTE}/${row._id}`}
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
                {!lgScreen && (
                  <PrimaryTableCell align="center">
                    {row.nationality}
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
                <PrimaryTableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                    <MoreVertRounded />
                  </IconButton>
                </PrimaryTableCell>
              </CustomersTableRow>
            ))
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingCustomersRow key={i} />)}
      </TableBody>
      <EmployeesTableMenu />
    </PrimaryTable>
  );
};

export default CustomersTable;
