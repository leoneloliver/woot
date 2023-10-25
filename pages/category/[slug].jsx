import fetchData from '../../utils/fetchData';
import { useState, useEffect } from "react";
import Head from 'next/head';
import Loader from '../../components/Loader';
import Link from "next/link";
import Card from '../../components/Card';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const Details = ({ productsData }) => {

  const [shoppingCart, setShoppingCart] = useState([]);

  const router = useRouter();
  const currentPathname = router.asPath;

  let metaTitle = "Woot Best store ever!"
  if(productsData[0].seoMetatags){
    metaTitle = productsData[0].seoMetatags.seoTitle;
  }
  
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false);
  }, 100);

  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        setShoppingCart(JSON.parse(storedCart));
    }
  }, []);


  return (

    <>
      <Header router={currentPathname} shoppingCart={shoppingCart.length} />
      
      <Head>
        <title>{productsData[0].linkedFrom.storeCollection.items[0].category.categoryName}</title>
        <meta name="description" content={metaTitle} />
  
        <link rel="icon" href='./img/favicon.ico' />
      </Head>


      <div className="container mx-auto px-4 max-w-screen-xl pt-12 pb-6">

        <h3 className="text-3xl font-semibold text-green-700 mb-6">
          {productsData[0].linkedFrom.storeCollection.items[0].category.categoryName}
        </h3>
       

      </div>
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {loading && <Loader />}
        {!loading && productsData.map((latest) => (

          latest.linkedFrom.storeCollection.items.map((item) => (

            <Link href={`/${item.slug}`} key={item.slug} className="col-3 col-6-md col-12-sm">
              <Card product={item} />
            </Link>

          ))

        ))}
      </div>
      <Footer />

    </>
  );
};

export async function getServerSideProps(context) {

  const { slug } = context.query;
  const query = `
  query {
    categoriesCollection(where: { categorySlug: "${slug}" }, limit: 10) {
      items {
          seoMetatags {
            seoTitle
          }
          linkedFrom {
            storeCollection {
              total
              items {
                slug
                productName
                price
                picture{
                  url
                }
                category{
                    categoryName
                }
            }
          }
        }
      }
    }
  }
  `;
  const collectionName = 'categoriesCollection'; // Change this if your collection name is different

  const productsData = await fetchData(query, collectionName);

  if (!productsData.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productsData,
    },
  };
}

export default Details;