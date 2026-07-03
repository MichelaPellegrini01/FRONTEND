import Form from "react-bootstrap/Form";
import "./SearchBar.css";

function SearchBar({
  className = "",
  value,
  onChange,
}) {
  return (
    <Form>
      <Form.Control
        type="search"
        placeholder="Cerca una razza..."
        className={`searchBar ${className}`}
        value={value}
onChange={onChange}
      />
    </Form>
  );
}

export default SearchBar;