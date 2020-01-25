const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  apiVersion: '7.1',
  host: 'https://vpc-alasticsearch-curso-bux3jw2fmfuyxok77wzds74yem.us-east-1.es.amazonaws.com'
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
