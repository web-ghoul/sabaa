import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectorView from "../components/Selectors/SelectorView";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getSelectors } from "../store/selectorsSlice";
import { AppDispatch, RootState } from "../store/store";

const SelectorsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectors, isLoading } = useSelector(
    (state: RootState) => state.selectors
  );
  useEffect(() => {
    dispatch(getSelectors());
  }, [dispatch]);
  return (
    <PrimaryContainer
      className={`!grid justify-stretch items-start gap-8 grid-cols-3 md:grid-cols-2 sm:!grid-cols-1`}
    >
      {!isLoading &&
        selectors &&
        selectors.map((selector, i) => {
          const select = Object.keys(selector)[0];
          return (
            <SelectorView
              selector={select}
              options={selector[select].data}
              key={i}
            />
          );
        })}
    </PrimaryContainer>
  );
};

export default SelectorsSection;
