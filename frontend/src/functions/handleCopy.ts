import { handleAlert } from "./handleAlert";

export const handleCopy = (text: string, show: boolean = true) => {
  navigator.clipboard.writeText(text);
  handleAlert({ msg: `Copied ${show ? text : ""}`, status: "success" });
};
