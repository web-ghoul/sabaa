import { DeleteRounded, EditRounded, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { SelectorViewTypes } from "../../types/components.types";

const SelectorView = ({ selector, options }: SelectorViewTypes) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5" className={`!font-[700]`}>
          {selector}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className={`grid justify-stretch items-center gap-4`}>
          {options.map((option, i) => (
            <Paper
              elevation={1}
              className={`flex justify-between items-center gap-3 flex-wrap p-2 !rounded-md`}
              key={i}
            >
              <Typography variant={"h6"}>{option}</Typography>
              <Box className={`flex justify-end items-center gap-2`}>
                <IconButton className={`!bg-green-100`}>
                  <EditRounded className={`!text-green-400`} />
                </IconButton>
                <IconButton className={`!bg-red-100`}>
                  <DeleteRounded className={`!text-red-400`} />
                </IconButton>
              </Box>
            </Paper>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectorView;
