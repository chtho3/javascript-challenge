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
  var filteredTable = tableData;
    // define Selector inputs
  var dateQuery = document.querySelector("datetime");
  var stateQuery = document.getElementById("state");
  var cityQuery = document.querySelector("city");
  var countryQuery = document.querySelector("country");
  var shapeQuery = document.querySelector("shape");
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

 // event listener
 d3.select("filter-btn").on("click", clickFunc);
