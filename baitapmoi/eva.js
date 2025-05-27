const apple = new Apple();
const adam = new Human("Adam", "Nam", 60);
const eva = new Human("Eva", "Nữ", 50);

adam.say("Chào Eva, em muốn ăn táo không?");
eva.say("Vâng! Nhưng anh ăn trước đi.");

while (!apple.isempty()) {
    adam.eat(apple);
    if (!apple.isempty()) {
        eva.eat(apple);
    }
}

console.log("Kết thúc câu chuyện:");
console.log("Adam:", adam.getInfo());
console.log("Eva:", eva.getInfo());
console.log("Táo còn lại:", apple.getweight());