# PayPal Integration: How to Retrieve API Access Token

## Get Started Example

Example Node.js Application

```ts
import express from "express";
import axios from "axios";
import fetch from "node-fetch";
import { config } from "dotenb";

config();
const { CLIENT_ID, APP_SECRET } = process.env;

const base = "https://api-m.sanbox.paypal.com";

const app = express();

// test route
app.get("/test, async (req, res) => {
  const data = await generateAccessToken();
  console.log(data);
  res.json(data);
});

// axios version
async function generateAccessToken() {
  const response = await axios({
    url: `${base}/v1/oauth2/token`,
    method: "post",
    data: "grant_type=client_credentials",
    auth: {
      username: CLIENT_ID,
      password: APP_SECRET
    }
  });
  return response.data;
}
```

API Generate Access Token Response:

- scope: permissions
- access_token
- token_type: 'Bearer'
- app_id
- expires_in (second) -> For cache
- nonce

## How to get `CLIENT_ID` & `APP_SECRET`?
