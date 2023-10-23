import {AiFillHeart, AiOutlineCoffee} from 'react-icons/ai';
export default function Footer() {
    return (
      <>
      <div className="footer container mx-auto px-12 py-12 max-w-screen-xl text-xs flex flex-wrap grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2  gap-4 bg-gray-100 text-black mt-24">
        
            

            <nav>
                <h2>Company Info</h2>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Customer Care</h2>
                <ul>
                    <li><a href="#">Customer Service</a></li>
                    <li><a href="#">Woot's Return Policy</a></li>
                    <li><a href="#">Product Warranty</a></li>
                    <li><a href="#">Product Recall Notices</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Community</h2>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developer Portal</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Boring Stuff</h2>
                <ul>
                    <li><a href="#">Woot Affiliates</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Prop 65</a></li>
                    <li><a href="#">Privacy Policy</a></li>

                </ul>
            </nav>
            
    
       
      </div>
      <div className="border-gray-300 border-t text-center container mx-auto px-12 py-2 max-w-screen-xl text-xs bg-gray-100 text-black ">
        <p className='flex text-center flex-wrap justify-center'>Developed by&nbsp;<a href="https://leo-frontend.netlify.app/" target="_blank" className='text-blue-500'>Leonel</a>&nbsp;with&nbsp;<AiFillHeart/>&nbsp;and&nbsp;&nbsp;<AiOutlineCoffee/></p>
      </div>
      </>
    )
  }



