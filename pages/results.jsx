import fetchData from '../utils/fetchData';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Loader from '../components/Loader';
import Link from 'next/link';
import Card from '../components/Card';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselProducts from '../components/CarouselProducts';

const Results = ({ productsData }) => {
  const router = useRouter();
  const { keyword } = router.query;
  const currentPathname = router.asPath;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productsData) {
      setLoading(false);
    }
  }, [productsData]);

  const metaTitle = keyword ? `Search Results for ${keyword}` : 'Search Page';

  return (
    <>
      <Header router={currentPathname} />
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaTitle} />
        <link rel="icon" href="./img/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 max-w-screen-xl pt-12 pb-6">
        <h3 className="text-3xl font-semibold text-green-700 mb-6">Results for {keyword}</h3>
      </div>
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {loading && <Loader />}
        {!loading && productsData.map((product) => (
            <Link href={product.slug} key={product.slug} className="col-3 col-6-md col-12-sm">
              <Card product={product} />
            </Link>
  
          ))}
          {!productsData.length && <div>No Product Found!</div>}
      </div>
      {!productsData.length && <CarouselProducts/>}
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { keyword } = context.query;

  if (!keyword) {
    return {
      notFound: true,
    };
  }

  const query = `
    query {
      storeCollection(where: { OR:  [ {productName_contains: "${keyword}"} ] }, limit: 10, order: sys_firstPublishedAt_DESC) {
        items {
          productName
          slug
          picture {
            url
          }
          description {
            json
          }
          price
          category {
            categoryName
            categorySlug
          }
        }
      }
    }
  `;
  const collectionName = 'storeCollection';
  const productsData = await fetchData(query, collectionName);
  return {
    props: {
      productsData,
    },
  };
}
export default Results;