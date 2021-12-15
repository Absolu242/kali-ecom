import { axios } from "axios";
import Client from "shopify-buy";
import { productsQuery } from "../pages";

// export const client = Client.buildClient({
//   storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
//   domain: process.env.SHOPIFY_STORE_DOMAIN,
// });

export const storefront = async (query, variables = {}) => {
  try {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    return res.json();
  } catch (error) {
    console.log(error); // this is the main part. Use the response property from the error object

    return error.response;
  }
};
