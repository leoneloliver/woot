import Link from "next/link";
import { FiShoppingCart , FiUser} from 'react-icons/fi';
import { MdOutlineForum } from 'react-icons/md';
import Bar from "./Bar";



export default function Header({router}) {

  let currentPathname = "/";
  if(router){
    currentPathname = router;
  }

  return (
    <>
      <nav className="border-gray-200 bg-gray-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-500">
          <a href="/" className="flex items-center">
            <img
              src="../img/woot-an-amazon-company.svg"
              className="h-16 ml-24"
              alt="Flowbite Logo"
            />
            
          </a>

          <img
              src="../img/mortimer.svg"
              className="h-28 mortimer"
              alt="Flowbite Logo"
            />

          <div>
            <ul className="flex flex-row">
              <li className="px-2 text-4xl text-gray-400">< MdOutlineForum /></li>
              <li className="px-2 text-4xl text-gray-400 border-x border-gray-500"><FiUser /></li>
              <li className="px-2 text-4xl"><FiShoppingCart /></li>
            </ul>
          </div>


            
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-b-1">
            <ul className="flex flex-row items-center justify-between max-w-screen-xl ml-20">
            <li className="px-4 py-2"><Link href="/">All Deals</Link></li>
            
              <li className="px-4 py-2"><Link className={`hover:text-green-700 ${currentPathname.includes("home-and-kitchen") ? "underline text-green-700" : ""}`} href="../category/home-and-kitchen">Home & Kitchen</Link></li>
              <li className="px-4 py-2"><Link className={`hover:text-green-700 ${currentPathname.includes("electronics") ? "underline text-green-700" : ""}`} href="../category/electronics">Electronics</Link></li>
              <li className="px-4 py-2"><Link className={`hover:text-green-700 ${currentPathname.includes("computers") ? "underline text-green-700" : ""}`} href="../category/computers">Computers</Link></li>
              <li className="px-4 py-2">Tools & Garden</li>
              <li className="px-4 py-2">Sports & Outdoors</li>
              <li className="px-4 py-2">Grocery & Household</li>
              
            </ul>
        </div>
      </nav>
      <Bar />

    </>
  )
}

