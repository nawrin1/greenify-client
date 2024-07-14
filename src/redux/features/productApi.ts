import { baseApi } from "../api/baseApi";


const productApi= baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      
        query: () =>  {
            // const param = new URLSearchParams(); 
            // console.log(param);
            // if (product) {
            //   param.append("products from api", product);
            // }
            return {
              url: `/products`,
              method: "GET",
              
            };
          },
    }),
    getSingleProduct: builder.query({
      
        query: (productName) =>  {
          console.log(productName,"singleproduct")

            return {
              url: `/products/${productName}`,
              method: "GET",
              
            };
          },
    }),
  }),
});

export const { useGetAllProductsQuery,useGetSingleProductQuery} = productApi;