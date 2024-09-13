function printMessage(message: string, count: number = 1): void {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}

printMessage("Привіт!");
printMessage("Привіт ще раз!", 3);