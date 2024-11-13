import Slider from "react-slick";
import { useState, useEffect } from "react";
import fetchData from '../utils/fetchData';

export default function Carousel() {

  const [latests, setLatests] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  query {
    bannersCollection(limit: 10, order: sys_firstPublishedAt_ASC) {
      items {
          image{
            url
          }
        }
      }
    }

  `;

  useEffect(() => {
    fetchData(query, 'bannersCollection')
      .then((data) => {
        setLatests(data);

      })
      .catch((error) => {
        console.error(error);

      });
  }, []);



  return (
    <>

    <div className="no-padding container mx-auto px-4 max-w-screen-xl pt-20 pb-6">
      <Slider {...settings}>
        {latests.map((banner, index) => (
          <div key={index} className="slide-item">

            <div className="card mt-30">
              <img src={banner.image.url}/>

            </div>

          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}
