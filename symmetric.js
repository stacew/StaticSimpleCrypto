//////////////////////////////////////////// 0
function crypt(i) {
    c = symmetricKey1.value[i].charCodeAt(0);
    return i % 2 ? -c : c;
}
function encrypt(c) {
    cc = c.charCodeAt(0);
    for (let i = 0; i < symmetricKey1.value.length; i++) {
        cc = cc + crypt(i);
    }
    if (cc == 0) {
        alert("encrypt");
    }
    return String.fromCharCode(cc);
}
function decrypt(c) {
    cc = c.charCodeAt(0);
    for (let i = 0; i < symmetricKey1.value.length; i++) {
        cc = cc - crypt(i);
    }
    if (cc == 0) {
        alert("decrypt");
    }
    return String.fromCharCode(cc);
}
//////////////////////////////////////////// 1
const symmetricKey1 = document.getElementById("symmetricKey1");
//////////////////////////////////////////// 2
const original2 = document.getElementById("original2");
const encrypted2 = document.getElementById("encrypted2");
function SymmetricEncrypt() {
    encrypted2.value = "";
    for (let i = 0; i < original2.value.length; i++) {
        encrypted2.value = encrypted2.value + encrypt(original2.value[i]);
    }
    encrypted3.value = encrypted2.value;
}
//////////////////////////////////////////// 3
const encrypted3 = document.getElementById("encrypted3");
const decrypted3 = document.getElementById("decrypted3");
function SymmetricDecrypt() {
    decrypted3.value = "";
    for (let i = 0; i < encrypted3.value.length; i++) {
        decrypted3.value = decrypted3.value + decrypt(encrypted3.value[i]);
    }
}


