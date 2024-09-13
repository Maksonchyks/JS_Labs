// Функція для розрахунку вартості морозива
function calculateIceCreamPrice(): void {
    // Вибір розміру морозива
    const size = prompt("Виберіть розмір морозива (маленький - 10грн, великий - 25грн):")?.toLowerCase();
    let price: number = 0;

    if (size === "маленький") {
        price += 10;
    } else if (size === "великий") {
        price += 25;
    } else {
        console.log("Невірний розмір!");
        return;
    }

    // Вибір начинок
    const toppings = prompt("Виберіть начинку(и) (шоколад - 5грн, карамель - 6грн, ягоди - 10грн). Введіть через кому:")?.toLowerCase().split(",");
    if (toppings && toppings.length > 0) {
        toppings.forEach(topping => {
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
                    console.log(`Начинка "${topping.trim()}" не знайдена!`);
            }
        });
    } else {
        console.log("Ви повинні вибрати хоча б одну начинку!");
        return;
    }

    // Додатково маршмелоу
    const marshmallow = prompt("Бажаєте додати маршмелоу? (так/ні)")?.toLowerCase();
    if (marshmallow === "так") {
        price += 5;
    }

    console.log(`Загальна вартість вашого морозива: ${price} грн.`);
}

// Виклик функції
calculateIceCreamPrice();