import ReactDOM from 'react-dom';
import './global.scss';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(router(), ICE_CONTAINER);