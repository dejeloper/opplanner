import { IconSearch } from "./icons";

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
        <div className="relative md:w-64">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            name="email"
            id="topbar-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Buscar"
            autoComplete="off"
          />
        </div>
      </form>
    </>
  );
}
