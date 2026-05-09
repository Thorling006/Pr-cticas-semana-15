<template>
    <div>
        <h2>Conversor de Temperatura</h2>

        <div>
            <label>Temperatura:</label>
            <input v-model.number="inputTemp" type="number" step="0.1">
        </div>

        <div>
            <label>De:</label>
            <select v-model="fromUnit">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
        </div>

        <div>
            <label>A:</label>
            <select v-model="toUnit">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
        </div>

        <div>
            <h3>Resultado: {{ convertedTemp.toFixed(2) }} {{ getUnitSymbol(toUnit) }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputTemp = ref(0);
const fromUnit = ref('celsius');
const toUnit = ref('fahrenheit');

const convertTemperature = (temp, from, to) => {
    let celsius;
    switch (from) {
        case 'celsius':
            celsius = temp;
            break;
        case 'fahrenheit':
            celsius = (temp - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = temp - 273.15;
            break;
    }

    switch (to) {
        case 'celsius':
            return celsius;
        case 'fahrenheit':
            return (celsius * 9/5) + 32;
        case 'kelvin':
            return celsius + 273.15;
    }
};

const convertedTemp = computed(() => {
    if (isNaN(inputTemp.value)) return 0;
    return convertTemperature(inputTemp.value, fromUnit.value, toUnit.value);
});

const getUnitSymbol = (unit) => {
    switch (unit) {
        case 'celsius': return '°C';
        case 'fahrenheit': return '°F';
        case 'kelvin': return 'K';
    }
};
</script>

<style>
</style>