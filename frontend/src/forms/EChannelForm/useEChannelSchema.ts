import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEChannelSchema = () => {
  const { editableEChannelData } = useContext(FormsContext);

  const EChannelSchema = yup.object({
    searchForPerson: yup.string(),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    name: yup.string().required("English Name is required"),
    uid: yup.string().required("UID Number is required"),
    gender: yup.string(),
    personCode: yup.string(),
    emiratesId: yup.string(),
    status: yup.string(),
    phone: yup.string(),
    type: yup.string(),
    notes: yup.string(),
  });

  const EChannelInitialValues = {
    searchForPerson: "",
    username: editableEChannelData?.username || "",
    password: editableEChannelData?.password || "",
    name: editableEChannelData?.name || "",
    gender: editableEChannelData?.gender || "",
    personCode: editableEChannelData?.personCode || "",
    phone: editableEChannelData?.phone || "",
    emiratesId: editableEChannelData?.emiratesId || "",
    status: editableEChannelData?.status || "",
    uid: editableEChannelData?.uid || "",
    type: editableEChannelData?.type || "",
    eChannelNotes: editableEChannelData?.eChannelNotes || "",
  };

  return { EChannelSchema, EChannelInitialValues };
};

export default useEChannelSchema;
