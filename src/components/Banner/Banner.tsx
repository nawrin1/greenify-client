
import img1 from '../../assets/gryffyn-m-OSBEqWnoDYo-unsplash-removebg-preview.png'
const banner = () => {
    return (
        <div className="lg:h-[700px] h-[500px] flex ">
                        <div className="w-2/6 bg-[#9ac284] lg:h-[700px] h-[500px] ">

                        </div>
                        <div className="lg:w-2/6 md:w-2/6 w-[45%] bg-[#dee1d8] h-[350px] lg:h-[500px] absolute left-[16%] top-[20%] shadow-xl rounded-[200px] -z-5 flex justify-center">
                         <img className="lg:h-[450px] h-[300px] rounded-[200px]"src={img1}></img>
                        </div>
                        
                        
            <div className="w-4/6  bg-[#e7eae3] lg:h-[700px] h-[500px] flex justify-end items-center ">
            <div className='flex flex-col place-items-end  px-2'>
            <p className='text-[#2b3c17] leading-loose lg:px-7 lg:text-6xl text-[16px] md:text-4xl'>Transforming Spaces, <br />One <span className='text-[#bdc468] '>Plant</span> at a Time.</p>
            <p className='lg:text-xl lg:text-right lg:pr-10 md:text-[16px] text-[12px] md:pr-2 pr-1'>...Planting Joyful Growth</p>
            </div>
            <div>
            
            </div>



            </div>

            
            
        </div>
    );
};

export default banner;