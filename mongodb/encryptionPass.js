import crypto from "crypto";


const encrypt = (password) => {
    return crypto.AES.encrypt(password, process.env.SECRET_KEY).toString();
};

const decrypt = (encryption) => {
   let bytes = crypto.AES.decrypt(encryption, secret);
   let originalText = bytes.toString(crypto.enc.Utf8);

   return originalText;
};

export default  decrypt;
