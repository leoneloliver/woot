import Link from 'next/link';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { MdOutlineForum } from 'react-icons/md';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Bar from './Bar';
import ProductDropDown from '../components/ProductDropDown';

export default function Header({ router, shoppingCart }) {
  const [ShowProduct, setShowProduct] = useState();

  let currentPathname = '/';
  if (router) {
    currentPathname = router;
  }

  return (
    <>
      <nav className="border-gray-200 bg-gray-50 relative z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-500">
          <a href="/" className="flex items-center">
            <img
              src="../../img/woot-an-amazon-company.svg"
              className="h-16 ml-24 logo-part"
              alt="Flowbite Logo"
            />
          </a>

          <img
            src="../../img/mortimer.svg"
            className="h-28 mortimer"
            alt="Flowbite Logo"
          />
          <SearchBar />
          <div className="container-ico">
            <ul className="flex flex-row">
              <li className="px-2 text-4xl text-gray-400 forum">
                <MdOutlineForum />
              </li>
              <li className="px-2 text-4xl text-gray-400 border-x border-gray-500 user">
                <FiUser />
              </li>
              <li className="px-2 text-4xl" id="btn-quantity">
                <a href="/cart">
                  <FiShoppingCart />
                </a>
              </li>
            </ul>
            {shoppingCart > 0 && (
              <div className="cart-quantity">{shoppingCart}</div>
            )}
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-b-1 menu-container pt-1">
          <ul className="flex flex-row items-center justify-between max-w-screen-xl ml-20">
            <li className="px-4 py-2 hover:text-green-700">
              <Link href="/">All Deals</Link>
            </li>
            <li
              className={`px-4 py-2 hover:text-green-700 relative ${
                currentPathname.includes('home-and-kitchen')
                  ? 'underline text-green-700'
                  : ''
              }`}
            >
              <Link href={`/category/home-and-kitchen`}>Home & Kitchen</Link>
            </li>
            <li
              className={`px-4 py-2 hover:text-green-700 relative ${
                currentPathname.includes('electronics')
                  ? 'underline text-green-700'
                  : ''
              }`}
              onMouseEnter={() => setShowProduct('electronics')}
              onMouseLeave={() => setShowProduct(false)}
            >
              <Link href={`/category/electronics`}>Electronics</Link>
              <div className="absolute left-0 top-full hidden md:block">
                <ProductDropDown
                  category={'electronics'}
                  show={ShowProduct === 'electronics'}
                />
              </div>
            </li>
            <li
              className={`px-4 py-2 hover:text-green-700 relative ${
                currentPathname.includes('computers')
                  ? 'underline text-green-700'
                  : ''
              }`}
              onMouseEnter={() => setShowProduct('computers')}
              onMouseLeave={() => setShowProduct(false)}
            >
              <Link href={`/category/computers`}>Computers</Link>
              <div className="absolute left-0 top-full hidden md:block">
                <ProductDropDown
                  category={'computers'}
                  show={ShowProduct === 'computers'}
                />
              </div>
            </li>

            <li
              className={`px-4 py-2 hover:text-green-700 relative ${
                currentPathname.includes('tools-and-garden')
                  ? 'underline text-green-700'
                  : ''
              }`}
            >
              <Link href={`/category/tools-and-garden`}>Tools & Garden</Link>
            </li>
            <li
              className={`px-4 py-2 hover:text-green-700  relative ${
                currentPathname.includes('sports-and-outdoors')
                  ? 'underline text-green-700'
                  : ''
              }`}
            >
              <Link href={`/category/sports-and-outdoors`}>
                Sports & Outdoors
              </Link>
            </li>
            <li
              className={`px-4 py-2 hover:text-green-700 relative ${
                currentPathname.includes('grocery-and-household')
                  ? 'underline text-green-700'
                  : ''
              }`}
            >
              <Link href={`/category/grocery-and-household`}>
                Grocery & Household
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Bar />
    </>
  );
}
