function convertTemperatures() {
  const celsius = parseFloat(document.getElementById("celsiusInput").value);

  if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;

      document.getElementById("fahrenheitResult").innerText = `${fahrenheit.toFixed(2)} °F`;
      document.getElementById("kelvinResult").innerText = `${kelvin.toFixed(2)} K`;
  } else {
      document.getElementById("fahrenheitResult").innerText = "Invalid input";
      document.getElementById("kelvinResult").innerText = "Invalid input";
  }
}
