 function decodeMail() {
    // encoded base64 email with some random ? and !
    const ENCODED = '!bWF??pb!H?!?Rv!O?mZ!yYW5??jZXNjb!0?BhZHJ?hZ2!5?!?!?hLnh!5eg=!?!?=!?';
    let decoded = atob(ENCODED.split('').filter((c) => {
        return c == '?' || c == '!' ? '' : c;
    }).join(''));
    console.log(decoded);
}