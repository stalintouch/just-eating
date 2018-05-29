import ReactDOM from 'react-dom';

// this function makes auto focus possible, it takes an element to be focus at 
export default function focus(el) {
  const elementToFocus = document.getElementById(el);
  if (!elementToFocus) return;
  ReactDOM.findDOMNode(elementToFocus).focus();
}
