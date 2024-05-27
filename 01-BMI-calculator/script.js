document.getElementById("submit").addEventListener("click", getBmi);

function getBmi() {
  let cm = parseInt(document.getElementById("cm").value);
  let kg = parseFloat(document.getElementById("kg").value);
  let bmi;
  console.log(isNaN(cm));

  // Check if the input values are numbers
  if (!cm || !kg || isNaN(cm) || isNaN(kg)) {
    alert("Please enter valid numeric values for height and weight.");
    return; // Stop the function execution if invalid input
  }

  let newCm = parseFloat(cm / 100);

  bmi = kg / (newCm * newCm);

  bmi = bmi.toFixed(1);

  document.getElementById("result").innerHTML = "Your BMI is " + bmi + "😎";
}
