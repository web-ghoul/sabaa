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
import { useLocation } from "react-router-dom";

const useTransactionSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const getData = () => {
    if (pathname === `${import.meta.env.VITE_TRANSACTIONS_ALL_ROUTE}`) {
      dispatch(getTransactions({ type: "all" }));
    } else if (pathname === `${import.meta.env.VITE_TRANSACTIONS_PRE_ROUTE}`) {
      dispatch(getTransactions({ type: "pre" }));
    } else if (pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`) {
      dispatch(getTransactions({ type: "new" }));
    } else if (
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
    ) {
      dispatch(getTransactions({ type: "renew" }));
    }
  };

  const addWorkPermit = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transactions`, {
        ...values,
        dob: new Date(values.dob),
        type: "pre",
      })
      .then(() => {
        handleAlert({
          msg: "Work Permit is created successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editWorkPermit = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/employees/checkExistance`, {
        gender: values.gender,
        dob: values.dob,
        name: values.employeeName,
        nationality: values.nationality,
      })
      .then(async (res) => {
        const id = res.data._id;
        await server
          .post(`/transactions`, {
            ...values,
            employeeId: id,
            type: values.status === "Approved" ? "approved" : "pre",
          })
          .then(() => {
            handleAlert({
              msg: "Work Permit is updated successfully",
              status: "success",
            });
            handleCloseTransactionModal();
            getData();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      })
      .catch(async (err) => {
        handleCatchError(err);
      });

    handleCloseFormsLoading();
  };

  const newLC = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transactions`, {
        ...values,
        type: "new",
      })
      .then(() => {
        handleAlert({
          msg: "New Labour Card is created successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const renewLC = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transactions`, {
        ...values,
        type: "renew",
      })
      .then(() => {
        handleAlert({
          msg: "New Labour Card is created successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return {
    addWorkPermit,
    editWorkPermit,
    newLC,
    renewLC,
  };
};

export default useTransactionSubmit;
