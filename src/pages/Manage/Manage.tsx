import  { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation, useAddProductMutation } from "../../redux/features/productApi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Swal from "sweetalert2";
import {  Box, Fade, FormControl, Input, MenuItem, Modal, Select } from '@mui/material';
import { toast } from 'react-toastify';
// import { FaLeaf } from 'react-icons/fa';

interface Product {
  _id: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
}

// interface Products {
//   _id: string;
//   title: string;
//   category: string;
//   price: string; 
//   quantity: string; 
//   description: string;
//   rating: string;
//   image: string;
// }

type FormElements = HTMLFormElement & {
  elements: {
    namedItem(name: string): HTMLInputElement | HTMLSelectElement | null;
  };
};

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 2,
  p: 2,
  fontFamily: 'Cormorant Infant, sans-serif'
};

const Manage = () => {
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    _id:'',
    title: '',
    category: '',
    price: 0 ,
    quantity: 0,
    description: '',
    rating: 0,
    image: ''
  });
  const { data, isLoading, isError } = useGetAllProductsQuery({}, {
    pollingInterval: 1000,
  });
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [addProduct] = useAddProductMutation();

  const handleOpen = (product:Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  
  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct({
      _id: '',
      title: '',
      category: '',
      price: 0,
      quantity: 0,
      description: '',
      rating: 0,
      image: ''
    });
  };
  
  const handleAddClose = () => {
    setAddOpen(false);
  };

  // const handleSubmit = (e:unknown) => {
  //   e.preventDefault();
  //   const updatedProduct = {
  //     title: e.target.elements.title.value,
  //     category: selectedProduct.category,
  //     price: parseInt(e.target.elements.price.value),
  //     quantity: parseInt(e.target.elements.quantity.value),
  //     description: e.target.elements.description.value,
  //     rating: parseInt(e.target.elements.rating.value),
  //     image: e.target.elements.image.value,
  //   };
  //   toast.success('Product Updated!', {
  //       style: {
  //         fontFamily: 'Cormorant Infant, sans-serif', 
  //         color: 'black',
  //         fontSize: '20px'
  //       },
  //     });

  //   const updatedData = {
  //     id: selectedProduct._id,
  //     options: updatedProduct
  //   };
  //   updateProduct(updatedData);
  //   handleClose();
  // };

  // const handleAddSubmit = (e) => {
  //   e.preventDefault();
  //   const newProduct = {
  //     title: e.target.elements.title.value,
  //     category: e.target.elements.category.value,
  //     price: parseInt(e.target.elements.price.value),
  //     quantity: parseInt(e.target.elements.quantity.value),
  //     description: e.target.elements.description.value,
  //     rating: parseInt(e.target.elements.rating.value),
  //     image: e.target.elements.image.value,
  //   };
  //   toast.success('Product Added!', {
  //       style: {
  //         fontFamily: 'Cormorant Infant, sans-serif', 
  //         color: 'black',
  //         fontSize: '20px'
  //       },
  //     });
  //   console.log(newProduct)
  //   addProduct(newProduct);
  //   handleAddClose();
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as FormElements;

    const updatedProduct = {
      title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
      category: (form.elements.namedItem("category") as HTMLSelectElement)?.value,
      price: parseInt((form.elements.namedItem("price") as HTMLInputElement)?.value),
      quantity: parseInt((form.elements.namedItem("quantity") as HTMLInputElement)?.value),
      description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
      rating: parseInt((form.elements.namedItem("rating") as HTMLInputElement)?.value),
      image: (form.elements.namedItem("image") as HTMLInputElement)?.value,
    };
    toast.success('Product Updated!', {
        style: {
          fontFamily: 'Cormorant Infant, sans-serif', 
          color: 'black',
          fontSize: '20px'
        },
      });

    const updatedData = {
      id: selectedProduct._id,
      options: updatedProduct
    };
    updateProduct(updatedData);
    handleClose();
  };

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as FormElements;

  const newProduct = {
    title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
    category: (form.elements.namedItem("category") as HTMLSelectElement)?.value,
    price: parseInt((form.elements.namedItem("price") as HTMLInputElement)?.value),
    quantity: parseInt((form.elements.namedItem("quantity") as HTMLInputElement)?.value),
    description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
    rating: parseInt((form.elements.namedItem("rating") as HTMLInputElement)?.value),
    image: (form.elements.namedItem("image") as HTMLInputElement)?.value,
  };
    toast.success('Product Added!', {
        style: {
          fontFamily: 'Cormorant Infant, sans-serif', 
          color: 'black',
          fontSize: '20px'
        },
      });
    console.log(newProduct)
    addProduct(newProduct);
    handleAddClose();
  };

  const handleDelete = (_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2b3c17",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      backdrop: 'swal2-backdrop-show'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(_id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error("Failed to delete the product:", error);
          });
      }
    });
  };

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
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
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
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
    );
  }

  return (
    <div className="flex flex-col items-center  lg:px-2 md:px-2 bg-[#e8e8e8] pt-20 pb-20">
      <div className='flex flex-col lg:flex-row   lg:w-[80%] md:w-[80%] items-start justify-end pb-4 pt-4'>
        <button onClick={handleAddOpen} type="submit" className="relative shadow-sm shadow-slate-600 rounded-sm w-[150px] h-[35px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
          <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          <span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">Add Product</span>
        </button>
      </div>
      <div className="overflow-x-auto lg:w-[80%] md:w-[80%] w-[95%]">
        <table className="table">
          <thead className="bg-[#2b3c17] text-white">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {data?.data.map((each:Product, idx: number) => (
              <tr key={idx} className="border-b-1 border-[#bdc468]">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img src={each.image} alt={each.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{each.title}</div>
                </td>
                <td>
                  <div className="font-bold">{each.price}</div>
                </td>
                <td>
                  <div className="font-bold">{each.category}</div>
                </td>
                <td>
                  <div className="font-bold flex text-xl lg:gap-x-1 md:gap-x-1">
                    <div className="hover:text-red-600" onClick={() => handleDelete(each._id)}>
                      <RiDeleteBin2Fill />
                    </div>
                    <div className="hover:text-[#bdc468]" onClick={() => handleOpen(each)}>
                      <MdOutlineDriveFileRenameOutline />
                    </div>
                  </div>
                  {selectedProduct && (
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropProps={{ invisible: true }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <form onSubmit={handleSubmit}>
                            <div className='flex'>
                              <div className='flex'>
                                <p className='font-extrabold pt-3 pr-2'>Title:</p>
                                <Input name="title" required className='w-full mb-2' defaultValue={selectedProduct.title} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Category:</p>
                                <FormControl sx={{ m: 1, minWidth: 80 }}>
                                  <Select
                                  required
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={selectedProduct.category}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                                    sx={{ height: '40px', fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold', width: '120px' }}
                                  >
                                    <MenuItem value="Succulents">Succulents</MenuItem>
                                    <MenuItem value="Indoor Plants">Indoor Plants</MenuItem>
                                    <MenuItem value="Cacti">Cacti</MenuItem>
                                    <MenuItem value="Herbs">Herbs</MenuItem>
                                    <MenuItem value="Angiosperms">Angiosperms</MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </div>
                            <div className='flex flex-col'>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Price:</p>
                                <Input required name="price" className='w-full mb-2' defaultValue={selectedProduct.price} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Quantity:</p>
                                <Input required name="quantity" className='w-full mb-2' defaultValue={selectedProduct.quantity} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Description:</p>
                                <Input required name="description" className='w-full mb-2' defaultValue={selectedProduct.description} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Rating:</p>
                                <Input required name="rating" className='w-full mb-2' defaultValue={selectedProduct.rating} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <div className='flex'>
                                <p className='font-extrabold pt-2 pr-2'>Image:</p>
                                <Input required name="image" className='w-full mb-2' defaultValue={selectedProduct.image} sx={{ fontFamily: 'Cormorant Infant, sans-serif',fontWeight:'bold'}} />
                              </div>
                              <button type="submit" className='bg-[#2b3c17] text-white px-4 py-2 rounded-md hover:bg-[#435c26]'>Update Product</button>
                            </div>
                          </form>
                        </Box>
                      </Fade>
                    </Modal>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={addOpen}
        onClose={handleAddClose}
        closeAfterTransition
        BackdropProps={{ invisible: true }}
      >
        <Fade in={addOpen}>
          <Box sx={style}>
            <form onSubmit={handleAddSubmit}>
              <div className='flex flex-col'>
                <div className='flex'>
                  <p className='font-extrabold pt-3 pr-2'>Title:</p>
                  <Input name="title" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Category:</p>
                  {/* <FormControl sx={{ m: 1, minWidth: 80 }}> */}
                    <Select
                    required
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      name="category"
                      defaultValue="Succulents"
                      sx={{ height: '40px', fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold', width: '120px' }}
                    >
                     <MenuItem value="Succulents">Succulents</MenuItem>
                                    <MenuItem value="Indoor Plants">Indoor Plants</MenuItem>
                                    <MenuItem value="Cacti">Cacti</MenuItem>
                                    <MenuItem value="Herbs">Herbs</MenuItem>
                                    <MenuItem value="Angiosperms">Angiosperms</MenuItem>
                    </Select>
                  {/* </FormControl> */}
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Price:</p>
                  <Input name="price" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Quantity:</p>
                  <Input name="quantity" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Description:</p>
                  <Input name="description" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Rating:</p>
                  <Input name="rating" required className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <div className='flex'>
                  <p className='font-extrabold pt-2 pr-2'>Image:</p>
                  <Input name="image"required  className='w-full mb-2' sx={{ fontFamily: 'Cormorant Infant, sans-serif', fontWeight: 'bold' }} />
                </div>
                <button type="submit" className='bg-[#2b3c17] text-white px-4 py-2 rounded-md'>Add Product</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Manage;
