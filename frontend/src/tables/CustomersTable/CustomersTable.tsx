import { MoreVertRounded } from "@mui/icons-material";
import {
  Box,
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
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { getCustomersCounter } from "../../store/customersCounterSlice";
import { getCustomers, reverseCustomers } from "../../store/customersSlice";
import { AppDispatch } from "../../store/store";
import { CustomersTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import SortBox from "../SortBox";
import CustomersTableMenu from "./CustomersTableMenu";
import LoadingCustomersRow from "./LoadingCustomersRow";

const CustomersTable = ({
  data,
  count,
  noPagination,
  isLoading,
  fileIndex,
  sort = true,
  actions = true,
  recent,
}: CustomersTableTypes) => {
  const { handleOpenTableMenu, handleAddQuery, queries } =
    useContext(AppContext);
  const { setCustomerIndex } = useContext(ExcelsContext);
  const { setEditableCustomerData } = useContext(FormsContext);
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
      dispatch(reverseCustomers());
      setSearchParams({ ...queries, sort: "name_desc" });
    } else {
      handleAddQuery({ sort: "name_asc" });
      const all = { ...queries, sort: "name_asc" };
      dispatch(getCustomers(all));
      setSearchParams(all);
    }
  };

  const handleSortByCode = () => {
    if (searchParams.get("sort") === "code_asc") {
      handleAddQuery({ sort: "code_desc" });
      dispatch(reverseCustomers());
      setSearchParams({ ...queries, sort: "code_desc" });
    } else {
      handleAddQuery({ sort: "code_asc" });
      const all = { ...queries, sort: "code_asc" };
      dispatch(getCustomers(all));
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
          <PrimaryTableCell align="center">
            {sheet || !sort ? (
              mdScreen ? (
                "Code"
              ) : (
                "Person Code"
              )
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
          {!smScreen && <PrimaryTableCell align="center">UID</PrimaryTableCell>}
          {!lgScreen && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
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
                        to={`${import.meta.env.VITE_CUSTOMERS_ROUTE}/${
                          row._id
                        }`}
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
                  <PrimaryTableCell align="center">
                    {row.personCode}
                  </PrimaryTableCell>
                  {!smScreen && (
                    <PrimaryTableCell align="center">
                      {row.uid}
                    </PrimaryTableCell>
                  )}
                  {!lgScreen && (
                    <PrimaryTableCell align="center">
                      <Box className={`flex justify-center items-center`}>
                        <NationalityBox nationality={row.nationality} />
                      </Box>
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
                <LoadingCustomersRow
                  actions={actions}
                  recent={recent}
                  key={i}
                />
              ))}
        <CustomersTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default CustomersTable;
