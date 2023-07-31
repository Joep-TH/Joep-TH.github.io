$(document).ready(function() {
    //On button click
    document.getElementById("generateDateIdee").onclick = function() {
      retrieveActivity();
    };
  
    function retrieveActivity() {
      fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT2gUVXbs1kReLQA6S2xT-NFiQoVR7PMoZEjrgtD2g48o0BLTSWG0aAszaJxMpCaEf7qI3D3452sLv6/pub?output=csv")
        .then(response => response.text())
        .then(data => {
          // Split the data into rows
          const rows = data.split('\n');
  
          // Extract column A values (except for A1)
          const startIndex = 1; // Skip the header row
          const endIndex = rows.length;
          const options = [];
          for (let i = startIndex; i < endIndex; i++) {
            const row = rows[i].split(',');
            if (row.length > 0 && row[0] !== "") {
              options.push(row[0]);
            }
          }
  
          // Call the randomize function with the resulting array
          randomize(options);
        })
        .catch(error => {
          console.log("Error fetching data: ", error);
        });
    }
  
    function randomize(options) {
      // Construct the Wheel Decide URL with all the options
      const baseUrl = "https://wheeldecide.com/e.php?";
      const optionsParam = options.map(option => `c${options.indexOf(option) + 1}=${encodeURIComponent(option)}`).join('&');
      const timeParam = "time=5"; // Set the spin time to 5 seconds
      const wheelDecideUrl = `${baseUrl}${optionsParam}&${timeParam}`;
  
      // Update the <iframe> src attribute with the Wheel Decide URL
      const wheelDecideIframe = document.getElementById("wheelDecide1");
      wheelDecideIframe.setAttribute("src", wheelDecideUrl);
  
      // Add an event listener for when the iframe loads
      wheelDecideIframe.addEventListener('load', function() {
        // Trigger a click event on the wheel to spin it
        wheelDecideIframe.contentWindow.postMessage('spin', 'https://wheeldecide.com');
      });
    }


    //Avoneten functie
    document.getElementById("generateDateDiner").onclick = function() {
        retrieveFood();
      };
    
      function retrieveFood() {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT2gUVXbs1kReLQA6S2xT-NFiQoVR7PMoZEjrgtD2g48o0BLTSWG0aAszaJxMpCaEf7qI3D3452sLv6/pub?output=csv")
          .then(response => response.text())
          .then(data => {
            // Split the data into rows
            const rows = data.split('\n');
    
// Extract column C values (except for C1)
const startIndex = 1; // Skip the header row
const endIndex = rows.length;
const options = [];
for (let i = startIndex; i < endIndex; i++) {
  const row = rows[i].split(',');
  if (row.length > 2 && row[2] !== "") {
    options.push(row[2]);
  }
}

    
            // Call the randomize function with the resulting array
            randomize2(options);
          })
          .catch(error => {
            console.log("Error fetching data: ", error);
          });
      }
    
      function randomize2(options) {
        // Construct the Wheel Decide URL with all the options
        const baseUrl = "https://wheeldecide.com/e.php?";
        const optionsParam = options.map(option => `c${options.indexOf(option) + 1}=${encodeURIComponent(option)}`).join('&');
        const timeParam = "time=5"; // Set the spin time to 5 seconds
        const wheelDecideUrl = `${baseUrl}${optionsParam}&${timeParam}`;
    
        // Update the <iframe> src attribute with the Wheel Decide URL
        const wheelDecideIframe = document.getElementById("wheelDecide2");
        wheelDecideIframe.setAttribute("src", wheelDecideUrl);
    
        // Add an event listener for when the iframe loads
        wheelDecideIframe.addEventListener('load', function() {
          // Trigger a click event on the wheel to spin it
          wheelDecideIframe.contentWindow.postMessage('spin', 'https://wheeldecide.com');
        });
      }
  });
  