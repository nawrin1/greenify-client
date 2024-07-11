
import img1 from '../../assets/gryffyn-m-OSBEqWnoDYo-unsplash-removebg-preview.png'
const banner = () => {
    return (
        <div className="h-[700px] flex ">
                        <div className="w-2/6 bg-[#9ac284] h-[700px]">

                        </div>
                        <div className="w-2/6 bg-[#dee1d8] h-[500px] absolute left-[16%] top-[20%] rounded-[200px] -z-5 flex justify-center">
                         <img className="h-[450px] rounded-[200px]"src={img1}></img>
                        </div>
                        
                        
            <div className="w-4/6 bg-[#e7eae3] h-[700px] flex justify-end items-center ">
            <div>
            <p className='text-[#2b3c17] leading-relaxed px-7'>Transforming Spaces, <br />One <span className='text-[#bdc468] '>Plant</span> at a Time.</p>
            <p className='text-xl text-right pr-10'>...Planting Joyful Growth</p>
            </div>
            <div>
            
            </div>



            </div>

            
            
        </div>
    );
};

export default banner;