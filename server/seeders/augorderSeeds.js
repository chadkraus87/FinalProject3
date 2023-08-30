function generateSeedData() {
    const items = [
      { name: "dog clogs", price: 24.99 },
      { name: "dog socks", price: 17.99 },
      { name: "kitten mittens", price: 9.99 },
      { name: "cat hats", price: 12.99 }
    ];
  
    const statuses = ["pending", "shipped", "delivered", "cancelled"];
    const orders = [];
  
    for (let i = 1; i <= 100; i++) {
      const order_id = `ORD${i.toString().padStart(3, "0")}`;
      const order_date = new Date(2023, 7, Math.floor(Math.random() * 31) + 1);
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const num_items = Math.floor(Math.random() * 4) + 1;
      const order_items = items.slice(0, num_items);
      const invoice_amount = order_items.reduce((sum, item) => sum + item.price, 0);
      const customer_email = `customer${i}@example.com`;
  
      const order = {
        order_id,
        order_date: order_date.toISOString().split("T")[0],
        status,
        items: order_items.map(item => ({ item: item.name, price: `$${item.price.toFixed(2)}` })),
        invoice_amount: `$${invoice_amount.toFixed(2)}`,
        customer_email
      };
  
      orders.push(order);
    }
  
    return orders;
  }
  