const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

AWS.config.update({
  region: 'us-east-1'
})

const S3 = new AWS.S3()
const BUCKET = 'nanoservices-images-udemy-curso'

const upload = body => {
  const id = uuid()
  return new Promise((res,rej) =>{
    S3.putObject({
      Bucket: BUCKET,
      Key: `${id}.jpg`,
      Body: new Buffer.from(body.replace(/^data:image\/\w+;base64,/,""),'base64'),
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg'
    }, (err) => {
      if(err) {
        return rej(err)
      }
      return res({
        bucket: BUCKET,
        key: `${id}.jpg`
      })
    })
  })
}

module.exports = {
  upload:upload
}