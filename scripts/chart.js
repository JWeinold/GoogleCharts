// Load the Visualization API and the corechart package -- bringing in all the code you need for the core charts
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded -- when that api is loaded in line 8 line 10 call the drawchart function.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Assignee');
        data.addColumn('number', 'Count');
        data.addRows([
          ['Andy', 9],
          ['Anne', 8],
          ['Jane', 4],
          ['John', 1],
          ['William', 7]
        ]);

        // Set chart options
        var options = {'title':'Tasks Assigned to Each Team Member',
                       'width':500,
                       'height':300,};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
