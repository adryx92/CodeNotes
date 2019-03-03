 function decodeMail() {
    const STR = '!bWF??pb!H?!?Rv!O?mZ!yYW5??jZXNjb!0?BhZHJ?hZ2!5?!?!?hLnh!5eg=!?!?=!?';
    let addrTo = atob(STR.split('').filter((c) => {
        return c == '?' || c == '!' ? '' : c;
    }).join(''));
}