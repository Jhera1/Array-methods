// 🕸️ MysteryStore Data Set: (Full of hidden internet secrets)

const mysteryItems = [
  { id: 201, name: "VPN Cloak", department: "Cybersecurity", price: 199.99, stock: 5, ratings: [5, 5, 4, 5, 5] },
  { id: 202, name: "Incognito Shades", department: "Privacy Gear", price: 49.99, stock: 2, ratings: [4, 4, 5, 5, 4] },
  { id: 203, name: "Dark Web Compass", department: "Exploration Tools", price: 299.99, stock: 1, ratings: [5, 5, 5] },
  { id: 204, name: "Quantum Firewall", department: "Cybersecurity", price: 499.99, stock: 3, ratings: [5, 4, 5, 5, 5] },
  { id: 205, name: "Crypto Wallet", department: "Finance", price: 129.99, stock: 15, ratings: [4, 4, 5, 4, 5] },
  { id: 206, name: "Stealth Hoodie", department: "Privacy Gear", price: 89.99, stock: 12, ratings: [4, 5, 4, 3, 5] },
  { id: 207, name: "AI Whisper Chip", department: "Tech Enhancements", price: 999.99, stock: 4, ratings: [5, 5, 5, 5] },
  { id: 208, name: "404 Disguise Kit", department: "Escape Tools", price: 59.99, stock: 9, ratings: [4, 4, 5, 4] },
  { id: 209, name: "Firewall Gloves", department: "Cybersecurity", price: 39.99, stock: 8, ratings: [4, 3, 4, 5] },
  { id: 210, name: "DeepFake Detector", department: "AI Tools", price: 229.99, stock: 6, ratings: [5, 4, 4, 5, 5] },
  { id: 211, name: "Zero-Day Finder", department: "Hacking Tools", price: 799.99, stock: 2, ratings: [5, 5, 5, 5, 5] },
  { id: 212, name: "Anonymizer Spray", department: "Privacy Gear", price: 19.99, stock: 50, ratings: [4, 4, 3, 4, 4] },
  { id: 213, name: "Metadata Magnet", department: "Forensics", price: 109.99, stock: 7, ratings: [4, 5, 5, 5] },
  { id: 214, name: "Bug Buster Pro", department: "Surveillance", price: 159.99, stock: 5, ratings: [5, 5, 4, 4, 5] },
  { id: 215, name: "Phantom Server", department: "Tech Enhancements", price: 1299.99, stock: 1, ratings: [5, 5, 5, 5, 5] }
];
// 🧠 Your Tasks for analyzeMysteryData():
// 💰 Total Inventory Value = price × stock for all items

// 👑 Top-Rated Product = item with the highest average rating

// 🧩 Group by Department = categorize all products

// 🔴 Low in Stock = stock < 5

// 📊 Average Price by Department 

const analyzeMysteryData = data => {

    const analysis = {
        totalInventoryValue: 0,
        topRatedProduct: 'null',
        productByDepartment: {},
        lowStockItems: [],
        averagePricePerDept: {}
    }

    let totalWithoutCommas = data.reduce((sum, item) => sum + (item.price * item.price), 0)
    console.log(totalWithoutCommas)
    analysis.totalInventoryValue = totalWithoutCommas.toLocaleString()
    return analysis.totalInventoryValue
}

console.log(analyzeMysteryData(mysteryItems))