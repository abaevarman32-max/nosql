// ============================================================================
// ЛАБОРАТОРНАЯ РАБОТА №4: MongoDB Aggregation & Indexes
// Вариант 1: Интернет-магазин (products, customers, orders)
// Исполняемый файл для VS Code MongoDB Playground
// ============================================================================

// 1. ПОДГОТОВКА БАЗЫ ДАННЫХ И ОЧИСТКА
use('ecommerce_lab4');

db.products.drop();
db.customers.drop();
db.orders.drop();

// 2. ИНИЦИАЛИЗАЦИЯ И НАПОЛНЕНИЕ ДАННЫМИ (Задание 4)
db.customers.insertMany([
  { customerId: 501, name: "Aidar", city: "Almaty" },
  { customerId: 502, name: "Dana", city: "Astana" },
  { customerId: 503, name: "Erlan", city: "Shymkent" }
]);

db.products.insertMany([
  { productId: 101, name: "Laptop Lenovo Pro", category: "Notebook", price: 420000, stock: 15, rating: 4.7, tags: ["office", "work"] },
  { productId: 102, name: "Laptop ASUS ROG", category: "Notebook", price: 520000, stock: 8, rating: 4.8, tags: ["gaming", "rgb"] },
  { productId: 103, name: "Laptop HP Pavilion", category: "Notebook", price: 350000, stock: 20, rating: 4.3, tags: ["office", "study"] },
  { productId: 104, name: "Laptop Dell XPS", category: "Notebook", price: 780000, stock: 5, rating: 4.9, tags: ["premium", "work"] },
  { productId: 105, name: "Laptop Acer Aspire", category: "Notebook", price: 280000, stock: 0, rating: 4.1, tags: ["budget", "office"] },
  { productId: 106, name: "Phone Samsung S23", category: "Smartphone", price: 410000, stock: 25, rating: 4.6, tags: ["mobile", "android"] },
  { productId: 107, name: "Phone Apple iPhone 15", category: "Smartphone", price: 550000, stock: 12, rating: 4.9, tags: ["mobile", "ios"] },
  { productId: 108, name: "Phone Xiaomi 13", category: "Smartphone", price: 260000, stock: 30, rating: 4.4, tags: ["mobile", "android"] },
  { productId: 109, name: "Phone Google Pixel 8", category: "Smartphone", price: 380000, stock: 10, rating: 4.7, tags: ["mobile", "camera"] },
  { productId: 110, name: "Phone OnePlus 11", category: "Smartphone", price: 320000, stock: 14, rating: 4.5, tags: ["mobile", "android"] },
  { productId: 111, name: "Tablet iPad Air", category: "Tablet", price: 340000, stock: 18, rating: 4.8, tags: ["ios", "tablet"] },
  { productId: 112, name: "Tablet Samsung Tab S9", category: "Tablet", price: 390000, stock: 7, rating: 4.6, tags: ["android", "tablet"] },
  { productId: 113, name: "Tablet Xiaomi Pad 6", category: "Tablet", price: 170000, stock: 22, rating: 4.3, tags: ["budget", "tablet"] },
  { productId: 114, name: "Monitor LG UltraGear", category: "Monitor", price: 190000, stock: 11, rating: 4.7, tags: ["gaming", "display"] },
  { productId: 115, name: "Monitor Samsung Odyssey", category: "Monitor", price: 290000, stock: 6, rating: 4.8, tags: ["gaming", "curved"] },
  { productId: 116, name: "Monitor Dell UltraSharp", category: "Monitor", price: 230000, stock: 13, rating: 4.9, tags: ["office", "display"] },
  { productId: 117, name: "Keyboard Keychron K2", category: "Accessories", price: 45000, stock: 40, rating: 4.8, tags: ["mechanical", "work"] },
  { productId: 118, name: "Mouse Logitech MX Master", category: "Accessories", price: 55000, stock: 35, rating: 4.9, tags: ["office", "wireless"] },
  { productId: 119, name: "Headset HyperX Cloud", category: "Accessories", price: 38000, stock: 25, rating: 4.5, tags: ["gaming", "audio"] },
  { productId: 120, name: "Headphones Sony WH-1000XM5", category: "Accessories", price: 180000, stock: 9, rating: 4.9, tags: ["audio", "wireless"] },
  { productId: 121, name: "Smartwatch Apple Watch 9", category: "Gadgets", price: 210000, stock: 16, rating: 4.7, tags: ["ios", "fitness"] },
  { productId: 122, name: "Smartwatch Galaxy Watch 6", category: "Gadgets", price: 140000, stock: 19, rating: 4.5, tags: ["android", "fitness"] },
  { productId: 123, name: "Console PS5", category: "Gaming", price: 310000, stock: 4, rating: 4.9, tags: ["gaming", "console"] },
  { productId: 124, name: "Console Xbox Series X", category: "Gaming", price: 290000, stock: 8, rating: 4.7, tags: ["gaming", "console"] },
  { productId: 125, name: "Console Nintendo Switch", category: "Gaming", price: 160000, stock: 15, rating: 4.6, tags: ["gaming", "portable"] },
  { productId: 126, name: "SSD Samsung 980 Pro 1TB", category: "Components", price: 65000, stock: 50, rating: 4.9, tags: ["storage", "pc"] },
  { productId: 127, name: "RAM Corsair 32GB", category: "Components", price: 58000, stock: 30, rating: 4.7, tags: ["memory", "pc"] },
  { productId: 128, name: "GPU RTX 4070", category: "Components", price: 380000, stock: 3, rating: 4.8, tags: ["gaming", "pc"] },
  { productId: 129, name: "Webcam Logitech C920", category: "Accessories", price: 42000, stock: 20, rating: 4.4, tags: ["office", "video"] },
  { productId: 130, name: "Router TP-Link Archer", category: "Networking", price: 28000, stock: 45, rating: 4.3, tags: ["wifi", "home"] }
]);

