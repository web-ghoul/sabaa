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
  console.log(selectors, isLoading);
  useEffect(() => {
    dispatch(getSelectors({ status: "status" }));
  }, [dispatch]);
  return (
    <PrimaryContainer
      className={`!grid justify-stretch items-center gap-8 grid-cols-3 md:grid-cols-2 sm:!grid-cols-1`}
    >
      {/* {
            !isLoading && selectors && selectors.map((selector,i)=><SelectorView selector={selector.selector} options={selector.options} key={i} />)
        } */}
      <SelectorView
        selector={"status"}
        options={selectors ? selectors.data : []}
      />
    </PrimaryContainer>
  );
};

export default SelectorsSection;
