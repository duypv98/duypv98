# How to add PayPal checkout

First: Create the PayPal Order

Then: Checkout the order

## PayPal JavaScript SDK

### Add Library

```html
<script src="https://www.paypal.com/sdk/js?client-id=<client_id>&currency=USD"></script>
```

### Create PayPal Button

```html
<div id="paypal-button-container"></div>
  <script>
    paypal.Buttons({
      // Sets up the transaction when a payment button is clicked
      createOrder: (data, actions) => {
        // Call API to create Order
      },
      // Finalize the transaction after payer approval
      onApprove: (data, actions) => {
        // Call API to capture the order,
        // orderId = data.orderId
      }
    }).render('#paypal-button-container');
  </script>
```

## React.js Integration

### npm package: `@paypal/react-paypal-js`

```jsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          // Create Order
        }}
        onApprove={(data, actions) => {
          // Capture the order
        }}
      />
    </PayPalScriptProvider>
  );
}

```
