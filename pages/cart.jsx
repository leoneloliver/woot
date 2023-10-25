import { useState, useEffect } from "react";
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { RiDeleteBin5Line } from 'react-icons/ri';
import CarouselProducts from '../components/CarouselProducts'

export default function cart() {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState("$0");

    const removeItemFromCart = (index) => {
        const updatedCart = [...shoppingCart];
        updatedCart.splice(index, 1);
        setShoppingCart(updatedCart);
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));

        // subtotal
        let totalPrice = 0;
        JSON.parse(localStorage.getItem('shoppingCart')).forEach((item) => {
            const priceString = item.price.replace('$', ''); // Remove the dollar sign
            const priceNumber = parseFloat(priceString); // Convert to a floating-point number
            totalPrice += priceNumber * item.quantity; // Multiply by quantity
        });
        setTotalPrice("$" + totalPrice.toFixed(2));
        // subtotal
    };


    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setShoppingCart(JSON.parse(storedCart));

            // subtotal
            let totalPrice = 0;
            JSON.parse(storedCart).forEach((item) => {
                const priceString = item.price.replace('$', ''); // Remove the dollar sign
                const priceNumber = parseFloat(priceString); // Convert to a floating-point number
                totalPrice += priceNumber * item.quantity; // Multiply by quantity
            });
            setTotalPrice("$" + totalPrice.toFixed(2));
            // subtotal
        }
    }, []);


    return (
        <>
            <Head>
                <title>Shopping Cart</title>
                <meta name="description" content="Shopping Cart" />
                <link rel="icon" href='./img/favicon.ico' />
            </Head>
            <Header shoppingCart={shoppingCart.length} />

            {shoppingCart.length === 0 && (
                <>
                    <div className='mt-4 container mx-auto px-4 max-w-screen-xl mb-12 xl:mb-20 lg:mb-20 md:mb-12'>
                        <h2 className="mt-12 mb-8 text-3xl font-semibold text-gray-700">Shopping Cart (0 items)</h2>
                    </div>
                    <CarouselProducts/>
                </>
            )}

            {shoppingCart.length > 0 && (
                <div className='shopping-cart'>
                    <div className='mt-4 container mx-auto px-4 max-w-screen-xl mb-12 xl:mb-20 lg:mb-20 md:mb-12'>
                        <h2 className="mt-12 mb-8 text-3xl font-semibold text-green-700" id="slide-over-title">Shopping Cart</h2>
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {shoppingCart.map((item, index) => (

                                <li key={index} className="flex py-6">
                                    <a href={`/${item.slug}`} >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 p-2">
                                            <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                                        </div>
                                    </a>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <a href={`/${item.slug}`} >
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3 className='text-1xl font-bold max-w-[70%]'>
                                                        {item.title}
                                                    </h3>
                                                    <p className="ml-4 text-2xl">{item.price}</p>
                                                </div>

                                            </a>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500 mt-4">Qty <span className="text-gray-900 text-1xl font-bold border border-gray-300 py-2 px-5">{item.quantity}</span></p>

                                                <div className="flex">
                                                    <button onClick={() => removeItemFromCart(index)} type="button" className="font-large text-gray-600 hover:text-gray-500 text-2xl font-bold"><RiDeleteBin5Line /></button>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </li>

                            ))}
                        </ul>
                        <div className="mt-12 mb-6  text-right font-semibold text-green-700">Subtotal: <span className="text-2xl font-bold text-green-700">{totalPrice}</span></div>
                    </div>
                </div>
            )}
            <Footer />

        </>
    )
}

