import { useState, useEffect } from "react";
import Link from "next/link";
import Card from '../components/Card';
import Loader from '../components/Loader';
import fetchData from '../utils/fetchData';
import Carousel from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";

function Latest() {
  const [latests, setLatests] = useState([]);
  const [loading, setLoading] = useState(true);


  const query = `
  query{
    storeCollection (limit: 100, order: sys_firstPublishedAt_DESC) {
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
        setTimeout(() => {
          setLoading(false);
        }, 100);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>

      <Header />
      <Carousel />
      <div className="container mx-auto px-4 max-w-screen-xl pt-12 pb-6">

        <h3 className="text-3xl font-semibold text-green-700">
          Daily Deals
        </h3>
        <p>Our deepest discounts, one day only.</p>
      </div>
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {loading ? <Loader /> : latests.map((product) => (
          <Link href={product.slug} key={product.slug} className="col-3 col-6-md col-12-sm">
            <Card product={product} />
          </Link>

        ))}
      </div>
      <Footer />
    </>
  );
}
export default Latest;