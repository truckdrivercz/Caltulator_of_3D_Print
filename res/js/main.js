const calculate = () => {
  const pricePerKg = parseFloat(document.getElementById("filamentPrice").value);
  const gramsUsed = parseFloat(document.getElementById("filamentUsed").value);
  const hours = parseFloat(document.getElementById("printHours").value);
  const minutes = parseFloat(document.getElementById("printMinutes").value);
  const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);

  if (
    isNaN(pricePerKg) || isNaN(gramsUsed) ||
    isNaN(hours) || isNaN(minutes) || isNaN(hourlyRate)
  ) {
    document.getElementById("result").innerHTML = "Vyplňte prosím všechna pole správně.";
    return;
  }

  const totalHours = hours + (minutes / 60);
  const pricePerGram = pricePerKg / 1000;
  const materialCost = gramsUsed * pricePerGram;
  const timeCost = totalHours * hourlyRate;
  const total = materialCost + timeCost;

  document.getElementById("result").innerHTML = `Celková cena: <strong>${total.toFixed(2)} Kč</strong>`;
};

const resetForm = () => {
  document.getElementById("filamentPrice").value = '';
  document.getElementById("filamentUsed").value = '';
  document.getElementById("printHours").value = '';
  document.getElementById("printMinutes").value = '';
  document.getElementById("result").innerHTML = '';
};

document.getElementById("count").onclick = calculate;
document.getElementById("reset").onclick = resetForm;
