import CryptoJS from "crypto-js";

export default {
  //随机生成指定数量的16进制key
  generateKey(num = 16): string {
    const library =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < num; i++) {
      const randomPoz = Math.floor(Math.random() * library.length);
      key += library.substring(randomPoz, randomPoz + 1);
    }
    return key;
  },

  //加密
  encrypt(word: string, keyStr: string): string {
    keyStr = keyStr ? keyStr : "abcdsxyzhkj12580"; //判断是否存在key，不存在就用定义好的key
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    const src = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(src, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    // const encrypted = CryptoJS.AES.encrypt(src, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding });
    return encrypted.toString();
  },
  //解密
  decrypt(word: string, keyStr: string): string {
    keyStr = keyStr ? keyStr : "abcdsxyzhkj12580";
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
};
