export const ProductsQuery = `
query{ products(first: 9) {
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
  }}
`;
