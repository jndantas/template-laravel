import './bootstrap';
import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import VueGoodTablePlugin from 'vue-good-table-next';
import { Form } from 'vform';
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
} from 'vform/src/components/bootstrap5'
// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import mitt from 'mitt';

import VueProgressBar from "@aacassandra/vue3-progressbar";

window.form = Form
const emitter = mitt();


const app = createApp({});
app.use(router)
app.use(VueGoodTablePlugin)
app.component(Button.name, Button)
app.component(HasError.name, HasError)
app.component(AlertError.name, AlertError)
app.component(AlertErrors.name, AlertErrors)
app.component(AlertSuccess.name, AlertSuccess)
app.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
})
app.use(VueSweetalert2);
window.Swal =  app.config.globalProperties.$swal;
app.config.globalProperties.emitter = emitter;

app.mount('#app');

