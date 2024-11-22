import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query.trim();
    if (query === "") {
      alert("Please enter a valid search query!");
      return;
    }
    onSearch(query);
    resetForm();
  };

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field name="query" placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
