
import './Category.css'
import img1 from '../../assets/scott-webb-pkeb1NqMILc-unsplash.jpg'
const Category = () => {
    return (
        <div className="cat py-20 flex flex-col items-center">
            <div className="category flex mx-auto justify-center ">
                <p className="text-[#bdc468]">Categories</p>
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
                <div className='product h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Cactus</p>
                    

                </div>
                <div className='product h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Bonsai</p>
                    

                </div>
                <div className='product h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Shurbs</p>
                    

                </div>
                <div className='product h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Cactus</p>
                    

                </div>
                <div className='product h-[150px] w-[150px] bg-black rounded-full flex justify-center relative'>
                    <p className='text-2xl justify-center absolute  -bottom-10'>Cactus</p>
                    

                </div>



            </div>
            
        </div>
    );
};

export default Category;