import { baseApi } from "../api/baseApi";


const productApi= baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      
        query: (product) =>  {
          console.log(product,"from api")
            const param = new URLSearchParams(); 
            console.log(param);
            // if (product) {
            //   param.append("product",product);
            // }
            return {
              url: `/products`,
              method: "GET",
              params:product
              
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