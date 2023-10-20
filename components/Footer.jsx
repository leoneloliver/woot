import {AiFillHeart, AiOutlineCoffee} from 'react-icons/ai';
export default function Footer() {
    return (
      <>
      <div className="footer container mx-auto px-12 py-12 max-w-screen-xl text-xs flex flex-wrap grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2  gap-4 bg-gray-100 text-black mt-24">
        
            

            <nav>
                <h2>Company Info</h2>
                <ul>
                    <li><a href="https://www.woot.com/about?ref=w_ngf_abt">About Us</a></li>
                    <li><a href="https://www.woot.com/jobs?ref=w_ngf_wfw">Careers</a></li>
                    <li><a href="https://www.woot.com/faq?ref=w_ngf_faqs">FAQ</a></li>
                    <li><a href="https://www.woot.com/feedback?ref=w_ngf_fdbk">Feedback</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Customer Care</h2>
                <ul>
                    <li><a href="https://account.woot.com/support?ref=w_ngf_spt">Customer Service</a></li>
                    <li><a href="https://www.woot.com/faq?ref=w_ngf_rp#what-is-woots-return-policy">Woot's Return Policy</a></li>
                    <li><a href="https://www.woot.com/warranty?ref=w_ngf_pw">Product Warranty</a></li>
                    <li><a href="https://www.woot.com/recalls?ref=w_ngf_pdn">Product Recall Notices</a></li>
                    <li><a href="https://www.woot.com/writeus?ref=w_ngf_wtus">Write Us</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Community</h2>
                <ul>
                    <li><a href="https://www.facebook.com/woot" data-external-ref-tag="w_ngf_fb" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com/woot" data-external-ref-tag="w_ngf_twit" target="_blank">Twitter</a></li>
                    <li><a href="https://forums.woot.com/">Forums</a></li>
                    <li><a href="https://forums.woot.com/c/everything-but-woot">Everything But Woot</a></li>
                    <li><a href="https://www.woot.com/blog?ref=w_ngf_blg">Blog</a></li>
                    <li><a href="https://developer.woot.com/" data-external-ref-tag="w_ngf_dev">Developer Portal</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Boring Stuff</h2>
                <ul>
                    <li><a href="https://www.woot.com/minions?ref=w_ngf_min">Woot Affiliates</a></li>
                    <li><a href="https://www.woot.com/terms?ref=w_ngf_tc">Terms and Conditions</a></li>
                    <li><a href="https://www.woot.com/Prop65?ref=w_ngf_p65">Prop 65</a></li>
                    <li><a href="https://www.woot.com/privacy?ref=w_ngf_pp">Privacy Policy</a></li>
                    <li><a href="https://vendorportal.woot.com" data-external-ref-tag="w_ngf_vp">Vendor Resources</a></li>
                </ul>
            </nav>
            
    
       
      </div>
      <div className="border-gray-300 border-t text-center container mx-auto px-12 py-2 max-w-screen-xl text-xs bg-gray-100 text-black ">
        <p className='flex text-center flex-wrap justify-center'>Developed by&nbsp;<a href="https://leo-frontend.netlify.app/" target="_blank" className='text-blue-500'>Leonel with</a>&nbsp;<AiFillHeart/>&nbsp;and&nbsp;&nbsp;<AiOutlineCoffee/></p>
      </div>
      </>
    )
  }



