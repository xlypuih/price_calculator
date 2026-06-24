let products = {
  "салат": 5500,
  "багет": 5300,
  "зайдас": 4000,
  "сендвич": 5500,
  "корсант": 3000,
  "бургер": 4000
};

function showProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  for (let name in products) {
    productList.innerHTML += `
      <div class="product-item">
        ${name} - ${products[name]}₮
      </div>
    `;
  }
}

  products[name] = price;

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  showProducts();

function calculateTotal() {
  const text = document.getElementById("messageInput").value.toLowerCase();
  const lines = text.split("\n");

  let total = 0;
  let resultHTML = "";

  for (let line of lines) {
    line = line.trim();

    if (line === "" || !line.includes("-")) {
      continue;
    }

    const parts = line.split("-");

    const quantity = Number(parts[parts.length - 1]);

    let productName = parts
      .slice(0, parts.length - 1)
      .join("-")
      .replace(/^\d+\/\d+-/, "")
      .trim();

    if (products[productName] !== undefined && quantity > 0) {
      const price = products[productName];
      const sum = price * quantity;

      total += sum;

      resultHTML += `
        <div class="result-item">
          ${productName} | ${quantity}ш × ${price}₮ = ${sum}₮
        </div>
      `;
    }
  }

  resultHTML += `
    <div class="total">
      Нийт дүн: ${total}₮
    </div>
  `;

  document.getElementById("result").innerHTML = resultHTML;
}

showProducts();
