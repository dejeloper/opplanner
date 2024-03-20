import { RiSearchLine } from "react-icons/ri";

export function SearchDasboard() {
  const searchDasboard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("No fue posible hacer la búsqueda");
  };

  return (
    <>
      <form
        action="#"
        method="GET"
        className="hidden md:block md:pl-2"
        onSubmit={searchDasboard}
      >
        <label htmlFor="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative md:w-80">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <RiSearchLine className="w-5 h-5" />
          </div>
          <input
            type="text"
            name="search"
            id="topbar-search"
            className="bg-transparent border-none outline-none text-sm rounded-lg block w-full pl-10 p-2.5 placeholder:text-gray-300"
            placeholder="Buscar"
            autoComplete="off"
          />
        </div>
      </form>
    </>
  );
}
