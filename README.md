# cone-of-silence

encrypts and decrypts javascript objects using [private-box](https://github.com/auditdrivencrypto/private-box), in node or the browser

![](https://ipfs.pics/QmaQdXdQRJCcYHEfhvdDoQQKDJjpyKy2iPsR3opZu58HKe)

## installation

    npm install cone-of-silence

## usage

```javascript
var cone = require('cone-of-silence')

var bob = cone.keypair()
var alice = cone.keypair()
var msg = {
  muy: 'buena',
  onda: null,
}
var encrypted = cone.encrypt(msg, [bob.publicKey, alice.publi    cKey])
var decrypted = cone.decrypt(encrypted, alice.secretKey)
```

## license
BSD
