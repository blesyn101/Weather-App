async function getWeather() {
    let city = document.getElementById("cityInput").value;
        let apiKey = "4c8da2f98f4349b3108331336f6c0ed8"; // Your API key

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again!</p>`;
    }
}

