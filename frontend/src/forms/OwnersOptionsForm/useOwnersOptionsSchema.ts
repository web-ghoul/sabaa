import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useOwnersOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const OwnersOptionsSchema = yup.object({
    search: yup.string(),
    dobFrom: yup.date(),
    dobTo: yup.date(),
    residenceFrom: yup.date(),
    residenceTo: yup.date(),
    status: yup.string(),
    nationality: yup.string(),
    state: yup.string(),
  });

  const OwnersOptionsInitailValues = {
    search: "",
    dobFrom: allParams.dobFrom || "",
    dobTo: allParams.dobTo || "",
    residenceTo: allParams.residenceTo || "",
    residenceFrom: allParams.residenceFrom || "",
    status: allParams.status || "",
    nationality: allParams.nationality || "",
    state: allParams.state || "",
  };

  return { OwnersOptionsInitailValues, OwnersOptionsSchema };
};

export default useOwnersOptionsSchema;
