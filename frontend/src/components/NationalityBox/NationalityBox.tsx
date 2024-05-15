import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { handleGetFlag } from "../../functions/handleGetFlag";

const NationalityBox = ({ nationality }: { nationality: string }) => {
  return (
    <Box className={`flex gap-2`}>
      <Box className={`flex justify-center items-center w-[20px] h-auto`}>
        <LazyLoadImage src={handleGetFlag(nationality)} alt={""} />
      </Box>
      {nationality}
    </Box>
  );
};

export default NationalityBox;
