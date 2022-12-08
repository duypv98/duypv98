# How to Call the Orders API

## Create Order

```ts
async function createOrder() {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00"
          }
        }
      ]
    })
  });
  const data = await response.json();
  console.log(data);
  return data;
}
```

## Capture Payment

```ts
async function capturePayment(orderId: string) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  console.log(data);
  return data;
}
```

Capture Payment Response

```json
{
  "id": "0JS83115J7824722D",
  "status": "COMPLETED",
  "payment_source": {
    "paypal": {
      "email_address": "sb-gosr4723447201@personal.example.com",
      "account_id": "3GPE3ZVG7XAG6",
      "name": {
        "given_name": "John",
        "surname": "Doe"
      },
      "address": {
        "country_code": "US"
      }
    }
  },
  "purchase_units": [
    {
      "reference_id": "default",
      "shipping": {
        "name": {
          "full_name": "John Doe"
        },
        "address": {
          "address_line_1": "1 Main St",
          "admin_area_2": "San Jose",
          "admin_area_1": "CA",
          "postal_code": "95131",
          "country_code": "US"
        }
      },
      "payments": {
        "captures": [
          {
            "id": "1BF56860K4986752T",
            "status": "COMPLETED",
            "amount": {
              "currency_code": "USD",
              "value": "9.99"
            },
            "final_capture": true,
            "seller_protection": {
              "status": "ELIGIBLE",
              "dispute_categories": [
                "ITEM_NOT_RECEIVED",
                "UNAUTHORIZED_TRANSACTION"
              ]
            },
            "seller_receivable_breakdown": {
              "gross_amount": {
                "currency_code": "USD",
                "value": "9.99"
              },
              "paypal_fee": {
                "currency_code": "USD",
                "value": "0.84"
              },
              "net_amount": {
                "currency_code": "USD",
                "value": "9.15"
              }
            },
            "custom_id": "ef6b63a2610f345ae0f66383",
            "links": [
              {
                "href": "https://api.sandbox.paypal.com/v2/payments/captures/1BF56860K4986752T",
                "rel": "self",
                "method": "GET"
              },
              {
                "href": "https://api.sandbox.paypal.com/v2/payments/captures/1BF56860K4986752T/refund",
                "rel": "refund",
                "method": "POST"
              },
              {
                "href": "https://api.sandbox.paypal.com/v2/checkout/orders/0JS83115J7824722D",
                "rel": "up",
                "method": "GET"
              }
            ],
            "create_time": "2022-12-08T01:48:32Z",
            "update_time": "2022-12-08T01:48:32Z"
          }
        ]
      }
    }
  ],
  "payer": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "sb-gosr4723447201@personal.example.com",
    "payer_id": "3GPE3ZVG7XAG6",
    "address": {
      "country_code": "US"
    }
  },
  "links": [
    {
      "href": "https://api.sandbox.paypal.com/v2/checkout/orders/0JS83115J7824722D",
      "rel": "self",
      "method": "GET"
    }
  ]
}
```

## Create & Cancel Subscription

```ts
async function createSubscription(custom_id) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v1/billing/subscriptions`;
    const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      // TODO: save plan to db
      plan_id: "P-7BA41733L5840891AMOIVBXA",
      custom_id,
      quantity: "1",
      start_time: moment().add(60, "seconds").toISOString()
    })
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function cancelSubscription(planId) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v1/billing/subscriptions/${planId}/cancel`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      reason: "User unsubscribe"
    })
  });
  const data = response.status; // 204, 422
  return data;
}

```
