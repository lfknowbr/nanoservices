const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  apiVersion: '7.1',
  host: 'https://vpc-elasticsearch-cluster-nanose-rcmpxeuflr5ysu43nrshxy2pre.us-east-1.es.amazonaws.com'
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
