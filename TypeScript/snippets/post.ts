/**
 * @param {string} url POST URL
 * @param {string} data POST data
 * @param {Function} callback callback function that returns the POST resule
 */
function makePost(url: string, data: string, callback: Function) {
    let http_request = new XMLHttpRequest();
    http_request.open('POST', url);
    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http_request.onload = function () {
        const DONE = 4; // readyState 4 means the request is done.
        const OK = 200; // status 200 is a successful return.
        if (http_request.readyState === DONE) {
            let result = (http_request.status === OK);
            
            // returns the result and a possible server message
            callback(result, http_request.responseText);
        }
        else
            callback(false, null);
    };
    http_request.send(data);
}