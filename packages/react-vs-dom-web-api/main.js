const jsContainer = document.getElementById('js-container');
const reactContainer = document.getElementById('react-container');

////////////////////////////////////////////////////////////////////////////////////////////////////
// Render HTML using vanilla JS DOM API
////////////////////////////////////////////////////////////////////////////////////////////////////
const renderViaDOMAPI = (container) => {
  container.innerHTML = `
    <div class="demo">
      Hello JS
      <label>
        <input type="checkbox" />
        Click me!
      </label>
      <p>${new Date().toString()}</p>
    </div>
  `;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Render HTML using React API
////////////////////////////////////////////////////////////////////////////////////////////////////
const renderViaReactAPI = (container) => {
  ReactDOM.render(
    React.createElement(
      'div',
      { className: 'demo' },
      'Hello React',
      React.createElement(
        'label',
        null,
        React.createElement(
          'input',
          { type: 'checkbox' },
        ),
        'Click me!'
      ),
      React.createElement(
        'p',
        null,
        new Date().toString()
      )
    ),
    container
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Render examples.
////////////////////////////////////////////////////////////////////////////////////////////////////
const render = () => {
  renderViaDOMAPI(jsContainer);
  renderViaReactAPI(reactContainer);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Trigger render every second.
////////////////////////////////////////////////////////////////////////////////////////////////////
window.setInterval(render, 1000);
