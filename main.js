import './style.css';
import { setupLogo } from './logo.js';

document.querySelector('#app').innerHTML = `
  <div id="mass-logo">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

setupLogo(document.querySelector('#mass-logo'));
