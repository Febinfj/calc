const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/.%";

    if (allowedKeys.includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
