const data = [{
    "name": "singular",
    "description": "(Android) Session Event",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "mysessionevent", "userId": "ruddersampleX3", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "referring_application": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "products": [{ "product_id": "789", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 1, "category": "Games", "url": "https://www.website.com/product/path", "image_url": "https://www.website.com/product/path.jpg" }, { "sku": "F-32", "name": "UNO", "price": 3.45, "quantity": 2, "category": "Games" }] }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "Android", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "lc": "en-US", "c": "wifi", "dnt": 0, "install_source": "2134dfg", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "sessionNotificationName": "mysessionevent", "custom_user_id": "ruddersampleX3", "n": "RudderAndroidClient", "utime": 1630511211, "cn": "Android", "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "bd": "1", "install": "SM-G935F", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "install_time": 1630511211, "update_time": 1630511211, "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Custom Event with multiple products",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "myevent", "userId": "ruddersampleX4", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "referring_application": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "products": [{ "product_id": "789", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 2, "category": "Games", "url": "https://www.website.com/product/path", "image_url": "https://www.website.com/product/path.jpg" }, { "sku": "F-32", "name": "UNO", "price": 3.45, "quantity": 2, "category": "Games" }] }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/evt", "headers": {}, "params": { "n": "myevent", "p": "Android", "i": "com.rudderstack.demo.android", "ip": "14.5.67.21", "is_revenue_event": true, "ve": "9", "custom_user_id": "ruddersampleX4", "utime": 1630511211, "cur": "USD", "amt": 28, "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "receipt_signature": "1234dfghnh", "purchase_product_id": "789", "c": "wifi", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "e": { "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "referring_application": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "fetch_token": "123asd23" } }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }, {
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/evt", "headers": {}, "params": { "n": "myevent", "p": "Android", "i": "com.rudderstack.demo.android", "ip": "14.5.67.21", "is_revenue_event": true, "ve": "9", "custom_user_id": "ruddersampleX4", "utime": 1630511211, "cur": "USD", "purchase_product_id": "F-32", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "amt": 6.9, "asid": "IISqwYJKoZIcNqts0jvcNvPc", "receipt_signature": "1234dfghnh", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "c": "wifi", "e": { "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "referring_application": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "fetch_token": "123asd23" } }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "[Error]: (Android) Custom Event without the event name",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "userId": "ruddersampleX4", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "referring_application": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 1, "image_url": "https://www.website.com/product/path.jpg" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{

                "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } },
                "error": "Event name is not present for the event", "statTags": {
                    "destType": "SINGULAR",
                    "errorCategory": "dataValidation",
                    "errorType": "instrumentation",
                    "feature": "processor",
                    "implementation": "native",
                    "module": "destination",
                },
                "statusCode": 400
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Session Event without referring_application",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "titanium", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "is_revenue_event": true, "purchase_receipt": "12def12e3", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 1, "image_url": "https://www.website.com/product/path.jpg" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "Android", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "lc": "en-US", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "sessionNotificationName": "titanium", "custom_user_id": "ruddersampleX5", "n": "RudderAndroidClient", "cn": "Android", "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "bd": "1", "install": "SM-G935F", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "utime": 1630511211, "install_time": 1630511211, "update_time": 1630511211, "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "dnt": 0, "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install_source": "", "c": "wifi", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Event with additional properties",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "myevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "is_revenue_event": true, "purchase_receipt": "12def12e3", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 1, "image_url": "https://www.website.com/product/path.jpg" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/evt", "headers": {}, "params": { "n": "myevent", "p": "Android", "i": "com.rudderstack.demo.android", "ip": "14.5.67.21", "ve": "9", "custom_user_id": "ruddersampleX5", "utime": 1630511211, "cur": "USD", "purchase_receipt": "12def12e3", "purchase_product_id": "123", "purchase_transaction_id": "2134dfg", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "receipt_signature": "1234dfghnh", "amt": 20, "is_revenue_event": true, "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "c": "wifi", "e": { "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "fetch_token": "123asd23", "name": "Monopoly", "image_url": "https://www.website.com/product/path.jpg" } }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "[Error]: (Android) Required Platform field missing for Custom Events",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "myevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "is_revenue_event": true, "purchase_receipt": "12def12e3", "install": "SM-G935F", "category": "Games", "checkout_id": "12345", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "quantity": 1, "image_url": "https://www.website.com/product/path.jpg" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{

                "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } },
                "error": "Platform name is missing from context.os.name", "statTags": {
                    "destType": "SINGULAR",
                    "errorCategory": "dataValidation",
                    "errorType": "instrumentation",
                    "feature": "processor",
                    "implementation": "native",
                    "module": "destination",
                },
                "statusCode": 400
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Session Event mapped from config",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "mysessionevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": false }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "referring_application": "Amazon" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "Android", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "lc": "en-US", "c": "carrier", "install_source": "Amazon", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "dnt": 0, "sessionNotificationName": "mysessionevent", "custom_user_id": "ruddersampleX5", "n": "RudderAndroidClient", "utime": 1630511211, "cn": "Android", "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "bd": "1", "install": "SM-G935F", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "install_time": 1630511211, "update_time": 1630511211, "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Session Event with a single product",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "mysessionevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "Android", "bluetooth": false, "cellular": true, "wifi": false }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "Android", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14, "referring_application": "Amazon" }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "Android", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "c": "carrier", "lc": "en-US", "install_source": "Amazon", "asid": "IISqwYJKoZIcNqts0jvcNvPc", "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "dnt": 0, "sessionNotificationName": "mysessionevent", "custom_user_id": "ruddersampleX5", "n": "RudderAndroidClient", "utime": 1630511211, "cn": "Android", "fcm": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "bd": "1", "install": "SM-G935F", "aifa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "andi": "fc8d449516de0dfb", "install_time": 1630511211, "update_time": 1630511211, "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "[Error]: (Android) Session Event",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "mysessionevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "iOS", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{

                "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } },
                "error": "Missing required value from \"properties.install_receipt\"", "statTags": {
                    "destType": "SINGULAR",
                    "errorCategory": "dataValidation",
                    "errorType": "instrumentation",
                    "feature": "processor",
                    "implementation": "native",
                    "module": "destination",
                },
                "statusCode": 400
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(iOS) Session Event",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "mysessionevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attTrackingStatus": 3, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "ipados", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "skan_last_call_timestamp": "2021-09-05T15:46:51.000Z", "skan_first_call_timestamp": "2021-09-05T12:46:10.000Z", "skan_conversion_value": "2", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "iOS", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "c": "carrier", "lc": "en-US", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "att_authorization_status": 3, "sessionNotificationName": "mysessionevent", "custom_user_id": "ruddersampleX5", "n": "RudderAndroidClient", "utime": 1630511211, "cn": "iOS", "apns_token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "skan_conversion_value": "2", "skan_first_call_timestamp": 1630845970, "skan_last_call_timestamp": 1630856811, "bd": "1", "dnt": 0, "install": "SM-G935F", "idfa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "idfv": "fc8d449516de0dfb", "install_time": 1630511211, "update_time": 1630511211, "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(iOS) Custom event",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "myevent", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attTrackingStatus": 3, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "iOS", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "skan_last_call_timestamp": "2021-09-08T12:16:11.000Z", "skan_first_call_timestamp": "2021-09-05T15:46:51.000Z", "skan_conversion_value": "2", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/evt", "headers": {}, "params": { "n": "myevent", "p": "iOS", "i": "com.rudderstack.demo.android", "ip": "14.5.67.21", "is_revenue_event": true, "ve": "9", "att_authorization_status": 3, "custom_user_id": "ruddersampleX5", "utime": 1630511211, "skan_conversion_value": "2", "skan_first_call_timestamp": 1630856811, "skan_last_call_timestamp": 1631103371, "cur": "USD", "amt": 20, "purchase_product_id": "123", "purchase_transaction_id": "2134dfg", "idfa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "idfv": "fc8d449516de0dfb", "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "c": "carrier", "e": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "fetch_token": "123asd23", "name": "Monopoly" } }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Lifeycle Session event",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "Application Installed", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attTrackingStatus": 3, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "iOS", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{
                "output":
                    { "version": "1", "type": "REST", "method": "GET", "endpoint": "https://s2s.singular.net/api/v1/launch", "headers": {}, "params": { "p": "iOS", "i": "com.rudderstack.demo.android", "app_v": "1.0", "ip": "14.5.67.21", "ve": "9", "mo": "Android SDK built for x86", "ma": "Google", "c": "carrier", "dnt": 0, "lc": "en-US", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "openuri": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "att_authorization_status": 3, "sessionNotificationName": "Application Installed", "custom_user_id": "ruddersampleX5", "n": "RudderAndroidClient", "utime": 1630511211, "cn": "iOS", "apns_token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1", "ua": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "bd": "1", "install": "SM-G935F", "idfa": "8ecd7512-2864-440c-93f3-a3cabe62525b", "idfv": "fc8d449516de0dfb", "install_time": 1630511211, "update_time": 1630511211, "a": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd" }, "body": { "JSON": {}, "JSON_ARRAY": {}, "XML": {}, "FORM": {} }, "files": {}, "userId": "" },
                "statusCode": 200
            }]
        }
    }
}, {
    "name": "singular",
    "description": "(Android) Session Event - Application Installed lifecycle event ",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "track", "event": "Application Installed", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "window", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "skan_last_call_timestamp": "1654532056", "skan_first_call_timestamp": "1651853656", "skan_conversion_value": "2", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{

                "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } },
                "error": "Platform window is not supported", "statTags": {
                    "destType": "SINGULAR",
                    "errorCategory": "dataValidation",
                    "errorType": "instrumentation",
                    "feature": "processor",
                    "implementation": "native",
                    "module": "destination",
                },
                "statusCode": 400
            }]
        }
    }
}, {
    "name": "singular",
    "description": "[Error]: Unsupported Identify Call made",
    "feature": "processor",
    "module": "destination",
    "version": "v0",
    "input": {
        "request": {
            "body": [
                { "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } }, "message": { "type": "identify", "event": "Application Installed", "userId": "ruddersampleX5", "request_ip": "14.5.67.21", "context": { "app": { "build": "1", "name": "RudderAndroidClient", "namespace": "com.rudderstack.demo.android", "version": "1.0" }, "device": { "manufacturer": "Google", "model": "Android SDK built for x86", "name": "generic_x86", "type": "android", "advertisingId": "8ecd7512-2864-440c-93f3-a3cabe62525b", "attStatus": true, "id": "fc8d449516de0dfb", "adTrackingEnabled": true, "token": "bk3RNwTe3H0CI2k_ HHwgIpoDKCIZvvD MExUdFQ3P1" }, "library": { "name": "com.rudderstack.android.sdk.core", "version": "0.1.4" }, "locale": "en-US", "network": { "carrier": "iOS", "bluetooth": false, "cellular": true }, "campaign": { "source": "google", "medium": "medium", "term": "keyword", "content": "some content" }, "os": { "name": "window", "version": "9" }, "screen": { "density": 420, "height": 1794, "width": 1080 }, "timezone": "Asia/Mumbai" }, "properties": { "asid": "IISqwYJKoZIcNqts0jvcNvPc", "url": "myapp%3A%2F%2Fhome%2Fpage%3Fqueryparam1%3Dvalue1", "install": "SM-G935F", "order_id": "1234", "affiliation": "Apple Store", "receipt_signature": "1234dfghnh", "purchase_transaction_id": "2134dfg", "skan_last_call_timestamp": "1654532056", "skan_first_call_timestamp": "1651853656", "skan_conversion_value": "2", "attribution_token": "G9i5hC8lQJeGOfmS+MFycll/02...AAABBEQQBQS=", "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; Android SDK built for x86 Build/PSR1.180720.075)", "install_receipt": "MIISqwYJKoZIcNqts0jvcNvPcK7yuj0KhJ9nTTQ54kDKfReihzc6aw==", "total": 20, "revenue": 15, "shipping": 22, "tax": 1, "discount": 1.5, "coupon": "ImagePro", "currency": "USD", "fetch_token": "123asd23", "product_id": "123", "sku": "G-32", "name": "Monopoly", "price": 14 }, "timestamp": "2021-09-01T15:46:51.000Z" } },
            ],
            "method": "POST",
        },
        "pathSuffix": "",
    },
    "output": {
        "response": {
            "status": 200,
            "body": [{

                "destination": { "Config": { "apiKey": "ab7eb717-cdd8-tr63-a7f5-93339d7beelkd", "sessionEventList": [{ "sessionEventName": "mysessionevent" }, { "sessionEventName": "randomuser" }, { "sessionEventName": "titanium" }] } },
                "error": "Event type identify is not supported", "statTags": {
                    "destType": "SINGULAR",
                    "errorCategory": "dataValidation",
                    "errorType": "instrumentation",
                    "feature": "processor",
                    "implementation": "native",
                    "module": "destination",
                },
                "statusCode": 400
            }]
        }
    }
}]; module.exports = {
    data
}