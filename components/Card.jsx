// import moment from 'moment';
import {FiClock} from 'react-icons/fi';

export default function Card({product}) {
  return (
    <div className="card mt-30 mb-8">
        <img src={product.picture.url} alt="Card Image"/>
        <div className="card-content">
            <p className="text-2xl font-semibold text-gray-900">{product.price}</p>
            <h2 className='h2-style clamp'>{product.productName}</h2>
            <p className='flex flex-wrapper text-sm font-normal text-red-500'><FiClock /> 4 hours left to buy</p>
        </div>
    </div>
  );
}