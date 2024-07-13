import { useGetAllProductsQuery } from "../../redux/features/productApi";


const AllProducts = () => {
    const { data,  isLoading } =  useGetAllProductsQuery(undefined);
    console.log(data,"from all products")
    if(isLoading){
      return <p>Loading..</p>
    }
    return (
        <div>
            all products
            
        </div>
    );
};

export default AllProducts;