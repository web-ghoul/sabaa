import { TablePagination } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { getCompanies } from "../store/companiesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch } from "../store/store";
import { getUsers } from "../store/usersSlice";

const PrimaryTablePagination = ({
  count,
  variant,
}: {
  count: number;
  variant: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
    if (variant === "owners") {
      dispatch(getOwners({ limit: rowsPerPage, page: newPage }));
    } else if (variant === "companies") {
      dispatch(getCompanies({ limit: rowsPerPage, page: newPage }));
    } else if (variant === "nationalities") {
      dispatch(getNationalities({ limit: rowsPerPage, page: newPage }));
    } else if (variant === "users") {
      dispatch(getUsers({ limit: rowsPerPage, page: newPage }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ limit: rowsPerPage, page: newPage }));
    }
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value, 10);
    if (variant === "owners") {
      dispatch(getOwners({ limit: val }));
    } else if (variant === "companies") {
      dispatch(getCompanies({ limit: val }));
    } else if (variant === "nationalities") {
      dispatch(getNationalities({ limit: val }));
    } else if (variant === "users") {
      dispatch(getUsers({ limit: val }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ limit: val }));
    }
    setRowsPerPage(val);
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default PrimaryTablePagination;
