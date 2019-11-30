const validators = {}

validators.existOrErro = (input, msg) => {
  if (!input) throw msg
}

validators.itsHaveNumberAndCaracter = (input, msg) => {
  if (!input.match(/^[0-9a-z]+$/)) throw msg
}

module.exports = validators
