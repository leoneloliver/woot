
const ProductDropdown = ({show}) => {

    if (!show) return null;

    return (
      <div className="fixed mt-0 w-64 bg-white shadow-xl overflow-hidden z-[60]">
          <div className="max-h-[400px] overflow-y-auto">

              <a
                href={`/`}
                className="block hover:bg-gray-50 p-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex flex-col">
                  <img
                    src={``}
                    alt={``}
                    className="w-full h-[180px] object-cover mb-2 rounded"
                  />
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    Product Name
                  </h3>
                  <p className="text-sm font-bold text-green-700">
                    Product Price
                  </p>
                </div>
              </a>

          </div>
      </div>
    );
  };

  export default ProductDropdown;
