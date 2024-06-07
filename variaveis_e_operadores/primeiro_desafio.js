



const precoCombustivel = 6.29;
const combustivelPorKm = 12;
const distanciaViagem = 1750;

const litrosConsumidos = distanciaViagem / combustivelPorKm;

const valorGasto = litrosConsumidos * combustivelPorKm


console.log(valorGasto.toFixed(2));