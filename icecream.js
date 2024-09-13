// Функція для розрахунку вартості морозива
function calculateIceCreamPrice() {
    var _a, _b, _c;
    // Вибір розміру морозива
    var size = (_a = prompt("Виберіть розмір морозива (маленький - 10грн, великий - 25грн):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var price = 0;
    if (size === "маленький") {
        price += 10;
    }
    else if (size === "великий") {
        price += 25;
    }
    else {
        console.log("Невірний розмір!");
        return;
    }
    // Вибір начинок
    var toppings = (_b = prompt("Виберіть начинку(и) (шоколад - 5грн, карамель - 6грн, ягоди - 10грн). Введіть через кому:")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",");
    if (toppings && toppings.length > 0) {
        toppings.forEach(function (topping) {
            switch (topping.trim()) {
                case "шоколад":
                    price += 5;
                    break;
                case "карамель":
                    price += 6;
                    break;
                case "ягоди":
                    price += 10;
                    break;
                default:
                    console.log("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping.trim(), "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430!"));
            }
        });
    }
    else {
        console.log("Ви повинні вибрати хоча б одну начинку!");
        return;
    }
    // Додатково маршмелоу
    var marshmallow = (_c = prompt("Бажаєте додати маршмелоу? (так/ні)")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (marshmallow === "так") {
        price += 5;
    }
    console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(price, " \u0433\u0440\u043D."));
}
// Виклик функції
calculateIceCreamPrice();
