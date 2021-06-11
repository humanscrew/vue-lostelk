import { JSEncrypt } from "jsencrypt";

export default {
  encrypt(text: string, publicKey: string): string | boolean {
    const jse = new JSEncrypt({ default_key_size: "2048" });
    jse.setPublicKey(publicKey);
    const encryptText = jse.encrypt(text);
    return encryptText;
  },
};
