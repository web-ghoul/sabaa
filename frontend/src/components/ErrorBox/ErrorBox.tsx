import { Paper } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ErrorBox = () => {
  return (
    <Paper className={`grid justify-stretch items-center gap-8 p-4`}>
      <LazyLoadImage src={"/images/error.jpg"} alt={"error"} />
    </Paper>
  );
};

export default ErrorBox;
