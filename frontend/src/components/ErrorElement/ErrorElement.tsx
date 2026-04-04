import { useRouteError } from "react-router-dom";
import Error from "../../pages/Error";

const ErrorElement = () => {
  const error = useRouteError();
  console.error(error);

  return <Error />;
};

export default ErrorElement;
