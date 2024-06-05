import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { Menu } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import { FormsContext } from '../../contexts/FormsContext';
import { EmployeeTypes, OwnerTypes } from '../../types/store.types';
import TableMenuItem from '../TableMenuItem';

const TasheelsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const navigate = useNavigate();
  const { handleOpenDeleteModal, editableTasheelData, handleOpenTasheelModal } =
    useContext(FormsContext);

  const handleView = () => {
    if (editableTasheelData) {
      if (editableTasheelData.owner) {
        const type = (editableTasheelData.owner as OwnerTypes).type;
        navigate(
          `${
            type === 'owner'
              ? import.meta.env.VITE_OWNERS_ROUTE
              : type === 'pro'
              ? import.meta.env.VITE_PROS_ROUTE
              : import.meta.env.VITE_CUSTOMERS_ROUTE
          }/${
            editableTasheelData && (editableTasheelData.owner as OwnerTypes)._id
          }`,
        );
      } else {
        navigate(
          `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
            editableTasheelData &&
            (editableTasheelData.employee as EmployeeTypes)._id
          }`,
        );
      }
    }
  };

  const handleEdit = () => {
    if (editableTasheelData) {
      handleOpenTasheelModal('editTasheel');
    }
  };

  const handleDelete = () => {
    handleOpenDeleteModal('tasheel');
  };

  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      open={Boolean(openTableMenu)}
      elevation={3}
      onClose={handleCloseTableMenu}
      anchorEl={openTableMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <TableMenuItem
        icon={<VisibilityRounded />}
        title={'View'}
        handling={handleView}
      />
      <TableMenuItem
        icon={<EditRounded />}
        title={'Edit'}
        handling={handleEdit}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={'Delete'}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default TasheelsTableMenu;
