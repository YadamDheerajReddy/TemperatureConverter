const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convertBtn");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", () => {
      if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        resultDiv.textContent = `${celsius}°C is ${fahrenheit}°F`;
      } else if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
        resultDiv.textContent = `${fahrenheit}°F is ${celsius}°C`;
      }
    });