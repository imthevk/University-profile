export default function SearchBox() {
  return (
    <div className="flex items-center w-4/6 md:w-4/5 mx-auto p-2 bg-white border-2 border-gray-600 rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-5/6 pl-3 pr-4 py-2 text-gray-700 bg-white focus:outline-none"
      />
      <div className="pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </div>
  );
}
