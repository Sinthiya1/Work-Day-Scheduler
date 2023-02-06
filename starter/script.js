// set date & time and render the time every second using setInterval() function
var date = moment().format('dddd MMM Do, YYYY');
$('#currentDay').html(date);
var timeInterval = setInterval(function() {
    var time = moment();
    $('#currentTime').html(" Time: " + time.format('hh:mm:ss A')); 
}, 1000);


// color each time block according to hours
function timeManager() {

    $(".form-control").each(function () {
        //get current number of hours
    var currentHour = moment().format('H');
    console.log(currentHour);
    var time3 = parseInt($(this).attr("data-hour"));
    console.log(parseInt(time3));
    

     console.log(currentHour);
     if (time3 < currentHour) {
        $(this).addClass("past");
         $(this).removeClass("future");
         $(this).removeClass("present");
    } 
     if (time3 == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
     if (time3 > currentHour){
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
});

}

// getItem(), setItem() methods for saving the works in the scheduler depending on hours and persist the work save even if the page refresh
var Savebtn = $(".saveBtn");
// set data in the local storage
Savebtn.click(function() {
    console.log(this);
    console.log($(this).siblings(".description"));
    console.log($(this).siblings(".description").val());
    var value = $(this).siblings(".description").val();
    console.log($(this).parent().attr("id"));
    var key = $(this).parent().attr("id");
     localStorage.setItem(key, value);
  });

timeManager();


//fot each hour loading use the saved data from local storage 
    $("#1").val(localStorage.getItem("hour1"));
    $("#2").val(localStorage.getItem("hour2"));
    $("#3").val(localStorage.getItem("hour3"));
    $("#4").val(localStorage.getItem("hour4"));
    $("#5").val(localStorage.getItem("hour5"));
    $("#6").val(localStorage.getItem("hour6"));
    $("#7").val(localStorage.getItem("hour7"));
    $("#8").val(localStorage.getItem("hour8"));
    $("#9").val(localStorage.getItem("hour9"));
   
    


