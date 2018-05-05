// send request to /names and populate select dropdown

var names_url = 'http://127.0.0.1:5000/names';

Plotly.d3.json(names_url, function(error, response) {

    if (error) return console.warn(error);

    // Grab values from the response json object to build the plots
    //alert( response );

    var select = document.getElementById("selDataset");  


for (var i = 0; i < response.length; i++) {
    var opt = response[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
   
   
    });

function optionChanged(data) {

   alert(data);
}