import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

const SheetAccordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Accordion sx={{ "&::before": { opacity: 0 } }} className={`p-1`}>
      <AccordionSummary
        expandIcon={<ExpandMoreRounded />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className={`grid justify-stretch items-center gap-6`}>
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SheetAccordion;
