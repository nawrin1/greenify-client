import "./Products.css";
import img1 from "../../assets/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
const Products = () => {
  return (
    <div className="prod pb-36 flex flex-col items-center px-4 relative">
      <div className="flex justify-end w-full pr-10 absolute top-[33%]">
        <div className="">
          <p className="text-[20px]">S</p>
          <p className="text-[20px]">a</p>
          <p className="text-[20px]">v</p>
          <p className="text-[20px]">e</p>
          <p className="text-[20px] mt-10">E</p>
          <p className="text-[20px]">a</p>
          <p className="text-[20px]">r</p>
          <p className="text-[20px]">t</p>
          <p className="text-[20px]">h</p>
        </div>
      </div>
      <div className="category flex mx-auto justify-center ">
        <p className="text-[#bdc468]">Our Products</p>
        <div className="text-2xl pt-6 pl-2">
          <FaLeaf />
        </div>
      </div>

      <div className="w-[70%] mt-6 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto place-items-center ">
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>
        <div className="card  bg-slate-500   ">
          <div className="absolute flex justify-end w-full">
            <div className="shop w-[40px] h-[40px] bg-[#d4d4d4] rounded-full flex  justify-center items-center">
            <p className="text-black text-2xl"><CgShoppingCart /></p>
            </div>
          </div>
          <img className="h-[350px] w-[250px] object-fill" src={img1} alt="" />
          <div className="intro">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl">Cactus 4*</h1>
              </div>
              <div>
                <p className="text-xl ">price</p>
              </div>
            </div>
            <p className="para text-xl">Category:cactus</p>
            <p className="para text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nesciunt maxime possimus dolorum quos. Nisi,
              perspiciatis.
            </p>
            <p></p>
          </div>
        </div>


      </div>

      <div className="button border-[#bdc468] border-2 w-[180px] h-[50px] flex rounded-[50px] relative  mt-6">
        <div className="bg-[#2b3c17] w-[100%] h-[50px]  rounded-l-[50px] flex justify-center items-center pr-2">
          <p className="text-xl text-[#bdc468]">See More</p>
        </div>
        <div className="white bg-white w-[30%] h-[50px]  rounded-[50px] absolute z-10 right-0 top-0 bottom-0 flex justify-center items-center">
          <div className="text-[18px] text-[#2b3c17]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
