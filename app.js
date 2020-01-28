const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

/*
clima.getClima(40.750000,-74.000000)
    .then(clima => console.log(`El clima actual es : ${clima}`))
    .catch(console.log);
*/

const getInfo = async (direccion) => {

    try {

        const lug = await lugar.getLugarLatLng(direccion);

        const clim = await clima.getClima(lug.latitud, lug.longitud);

        return `El clima de ${lug.direccion} es de ${clim} °F
        `;
    } catch (e) {
        return `No se encontro un registro de clima para : ${direccion}`;

    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
