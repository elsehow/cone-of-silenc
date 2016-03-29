var sodium = require('chloride')

var c = require('private-box')

var keypair = sodium.crypto_box_keypair

function ctxtify (obj) { 
  return new Buffer(JSON.stringify(obj)) 
}

function parseify (buff) { 
  return JSON.parse(buff.toString()) 
}

function encrypt (obj, recipients) {
  return c.multibox(ctxtify(obj), recipients)
}

function decrypt (buff, sk) {
  return parseify(c.multibox_open(buff, sk))
}

module.exports = {
  keypair: keypair,
  encrypt: encrypt,
  decrypt: decrypt,
}
