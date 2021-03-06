export const singleProductQuery = `
query ($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    handle
    priceRange {
      maxVariantPrice {
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          src
        }
      }
    }
    options {
      name
      values
    }
    totalInventory
    vendor
    tags
  }
  products(first: 9) {
    edges {
      node {
        id
        title
        handle
        priceRange{
          maxVariantPrice{
            amount
          }
        }
        
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
      }
    }
  }
}

`;
