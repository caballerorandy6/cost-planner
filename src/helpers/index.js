//Generate Unique id
export const generateUniqueId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

//Format Date
export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("en-US", options);
};

//Format Quantity
export const formatQuantity = (quantity) => {
  //Transform from number to money
  return quantity.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
