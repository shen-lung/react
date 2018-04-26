const checkServerStatus = (response) => {
    if (response.status >= 300) {
       console.log('Server ERROR.');
       return Promise.reject(response);
    }
    return Promise.resolve(response);
};

const parseData = (response) => {
    if ('json' in response) {
        return response.json();
    }

    return Promise.resolve({});
};

export const fetchVadim = (url, options = {}) => fetch(url, options).then(checkServerStatus).then(parseData);
