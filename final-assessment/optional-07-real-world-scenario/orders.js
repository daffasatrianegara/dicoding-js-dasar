// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce(
    (value, item) => Number(value) + Number(item.price),
    0
  );

  const data = {
    id: generateUniqueId(),
    customerName: String(customerName),
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(data);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const findOrder = orders.find((order) => order.id === orderId);
  return (findOrder.status = status);
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const filterOrder = orders.filter(
    (order) => order.status === "Selesai" || order.status === "selesai"
  );
  return filterOrder.reduce((value, item) => value + item.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
