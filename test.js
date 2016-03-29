var test = require('tape')
var cone = require('.')

test('can enc and dec object', t => {
  var bob = cone.keypair()
  var alice = cone.keypair()
  var msg = {
    muy: 'buena',
    onda: null,
  }
  var encrypted = cone.encrypt(msg, [bob.publicKey, alice.publicKey])
  var decrypted = cone.decrypt(encrypted, alice.secretKey)
  t.deepEquals(decrypted, msg)
  t.end()
})
