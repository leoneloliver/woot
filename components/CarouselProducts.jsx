import Slider from "react-slick";
import { useState, useEffect } from "react";
import fetchData from '../utils/fetchData';
import Card from '../components/Card';
import Link from "next/link";

export default function CarouselProducts() {

  const [latests, setLatests] = useState([]);



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const query = `
  query{
    storeCollection (limit: 8, order: sys_firstPublishedAt_ASC) {
      items{
        productName
        slug
        picture{
          url
        }
        description{
          json
        }
        price
        category{
          categoryName
          categorySlug
        }
        
      }
    }
  }
       
  `;



  useEffect(() => {
    fetchData(query, 'storeCollection')
      .then((data) => {
        setLatests(data);
        
      })
      .catch((error) => {
        console.error(error);
        
      });
  }, []);



  return (
    <>
    <div className="container mx-auto px-4 max-w-screen-xl mt-8 pt-8 pb-6 border-t border-gray-200">
      <h3 className="text-3xl font-semibold text-green-700 text-center-">
        Best Sellers
      </h3>
        <p className="text-center- mb-12">Deals our customers love best.</p>
        <div className="bg-gray-50 pt-4">
        <Slider {...settings}>
        {latests.map((product) => (
          <Link href={product.slug} key={product.slug} className="col-3 col-6-md col-12-sm">
          <Card product={product} />
        </Link>
        ))}
      </Slider>

        </div>
    </div>


    </>
  )
}