export function buildUrlQueryFromObject(params: any) {
    if (params == null)
        return "";
        
    return Object.keys(params)
        .filter(key => params[key] != null)
        .map(key => key + '=' + encodeURIComponent(params[key]))
        .join('&');
}

export function parseResponseErrorMsg(error: any) {
    if (!error)
        return "No error to display";

    if (typeof (error) === 'string')
        return error;

    if (error.response && error.response.data && error.response.data.message)
        return error.response.data.message;

    if (error.message)
        return error.message;

    if (error.statusText)
        return error.statusText;

    return "Unknown error";
}

export function parseAxiosResponse(promise: any) {
    return promise
        .then((response: { data: any; }) => response.data)
        .catch((error: any) => { throw parseResponseErrorMsg(error) });
}