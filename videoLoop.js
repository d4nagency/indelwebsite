// Loop All Videos
$("#videoThree").bind("timeupdate", function () {
  if (Math.trunc(this.currentTime) === Math.trunc(this.duration - 10)) {
    this.currentTime = 10; // change time index here
  }
});

$("#pageVideo").bind("timeupdate", function () {
  if (Math.trunc(this.currentTime) === Math.trunc(this.duration - 9)) {
    this.currentTime = 9; // change time index here
  }
});
