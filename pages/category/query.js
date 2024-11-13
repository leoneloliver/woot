export const useLatestProduct = () => {
  const [latestProduct, setLatestProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProduct = async () => {
      const query = `
        query {
          categoriesCollection(where: { categorySlug: "computers" }) {
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
          setLatestProduct(products);
        }
      } catch (error) {
        console.error('Error fetching latest computers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProduct();
  }, []);

  return { latestProduct, loading };
};
