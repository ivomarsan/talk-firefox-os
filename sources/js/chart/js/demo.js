if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
  lineChart();
  barsChart();
}

function lineChart() {
  var options =
      { responsive:true }
    , data =
      { labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
      , datasets: [
        { label: "Others"
        , fillColor: "rgba(246, 187, 0, 0)"
        , strokeColor: "rgba(246, 187, 0, 1)"
        , pointColor: "rgba(246, 187, 0, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(246, 187, 0, 1)"
        , data: [0.2, 0.3, 0.4, 0.3, 0.3, 0.3, 0.3, 0.4]
        },
        { label: "Desktop"
        , fillColor: "rgba(0, 104, 157, 0)"
        , strokeColor: "rgba(0, 104, 157, 1)"
        , pointColor: "rgba(0, 104, 157, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(0, 104, 157, 1)"
        , data: [2.2, 2.3, 2.4, 2.6, 2.5, 2.3, 2.4, 2.4]
        },
        { label: "Mobile"
        , fillColor: "rgba(51, 183, 128, 0)"
        , strokeColor: "rgba(51, 183, 128, 1)"
        , pointColor: "rgba(51, 183, 128, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(51, 183, 128, 1)"
        , data: [0.3, 0.3, 0.4, 0.8, 1.6, 2.3, 2.6, 2.8]
        }]
      }
    , ctx = document.getElementById("lineChart").getContext("2d")
    , LineChart = new Chart(ctx).Line(data, options)
    ;

  legend(document.getElementById("lineChartLegend"), data);
}


function barsChart() {
  var options =
      { responsive:true }
    , data =
      { labels : ["Plataformas"]
      , datasets : [
        { label: "iOS"
        , fillColor: "rgba(36, 30, 32, 0.5)"
        , strokeColor: "rgba(36, 30, 32, 1)"
        , pointColor: "rgba(36, 30, 32, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(36, 30, 32, 1)"
        , data: [0.1]
        },
        { label: "Android"
        , fillColor: "rgba(151, 192, 36, 0.5)"
        , strokeColor: "rgba(151, 192, 36, 1)"
        , pointColor: "rgba(151, 192, 36, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(151, 192, 36, 1)"
        , data: [0.45]
        },
        { label: "HTML5"
        , fillColor: "rgba(241, 101, 41, 0.5)"
        , strokeColor: "rgba(241, 101, 41, 1)"
        , pointColor: "rgba(241, 101, 41, 1)"
        , pointStrokeColor: "#fff"
        , pointHighlightFill: "#fff"
        , pointHighlightStroke: "rgba(241, 101, 41, 1)"
        , data: [8]
        }]
      }
    , ctx = document.getElementById("barsChart").getContext("2d")
    , barsChart = new Chart(ctx).Bar(data, options)
    ;

  legend(document.getElementById("barsChartLegend"), data);
}
