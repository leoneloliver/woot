import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        router.push(`/results?keyword=${encodeURIComponent(keyword)}`);
    };

    return (

        <form onSubmit={handleSearch} className="search-bar">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
                Search
            </label>
            <div className="relative max-w-screen-xl">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500"
                    placeholder="Search Products..."
                    required="required"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
    
                />
                <button type="submit" className="btn-search absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-orange-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
            </div>
        </form>


    );
};

export default SearchBar;
