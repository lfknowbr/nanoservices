const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  apiVersion: '7.1',
  host: 'https://vpc-alasticsearch-curso-bux3jw2fmfuyxok77wzds74yem.us-east-1.es.amazonaws.com'
})

const index = async documento => {
  const result = await (client.index({
    index: 'imagens',
    type: 'object',
    body: documento
  }))
  return result
}

module.exports = {
  index: index
}
