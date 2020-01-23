'use strict'
const AWS = require('aws-sdk')
const elasticsearch = require('elasticsearch')

AWS.config.update({
  region: 'us-east-1'
})

const dynamo = new AWS.DynamoDB.DocumentClient()

const client = new elasticsearch.Client({
  apiVersion: '7.1',
  host: 'https://vpc-elasticsearch-nanoservice-go6g4oied3o32makuxgkkbiw2u.us-east-1.es.amazonaws.com'
})

module.exports.consumer = async event => {
  try {
    await client.search({
      index: 'index',
      q: '*'
    })
  } catch (error) {
    console.log(error)
  }

  await new (Promise((resolve, reject) => {
    dynamo.get({
      TableName: 'images',
      Key: {
        id: '123'
      }
    }, (err, data) => {
      console.log('err', err)
      console.log('data', data)
      return resolve({})
    })
  }))()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
