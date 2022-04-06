
import { Fragment, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';


import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

import { DataContext } from '../../contexts/DataContext';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {

    const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;


    

  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(products.colors)


  let params = useParams();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

              


{products.filter((product) => product.urlName === params.productId).map((productDetail) => (


  <div key={productDetail._id} className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5">


                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                      <img src={productDetail.image} alt={productDetail.item} className="object-center object-cover" />
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{productDetail.item}</h2>

                    <section aria-labelledby="information-heading" className="mt-3">
                      <h3 id="information-heading" className="sr-only">
                        product information
                      </h3>

                      <p className="text-2xl text-gray-900">{productDetail.price}</p>

                      Reviews
                      <div className="mt-3">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  productDetail.rating > rating ? 'text-gray-400' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{productDetail.rating} out of 5 stars</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="sr-only">Description</h4>

                        <p className="text-sm text-gray-700">{productDetail.description}</p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-6">
                      <h3 id="options-heading" className="sr-only">
                        productDetail options
                      </h3>

                      <form>
                        {/* Colors */}
                        <div>
                          <h4 className="text-sm text-gray-600">Color</h4>

                          <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {/* {productDetail.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedColor,
                                      active && checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.bgColor,
                                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))} */}
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="mt-6">
                          <button
                            onClick={() => addToCart(productDetail)}
                            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                          >
                            Add to bag
                          </button>
                        </div>

                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                          <a href={productDetail.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                            View full details
                          </a>
                        </p>
                      </form>
                    </section> 
                    
                   </div> 
                </div> 
             

              ))}
 </div>

              {/* ******************************** */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}




























{/* // import { useParams } from 'react-router-dom';
// import '../../styles/ProductDetails.css';

// import { useContext } from 'react';
// import { DataContext } from '../../contexts/DataContext';

// export default function ProductDetails() { */}
{/* //   const value = useContext(DataContext);
//   const [products] = value.products;

//   const addToCart = value.addToCart;

//   let params = useParams();

//   const productDetails = products
//     .filter((product) => product.urlName === params.productId)
//     .map((productDetail) => (
//       <div className='details-div' key={productDetail.id}>
//         <div className='details-img'>
//           <img src={productDetail.image} alt={productDetail.item} />
//         </div>
//         <div className='detail-items__description'>
//           <p className='item'>{productDetail.item}</p>
//           <p className='price'>${productDetail.price}</p>
//           <button onClick={() => addToCart(productDetail)} className='add-btn'>
//             ADD TO CART
//           </button>
//           <br />
//           <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
//           <p className='description'>{productDetail.description}</p>
//         </div>
//       </div>
//     ));

//   return <>
  
  
//   {productDetails}</>;
// } */}