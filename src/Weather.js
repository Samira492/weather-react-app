import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    let temp = response.data.main.temp;
    alert(`temperature in mashhad is ${temp}`);
  }

  let apiKey = "0aaff63ed94f830061304509b4039f7f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=mashhad&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
