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
import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { SelectorViewTypes } from "../../types/components.types";
import Button from "../Button/Button";

const SelectorView = ({ selector, options }: SelectorViewTypes) => {
  const { handleOpenOptionModal, handleOpenDeleteModal } =
    useContext(ModalsContext);
  const { editableSelectorData, setEditableSelectorData } =
    useContext(FormsContext);
  console.log(editableSelectorData);
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
          <Button
            title={"Add New Option"}
            handling={() => {
              handleOpenOptionModal("addOption");
              setEditableSelectorData({ selector, options, option: "" });
            }}
          />
          {options.length > 0 ? (
            options.map((option, i) => (
              <Paper
                elevation={1}
                className={`flex justify-between items-center gap-3 flex-wrap p-2 !rounded-md`}
                key={i}
              >
                <Typography variant={"h6"}>{option}</Typography>
                <Box className={`flex justify-end items-center gap-2`}>
                  <IconButton
                    className={`!bg-green-100`}
                    onClick={() => {
                      handleOpenOptionModal("editOption");
                      setEditableSelectorData({
                        selector,
                        options: [...options].filter((opt) => opt !== option),
                        option,
                      });
                    }}
                  >
                    <EditRounded className={`!text-green-400`} />
                  </IconButton>
                  <IconButton
                    className={`!bg-red-100`}
                    onClick={() => {
                      handleOpenDeleteModal("option");
                      setEditableSelectorData({
                        selector,
                        options: [...options].filter((opt) => opt !== option),
                        option: "",
                      });
                    }}
                  >
                    <DeleteRounded className={`!text-red-400`} />
                  </IconButton>
                </Box>
              </Paper>
            ))
          ) : (
            <Typography variant="h6" className={`text-center text-zinc-300`}>
              No Options Yet...
            </Typography>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectorView;
