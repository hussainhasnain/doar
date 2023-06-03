
/*============= Jvector Map ===============*/
jQuery(document).ready(function() {
  jQuery('.sales__map--map').vectorMap({ map: 'usa_en',
  backgroundColor: 'transparent',
  borderColor: '#fff',
  borderOpacity: 0.25,
  borderWidth: 1,
  color: '#afdfff',
  enableZoom: true,
  hoverColor: '#48adf0',
  hoverOpacity: null,
  normalizeFunction: 'linear',
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#c9dfaf',
  selectedRegions: null,
  showTooltip: true, });
});



/*============= Stats Section Stats chart ===============*/
var sparklineData = [10,20, 30, 40, 35, 20, 25, 38, 49, 60, 70, 91, 12, 15,];

    function randomizeArray(arr) {
      var newArray = arr.slice();
      for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
      return newArray;
    }

    var options = {
      series: [{
        data: randomizeArray(sparklineData)
      }],
      chart: {
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0
      },
      colors: ['#DCE6EC'],
    };

var chart = new ApexCharts(document.querySelector("#chart-spark1"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark2"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark3"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart-spark4"), options);
chart.render();

/*============= Section Stats Chart Ends here ===============*/








/*============= Section Account chart starts here ===============*/

/*============= Area Chart starts here ===============*/
function generateDayWiseTimeSeries(baseTimestamp, count, range) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseTimestamp;
      var y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push([x, y]);
      baseTimestamp += 86400000; // Adding one day in milliseconds
      i++;
    }
    return series;
  }
  
  var options = {
    series: [
      {
        name: 'GROWTH ACTUAL',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'ACTUAL',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'PLAN',
        data: generateDayWiseTimeSeries(new Date('01 June 2023 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right'
    },
    xaxis: {
        type: 'datetime',
        
      },
      yaxis: {
        labels: {
          show: false // Set show property to false to hide the labels
        }
      },
      grid: {
        row: {
          colors: ['transparent'], // Set transparent color for row
          opacity: 0 // Set opacity to 0 for row
        },
        borderColor: 'transparent', // Set transparent color for border
        show: false // Hide grid lines
      },
    labels: {
        show: false // Set show property to false to hide the labels
      }
  };
  
  var charts = document.querySelectorAll(".area-chart");
  charts.forEach(function (chartElement) {
    var chart = new ApexCharts(chartElement, options);
    chart.render();
  });
  
/*============= Area Chart Ends here ===============*/



/*============= Column Chart starts here ===============*/
  var options = {
    series: [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }],
    annotations: {
    points: [{
      x: 'Bananas',
      seriesIndex: 0,
      label: {
        borderColor: '#775DD0',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Bananas are good',
      }
    }]
  },
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
        show: false
      },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  
  grid: {
    row: {
      colors: ['#fff', '#f2f2f2']
    }
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    categories: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: false // Set show property to false to hide the labels
    }
    
  },
  grid: {
    row: {
      colors: ['transparent'], // Set transparent color for row
      opacity: 0 // Set opacity to 0 for row
    },
    borderColor: 'transparent', // Set transparent color for border
    show: false // Hide grid lines
  },
  
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    },
  }
  };

  var chart = new ApexCharts(document.querySelector(".bar-chart"), options);
  chart.render();
/*============= Column Chart Ends here ===============*/



/*============= Vertical bar chart starts here ===============*/
var options = {
  series: [{
  data: [44, 55, 41, 64, 22, 43, 21]
}, {
  data: [53, 32, 33, 52, 13, 44, 32]
}],
  chart: {
  type: 'bar',
  height: 430
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      position: 'top',
    },
  }
},
dataLabels: {
  enabled: true,
  offsetX: -6,
  style: {
    fontSize: '12px',
    colors: ['#fff']
  }
},
stroke: {
  show: true,
  width: 1,
  colors: ['#fff']
},
tooltip: {
  shared: true,
  intersect: false
},
xaxis: {
  categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
},
};

var chart = new ApexCharts(document.querySelector(".vertical-bar-chart"), options);
chart.render();













