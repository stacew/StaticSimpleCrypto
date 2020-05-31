////////////////////////////////////////////0
function gcd(min, max) {
    while (min != 0) {
        let temp = max % min;
        max = min;
        min = temp;
    }
    return max;
};
function crypt(c, key, n) {
    console.log("c:", c, "key:", key, "n:", n);
    let result = 1;
    for (let i = 0; i < key; i++) {
        result *= c;
        result %= n;
    }
    console.log("result:", result);
    return result;
}
////////////////////////////////////////////1
const privateKey1 = document.getElementById("privateKey1");
const publicKey1 = document.getElementById("publicKey1");
function GenerateKey() {
    let primeMin = 37;
    let primeMax = primeMin * (2 + Math.floor(Math.random() * 10)) - 1;
    console.log("primeMin :", primeMin, "primeMax :", primeMax);
    console.log("gcd:", gcd(primeMin, primeMax));

    let n = primeMin * primeMax;
    let eulerPi = (primeMin - 1) * (primeMax - 1);
    console.log("n :", n, "eulerPi :", eulerPi);

    let publicKey = makePublicKey(eulerPi);
    console.log("e Public = ", publicKey);

    let privateKey = makePrivateKey(publicKey, eulerPi);
    console.log("d Private = ", privateKey);

    publicKey1.value = String(n).length + String(n) + String(publicKey);
    privateKey1.value = String(n).length + String(n) + String(privateKey);
    publicKey2.value = publicKey1.value;
    privateKey3.value = privateKey1.value;
}
function makePublicKey(eulerPi) {
    let publicKey = 2;
    while (gcd(publicKey, eulerPi) != 1) {
        publicKey++;
    }
    return publicKey;
}
function makePrivateKey(publicKey, eulerPi) {
    let privateKey = 2;
    while (((privateKey * publicKey) % eulerPi != 1)) {
        privateKey++;
    }
    return privateKey;
}
////////////////////////////////////////////2
const publicKey2 = document.getElementById("publicKey2");
const original2 = document.getElementById("original2");
const encrypted2 = document.getElementById("encrypted2");
function PublicEncrypt() {
    let nLen = Number(publicKey2.value[0]);
    let n = String(publicKey2.value).substring(1, nLen + 1);
    let publicKey = String(publicKey2.value).substring(nLen + 1, publicKey2.length);
    encrypted2.value = "";
    for (let i = 0; i < original2.value.length; i++) {
        encrypted2.value = encrypted2.value + crypt(original2.value[i].charCodeAt(0), publicKey, n) + '.';
    }
    encrypted3.value = encrypted2.value;
}
////////////////////////////////////////////3
const privateKey3 = document.getElementById("privateKey3");
const encrypted3 = document.getElementById("encrypted3");
const decrypted3 = document.getElementById("decrypted3");
function PrivateDecrypt() {
    let nLen = Number(privateKey3.value[0]);
    let n = String(privateKey3.value).substring(1, nLen + 1);
    let privateKey = String(privateKey3.value).substring(nLen + 1, privateKey3.length);
    decrypted3.value = "";
    for (let i = 0; i < encrypted3.value.length; i++) {
        let nStartIndex = i;
        let nFindIndex = encrypted3.value.indexOf(".", nStartIndex)
        let num = encrypted3.value.substring(nStartIndex, nFindIndex);
        decrypted3.value = decrypted3.value + String.fromCharCode(crypt(num, privateKey, n));
        i = nFindIndex;
    }
}