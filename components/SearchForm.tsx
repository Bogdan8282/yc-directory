import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          type="text"
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="Search Startups"
        />
      </Form>
      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <button type="submit" className="search-btn">
        <Search width={6} height={6} color="#fff" className="size-5"/>
      </button>
    </>
  );
};

export default SearchForm;
