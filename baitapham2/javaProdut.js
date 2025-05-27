let products = [];

function addProduct() {
    const input = document.getElementById("productInput");
    const name = input.value.trim();
    if (name) {
        products.push(name);
        input.value = "";
        renderProducts();
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

function editProduct(index) {
    const newName = prompt("Edit product name:", products[index]);
    if (newName !== null && newName.trim() !== "") {
        products[index] = newName.trim();
        renderProducts();
    }
}

function renderProducts() {
    const table = document.getElementById("productTable");
    const count = document.getElementById("productCount");
    table.innerHTML = "";
    products.forEach((product, index) => {
        const row = `
      <tr>
        <td>${product}</td>
        <td><button onclick="editProduct(${index})">Edit</button></td>
        <td><button onclick="deleteProduct(${index})">Delete</button></td>
      </tr>
    `;
        table.innerHTML += row;
    });
    count.textContent = `${products.length} products`;
}
