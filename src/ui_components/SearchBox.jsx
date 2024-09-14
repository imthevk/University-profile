export default function SearchBox({ className }) {
  return (
    <div
      className={`flex justify-between py-3 items-center md:align-middle mb-5 md:mb-0 place-content-center md:place-items-start w-full md:w-5/6 lg:w-3/6 mx-auto p-2 md:p-4 bg-white border border-gray-300 rounded-lg shadow-sm ${className}`}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-5/6 pl-3 pr-4  text-gray-700 bg-white focus:outline-none border-gray-300 rounded-md"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search text-gray-600"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </div>
  );
}
