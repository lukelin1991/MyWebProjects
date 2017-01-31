function Time(hour, minute, period){
    var almost = "It's almost"
    var after = "It's just after"
    var morn = "in the morning"
    var eve = "in the evening"

    if (minute >= 30 && period === "PM"){
      console.log(almost, hour + 1, eve);
    }
    else if (minute >= 30){
      console.log(almost, hour + 1, morn);
    }
    else if (period === "PM"){
      console.log(after, hour, eve);
    }
    else{
      console.log(after, hour, morn);
    }
}
Time(9, 45, "AM");
Time(4, 20, "PM");
