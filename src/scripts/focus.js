import ReactDOM from 'react-dom';

export default function focus(el){
  const elementToFocus = document.getElementById(el);
  ReactDOM.findDOMNode(elementToFocus).focus();
}