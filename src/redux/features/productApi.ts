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
          providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      
        query: (productName) =>  {
          console.log(productName,"singleproduct")

            return {
              url: `/products/${productName}`,
              method: "GET",
              
            };
          },
          providesTags: ["product"],
    }),
    updateQuantity: builder.mutation({
      
        query: (data) =>  {
          console.log(data,"updatequantity")

            return {
              url: `/products/quantity`,
              method: "PATCH",
              body:data
              
            };
          },
        invalidatesTags: ["product"]
    }),
  }),
});

export const { useGetAllProductsQuery,useGetSingleProductQuery,useUpdateQuantityMutation} = productApi;