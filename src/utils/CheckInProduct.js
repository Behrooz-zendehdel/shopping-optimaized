export function CheckInProduct(cart, product) {
  return cart.find((c) => c.id === product.id);
}
