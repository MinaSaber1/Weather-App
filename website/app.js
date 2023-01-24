let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "61f8ec722bc22e19c9507e83d6c6fa89";
let jojo = document.getElementById('zip');

let time = new Date();
let newDate = time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();

// the function weather
    async function weather(baseURL, jojo, apiKey) {
        const res = await fetch(`${baseURL}${jojo}&appid=${apiKey}&units=imperial`);
        try {
            const data = await res.json();
            return data;
        }
        catch (error) {
            console.log('error', error);
        }
    }

// the function action to perform the action when click on generate
function doTheCode() {
    const lateZip = document.getElementById('zip')?.value;
    const feel = document.getElementById('feel')?.value;
    weather(baseURL, lateZip , apiKey)
        .then(function (data) {
            postData('/putData', { temp: data.main.temp, date: newDate, content: feel})
            updateUI();
        })


}

// post data on the lateData array
const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
  });

    try {
      const lateData = await response.json();
             return lateData;
    }catch(error) {
    console.log("error", error);
    }
}

// update UI to enter the client html
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.tempreture;
        document.getElementById('content').innerHTML = allData.feel;

    } catch (error) {
        console.log("error", error);
    }
}

// Async GET
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
    }
    catch(error) {
      console.log("error", error);
    }};
