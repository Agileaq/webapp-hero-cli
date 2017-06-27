import axios from 'axios';
import stringify from 'qs/lib/stringify';
import { BACKEND_URL } from '../constant/index';

// Promise Polyfills
if (typeof window.Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable();
    window.Promise = require('promise/lib/es6-extensions.js');
}

function request(url, method, data) {

    var options = {
        method: method ? method.toUpperCase() : 'GET',
        baseURL: BACKEND_URL,
        withCredentials: true,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        paramsSerializer: function (params) {
            return stringify(params, { arrayFormat: 'brackets' });
        },
        transformRequest: [function (req) {
          // Do whatever you want to transform the data
            return stringify(req);
        }]
    };

    data && options.method === 'GET' ? (options.params = data) : (options.data = data);

    return new window.Promise((resolve, reject) => {

        axios(options).then((resp) => {
            if (!resp) {
                reject(null);
                return;
            }
            resolve(resp.data);
        }, (error) => {
            reject(error);
        });
    });

}
export default request;
