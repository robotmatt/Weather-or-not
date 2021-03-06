// Function: search NOAA
// utilizes the NOAA API to search through the list of cities and compares their upcoming weather to what the user selected
// Returns: array of cities that matches the weather description
function searchNOAA(weatherDescription) {

}

// Function: searchFlights
// use the Skyscanner API to search for the cheapest flights based on the cities selected by the user
// Returns: array of objects, cities and the cheapest flight found
function searchFlights(citiesSelected) {

}

// Function displayLowestPrices
// displays the lowest price flights to the page
function displayLowestPrices() {

}

// Function: displayCitiesWeather
// displays the cities and their weather to the page
function displayCitiesWeather(id) {
    $("#cities").html("");
    console.log(id);

    var tableDiv = $("<div>").addClass("col-md-12");
    var table = $("<table>").addClass("table");
    var heading = $("<thead>").addClass("thead-dark");
    var headingTr = $("<tr>");
    headingTr.append($("<th>").text("Select"), $("<th>").text("City"), $("<th>").text("Day 1"), $("<th>").text("Day 2"), $("<th>").text("Day 3"));
    heading.append(headingTr);
   

    let citiesWeather = searchNOAA(id);

    // TODO: Create foreach looping through each citiesWeather and add to table

    //var tbody = $("<tbody>");
    //var tr = $("<tr>");
    //tr.append($("<td>").text("blah"));
    // tbody.append(tr);
    // table.append(tbody);

    table.append(heading);
    tableDiv.append(table);
    $("#cities").append(tableDiv);
};

$(document).ready(function () {
    $(".weather-btn").on("click", function (){
        let id = $(this).attr("id");
        console.log(id);
        displayCitiesWeather(id);
    });
});



// Cities onclick event

// Search flights onclick event

// Redo flights onclick event

// Edit cities onclick event