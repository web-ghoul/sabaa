import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSelectorView from "../components/Selectors/LoadingSelectorView";
import SelectorView from "../components/Selectors/SelectorView";
import Title from "../components/Title/Title";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { getSelectors } from "../store/selectorsSlice";
import { AppDispatch, RootState } from "../store/store";
import { selectorsKeysTypes } from "../types/store.types";

const SelectorsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectors, isLoading } = useSelector(
    (state: RootState) => state.selectors
  );

  useEffect(() => {
    dispatch(getSelectors());
  }, [dispatch]);

  return (
    <Paper className={`paper`}>
      <Title title={"Selectors Controller"} align="left" />
      <Box
        className={`!grid justify-stretch items-start gap-8 grid-cols-3 md:grid-cols-2 sm:!grid-cols-1`}
      >
        {!isLoading && selectors
          ? selectors.map((selector, i) => {
              const select = Object.keys(selector)[0];
              return (
                <SelectorView
                  selector={select}
                  options={selector[select as selectorsKeysTypes].data}
                  key={i}
                />
              );
            })
          : Array.from({ length: handleRandomNumber(6) }).map((_, i) => (
              <LoadingSelectorView key={i} />
            ))}
      </Box>
    </Paper>
  );
};

export default SelectorsSection;
