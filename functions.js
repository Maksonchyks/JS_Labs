function printMessage(message, count) {
    if (count === void 0) { count = 1; }
    for (var i = 0; i < count; i++) {
        console.log(message);
    }
}
printMessage("Привіт!");
printMessage("Привіт ще раз!", 3);
