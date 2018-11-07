const container = document.getElementById("container");

ReactDOM.render(
  React.createElement(
    "h1", // Render a <h1> HTML tag.
    null, // Props, we don't need them yet.
    "Hello World!" // Tag text content.
  ),
  container
);
