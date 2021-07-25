const baseURL = 'https://api.huyapi.ga/v2'
const endpoints = require('./endpoints.json');
const axios = require('axios');

class HuyClient {
        constructor() {
          let self = this
          self.get = {};
        Object.keys(endpoints.sfw).forEach(async (endpoint) => {
                self.get[endpoint] = async function () {
                    var res = await axios.get(baseURL+endpoints.sfw[endpoint])
                    return res.data ? res.data : undefined;
                }
        })
    }
    
}
module.exports = HuyClient;