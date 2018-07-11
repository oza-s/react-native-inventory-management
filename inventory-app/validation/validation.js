const validation = {
    product_name: {
      presence: {
        message: '^Please enter an product name'
      }
    },   
    barcode: {
      presence: {
        message: '^Please enter a barcode'
      },
      length: {
        minimum: 5,
        message: '^Barcode must be at least 5 characters'
      }
    }
  }
  
  export default validation