const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const sqs = new AWS.SQS()

const putMessage = message => {
  return new Promise((resolve, reject) => {
    sqs.sendMessage({
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/935245962507/post-processing-image-queue',
      MessageBody: JSON.stringify(message)
    }, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })
}

module.exports = {
  putMessage: putMessage
}
