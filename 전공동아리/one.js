var orders = [
    { id: 1, amount: 120000, vip: true },
    { id: 2, amount: 45000, vip: false },
    { id: 3, amount: 200000, vip: false },
    { id: 4, amount: 80000, vip: true },
];

var receipts = [];
for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var discount = (order.vip ? (order.amount > 100000 ? 0.2 : 0.1) : (order.amount >= 100000 ? 0.05 : 0));
    var finalAmount = order.amount * (1 - discount);
    receipts.push({ id: order.id, finalAmount: finalAmount });
}

var totalRevenue = 0;
for (var j = 0; j < receipts.length; j++) {
    totalRevenue += receipts[j].finalAmount;
}
var summary = (totalRevenue >= 300000 ? "우수매출: " : "일반 매출: ") + totalRevenue + "원";
console.log(summary);

var printers = [];
for (let k = 0; k < receipts.length; k++) {
    printers.push(() => console.log("영수증 " + receipts[k].id + ": " + receipts[k].finalAmount))};

printers[0](); // 주문 1의 영수증이 출력되어야 함
printers[1](); // 주문 2의 영수증이 출력되어야 함

// var orders = [
//     { id: 1, amount: 120000, vip: true },
//     { id: 2, amount: 45000, vip: false },
//     { id: 3, amount: 200000, vip: false },
//     { id: 4, amount: 80000, vip: true },
// ];

// var receipts = [];
// for (var i = 0; i < orders.length; i++) {
//     var order = orders[i];
//     var discount = 0;
//     if (order.vip) {
//         if (order.amount >= 100000) {
//             discount = 0.2;
//         } else {
//             discount = 0.1;
//         }
//     } else {
//         if (order.amount >= 100000) {
//             discount = 0.05;
//         }
//     }
//     var finalAmount = order.amount * (1 - discount);
//     receipts.push({ id: order.id, finalAmount: finalAmount });
// }

// var summary;
// var totalRevenue = 0;
// for (var j = 0; j < receipts.length; j++) {
//     totalRevenue += receipts[j].finalAmount;
// }
// if (totalRevenue >= 300000) {
//     summary = "우수 매출: " + totalRevenue + "원";
// } else {
//     summary = "일반 매출: " + totalRevenue + "원";
// }
// console.log(summary);

// var printers = [];
// for (var k = 0; k < receipts.length; k++) {
//     printers.push(function () {
//         console.log("영수증 " + receipts[k].id + ": " + receipts[k].finalAmount);
//     });
// }

// printers[0](); // 주문 1의 영수증이 출력되어야 함
// printers[1](); // 주문 2의 영수증이 출력되어야 함

// 리팩토링 했음.