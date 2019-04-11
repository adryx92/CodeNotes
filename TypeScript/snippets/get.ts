/**
 * @param {string} url GET URL
 * @param {Function} callback callback function that returns a JSON result
 */
function makeGet(url: string, callback: Function) {
    let http_request = new XMLHttpRequest();
    http_request.open('GET', url);
    http_request.send(null);

    http_request.onreadystatechange = function () {
        const DONE = 4; // readyState 4 means the request is done.
        const OK = 200; // status 200 is a successful return.
        if (http_request.readyState === DONE) {
            if (http_request.status === OK) {
                try {
                    let data = JSON.parse(http_request.responseText);
                    callback(data);
                }
                catch (e) {
                    console.log("JSON parse error: " + e);
                    callback();
                }
            }
            else {
                console.log("Generic error: " + http_request.status);
            }
        }
    };
}