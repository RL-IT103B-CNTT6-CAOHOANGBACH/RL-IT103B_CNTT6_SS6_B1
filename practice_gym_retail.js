let choice;
let orderCode = "";
let isCodeValid = false;

const products = [
  {
    code: "SHAKER",
    name: "Bình lắc",
    price: 120000,
  },
  {
    code: "GLOVES",
    name: "Găng tay",
    price: 180000,
  },
  {
    code: "STRAP",
    name: "Dây kéo lưng",
    price: 150000,
  },
];

const orders = [
  {
    code: "ORD-0001",
    productCode: "SHAKER",
    quantity: 2,
    isVIP: true,
  },
  {
    code: "ORD-0002",
    productCode: "GLOVES",
    quantity: 1,
    isVIP: false,
  },
  {
    code: "ORD-0003",
    productCode: "STRAP",
    quantity: 1,
    isVIP: false,
  },
];

do {
  choice = prompt(`
1.Nhập và chuẩn hóa mã đơn hàng
2.Tính tiền và in hóa đơn
3. Thoát chương trình
Nhập lựa chọn: `);

  switch (choice) {
    case "1":
      const rawCode = prompt("Nhập mã đơn hàng: ");
      const cleanCode = rawCode.trim();
      orderCode = cleanCode.toUpperCase();
      isCodeValid = orderCode.startsWith("ORD-") && orderCode.length >= 8;
      if (isCodeValid) {
        console.log("Mã đơn hàng hợp lệ:", orderCode);
      } else {
        console.log(
          "Mã đơn hàng không hợp lệ! Yêu cầu: bắt đầu bằng ORD- và dài tối thiểu 8 ký tự.",
        );
      }
      break;

    case "2":
      if (!isCodeValid) {
        console.log("Chưa có mã đơn hàng hợp lệ!");
        break;
      }
      let order = null;
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].code === orderCode) {
          order = orders[i];
          break;
        }
      }
      if (order === null) {
        console.log("Không tìm thấy đơn hàng với mã:", orderCode);
        break;
      }

      let total = 0;

      console.log("\n" + "-".repeat(40));
      console.log("HÓA ĐƠN GYM FITNESS");
      console.log("-".repeat(40));
      console.log(
        "Sản phẩm".padEnd(20) +
          "SL".padEnd(10) +
          "Đơn giá".padEnd(15) +
          "Thành tiền".padEnd(15),
      );

      let product = null;
      for (let i = 0; i < products.length; i++) {
        if (order.productCode === products[i].code) {
          product = products[i];
          break;
        }
      }
      if (product !== null) {
        const quantity = order.quantity;
        const amount = product.price * quantity;
        total += amount;
        console.log(
          `${product.name}`.padEnd(20) +
            `${quantity}`.padEnd(10) +
            `${product.price} VNĐ`.padEnd(15) +
            `${amount} VNĐ`.padEnd(15),
        );
      }
      console.log("-".repeat(40));

      let discount = 0;
      if (order.isVIP) {
        discount = total * 0.1;
      }
      const finalTotal = total - discount;

      console.log("Tạm tính:", total, "VNĐ");
      console.log("Giảm VIP 10%:", discount, "VNĐ");
      console.log("THANH TOÁN:", finalTotal, "VNĐ");
      console.log("-".repeat(40));
      break;

    case "3":
      console.log("Đã thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
} while (choice !== "3");
