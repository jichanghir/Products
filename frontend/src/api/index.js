import axios from 'axios';

const ADDR = 'http://localhost:3000/api';

const ApiMock = {
    addNewProduct() {

    }
}

const ApiReal = {
    addNewProduct() {
        return axios.post(`${ADDR}/addNewProduct`);
    }
}

export default (requestName) => new Promise((resolve, reject) => {
    ApiReal[requestName]()
    .then((result) => {
        if (result.data.result) {
            resolve(result.data.result);
        }
        else if (result.data.error) {
            reject(result.data.error);
        }
        else {
            throw new Error(`Api ${requestName} not work`);
        }
    });
})
