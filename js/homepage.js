$(document).ready(function() {
  $(function() {
    $("#datepicker").datepicker();
  });

  $(function() {
    $("#timepicker").timepicker();
  });

  var tnum, tnam, ttime, tcost, classname;
  var from, to, date;
  var availableCities = [
    "Mumbai", "Kolkata", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Ahmadabad", "Pune", "Surat", "Kanpur",
    "Jaipur", "Lucknow", "Nagpur", "Patna", "Indore", "Vadodara", "Bhopal", "Coimbatore", "Ludhiana", "Kochi",
    "Visakhapatnam", "Agra", "Varanasi", "Madurai", "Meerut", "Nashik", "Jabalpur", "Jamshedpur", "Asansol",
    "Dhanbad", "Faridabad", "Allahabad", "Amritsar", "Vijayawada", "Rajkot"
  ];

  $("#from, #to").autocomplete({
    source: availableCities
  });

  $(".invis").hide();
  $("#page2").hide();
  $(".final").hide();

  $("#search").click(function() {
    from = $("#from").val();
    to = $("#to").val();
    date = $("#datepicker").val();

    if (!(from && to && date)) {
      alert("Please Select All Fields !");
      return false; // Use lowercase 'false'
    } else if (from === to) { // Use strict equality operator
      alert("From and To can't be same");
      return false; // Use lowercase 'false'
    }

    $("#page1").hide();
    $("#page2").show();

    $("#trainname1").html(from + " Express");
    $("#trainname2").html(to + " Express");
    $("#trainname3").html(from + " Passenger");
    $("#trainname4").html(to + " Passenger");
    $("#trainname5").html(from + " - " + to + " Super Fast Train");

    $("tbody > tr").mouseover(function() {
      $(this).css("backgroundColor", "rgba(41, 103, 182, 0.89)");
    }).mouseout(function() {
      $(this).css("backgroundColor", "");
    });

    $("tbody > tr").click(function() {
      $(this).parent().children().removeClass("selected");
      $(this).addClass("selected");
    });

    $(".book").click(function() {
      tcost = $(".selected").find(".tcost").text();
      tnum = $(".selected").find(".tnum").text();
      tnam = $(".selected").find(".tnam").text();
      ttime = $(".selected").find(".ttime").text();

      if (!tnum) {
        alert("Please Select Your Train !");
        return false; // Use lowercase 'false'
      }

      $(".invis").show();

      $(".booknow").click(function() {
        classname = $('input[name="toggle"]:checked+span').text(); // Adjusted selector
        $(".invis").hide(function() {
          $("#page2").hide();
        });
        $(".index").hide();
        $(".final").show();
      });

      $(".bookcancel").click(function() {
        $(".invis").hide();
      });

      $("#From").html(from);
      $("#To").html(to);
      $(".trainname").html(tnam);
      $("#number").html(tnum);

      var d = new Date();
      var n = d.toLocaleDateString();
      $("#date").html(n); // Adjusted selector

      var code = '1101001000010011101100101110111101101000111010111001100110111001001011110111011100101100100100001101100011101011';
      var table = $('#barcodes tr'); // Added missing var keyword
      table.empty(); // Clear previous content

      for (var i = 0; i < code.length; i++) {
        if (code[i] === '1') { // Use strict equality operator
          table.append('<td bgcolor="black"></td>'); // Corrected HTML syntax
        } else {
          table.append('<td bgcolor="white"></td>'); // Corrected HTML syntax
        }
      }
    });
  });
});