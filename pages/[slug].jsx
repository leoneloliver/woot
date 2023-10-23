import fetchData from '../utils/fetchData';
import { useState } from "react";
import Head from 'next/head';
import LoaderDetails from '../components/LoaderDetails';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FiClock } from 'react-icons/fi';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import { BiCartDownload } from 'react-icons/bi';
import CarouselProducts from '../components/CarouselProducts'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

function renderOptions(links) {

  return {
    renderNode: {

      [BLOCKS.EMBEDDED_ENTRY]: (node, index) => {
        const entryMap = new Map();
        for (const entry of links.entries.block) {
          entryMap.set(entry.sys.id, entry);
        }
        const entry = entryMap.get(node.data.target.sys.id);

      },

      [BLOCKS.EMBEDDED_ASSET]: (node, index) => {
        const assetMap = new Map();
        for (const asset of links.assets.block) {
          assetMap.set(asset.sys.id, asset);
        }

        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <>
            {asset.contentType === "video/quicktime" &&
              <video width="100%" height="auto" controls>
                <source src={asset.url} type="video/mp4" />
              </video>
            }
            {(asset.contentType === "image/jpeg" || asset.contentType === "image/png" || asset.contentType === "image/webp") &&
              <figure>
                <img src={asset.url} alt={asset.title} height={asset.height} width={asset.width} className="asset p-5" />
              </figure>
            }

          </>
        );
      },
    },
  };
}

const Details = ({ productData }) => {

  const [activeTab, setActiveTab] = useState('details');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (

    <>
      <Head>
        <title>{productData[0].productName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href='./img/favicon.ico' />
      </Head>
      <Header />
      <div className='mt-4 container mx-auto px-4 max-w-screen-xl flex flex-wrap mb-8 xl:mb-20 lg:mb-20 md:mb-12'>

        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-xs font-medium text-cyan-600"
              >
                <svg
                  className="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span
                  className="inline-flex items-center text-xs font-medium text-cyan-600"
                >
                  Category
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="inline-flex items-center text-xs font-medium text-cyan-600">
                  {productData[0].category.categoryName}
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="inline-flex items-center text-xs font-medium text-cyan-900">
                  {productData[0].productName.substring(0, 25)}...
                </span>
              </div>
            </li>


          </ol>
        </nav>


      </div>
      {loading && <LoaderDetails />}
      {!loading && productData.map((product) => (
        <div key={product.slug} >
          <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap grid xl:grid-cols-2  sm:grid-cols-2 xs:grid-cols-1 gap-4">

            <div>

              <h4 className="h1-style text-2xl htitle">{product.productName}</h4>

              <p className='text-3xl mt-6'>{product.price}</p>

              <div className='flex flex-wrapper py-4 text-orange-500'>
                <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiOutlineStar /> <span className='text-xs text-green-700 pl-4'>194 Amazon ratings</span>
              </div>

              <p className='text-xs font-medium py-4'>Shipping <span className="text-xs font-bold">Standard</span></p>
              <p className="text-xs font-medium">Shipping to Alaska, Hawaii, and PO Boxes is not available for this item</p>

              <div className='flex mt-6'>
                <label for="quantity" className='text-xs font-medium pr-3'>Quantity:</label>
                <select name="quantity" id="quantity" className='border border-gray-300 py-1 px-3 mr-3 -mt-2'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p className='text-xs font-medium'>Limit 3 per customer</p>
              </div>

              <button type="button" className="btn-buy focus:outline-none text-white bg-orange-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-600 font-large rounded-lg px-5  pr-8 py-2.5 mr-2 mb-12 mt-8 text-3xl flex"><span className='mr-2'><BiCartDownload /></span>Add to Cart</button>

              <p className='flex flex-wrapper text-sm font-normal text-red-500 left-to-buy'><FiClock /> 4 hours left to buy</p>

              <div className='mt-8 border-t border-gray-200 pt-4'>
                <img src='../img/plus.png' className='-ml-3' />
                <p className='pt-2'>NETGEAR & Linksys Routers and Systems</p>
                <p className='text-xs py-2'>The Internet is a fad. Prove me wrong.</p>
              </div>

            </div>
            <div>

              <img src={product.picture.url} className="border border-gray-200 mb-8 p-4 rounded" />

              <div className='tabs -mb-4'>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
                  <li className="mr-2">
                    <a
                      onClick={() => handleTabClick('details')}
                      className={`inline-block p-4  bg-gray-100 rounded-t-lg border-t border-l border-r  border-gray-200 ${activeTab === 'details' ? 'active bg-white ' : ''}`}
                    >
                      Details
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      onClick={() => handleTabClick('specs')}
                      className={`inline-block p-4 bg-gray-100 rounded-t-lg border-t border-l border-r  border-gray-200 ${activeTab === 'specs' ? 'active bg-white ' : ''}`}
                    >
                      Specs
                    </a>
                  </li>
                </ul>

              </div>


              <div className='border border-gray-200 p-4 rounded prod-descrition'>
                {activeTab === 'details' && product.description && documentToReactComponents(product.description.json, renderOptions(product.description.links))}

                {activeTab === 'specs' && product.specs && documentToReactComponents(product.specs.json, renderOptions(product.specs.links))}

              </div>

            </div>
          </div>
        </div>

      ))}
      <CarouselProducts />
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  const { slug } = context.query;
  const query = `
  query{
    storeCollection (where:{slug: "${slug}"},limit: 1) {
      items{
        productName
        slug
        picture{
          url
        }
        description{
          json
        }
        specs{
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
  const collectionName = 'storeCollection'; // Change this if your collection name is different

  const productData = await fetchData(query, collectionName);

  if (!productData.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productData,
    },
  };
}

export default Details;