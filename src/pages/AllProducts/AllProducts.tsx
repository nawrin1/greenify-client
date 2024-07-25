import { ThreeDots } from "react-loader-spinner";
import { useGetAllProductsQuery } from "../../redux/features/productApi";
import { CgShoppingCart } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { LiaDollarSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { maxPrice, minPrice, sorted } from "../../redux/features/productSlice";
import { Input } from "@mui/material";
import { IoFilter } from "react-icons/io5";
import { toast } from "react-toastify";
import { addProduct, total, updateCart } from "../../redux/features/cartSlice";
import { PiEmptyBold } from "react-icons/pi";
// import { useState } from "react";


const AllProducts = () => {


    const  product  = useAppSelector((state) => state.product);
    const dispatch=useAppDispatch()

    // const product = useAppSelector((state) => state.product);
    // const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.cart);
    const { data, isLoading, isError } = useGetAllProductsQuery(product, {
      pollingInterval: 1000,
    });

  // const { data, isLoading, isError } = useGetAllProductsQuery( product, {
  //   pollingInterval: 1000,
  // });
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


    const clicked = (
      event: React.MouseEvent<HTMLButtonElement>,
      data: Record<string, unknown>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("clicked");
  
      const product = cart.filter((eachProduct) => eachProduct._id == data._id);
      // console.log(product)
  
      if (product?.length == 0) {
        dispatch(
          addProduct({
            _id: data._id as string,
            title: data.title as string,
            price: data.price as number,
            quantity: 1,
          })
        );
        dispatch(total(0));
  
        return toast.success("Product Added!", {
          style: {
            fontFamily: "Cormorant Infant, sans-serif",
            color: "black",
            fontSize: "20px",
          },
        });
      } else {
        cart.filter((each) => {
          if (each._id == data?._id) {
            // console.log("enter")
  
            const newValue = each.quantity + 1;
            console.log(each, newValue, data.quantity);
            if (newValue > (data.quantity as number)) {
              return toast.error("Quantity exceeded", {
                style: {
                  fontFamily: "Cormorant Infant, sans-serif",
                  color: "black",
                  fontSize: "20px",
                },
              });
            } else {
              dispatch(updateCart(data as Record<string, unknown>));
              dispatch(total(0));
              return toast.success("Product Added!", {
                style: {
                  fontFamily: "Cormorant Infant, sans-serif",
                  color: "black",
                  fontSize: "20px",
                },
              });
            }
          }
        });
      }
  
      // event.stopPropagation();
    };

    console.log(data.data)
    return (
<div className="pt-40 bg-[#e8e8e8] px-2 min-h-screen ">
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
        <div className="flex justify-end w-full  ">
      <div className="dropdown dropdown-left dropdown-end pt-4">
      <div tabIndex={0} role="button" className=" bg-slate-200 hover:bg-black hover:text-white rounded-lg w-[100px] h-[35px] px-4 py-2 m-1 text-xl flex items-center"><p>Filter</p> <div className="text-2xl  pl-2"><IoFilter /></div></div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg w-32 p-2 shadow">
        <li ><Input onChange={(event)=>dispatch(minPrice(parseInt(event?.target.value)))}placeholder="min Price" /></li>
        <li ><Input onChange={(event)=>dispatch(maxPrice(parseInt(event?.target.value)))}placeholder="max Price" /></li>
       
       
      </ul>
    </div>
        </div>

        <div className="flex justify-center items-center">

          {
            data.data?.length>0?
            <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto place-items-center mb-20">        {data.data.map((product, idx) => (
              <Link to={`/products/${product.title}`}>
                <div key={idx} className="card  bg-slate-500   ">
                  <div className="absolute flex justify-end w-full">
                    <div
                      onClick={(event) => clicked(event,product)}
                      className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center"
                    >
                      <p className="text-black text-2xl">
                        <CgShoppingCart />
                      </p>
                    </div>
                  </div>
                  <img
                    className="h-[350px] w-[250px] object-fill"
                    src={product.image}
                    alt=""
                  />
                  <div className="intro">
                    <div className="flex justify-between">
                      <div className="">
                        <div>
                          <h1 className="text-[22px] text-wrap overflow-hidden">
                            {product.title}{" "}
                          </h1>
                          <div className="flex ">
                            <p className="text-2xl">{product.rating} </p>
                            <div className="text-yellow-300 text-xl mt-1">
                              <IoMdStar />
                            </div>
                          </div>
                        </div>
                        {/* <div>
                          <p className="text-2xl mt-0">{product.rating}</p>
                          </div> */}
                      </div>
                      <div className="flex">
                        <p className="text-xl ">{product.price}</p>
                        <div className=" text-xl mt-1">
                          <LiaDollarSignSolid />
                        </div>
                      </div>
                    </div>
                    <p className="para text-xl">Category: {product.category}</p>
                    <p className="para text-[16px] text-[#f3f3f3] overflow-ellipsis">
                      {product.description}
                    </p>
                    <p></p>
                  </div>
                </div>
              </Link>
            ))}</div>
            :(
              <div className='text-2xl text-center flex justify-center pb-20 pt-10'><p>No Product Matched!</p>
            <div className='pt-1'>
                <PiEmptyBold />
            </div>
            </div>
            )
          }

      </div>
</div>
    );
};

export default AllProducts;