db.orders.insertMany([
  { orderId: "ORD-1", customerId: 501, total: 420000, status: "paid" },
  { orderId: "ORD-2", customerId: 501, total: 55000, status: "paid" },
  { orderId: "ORD-3", customerId: 502, total: 310000, status: "new" },
  { orderId: "ORD-4", customerId: 503, total: 180000, status: "shipped" }
]);

// 3. ЗАДАНИЯ НА AGGREGATION PIPELINE (Задания 1-7)

// Задание 1: Фильтрация ($match)
db.products.aggregate([
  { $match: { category: "Smartphone", price: { $gte: 200000, $lte: 400000 } } }
]);

// Задание 2: Проекция и вычисляемое поле ($project)
db.products.aggregate([
  { $project: {
      _id: 0,
      name: 1,
      price: 1,
      stock: 1,
      inventoryValue: { $multiply: ["$price", "$stock"] }
  }},
  { $limit: 3 }
]);

// Задания 3 и 4: Группировка, сортировка и лимит ($group, $sort, $limit)
db.products.aggregate([
  { $group: {
      _id: "$category",
      productCount: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" }
  }},
  { $sort: { avgPrice: -1 } },
  { $limit: 5 }
]);

// Задание 5: Разворачивание массивов ($unwind)
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 }
]);

// Задание 6: Связывание коллекций ($lookup)
db.orders.aggregate([
  { $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "customerId",
      as: "customer"
  }},
  { $unwind: "$customer" },
  { $project: { _id: 0, orderId: 1, total: 1, "customer.name": 1, "customer.city": 1 } }
]);

// Задание 7: Многоэтапный pipeline (4+ этапа)
db.products.aggregate([
  { $match: { stock: { $gt: 0 }, rating: { $gte: 4.5 } } },
  { $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
  }},
  { $sort: { avgPrice: -1 } },
  { $limit: 3 }
]);

// 4. РАБОТА С ИНДЕКСАМИ И ЭКСПЕРИМЕНТЫ (Задания 8-16)

// Задание 8: Анализ без индексов (COLLSCAN)
db.products.find({ category: "Notebook", rating: { $gte: 4.5 } }).sort({ price: 1 }).explain("executionStats");

// Задание 9: Создание простого индекса
db.products.createIndex({ category: 1 });
db.products.find({ category: "Notebook" }).explain("executionStats");

// Задания 10-12: Составной индекс по принципу ESR (Equality: category, Sort: price, Range: rating)
db.products.dropIndexes();
db.products.createIndex({ category: 1, price: 1, rating: 1 });

// Финальный анализ с оптимальным индексом (IXSCAN)
db.products.find({ category: "Notebook", rating: { $gte: 4.5 } }).sort({ price: 1 }).explain("executionStats");