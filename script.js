function convertToPounds() {
    const kg = document.getElementById('kgInput').value;
    if (kg === "" || isNaN(kg)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    const pounds = (kg * 2.20462).toFixed(2);
    document.getElementById('result').innerText = `${kg} kg = ${pounds} pounds`;
}
