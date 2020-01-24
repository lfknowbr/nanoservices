const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const dynamo = new AWS.DynamoDB.DocumentClient()

const TABLE = 'imagens'

const putItem = item => {
  return new Promise((resolve, reject) => {
    dynamo.put({
      TableName: TABLE,
      Item: item
    }, (err, data) => {
      if (err) {
        return reject(err)
      }
      return (resolve(data))
    })
  })
}

const getItem = id => {
  return new Promise((resolve, reject) => {
    dynamo.get({
      TableName: TABLE,
      Key: {
        id: id
      },
      ConsistentRead: true
    }, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data.Item)
    })
  })
}

module.exports = {
  putItem: putItem,
  getItem: getItem
}
