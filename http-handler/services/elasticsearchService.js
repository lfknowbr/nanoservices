const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  apiVersion: '7.1',
  host: 'https://vpc-elasticsearch-cluster-nanose-rcmpxeuflr5ysu43nrshxy2pre.us-east-1.es.amazonaws.com'
})

const search = async query => {
  const result = await (client.search({
    index: 'imagens',
    q: `tags:${query}`
  }))
  return result
}

module.exports = {
  search: search
}
