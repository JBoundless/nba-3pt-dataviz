function makeChart(players) {

  var playerLabels = players.map(function(d) {
    return d.Player;
  });
  var threePointPerData = players.map(function(d) {
    return +d.ThreePointPer;
  });

  var chart = new Chart('chart', {
    type: "horizontalBar",
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false 
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: threePointPerData,
          backgroundColor: 'navy'
        }
      ]
    }
  });
}

// Request data using D3
d3
  .csv("https://raw.githubusercontent.com/JBoundless/nba-d3-dataviz/main/3PT%20%25%20vs%20PPG-2.csv")
  .then(makeChart);