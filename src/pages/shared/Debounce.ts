import { debounce } from "lodash";
import { search } from "../../redux/features/productSlice";



export const debouncedSearch = debounce((dispatch,searchValue:string) => {
    dispatch(search(searchValue));
  }, 500); 