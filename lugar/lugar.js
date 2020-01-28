const getLugarLatLng = async (dir) => {

    const axios = require('axios');

    const incodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${incodeURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '321e68a360msh3ecacdd2efe53ecp1a1686jsn4a4c05c261a8'
        }
    });

    const response = await instance.get();

    if (response.data.Results.length > 0) {

        const data = response.data.Results[0];
        const direccion = data.name;
        const latitud = data.lat;
        const longitud = data.lon;

        return {
            direccion,
            latitud,
            longitud
        }

    } else {
        throw new Error(`No hay informacion para la direccion : ${dir}`);
    }

};

module.exports = {
    getLugarLatLng
}
