// utils/fetchData.js
const fetchData = async (query, collectionName) => {
  const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  const dataJson = await result.json();
  const data = await dataJson.data[collectionName].items;
  return data;
};
export default fetchData;