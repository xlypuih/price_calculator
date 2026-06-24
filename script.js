const products = {
  "салат": 5500,
  "багет": 5300,
  "зайдас": 4000,
  "сендвич": 5500,
  "корсант": 3000,
  "бургер": 4000,
  "тараг": 4000
};

function showProducts() {
  const productList = document.getElementById("productList");

  productList.innerHTML = Object.entries(products)
    .map(([name, price]) => `
      <div class="product-item">
        ${name} - ${price.toLocaleString()}₮
      </div>
    `)
    .join("");
}

function calculateTotal() {
  const text = document.getElementById("messageInput").value.toLowerCase();
  const lines = text.split("\n");

  let total = 0;
  let resultHTML = "";

  for (let line of lines) {
    line = line.trim();

    if (line === "" || !line.includes("-")) continue;

    const match = line.match(/(?:\d+\/\d+-)?(.+)-(\d+)$/);

    if (!match) continue;

    const productName = match[1].trim();
    const quantity = Number(match[2]);

    if (products[productName] !== undefined && quantity > 0) {
      const price = products[productName];
      const sum = price * quantity;

      total += sum;

      resultHTML += `
        <div class="result-item">
          ${productName} | ${quantity}ш × ${price.toLocaleString()}₮ = ${sum.toLocaleString()}₮
        </div>
      `;
    }
  }

  resultHTML += `
    <div class="total">
      Нийт дүн: ${total.toLocaleString()}₮
    </div>
  `;

  document.getElementById("result").innerHTML = resultHTML;
}

showProducts();
