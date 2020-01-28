const axios = require('axios');

const getClima = async (lat, lon) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ce7cfcd757ae1a9d14ff85250145ded8`);

    return response.data.list[0].main.temp;
};

module.exports = {
    getClima
}
