import { CheckBoxRounded } from '@mui/icons-material';
import {
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import { useContext } from 'react';
import UserBox from '../../components/UserBox/UserBox';
import { FormsContext } from '../../contexts/FormsContext';
import { TasheelTypes } from '../../types/store.types';
import { PersonsTableTypes } from '../../types/tables.types';
import PrimaryTable from '../PrimaryTable';
import { PrimaryTableCell } from '../PrimaryTableCell';
import { PrimaryTableRow } from '../PrimaryTableRow';

const PersonsTable = ({
  data,
  count,
  noPagination,
  clicked,
}: PersonsTableTypes) => {
  const { setEditableTasheelData } = useContext(FormsContext);
  const mdScreen = useMediaQuery('(max-width:992px)');

  const handleSelect = (index: number) => {
    if (data) {
      const d = data[index] as TasheelTypes;
      setEditableTasheelData(d);
      clicked(d, true);
    }
  };

  return (
    <PrimaryTable count={count} variant={"persons"} noPagination={noPagination}>
      <TableHead>
        <TableRow>
          <PrimaryTableCell className={`!flex gap-2`}>Name</PrimaryTableCell>
          <PrimaryTableCell align="center">Person Code</PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">Type</PrimaryTableCell>
          )}
          <PrimaryTableCell align="right">Select</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map((row, i) => {
            return (
              <PrimaryTableRow key={i}>
                <PrimaryTableCell>
                  <UserBox
                    username={row.name}
                    head={"subtitle1"}
                    size={"small"}
                  />
                </PrimaryTableCell>
                <PrimaryTableCell align="center">
                  {row.personCode}
                </PrimaryTableCell>
                {!mdScreen && (
                  <PrimaryTableCell align="center">
                    {row.type || "employee"}
                  </PrimaryTableCell>
                )}
                <PrimaryTableCell align="right">
                  <IconButton onClick={() => handleSelect(i)}>
                    <CheckBoxRounded />
                  </IconButton>
                </PrimaryTableCell>
              </PrimaryTableRow>
            );
          })}
      </TableBody>
    </PrimaryTable>
  );
};

export default PersonsTable;
