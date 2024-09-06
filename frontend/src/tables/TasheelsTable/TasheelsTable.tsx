import { MoreVertRounded } from '@mui/icons-material';
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import { MouseEvent, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import UserBox from '../../components/UserBox/UserBox';
import { AppContext } from '../../contexts/AppContext';
import { FormsContext } from '../../contexts/FormsContext';
import { handleRandomNumber } from '../../functions/handleRandomNumber';
import { AppDispatch } from '../../store/store';
import { getTasheelsCounter } from '../../store/tasheelsCounterSlice';
import { getTasheels, reverseTasheels } from '../../store/tasheelsSlice';
import {
  EmployeeTypes,
  OwnerTypes,
  TasheelTypes,
} from '../../types/store.types';
import { TasheelsTableTypes } from '../../types/tables.types';
import PrimaryTable from '../PrimaryTable';
import { PrimaryTableCell } from '../PrimaryTableCell';
import { PrimaryTableRow } from '../PrimaryTableRow';
import SortBox from '../SortBox';
import LoadingTasheelsRow from './LoadingTasheelsRow';
import TasheelsTableMenu from './TasheelsTableMenu';

const TasheelsTable = ({
  data,
  count,
  isLoading,
  noPagination,
  actions = true,
}: TasheelsTableTypes) => {
  const { handleOpenTableMenu, queries, handleAddQuery } =
    useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  // const { setEChannelIndex } = useContext(ExcelsContext);
  const { setEditableTasheelData } = useContext(FormsContext);
  const mdScreen = useMediaQuery('(max-width:992px)');
  const smScreen = useMediaQuery('(max-width:768px)');
  const lgScreen = useMediaQuery('(max-width:1200px)');
  const dispatch = useDispatch<AppDispatch>();

  const handleSortByName = () => {
    if (searchParams.get('sort') === 'name_asc') {
      handleAddQuery({ sort: 'name_desc' });
      dispatch(reverseTasheels());
      setSearchParams({ ...queries, sort: 'name_desc' });
    } else {
      handleAddQuery({ sort: 'name_asc' });
      const all = { ...queries, sort: 'name_asc' };
      dispatch(getTasheels(all));
      setSearchParams(all);
    }
  };

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableTasheelData(data[index]);
    }
    handleOpenTableMenu(event);
  };

  useEffect(() => {
    dispatch(getTasheelsCounter());
  }, [dispatch]);

  return (
    <PrimaryTable
      count={count}
      variant={"employees"}
      noPagination={noPagination}
      loading={isLoading}
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
            <PrimaryTableCell align="center">Arabic Name</PrimaryTableCell>
          )}
          {!mdScreen && (
            <PrimaryTableCell align="center">User Type</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Username</PrimaryTableCell>
          {!smScreen && (
            <PrimaryTableCell align="center">Password</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Security 1</PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">Security 2</PrimaryTableCell>
          )}
          {actions && (
            <PrimaryTableCell align="right">Actions</PrimaryTableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.length > 0 &&
            data.map((row, i) => {
              const type = (row as TasheelTypes).type.toLowerCase();
              return (
                <PrimaryTableRow key={i}>
                  <PrimaryTableCell component="th" scope="row">
                    <Link
                      to={
                        type === "owner"
                          ? `${import.meta.env.VITE_OWNERS_ROUTE}/${
                              (row.owner as OwnerTypes)._id
                            }`
                          : type === "officer"
                          ? `${import.meta.env.VITE_PROS_ROUTE}/${
                              (row.owner as OwnerTypes)._id
                            }`
                          : type === "customer"
                          ? `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${
                              (row.owner as OwnerTypes)._id
                            }`
                          : type === "employee"
                          ? `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
                              (row.employee as EmployeeTypes)._id
                            }`
                          : ""
                      }
                    >
                      <UserBox
                        username={row.name}
                        head={"subtitle1"}
                        size={"small"}
                        avatar={
                          row.owner
                            ? (row.owner as OwnerTypes).avatar
                            : (row.employee as EmployeeTypes).avatar
                        }
                      />
                    </Link>
                  </PrimaryTableCell>
                  {!lgScreen && (
                    <PrimaryTableCell align="center">
                      {row.nameAr}
                    </PrimaryTableCell>
                  )}
                  {!mdScreen && (
                    <PrimaryTableCell align="center">
                      {row.type}
                    </PrimaryTableCell>
                  )}
                  <PrimaryTableCell align="center">
                    {row.username}
                  </PrimaryTableCell>
                  {!smScreen && (
                    <PrimaryTableCell align="center">
                      {row.password}
                    </PrimaryTableCell>
                  )}
                  <PrimaryTableCell align="center">
                    {row.security1}
                  </PrimaryTableCell>
                  {!mdScreen && (
                    <PrimaryTableCell align="center">
                      {row.security2}
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
              .map((_, i) => <LoadingTasheelsRow actions={actions} key={i} />)}
      </TableBody>
      <TasheelsTableMenu />
    </PrimaryTable>
  );
};

export default TasheelsTable;
