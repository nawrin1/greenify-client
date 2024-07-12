
import './Gallery.css'
import img1 from '../../assets/p1.jpg'
import img2 from '../../assets/p2.jpg'
import img3 from '../../assets/p3.jpg'
import img4 from '../../assets/p4.jpg'
import img5 from '../../assets/p5.jpg'
import img6 from '../../assets/p6.jpg'
import img7 from '../../assets/p7.jpg'
import img8 from '../../assets/p8.jpg'
import img9 from '../../assets/p9.jpg'
import img10 from '../../assets/p10.jpg'
import img11 from '../../assets/p11.jpg'
import img12 from '../../assets/p12.jpg';
const Gallery = () => {
    return (
        <div className="gal py-20 flex flex-col items-center p-4">
            <div className="category flex mx-auto justify-center ">
                <p className="text-[#bdc468]">Gallery</p>
            </div>


            <div className='w-[50%] mt-6 flex gap-2 justify-center  mx-auto ' >
                <div >
                    <div className='bg-red-500 lg:h-[150px] lg:w-[150px] h-[130px] w-[120px] mb-2'>
                        <img className="lg:h-[150px] lg:w-[150px] h-[130px] w-[120px] object-fill"src={img1} alt="" />

                        
                    </div>
                    <div className='bg-blue-500 lg:h-[180px] lg:w-[150px] h-[140px] w-[120px] mb-2'>
                    <img className="lg:h-[180px] lg:w-[150px] h-[140px] w-[120px] object-fill"src={img2} alt="" />

                    </div>
                    <div className='bg-yellow-500 lg:h-[210px] lg:w-[150px] h-[150px] w-[120px]'>
                    <img className="lg:h-[210px] lg:w-[150px] h-[150px] w-[120px] object-fill"src={img3} alt="" />


                    </div>
                    
                </div>
                <div>
                    <div className='bg-red-500 lg:h-[180px] lg:w-[150px] mb-2 h-[150px] w-[120px]' >
                    <img className="lg:h-[180px] lg:w-[150px] h-[150px] w-[120px] object-cover"src={img4} alt="" />

                        
                    </div>
                    <div className='bg-blue-500 lg:h-[180px] lg:w-[150px] mb-2 h-[130px] w-[120px]'>
                    <img className="lg:h-[180px] lg:w-[150px] h-[130px] w-[120px] object-cover"src={img5} alt="" />

                    </div>
                    <div className='bg-yellow-500 lg:h-[180px] lg:w-[150px] h-[140px] w-[120px] '>
                    <img className="lg:h-[180px] lg:w-[150px] h-[140px] w-[120px] object-cover"src={img8} alt="" />

                    </div>
                    
                </div>
                <div >
                    <div className='bg-red-500 lg:h-[150px] lg:w-[150px] mb-2 h-[130px] w-[120px]'>
                    <img className="lg:h-[150px] lg:w-[150px] h-[130px] w-[120px] object-cover"src={img6} alt="" />
                        
                    </div>
                    <div className='bg-blue-500 lg:h-[180px] lg:w-[150px] mb-2 h-[140px] w-[120px]'>
                    <img className="lg:h-[180px]  lg:w-[150px]  h-[140px] w-[120px] object-cover"src={img9} alt="" />

                    </div>
                    <div className='bg-yellow-500 lg:h-[210px] lg:w-[150px] h-[150px] w-[120px]'>
                    <img className="lg:h-[210px] lg:w-[150px] h-[150px] w-[120px] object-cover"src={img10} alt="" />

                    </div>
                    
                </div>
                <div className='hidden md:hidden lg:block'>
                    <div className='bg-red-500 h-[180px] w-[150px] mb-2'>
                    <img className=" h-[180px] w-[150px] object-cover"src={img7} alt="" />
                        
                    </div>
                    <div className='bg-blue-500 h-[180px] w-[150px] mb-2'>
                    <img className=" h-[180px] w-[150px] object-fit"src={img11} alt="" />

                    </div>
                    <div className='bg-yellow-500 h-[180px] w-[150px]'>
                    <img className="h-[180px] w-[150px] object-cover"src={img12} alt="" />

                    </div>
                    
                </div>
              
                



            </div>
            
        </div>

    );
};

export default Gallery;