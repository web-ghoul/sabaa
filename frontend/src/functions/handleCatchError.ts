import { CatchErrorTypes } from "../types/forms.types";
import { handleAlert } from "./handleAlert";

export const handleCatchError = (err: CatchErrorTypes) => {
  try {
    handleAlert({ msg: err.response.data?.message, status: "error" });
  } catch (error) {
    handleAlert({ msg: "An error occurred.", status: "error" });
  }
};
