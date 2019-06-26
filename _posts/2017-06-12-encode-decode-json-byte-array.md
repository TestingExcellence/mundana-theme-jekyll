---
layout: post
title: "How to Encode and Decode JSON Byte Array"
author: Amir
categories: [ software testing ]
image: assets/images/coming-soon.jpg
---

The typical way to send binary in JSON is to base64 encode it. Java provides different ways to Base64 encode and decode a byte[]. One of these is DatatypeConverter.

Suppose we have a JSON Array as listed below:

    {"menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", "onclick": "CreateNewDoc()"},
          {"value": "Open", "onclick": "OpenDoc()"},
          {"value": "Close", "onclick": "CloseDoc()"}
        ]
      }
    }}

## Encode JSON as Base64

To encode the above JSON, we would use

    String base64Encoded = DatatypeConverter.printBase64Binary(jsonBytes);

## Decode Base64 JSON

To decode a base64 encoded JSON, we would use

    byte[] base64Decoded = DatatypeConverter.parseBase64Binary(base64Encoded);

Example code:

    import javax.xml.bind.DatatypeConverter;

    public class JsonEncodeDecode {

        public static void main(String[] args) {
            String json = "{\"menu\": {\n" +
                    "  \"id\": \"file\",\n" +
                    "  \"value\": \"File\",\n" +
                    "  \"popup\": {\n" +
                    "    \"menuitem\": [\n" +
                    "      {\"value\": \"New\", \"onclick\": \"CreateNewDoc()\"},\n" +
                    "      {\"value\": \"Open\", \"onclick\": \"OpenDoc()\"},\n" +
                    "      {\"value\": \"Close\", \"onclick\": \"CloseDoc()\"}\n" +
                    "    ]\n" +
                    "  }\n" +
                    "}}";

            byte[] bytes = json.getBytes();

            String base64Encoded = DatatypeConverter.printBase64Binary(bytes);
            System.out.println("Encoded Json:\n");
            System.out.println(base64Encoded + "\n");

            byte[] base64Decoded = DatatypeConverter.parseBase64Binary(base64Encoded);
            System.out.println("Decoded Json:\n");
            System.out.println(new String(base64Decoded));
        }
    }

**Output:**  
Encoded JSON

`eyJtZW51IjogewogICJpZCI6ICJmaWxlIiwKICAidmFsdW`

Decoded JSON

    {"menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", "onclick": "CreateNewDoc()"},
          {"value": "Open", "onclick": "OpenDoc()"},
          {"value": "Close", "onclick": "CloseDoc()"}
        ]
      }
    }}

_Note: the encoded_ JSON_ is truncated for sake of neatness, otherwise it's a very long string._

https://www.testingexcellence.com/parse-json-response-rest-assured/
