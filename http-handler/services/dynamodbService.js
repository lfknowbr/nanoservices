const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const dynamodb = new AWS.DynamoDB.DocumentClient()
const TABLE = 'imagens'

const put = item => {
  return new Promise((resolve, reject) => {
    dynamodb.put({
      TableName: TABLE,
      Item: {
        id: item.key,
        bucket: item.bucket
      }
    }, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })
}

module.exports = {
  put: put
}
