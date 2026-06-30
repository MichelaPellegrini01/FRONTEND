import Form from "react-bootstrap/Form";
import "./SearchBar.css";

function SearchBar() {
  return (
     <Form  className="searchBar">
      <Form.Control
        type="search"
        placeholder="Cerca una razza..." />
    </Form>
  );
}


export default SearchBar;