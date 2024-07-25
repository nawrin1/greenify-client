
import { FaLeaf } from 'react-icons/fa';
import './Category.css'
// import image1 from '../../assets/rosemary.jpg'


const Category = () => {
    return (
        <div className="cat pb-36 pt-60 flex flex-col items-center ">
            <div className="category flex mx-auto justify-center ">
                <p className="text-[#bdc468]">Categories</p>
                <div className="text-2xl pt-6 pl-2"><FaLeaf /></div>
            </div>


            {/* grid */}
            {/* <div className='w-full h-[300px] flex'>
                <div className='w-[50%] bg-yellow-400 '>

                </div>
                <div className='w-[50%] bg-red-400 grid grid-cols-2 '>
                    <div className='bg-black'>

                    </div>
                    <div className='bg-slate-700 col-span-2'>

                    </div>

                </div>
            </div> */}

            <div className='w-[50%] mt-6   flex flex-wrap gap-10 justify-center items-center mx-auto ' >
               {/* <div className='h-[165px] w-[160px] bg-none rounded-full flex justify-center border-2 border-black items-center'>
                <div className='succulent h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Succulents</p>
                                    

                 </div>
                </div> */}

<div className="container h-[165px] w-[165px] flex justify-center items-center">
  <div className="succulent-container relative h-[150px] w-[150px] flex justify-center items-center">
    <div className="outer-circle absolute h-[165px] w-[165px] bg-none rounded-full border-2 border-black flex justify-center items-center opacity-0 transition-opacity duration-300"></div>
    <div className="succulent h-[150px] w-[150px] bg-black rounded-full flex justify-center items-center">
      <p className="text-2xl absolute -bottom-10">Succulents</p>
    </div>
  </div>
</div>
<div className="container h-[165px] w-[165px] flex justify-center items-center">
                <div className="succulent-container relative h-[150px] w-[150px] flex justify-center items-center">
                <div className="outer-circle absolute h-[165px] w-[165px] bg-none rounded-full border-2 border-black flex justify-center items-center opacity-0 transition-opacity duration-300"></div>
                <div className='snake h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Indoor Plants</p>
                    

                </div>
                </div>
                </div>

                <div className="container h-[165px] w-[165px] flex justify-center items-center">
                <div className="succulent-container relative h-[150px] w-[150px] flex justify-center items-center">
                <div className="outer-circle absolute h-[165px] w-[165px] bg-none rounded-full border-2 border-black flex justify-center items-center opacity-0 transition-opacity duration-300"></div>
                <div className='cacti h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Cacti</p>
                    

                </div>
                </div>
                </div>


                <div className="container h-[165px] w-[165px] flex justify-center items-center">
                <div className="succulent-container relative h-[150px] w-[150px] flex justify-center items-center">
                <div className="outer-circle absolute h-[165px] w-[165px] bg-none rounded-full border-2 border-black flex justify-center items-center opacity-0 transition-opacity duration-300"></div>
                <div className='herbs h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Herbs</p>
                    

                </div>
                </div>
                </div>


                <div className="container h-[165px] w-[165px] flex justify-center items-center">
                <div className="succulent-container relative h-[150px] w-[150px] flex justify-center items-center">
                <div className="outer-circle absolute h-[165px] w-[165px] bg-none rounded-full border-2 border-black flex justify-center items-center opacity-0 transition-opacity duration-300"></div>
                <div className='angiosperms h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10 text-center '>Angiosperms</p>
                    

                </div>
                </div>
                </div>



            </div>
            
        </div>
    );
};

export default Category;