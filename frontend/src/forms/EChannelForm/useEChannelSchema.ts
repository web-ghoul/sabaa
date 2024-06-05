import * as yup from 'yup';

import { useContext } from 'react';
import { FormsContext } from '../../contexts/FormsContext';
import { OwnerTypes } from '../../types/store.types';

const useEChannelSchema = () => {
  const { editableEChannelData } = useContext(FormsContext);

  const EChannelSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    name: yup.string().required('English Name is required'),
    uid: yup.string().required('UID Number is required'),
    personCode: yup.string(),
    emiratesId: yup.string(),
    status: yup.string(),
    phone: yup.string(),
    type: yup.string(),
  });

  const EChannelInitailValues = {
    username: editableEChannelData?.username || '',
    password: editableEChannelData?.password || '',
    name: editableEChannelData?.name || '',
    gender: editableEChannelData?.gender || '',
    personCode: editableEChannelData?.personCode || '',
    phone: editableEChannelData?.phone || '',
    emiratesId: editableEChannelData?.emiratesId || '',
    status: editableEChannelData?.status || '',
    uid: editableEChannelData?.uid || '',
    type: (editableEChannelData?.owner as OwnerTypes)?.type || '',
  };

  return { EChannelSchema, EChannelInitailValues };
};

export default useEChannelSchema;
