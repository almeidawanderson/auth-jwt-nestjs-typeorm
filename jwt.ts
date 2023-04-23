const base64Url = require('base64url')

const header = {
  alg: 'HS256',
  typ: 'JWT'
};

const payload = {
  username: 'user1@user.com',
  name: 'Wanderson Almeida',
  exp: new Date().getTime()
}

const key =  'abcd123456';

const headerEncoded =base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload))

const crypt = require('crypto')

const signature = crypt
      .createHmac('sha256', key)
      .update(`${headerEncoded}. ${payloadEncoded}`)
      .digest('bin')


console.log('jwt gerado:', `${headerEncoded}.${payloadEncoded}.${base64Url(signature)}`)

//secret-key: chave pessoal, geralmente fica nos arquivos .env
//passport nos ajudara na criação desse token

      
      