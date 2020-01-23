'use strict'
const filterService = require('./service/thumbnailService')

module.exports.thumbnail = async event => {
  console.log('Evento do SNS recebido com sucesso', JSON.stringify(event))
  await thumbnailService.thumbnail(event)

  return { message: 'Thumbnail gerado com sucesso!', event }
}
