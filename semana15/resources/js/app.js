import './bootstrap';
import { createApp } from 'vue';
import saludoComponent from './components/saludoComponent.vue';
import SaludoComponent from './components/saludoComponent.vue';
import TemperatureConverter from './components/TemperatureConverter.vue';


createApp(SaludoComponent).mount('#app');
createApp(TemperatureConverter).mount('#app');


