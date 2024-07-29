import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { TransactionFormTypes } from "../../types/forms.types";
import { getTransactions } from "../../store/transactionsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { ModalsContext } from "../../contexts/ModalsContext";

const useTransactionSubmit = () => {
  const { server } = useAxios();
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    editableTransactionData,
  } = useContext(FormsContext);
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const id = "";

  const addPreTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transaction`, {
        ...values,
        dob: new Date(values.dob),
      })
      .then(() => {
        handleAlert({
          msg: "Work Permit is created successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        dispatch(getTransactions({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editPreTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transaction/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "Work Permit is updated successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        dispatch(getTransactions({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const newTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transaction/${id}`, values)
      .then(() => {
        handleAlert({
          msg: "New Labour Card is created successfully",
          status: "success",
        });
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const renewTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transaction/${id}`, values)
      .then(() => {
        handleAlert({
          msg: "Labour Card is updated successfully",
          status: "success",
        });
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return {
    addPreTransaction,
    editPreTransaction,
    newTransaction,
    renewTransaction,
  };
};

export default useTransactionSubmit;
