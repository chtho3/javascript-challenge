// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// populate the table for each UFO sighting
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


function clickFunc() {
  var inputElement = d3.select("#filters");

  var filteredTable = tableData;
// define Selector inputs
  var dateQuery = inputElement.property("datetime");
  var stateQuery = inputElement.property("state");
  var cityQuery = inputElement.property("city");
  var countryQuery = inputElement.property("country");
  var shapeQuery = inputElement.property("shape");
  console.log(stateQuery);

// dateQuery
  if (dateQuery != "") {
    filteredTable = tableData.filter(index => {
      var filteredDate = index.datetime;
      return filteredDate === dateQuery;
    });
  }
  else{filteredTable};
// stateQuery
  if (stateQuery != "") {
    filteredTable = tableData.filter(index => {
      var filteredState = index.state;
      return filteredState === stateQuery;
    });
  }
  else{filteredTable};
  // cityQuery
  if (cityQuery != "") {
    filteredTable = tableData.filter(index => {
      var filteredCity = index.city;
      return filteredCity === cityQuery;
    });
  }
  else{filteredTable};
  // countryQuery
  if (countryQuery != "") {
    filteredTable = tableData.filter(index => {
      var filteredCountry = index.country;
      return filteredCountry === countryQuery;
    });
  }
  else{filteredTable};
  // shapeQuery
  if (shapeQuery != "") {
    filteredTable = tableData.filter(index => {
      var filteredShape = index.shape;
      return filteredShape === shapeQuery;
    });
  }
  else{filteredTable};
//var filteredData = people.filter(person => person.bloodType === inputValue);

    
  // populate the table for each UFO sighting
  filteredTable.forEach((ufoSighting) => {
    tbody.innerHTML="";
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};



function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  clickFunc();
  // Select the input value from the form
  var newTable = d3.select("tbody").node().value;
  // clear the input value
  d3.select("tbody").node().value = "";
  var row = newTable.append("tr");
  Object.entries(filteredTable).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
 };

 // event listener
 d3.select("filter-btn").on("click", handleSubmit);