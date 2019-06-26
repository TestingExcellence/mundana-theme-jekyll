---
layout: post
title: "How To Query For All Partition Keys in DynamoDB?"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.

With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic.

**[How to put data in AWS Kinesis Stream](https://www.testingexcellence.com/put-data-aws-kinesis-stream-java/)**

The following code shows how to query a DynamoDB to retrieve all partition keys.

    import com.amazonaws.client.builder.AwsClientBuilder;
    import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
    import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
    import com.amazonaws.services.dynamodbv2.model.AttributeValue;
    import com.amazonaws.services.dynamodbv2.model.ScanRequest;
    import com.amazonaws.services.dynamodbv2.model.ScanResult;

    import java.util.ArrayList;
    import java.util.List;
    import java.util.Map;

    public class PartitionKeys {

        static String serviceEndpoint = "http://dynamodb.eu-west-1.amazonaws.com";
        static String region = "eu-west-1";

        static AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(serviceEndpoint, region))
                .build();

        public static List<String> getAllPartitionKeys() {
            List<String> partitionKeys = new ArrayList<>(0);

            // dynamo returns results in chunks - 
            // you'll need this to get the next one
            Map<String, AttributeValue> lastKeyEvaluated = null;

            do {
                ScanRequest scanRequest = new ScanRequest()
                        .withTableName("YOUR_TABLE_NAME")
                        .withExclusiveStartKey(lastKeyEvaluated);

                ScanResult result = client.scan(scanRequest);
                for (Map<String, AttributeValue> item : result.getItems()){
                    // for each item in the result set, examine the partition key
                    // to determine if it's a match
                    String key = item.get("YOUR_PARTITION_KEY").getS();
                    partitionKeys.add(key);
                }
                lastKeyEvaluated = result.getLastEvaluatedKey();
            } while (lastKeyEvaluated != null);

            return partitionKeys;
        }
    }