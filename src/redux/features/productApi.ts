import { baseApi } from "../api/baseApi";


const productApi= baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      
        query: (product) =>  {
          console.log(product,"from api")
            const param = new URLSearchParams(); 
            // console.log(param);
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
    deleteProduct: builder.mutation({
      
        query: (id) =>  {
          console.log(id,"del prod")

            return {
              url: `/products/${id}`,
              method: "DELETE",
             
              
            };
          },
        invalidatesTags: ["product"]
    }),
    updateProduct: builder.mutation({
      
        query: (product) =>  {
         
          console.log(product.options,"update prod data")

            return {
              url: `/products/update/${product.id}`,
              method: "PATCH",
              body:product.options
             
              
            };
          },
        invalidatesTags: ["product"]
    }),
    addProduct: builder.mutation({
      
        query: (product) =>  {
         
          console.log(product,"add prod")

            return {
              url: `/products`,
              method: "POST",
              body:product
             
              
            };
          },
        invalidatesTags: ["product"]
    }),
  }),
});

export const { useGetAllProductsQuery,useGetSingleProductQuery,useUpdateQuantityMutation,useDeleteProductMutation,useUpdateProductMutation,useAddProductMutation} = productApi;