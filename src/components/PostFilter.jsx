import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="search..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by:"
        options={[
          { value: "title", name: "Sort by name" },
          { value: "body", name: "Sort by content" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
