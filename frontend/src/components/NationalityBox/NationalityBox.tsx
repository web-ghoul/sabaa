import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { handleGetFlag } from "../../functions/handleGetFlag";

const NationalityBox = ({ nationality }: { nationality: string }) => {
  return (
    <Box className={`flex justify-center items-center gap-2`}>
      <LazyLoadImage src={handleGetFlag(nationality)} alt={"country"} />
      {nationality}
    </Box>
  );
};

export default NationalityBox;
