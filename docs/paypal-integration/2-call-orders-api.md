# How to Call the Orders API

## Create Order

```ts
async function capturePayment(orderId: string) {
  const accessToken = generateAccessToken();
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
  const accessToken = generateAccessToken();
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
