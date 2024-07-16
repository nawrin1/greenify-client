import { ThreeDots } from "react-loader-spinner";
import { useGetAllProductsQuery } from "../../redux/features/productApi";
import { CgShoppingCart } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { LiaDollarSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { sorted } from "../../redux/features/productSlice";
// import { useState } from "react";


const AllProducts = () => {


    const  product  = useAppSelector((state) => state.product);
    const dispatch=useAppDispatch()

  const { data, isLoading, isError } = useGetAllProductsQuery( product, {
    pollingInterval: 1000,
  });
    // console.log(product,"from all products")
    if(isLoading || !data){
      return <div className="min-h-screen flex justify-center items-center">
        <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </div>
    }
    if(isError || !data){
      return <div className="min-h-screen flex justify-center items-center">
        <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </div>
    }
    return (
<div className="pt-40 bg-[#e8e8e8] px-2 ">
<div className="flex justify-center ">
<div className="category flex mx-auto justify-center ">
        <p className="text-[#bdc468]">Our Products</p>
        <div className="text-2xl pt-6 pl-2">
          <FaLeaf />
        </div>

      </div>

        </div>
        <div className="flex justify-end w-auto ">
      <div className="dropdown dropdown-left dropdown-end pt-4">
      <div tabIndex={0} role="button" className=" border-2 border-black bg-white hover:bg-black hover:text-white rounded-lg w-[100px] h-[35px] px-4 py-2 m-1 text-xl flex items-center"><p>Sort By</p></div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg w-32 p-2 shadow">
        <li onClick={()=>dispatch(sorted("low"))}><a>Low Price</a></li>
        <li onClick={()=>dispatch(sorted("high"))}><a>High Price</a></li>
        <li onClick={()=>dispatch(sorted("title"))}><a>Title</a></li>
        <li onClick={()=>dispatch(sorted("category"))}><a>Category</a></li>
      </ul>
    </div>
        </div>
<div className="w-[70%]  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto place-items-center mt-20 pb-40">
            {
                data?.data?.map((product:Record<string,unknown>,idx:number)=><Link to={`/products/${product.title}`}><div key={idx} className="card  bg-slate-500   ">
                <div className="absolute flex justify-end w-full">
                  <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
                  <p className="text-black text-2xl"><CgShoppingCart /></p>
                  </div>
                </div>
                <img className="h-[350px] w-[250px] object-fill" src={product.image} alt="" />
                <div className="intro">
                  <div className="flex justify-between">
                    <div className="">
                     <div>
                     <h1 className="text-[22px] text-wrap overflow-hidden">{product.title} </h1>
                     <div className="flex ">
                     <p className="text-2xl">{product.rating}  </p>
                     <div className="text-yellow-300 text-xl mt-1"><IoMdStar /></div>
                     </div>

                     </div>
                      {/* <div>
                      <p className="text-2xl mt-0">{product.rating}</p>
                      </div> */}
                    </div>
                    <div className="flex">
                      <p className="text-xl ">{product.price}</p>
                      <div className=" text-xl mt-1"><LiaDollarSignSolid /></div>
                      
                    </div>
                  </div>
                  <p className="para text-xl">Category: {product.category}</p>
                  <p className="para text-[16px] text-[#f3f3f3] overflow-ellipsis">
                   {product.description}
                  </p>
                  <p></p>
                </div>
              </div></Link>)
            }
            
        </div>
</div>
    );
};

export default AllProducts;