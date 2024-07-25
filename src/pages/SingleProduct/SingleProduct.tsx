import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/productApi";
import { ThreeDots } from "react-loader-spinner";
import { IoMdStar } from "react-icons/io";
import { toast} from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addProduct, total, updateCart } from "../../redux/features/cartSlice";
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import './SingleProduct.css'

const SingleProduct = () => {
  const { productName } = useParams();
  // console.log(productName,"from single elem")
  const { data, isLoading } = useGetSingleProductQuery(productName);
  const  {cart } = useAppSelector((state) => state.cart);
  // console.log(cart)
  const dispatch=useAppDispatch()
//   console.log(data.data, "from single elem");

useEffect(() => {
  Aos.init({
      duration:1500
  });
  Aos.refresh();
}, []);

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

  

  const clicked=(data:Record<string,unknown>)=>{
    // console.log(data._id,"from id")

    const product=cart.filter((eachProduct)=>eachProduct._id==data._id)
    // console.log(product)

    if(product?.length==0){
      dispatch(addProduct({
        _id: data._id as string,
        title: data.title as string,
        price: data.price as number,
        quantity: 1,

      }))
      dispatch(total(0))


      return toast.success('Product Added!', {
        style: {
          fontFamily: 'Cormorant Infant, sans-serif', 
          color: 'black',
          fontSize: '20px'
        },
      })
    }
    else{

      cart.filter((each)=>{
        if (each._id==data._id){
          // console.log("enter")
          
          const newValue=each.quantity+1
          // console.log(each,newValue,data.quantity)
          if(newValue>(data.quantity as number)){
            return toast.error('Quantity exceeded', {
              style: {
                fontFamily: 'Cormorant Infant, sans-serif', 
                color: 'black',
                fontSize: '20px'
              },
            })

          }
          else{
            dispatch(updateCart(data as Record<string, unknown>))
            dispatch(total(0))
            return toast.success('Product Added!', {
              style: {
                fontFamily: 'Cormorant Infant, sans-serif', 
                color: 'black',
                fontSize: '20px'
              },
            })

          }
        }
      })



    }


  }
//  console.log(cart,"from single")
  return (
<div className="flex w-full h-screen">
  <div className="bg-[#e8e8e8] w-[15%] h-screen flex justify-center items-center">
    <div className="transform -rotate-90">
      <p className="font-extrabold lg:text-4xl text-2xl md:text-3xl text-[#2b3c17]">GREENERY</p>
    </div>
  </div>

  <div className="bg-white w-[35%] h-[100%] flex justify-center items-center">
    <img src={data?.data?.image}  data-aos="fade-in" data-aos-duration="3000" className="h-[90%] w-[80%] object-contain " alt="" />
  </div>

  <div className="bg-[#e8e8e8] w-[50%] h-screen lg:px-10 px-2">
    <div className="pt-20">
      <h1 className="lg:text-4xl text-2xl md:text-3xl">{data?.data?.title}</h1>
      {/* <h1 className="lg:text-4xl text-2xl md:text-3xl">{data?.data?.quantity}</h1> */}
    </div>
    <div className="pt-2">
      <h1 className="lg:text-xl text-[15px] md:text-[16px]">Category: {data?.data?.category}</h1>
    </div>
    <div className="pt-1 flex items-center space-x-4">
     
      <div className="flex items-center">
        <p className="lg:text-xl text-[16px] text-xl">{data?.data?.rating}</p>
        <IoMdStar className="text-yellow-300 lg:text-xl text-[16px] md:text-xl ml-1" />
      </div>
    </div>
    <hr className="w-[25%] h-[2px] my-4 bg-gray-500 border-none" />
    <div className="lg:pt-10  lg:text-justify">
      <p className="lg:text-xl text-[14px] md:text-[18px] text-slate-600">{data?.data?.description.slice(0,200)}..</p>
    </div>

    <div className="lg:pt-[20%] pt-[10%] flex flex-col ">
    <p className="lg:text-xl text-[15px] md:text-[16px] mb-3">Price: ${data?.data?.price}</p>
    <button onClick={()=>clicked(data?.data)} className="relative shadow-sm shadow-slate-600 rounded-sm lg:w-[150px] lg:h-[40px] w-[100px] h-[20px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
  <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
  <span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">Add to Cart</span>
</button>

    </div>



  </div>
</div>

  );
};

export default SingleProduct;
