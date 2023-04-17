const data = [
  {
    "name": "singular",
    "description": "Successfull Track Call with sessionEventList from Config ",
    "feature": "router",
    "module": "destination",
    "version": "v0",
    "input": {
      "request": {
        "body": {
          "input":
            [
              {
                "destination": {
                  "Config": {
                    "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                    "sessionEventList": [
                      {
                        "sessionEventName": "mysessionevent"
                      },
                      {
                        "sessionEventName": "randomuser"
                      },
                      {
                        "sessionEventName": "titanium"
                      }
                    ]
                  }
                },
                "metadata": {
                  "jobId": 1
                },
                "message": {
                  "type": "track",
                  "event": "mysessionevent",
                  "userId": "ruddersampleX3",
                  "request_ip": "14.5.67.21",
                  "context": {
                    "app": {
                      "build": "1",
                      "name": "RudderAndroidClient",
                      "namespace": "com.rudderstack.demo.android",
                      "version": "1.0"
                    },
                    "device": {
                      "manufacturer": "Google",
                      "model": "Android SDK built for x86",
                      "name": "generic_x86",
                      "type": "android",
                      "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                      "attStatus": "true",
                      "id": "fc8d449516de0dfb",
                      "adTrackingEnabled": "true",
                      "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1"
                    },
                    "library": {
                      "name": "com.rudderstack.android.sdk.core",
                      "version": "0.1.4"
                    },
                    "locale": "en-US",
                    "network": {
                      "carrier": "Android",
                      "bluetooth": false,
                      "cellular": true,
                      "wifi": true
                    },
                    "campaign": {
                      "source": "google",
                      "medium": "medium",
                      "term": "keyword",
                      "content": "some content"
                    },
                    "os": {
                      "name": "Android",
                      "version": "9"
                    },
                    "screen": {
                      "density": 420,
                      "height": 1794,
                      "width": 1080
                    },
                    "timezone": "Asia/Mumbai",
                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)"
                  },
                  "properties": {
                    "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                    "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                    "install": "SM-G935F",
                    "category": "Games",
                    "checkout_id": "12345",
                    "order_id": "1234",
                    "affiliation": "Apple Store",
                    "receipt_signature": "1234dfghnh",
                    "referring_application": "2134dfg",
                    "total": 20,
                    "revenue": 15.0,
                    "shipping": 22,
                    "tax": 1,
                    "discount": 1.5,
                    "coupon": "ImagePro",
                    "currency": "USD",
                    "fetch_token": "123asd23",
                    "product_id": "123",
                    "products": [
                      {
                        "product_id": "789",
                        "sku": "G-32",
                        "name": "Monopoly",
                        "price": 14,
                        "quantity": 1,
                        "category": "Games",
                        "url": "https://www.website.com/product/path",
                        "image_url": "https://www.website.com/product/path.jpg"
                      },
                      {
                        "sku": "F-32",
                        "name": "UNO",
                        "price": 3.45,
                        "quantity": 2,
                        "category": "Games"
                      }
                    ]
                  },
                  "timestamp": "2021-09-01T15:46:51.000Z"
                }
              }]
          , "destType": "singular"
        },
        "method": "POST"
      },
      "pathSuffix": ""
    },
    "output": {
      "response": {
        "status": 200,
        "body": {
          "output": [
            {
              "batchedRequest": {
                "version": "1",
                "type": "REST", "userId": "",
                "method": "GET",
                "endpoint": "https://s2s.singular.net/api/v1/launch",
                "headers": {},
                "params": {
                  "p": "Android",
                  "i": "com.rudderstack.demo.android",
                  "app_v": "1.0",
                  "ip": "14.5.67.21",
                  "ve": "9",
                  "mo": "Android SDK built for x86",
                  "ma": "Google",
                  "lc": "en-US",
                  "install_source": "2134dfg",
                  "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                  "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                  "dnt": 1,
                  "sessionNotificationName": "mysessionevent",
                  "custom_user_id": "ruddersampleX3",
                  "n": "RudderAndroidClient",
                  "utime": 1630511211,
                  "cn": "Android",
                  "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1",
                  "bd": "1",
                  "install": "SM-G935F",
                  "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                  "andi": "fc8d449516de0dfb",
                  "install_time": 1630511211,
                  "update_time": 1630511211,
                  "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)",
                  "c": "wifi",
                  "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd"
                },
                "body": {
                  "JSON": {},
                  "JSON_ARRAY": {},
                  "XML": {},
                  "FORM": {}
                },
                "files": {}
              },
              "metadata": [
                {
                  "jobId": 1
                }
              ],
              "batched": false,
              "statusCode": 200,
              "destination": {
                "Config": {
                  "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                  "sessionEventList": [
                    {
                      "sessionEventName": "mysessionevent"
                    },
                    {
                      "sessionEventName": "randomuser"
                    },
                    {
                      "sessionEventName": "titanium"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  },
  {
    "name": "singular",
    "description": "Successful Track Event with properties.products",
    "feature": "router",
    "module": "destination",
    "version": "v0",
    "input": {
      "request": {
        "body": {
          "input":
            [
              {
                "destination": {
                  "Config": {
                    "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                    "sessionEventList": [
                      {
                        "sessionEventName": "mysessionevent"
                      },
                      {
                        "sessionEventName": "randomuser"
                      },
                      {
                        "sessionEventName": "titanium"
                      }
                    ]
                  }
                },
                "metadata": {
                  "jobId": 2
                },
                "message": {
                  "type": "track",
                  "event": "mysessionevent",
                  "userId": "ruddersampleX3",
                  "request_ip": "14.5.67.21",
                  "context": {
                    "app": {
                      "build": "1",
                      "name": "RudderAndroidClient",
                      "namespace": "com.rudderstack.demo.android",
                      "version": "1.0"
                    },
                    "device": {
                      "manufacturer": "Google",
                      "model": "Android SDK built for x86",
                      "name": "generic_x86",
                      "type": "android",
                      "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                      "attStatus": "true",
                      "id": "fc8d449516de0dfb",
                      "adTrackingEnabled": "true",
                      "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1"
                    },
                    "library": {
                      "name": "com.rudderstack.android.sdk.core",
                      "version": "0.1.4"
                    },
                    "locale": "en-US",
                    "network": {
                      "carrier": "Android",
                      "bluetooth": false,
                      "cellular": true,
                      "wifi": true
                    },
                    "campaign": {
                      "source": "google",
                      "medium": "medium",
                      "term": "keyword",
                      "content": "some content"
                    },
                    "os": {
                      "name": "Android",
                      "version": "9"
                    },
                    "screen": {
                      "density": 420,
                      "height": 1794,
                      "width": 1080
                    },
                    "timezone": "Asia/Mumbai",
                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)"
                  },
                  "properties": {
                    "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                    "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                    "install": "SM-G935F",
                    "category": "Games",
                    "checkout_id": "12345",
                    "order_id": "1234",
                    "affiliation": "Apple Store",
                    "receipt_signature": "1234dfghnh",
                    "referring_application": "2134dfg",
                    "total": 20,
                    "revenue": 15.0,
                    "shipping": 22,
                    "tax": 1,
                    "discount": 1.5,
                    "coupon": "ImagePro",
                    "currency": "USD",
                    "fetch_token": "123asd23",
                    "product_id": "123",
                    "products": [
                      {
                        "product_id": "789",
                        "sku": "G-32",
                        "name": "Monopoly",
                        "price": 14,
                        "quantity": 1,
                        "category": "Games",
                        "url": "https://www.website.com/product/path",
                        "image_url": "https://www.website.com/product/path.jpg"
                      },
                      {
                        "sku": "F-32",
                        "name": "UNO",
                        "price": 3.45,
                        "quantity": 2,
                        "category": "Games"
                      }
                    ]
                  },
                  "timestamp": "2021-09-01T15:46:51.000Z"
                }
              }]
          , "destType": "singular"
        },
        "method": "POST"
      },
      "pathSuffix": ""
    },
    "output": {
      "response": {
        "status": 200,
        "body": {
          "output": [
            {
              "batchedRequest": {
                "version": "1",
                "type": "REST", "userId": "",
                "method": "GET",
                "endpoint": "https://s2s.singular.net/api/v1/launch",
                "headers": {},
                "params": {
                  "p": "Android",
                  "i": "com.rudderstack.demo.android",
                  "app_v": "1.0",
                  "ip": "14.5.67.21",
                  "ve": "9",
                  "mo": "Android SDK built for x86",
                  "ma": "Google",
                  "lc": "en-US",
                  "install_source": "2134dfg",
                  "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                  "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                  "dnt": 1,
                  "sessionNotificationName": "mysessionevent",
                  "custom_user_id": "ruddersampleX3",
                  "n": "RudderAndroidClient",
                  "utime": 1630511211,
                  "cn": "Android",
                  "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1",
                  "bd": "1",
                  "install": "SM-G935F",
                  "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                  "andi": "fc8d449516de0dfb",
                  "install_time": 1630511211,
                  "update_time": 1630511211,
                  "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)",
                  "c": "wifi",
                  "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd"
                },
                "body": {
                  "JSON": {},
                  "JSON_ARRAY": {},
                  "XML": {},
                  "FORM": {}
                },
                "files": {}
              },
              "metadata": [
                {
                  "jobId": 2
                }
              ],
              "batched": false,
              "statusCode": 200,
              "destination": {
                "Config": {
                  "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                  "sessionEventList": [
                    {
                      "sessionEventName": "mysessionevent"
                    },
                    {
                      "sessionEventName": "randomuser"
                    },
                    {
                      "sessionEventName": "titanium"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  },
  {
    "name": "singular",
    "description": "Successfull Track  Call with sessionEventList from Config",
    "feature": "router",
    "module": "destination",
    "version": "v0",
    "input": {
      "request": {
        "body": {
          "input":
            [
              {
                "destination": {
                  "Config": {
                    "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                    "sessionEventList": [
                      {
                        "sessionEventName": "mysessionevent"
                      },
                      {
                        "sessionEventName": "randomuser"
                      },
                      {
                        "sessionEventName": "titanium"
                      }
                    ]
                  }
                },
                "metadata": {
                  "jobId": 3
                },
                "message": {
                  "type": "track",
                  "event": "mysessionevent",
                  "userId": "ruddersampleX3",
                  "request_ip": "14.5.67.21",
                  "context": {
                    "app": {
                      "build": "1",
                      "name": "RudderAndroidClient",
                      "namespace": "com.rudderstack.demo.android",
                      "version": "1.0"
                    },
                    "device": {
                      "manufacturer": "Google",
                      "model": "Android SDK built for x86",
                      "name": "generic_x86",
                      "type": "android",
                      "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                      "attStatus": "true",
                      "id": "fc8d449516de0dfb",
                      "adTrackingEnabled": "true",
                      "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1"
                    },
                    "library": {
                      "name": "com.rudderstack.android.sdk.core",
                      "version": "0.1.4"
                    },
                    "locale": "en-US",
                    "network": {
                      "carrier": "Android",
                      "bluetooth": false,
                      "cellular": true,
                      "wifi": true
                    },
                    "campaign": {
                      "source": "google",
                      "medium": "medium",
                      "term": "keyword",
                      "content": "some content"
                    },
                    "os": {
                      "name": "Android",
                      "version": "9"
                    },
                    "screen": {
                      "density": 420,
                      "height": 1794,
                      "width": 1080
                    },
                    "timezone": "Asia/Mumbai",
                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)"
                  },
                  "properties": {
                    "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                    "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                    "install": "SM-G935F",
                    "category": "Games",
                    "checkout_id": "12345",
                    "order_id": "1234",
                    "affiliation": "Apple Store",
                    "receipt_signature": "1234dfghnh",
                    "referring_application": "2134dfg",
                    "total": 20,
                    "revenue": 15.0,
                    "shipping": 22,
                    "tax": 1,
                    "discount": 1.5,
                    "coupon": "ImagePro",
                    "currency": "USD",
                    "fetch_token": "123asd23",
                    "product_id": "123",
                    "products": [
                      {
                        "product_id": "789",
                        "sku": "G-32",
                        "name": "Monopoly",
                        "price": 14,
                        "quantity": 1,
                        "category": "Games",
                        "url": "https://www.website.com/product/path",
                        "image_url": "https://www.website.com/product/path.jpg"
                      },
                      {
                        "sku": "F-32",
                        "name": "UNO",
                        "price": 3.45,
                        "quantity": 2,
                        "category": "Games"
                      }
                    ]
                  },
                  "timestamp": "2021-09-01T15:46:51.000Z"
                }
              }]
          , "destType": "singular"
        },
        "method": "POST"
      },
      "pathSuffix": ""
    },
    "output": {
      "response": {
        "status": 200,
        "body": {
          "output": [
            {
              "batchedRequest": {
                "version": "1",
                "type": "REST", "userId": "",
                "method": "GET",
                "endpoint": "https://s2s.singular.net/api/v1/launch",
                "headers": {},
                "params": {
                  "p": "Android",
                  "i": "com.rudderstack.demo.android",
                  "app_v": "1.0",
                  "ip": "14.5.67.21",
                  "ve": "9",
                  "mo": "Android SDK built for x86",
                  "ma": "Google",
                  "lc": "en-US",
                  "install_source": "2134dfg",
                  "asid": "IISqwYJKoZIcNqts0jvcNvPc",
                  "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1",
                  "dnt": 1,
                  "sessionNotificationName": "mysessionevent",
                  "custom_user_id": "ruddersampleX3",
                  "n": "RudderAndroidClient",
                  "utime": 1630511211,
                  "cn": "Android",
                  "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1",
                  "bd": "1",
                  "install": "SM-G935F",
                  "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b",
                  "andi": "fc8d449516de0dfb",
                  "install_time": 1630511211,
                  "update_time": 1630511211,
                  "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)",
                  "c": "wifi",
                  "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd"
                },
                "body": {
                  "JSON": {},
                  "JSON_ARRAY": {},
                  "XML": {},
                  "FORM": {}
                },
                "files": {}
              },
              "metadata": [
                {
                  "jobId": 3
                }
              ],
              "batched": false,
              "statusCode": 200,
              "destination": {
                "Config": {
                  "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd",
                  "sessionEventList": [
                    {
                      "sessionEventName": "mysessionevent"
                    },
                    {
                      "sessionEventName": "randomuser"
                    },
                    {
                      "sessionEventName": "titanium"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  },
  {
    "name": "singular",
    "description": "Successfull Track Call of event Application Backgrounded",
    "feature": "router",
    "module": "destination",
    "version": "v0",
    "input": {
      "request": {
        "body": {
          "input":
            [
              {
                "message": {
                  "type": "track",
                  "event": "Application Backgrounded",
                  "sentAt": "2023-01-19T14:25:24.234Z",
                  "userId": "68e214f1-ac84-4241-b27d-78a18f59f21e",
                  "channel": "mobile",
                  "context": {
                    "os": {
                      "name": "iOS",
                      "version": "16.2"
                    },
                    "app": {
                      "build": "5013",
                      "version": "0.5.13",
                      "namespace": "com.yabimoney"
                    },
                    "device": {
                      "id": "cc06ff5e-838b-4e33-9d90-4ab5a6068bec",
                      "name": "iPhone",
                      "type": "iOS",
                      "model": "iPhone",
                      "manufacturer": "Apple",
                      "advertisingId": "1",
                      "adTrackingEnabled": true,
                      "attTrackingStatus": 0
                    },
                    "locale": "en-AE",
                    "screen": {
                      "width": 844,
                      "height": 390,
                      "density": 3
                    },
                    "traits": {
                      "phone": "",
                      "userId": "68e214f1-ac84-4241-b27d-78a18f59f21e",
                      "tenant_id": "tgTV2Bbv",
                      "anonymousId": "cc06ff5e-838b-4e33-9d90-4ab5a6068bec",
                      "yabi_user_id": "uCh5IS8p",
                      "subscription_type": ""
                    },
                    "library": {
                      "name": "rudder-ios-library",
                      "version": "1.8.0"
                    },
                    "network": {
                      "wifi": true,
                      "carrier": "etisalat",
                      "cellular": false
                    },
                    "timezone": "Asia/Dubai",
                    "sessionId": 1674138119
                  },
                  "rudderId": "b7bbf406-aa7f-4d64-a388-925675e78f36",
                  "messageId": "b9e9534b-b3b7-4bdb-8d59-062e1fbf4e2b",
                  "timestamp": "2023-01-19T14:25:07.532Z",
                  "receivedAt": "2023-01-19T14:25:25.465Z",
                  "request_ip": "87.201.98.151",
                  "anonymousId": "cc06ff5e-838b-4e33-9d90-4ab5a6068bec",
                  "integrations": {
                    "All": true
                  },
                  "originalTimestamp": "2023-01-19T14:25:06.301Z"
                },
                "destination": {
                  "secretConfig": {},
                  "Config": {
                    "apiKey": "apiKey",
                    "apiSecret": "apiSecreth9h3984bnsdfkh98kjiu4h",
                    "sessionEventList": [
                      {
                        "sessionEventName": "test_event"
                      }
                    ],
                    "blacklistedEvents": [
                      {
                        "eventName": ""
                      }
                    ],
                    "whitelistedEvents": [
                      {
                        "eventName": ""
                      }
                    ],
                    "eventFilteringOption": "whitelistedEvents",
                    "eventDelivery": false,
                    "eventDeliveryTS": 1663919255086
                  },
                  "liveEventsConfig": {
                    "eventDelivery": false,
                    "eventDeliveryTS": 1663919255086
                  },
                  "ID": "2EhlBrBduwN2NX4pJ7nrVDHAz6C",
                  "workspaceId": "1sUXvPs0hYgjBxSfjG4gqnRFNoP",
                  "DestinationDefinition": {
                    "config": {
                      "destConfig": {
                        "ios": [
                          "useNativeSDK"
                        ],
                        "android": [
                          "useNativeSDK"
                        ],
                        "cordova": [
                          "useNativeSDK"
                        ],
                        "reactnative": [
                          "useNativeSDK"
                        ],
                        "defaultConfig": [
                          "apiKey",
                          "apiSecret",
                          "sessionEventList",
                          "blacklistedEvents",
                          "whitelistedEvents",
                          "eventFilteringOption"
                        ]
                      },
                      "excludeKeys": [],
                      "includeKeys": [
                        "apiKey",
                        "apiSecret",
                        "sessionEventList",
                        "blacklistedEvents",
                        "whitelistedEvents",
                        "eventFilteringOption"
                      ],
                      "transformAt": "processor",
                      "transformAtV1": "processor",
                      "supportedSourceTypes": [
                        "android",
                        "ios",
                        "flutter",
                        "reactnative",
                        "cordova",
                        "web",
                        "amp",
                        "cloud",
                        "warehouse"
                      ],
                      "saveDestinationResponse": true
                    },
                    "configSchema": {},
                    "responseRules": {},
                    "options": null,
                    "id": "2642K92ztyRPghLlFL9GXfwjWDp",
                    "name": "SINGULAR",
                    "displayName": "Singular",
                    "category": null,
                    "createdAt": "2022-03-07T15:54:30.619Z",
                    "updatedAt": "2022-10-12T12:44:07.624Z"
                  },
                  "transformations": [],
                  "isConnectionEnabled": true,
                  "isProcessorEnabled": true,
                  "name": "Singular",
                  "enabled": true,
                  "deleted": false,
                  "createdAt": "2022-09-13T07:52:44.981Z",
                  "updatedAt": "2022-09-23T07:47:35.092Z",
                  "revisionId": "2F9znalm2FSPmdj99jJbsoVLSVM",
                  "secretVersion": 1
                },
                "metadata": {
                  "sourceId": "1vPJD7KzElDJ0N7SRf1fZ32z1SW",
                  "workspaceId": "1sUXvPs0hYgjBxSfjG4gqnRFNoP",
                  "namespace": "mynamespace",
                  "instanceId": "mynamespace-v0-rudderstack-0",
                  "sourceType": "Javascript",
                  "sourceCategory": "",
                  "trackingPlanId": "",
                  "trackingPlanVersion": 0,
                  "sourceTpConfig": null,
                  "mergedTpConfig": null,
                  "destinationId": "2EhlBrBduwN2NX4pJ7nrVDHAz6C",
                  "jobRunId": "",
                  "jobId": 68205922,
                  "sourceBatchId": "",
                  "sourceJobId": "",
                  "sourceJobRunId": "",
                  "sourceTaskId": "",
                  "sourceTaskRunId": "",
                  "recordId": null,
                  "destinationType": "SINGULAR",
                  "messageId": "b9e9534b-b3b7-4bdb-8d59-062e1fbf4e2b",
                  "oauthAccessToken": "",
                  "messageIds": null,
                  "rudderId": "67895e15-d37f-49d6-9017-e8d29264e31f<<>>yolanda.rivera2@yahoo.com",
                  "receivedAt": "2022-05-02T07:20:13.809Z",
                  "eventName": "",
                  "eventType": "track",
                  "sourceDefinitionId": "1TW48i2bIzEl1HPf825cEznfIM8",
                  "destinationDefinitionId": ""
                }
              }]
          , "destType": "singular"
        },
        "method": "POST"
      },
      "pathSuffix": ""
    },
    "output": {
      "response": {
        "status": 200,
        "body": {
          "output": [
            {
              "batchedRequest": {
                "version": "1",
                "type": "REST", "userId": "",
                "method": "GET",
                "endpoint": "https://s2s.singular.net/api/v1/evt",
                "headers": {},
                "params": {
                  "n": "Application Backgrounded",
                  "p": "iOS",
                  "i": "com.yabimoney",
                  "ip": "87.201.98.151",
                  "ve": "16.2",
                  "att_authorization_status": 0,
                  "custom_user_id": "68e214f1-ac84-4241-b27d-78a18f59f21e",
                  "utime": 1674138307,
                  "idfa": "1",
                  "idfv": "cc06ff5e-838b-4e33-9d90-4ab5a6068bec",
                  "c": "wifi",
                  "a": "apiKey",
                  "e": {}
                },
                "body": {
                  "JSON": {},
                  "JSON_ARRAY": {},
                  "XML": {},
                  "FORM": {}
                },
                "files": {}
              },
              "metadata": [
                {
                  "sourceId": "1vPJD7KzElDJ0N7SRf1fZ32z1SW",
                  "workspaceId": "1sUXvPs0hYgjBxSfjG4gqnRFNoP",
                  "namespace": "mynamespace",
                  "instanceId": "mynamespace-v0-rudderstack-0",
                  "sourceType": "Javascript",
                  "sourceCategory": "",
                  "trackingPlanId": "",
                  "trackingPlanVersion": 0,
                  "sourceTpConfig": null,
                  "mergedTpConfig": null,
                  "destinationId": "2EhlBrBduwN2NX4pJ7nrVDHAz6C",
                  "jobRunId": "",
                  "jobId": 68205922,
                  "sourceBatchId": "",
                  "sourceJobId": "",
                  "sourceJobRunId": "",
                  "sourceTaskId": "",
                  "sourceTaskRunId": "",
                  "recordId": null,
                  "destinationType": "SINGULAR",
                  "messageId": "b9e9534b-b3b7-4bdb-8d59-062e1fbf4e2b",
                  "oauthAccessToken": "",
                  "messageIds": null,
                  "rudderId": "67895e15-d37f-49d6-9017-e8d29264e31f<<>>yolanda.rivera2@yahoo.com",
                  "receivedAt": "2022-05-02T07:20:13.809Z",
                  "eventName": "",
                  "eventType": "track",
                  "sourceDefinitionId": "1TW48i2bIzEl1HPf825cEznfIM8",
                  "destinationDefinitionId": ""
                }
              ],
              "batched": false,
              "statusCode": 200,
              "destination": {
                "secretConfig": {},
                "Config": {
                  "apiKey": "apiKey",
                  "apiSecret": "apiSecreth9h3984bnsdfkh98kjiu4h",
                  "sessionEventList": [
                    {
                      "sessionEventName": "test_event"
                    }
                  ],
                  "blacklistedEvents": [
                    {
                      "eventName": ""
                    }
                  ],
                  "whitelistedEvents": [
                    {
                      "eventName": ""
                    }
                  ],
                  "eventFilteringOption": "whitelistedEvents",
                  "eventDelivery": false,
                  "eventDeliveryTS": 1663919255086
                },
                "liveEventsConfig": {
                  "eventDelivery": false,
                  "eventDeliveryTS": 1663919255086
                },
                "ID": "2EhlBrBduwN2NX4pJ7nrVDHAz6C",
                "workspaceId": "1sUXvPs0hYgjBxSfjG4gqnRFNoP",
                "DestinationDefinition": {
                  "config": {
                    "destConfig": {
                      "ios": [
                        "useNativeSDK"
                      ],
                      "android": [
                        "useNativeSDK"
                      ],
                      "cordova": [
                        "useNativeSDK"
                      ],
                      "reactnative": [
                        "useNativeSDK"
                      ],
                      "defaultConfig": [
                        "apiKey",
                        "apiSecret",
                        "sessionEventList",
                        "blacklistedEvents",
                        "whitelistedEvents",
                        "eventFilteringOption"
                      ]
                    },
                    "excludeKeys": [],
                    "includeKeys": [
                      "apiKey",
                      "apiSecret",
                      "sessionEventList",
                      "blacklistedEvents",
                      "whitelistedEvents",
                      "eventFilteringOption"
                    ],
                    "transformAt": "processor",
                    "transformAtV1": "processor",
                    "supportedSourceTypes": [
                      "android",
                      "ios",
                      "flutter",
                      "reactnative",
                      "cordova",
                      "web",
                      "amp",
                      "cloud",
                      "warehouse"
                    ],
                    "saveDestinationResponse": true
                  },
                  "configSchema": {},
                  "responseRules": {},
                  "options": null,
                  "id": "2642K92ztyRPghLlFL9GXfwjWDp",
                  "name": "SINGULAR",
                  "displayName": "Singular",
                  "category": null,
                  "createdAt": "2022-03-07T15:54:30.619Z",
                  "updatedAt": "2022-10-12T12:44:07.624Z"
                },
                "transformations": [],
                "isConnectionEnabled": true,
                "isProcessorEnabled": true,
                "name": "Singular",
                "enabled": true,
                "deleted": false,
                "createdAt": "2022-09-13T07:52:44.981Z",
                "updatedAt": "2022-09-23T07:47:35.092Z",
                "revisionId": "2F9znalm2FSPmdj99jJbsoVLSVM",
                "secretVersion": 1
              }
            }
          ]
        }
      }
    }
  },
];

module.exports = {
  data
};