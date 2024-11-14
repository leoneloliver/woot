
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

export const useLatestProduct = (category) => {
  const [latestProduct, setLatestProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProduct = async () => {
      const query = `
        query {
          categoriesCollection(where: { categorySlug: "${category}" }) {
            items {
              linkedFrom {
                storeCollection(limit: 1, order: sys_firstPublishedAt_DESC) {
                  items {
                    slug
                    productName
                    price
                    picture {
                      url
                    }
                    category {
                      categoryName
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const collectionName = 'categoriesCollection';
        const data = await fetchData(query, collectionName);

        if (data && data.length > 0) {
          const products = data[0].linkedFrom.storeCollection.items || [];

          setLatestProduct(products[0]);
        }
      } catch (error) {
        console.error('Error fetching latest computers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProduct();
  }, [category]);

  return { latestProduct, loading };
};


const ProductDropdown = ({show, category}) => {

  const { latestProduct } = useLatestProduct(category);

  console.log(latestProduct);


    if (!show) return null;

    if(!latestProduct){
      return null;
    }

    return (

      <div className="fixed mt-0 w-64 bg-white shadow-xl overflow-hidden z-[60]">
          <div className="max-h-[400px] overflow-y-auto">

              <a
                href={`/${latestProduct.slug}`}
                className="block hover:bg-gray-50 p-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex flex-col">
                  <img
                    src={latestProduct.picture.url}
                    alt={latestProduct.productName}
                    className="w-full h-[180px] object-cover mb-2 rounded"
                  />
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {latestProduct.productName}
                  </h3>
                  <p className="text-sm font-bold text-green-700">
                    {latestProduct.price}
                  </p>
                </div>
              </a>

          </div>
      </div>
    );
  };

  export default ProductDropdown;
