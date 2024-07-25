
import { Input } from '@mui/material';
import image from '../../assets/nikita-kachanovsky-_l0LWXSubVk-unsplash.jpg'
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { SiHomeadvisor } from 'react-icons/si';
import { GiMoneyStack } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { useUpdateQuantityMutation } from '../../redux/features/productApi';

import { emptyCart } from '../../redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    

    const { cart } = useAppSelector((state) => state.cart);
    const [updateQuantity]=useUpdateQuantityMutation()
    const dispatch=useAppDispatch()
    const navigate=useNavigate()

    // console.log(cart)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const customerName = e.target.customerName.value;
    //     const phone = e.target.phone.value;
    //     const address = e.target.address.value;
    //     const paymentMethod = e.target.paymentMethod.value;
    //     toast.success('Order Confirmed!', {
    //         style: {
    //           fontFamily: 'Cormorant Infant, sans-serif', 
    //           color: 'black',
    //           fontSize: '20px'
    //         },
    //       })
    //       const order={
    //         customer:customerName ,
    //         phone:phone,
    //         address:address,
    //         payment:paymentMethod,
    //         product:cart
    //       }
    //       updateQuantity(order)
          

    //       dispatch(emptyCart())
    //       navigate('/')


    //     //   console.log(cart)

      

        
        
    //     console.log(order);
        
    // };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const customerName = form.customerName.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const paymentMethod = form.paymentMethod.value;

        toast.success('Order Confirmed!', {
            style: {
                fontFamily: 'Cormorant Infant, sans-serif',
                color: 'black',
                fontSize: '20px'
            },
        });

        const order = {
            customer: customerName,
            phone: phone,
            address: address,
            payment: paymentMethod,
            product: cart
        };

        updateQuantity(order);

        dispatch(emptyCart());
        navigate('/');

        console.log(order);
    };
    return (
        <div className="flex w-full h-screen">
        <div className="bg-[#e8e8e8] w-[15%] h-screen flex justify-center items-center">
            <div className="transform -rotate-90">
            <p className="font-extrabold lg:text-4xl text-2xl md:text-3xl text-[#2b3c17]">GREENERY</p>
            </div>
        </div>
        <div className="hidden lg:block md:block bg-[#f1f0ee] w-[32%] h-[100%]  lg:justify-end lg:items-end md:justify-end md:items-end ">
            <img src={image} className="h-[100%] object-contain " alt="" />
        </div>
        {/* checkput form */}
        <div className="bg-[#e8e8e8] lg:w-[60%] md:w-[60%] w-full h-screen lg:px-10 md:px-2  lg:flex md:flex flex lg:justify-center md:justify-center justify-start items-center pl-10 lg:pl-0 md:pl-0 lg:items-center md:items-center">
            <div className='lg:w-full w-[70%]   max-w-md'>
                
                <form onSubmit={handleSubmit}>
                <h2 className='text-xl lg:text-2xl md:text-2xl pt-6 text-center'>Customer Details</h2>
                    <div className="space-y-4 bg-white p-6 rounded shadow-lg">
                        <div className="flex items-center space-x-2">
                            <MdDriveFileRenameOutline className='text-3xl pt-2'/>
                            <Input required placeholder="Customer name" name="customerName" fullWidth />
                        </div>
                        <div className="flex items-center space-x-2">
                        <FaPhone className='text-2xl pt-2'/>
                            <Input required placeholder="Phone" name="phone" fullWidth />
                        </div>
                        <div className="flex items-center space-x-2">
                        <SiHomeadvisor className='text-3xl pt-2'/>
                            <Input required placeholder="Address" name="address" fullWidth />
                        </div>
                        <div className="flex items-center space-x-2">
                        <GiMoneyStack className='text-3xl pt-1' />
                            <input required className="ml-2"type="radio" id="cash" name="paymentMethod" value="cash" />
                            <p className='lg:text-xl md:text-xl text-[18px] lg:pl-2 md:pl-2 '>Pay with Cash</p>
                            </div>
                            <button type="submit"className="relative shadow-sm shadow-slate-600 rounded-sm w-full h-[35px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
                            <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                            <span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">Order Confirmed</span>
                            </button>
                        {/* Payment options can be added here */}
                    </div>
                </form>
            </div>
        </div>
        

            
        </div>
    );
};

export default Checkout;