import { ThreeDots } from "react-loader-spinner";
import { useGetAllProductsQuery } from "../../redux/features/productApi";
import { CgShoppingCart } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { LiaDollarSignSolid } from "react-icons/lia";


const AllProducts = () => {
    const { data,  isLoading } =  useGetAllProductsQuery(undefined, {
        pollingInterval: 1000,
      });
    console.log(data,"from all products")
    if(isLoading){
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
<div className="pt-40 bg-[#e8e8e8] ">
<div className="category flex mx-auto justify-center ">
        <p className="text-[#bdc468]">Our Products</p>
        <div className="text-2xl pt-6 pl-2">
          <FaLeaf />
        </div>
      </div>
<div className="w-[70%]  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto place-items-center mt-20 pb-40">
            {
                data.data.map((product,idx)=><div key={idx} className="card  bg-slate-500   ">
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
                  <p className="para text-[16px] text-[#f3f3f3]">
                   {product.description}
                  </p>
                  <p></p>
                </div>
              </div>)
            }
            
        </div>
</div>
    );
};

export default AllProducts;