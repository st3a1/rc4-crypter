const rc4 = require("simple-rc4"); // НЕГРНЕГРНЕГРНЕГР

class CryptoRC4 {
  constructor(key, nonce) {
      this.key = Buffer.from(key);
      this.nonce = Buffer.from(nonce);
      this.encryptStream = new rc4(Buffer.concat([this.key, this.nonce]));
      this.encryptStream.update(Buffer.concat([this.key, this.nonce]));
      this.decryptStream =  new rc4(Buffer.concat([this.key, this.nonce]));
      this.decryptStream.update(Buffer.concat([this.key, this.nonce]));
  }

  /**
   * дешифрование байтов пакета
   * @param { Buffer } данные зашифрованных байтов пакета
   * @returns { Buffer } дешифрованные байты пакета
   */
  decrypt(data) { // de 
      const decryptedData = this.decryptStream.update(data);
      return decryptedData;
  }

  /**
   * шифрование байтов пакета
   * @param { Buffer } данные дешифрованных байтов пакета
   * @returns { Buffer } зашифрованные байты пакета
   */

  encrypt(data) { // en
      const encryptedData = this.encryptStream.update(data);
      return encryptedData;
  }
}

module.exports = CryptoRC4
