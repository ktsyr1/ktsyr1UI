
// code new
function view(id, value) {
  var app = document.getElementById(id)
  if (app.style.display == value) {
    app.style.display = "none";
  } else {
    app.style.display = value;
  }
}
function app() {
  this.name = "1";
  this.an = "2";
  this.adding = "3";
  this.tools = "4";

  this.course = {
    name_course: "5",
    in_course: "6",
    link_course: "7"
  }
  this.getin = gits

}
function gits() {
  console.log(
    this.name + "-" +
    this.an + "-" +
    this.adding + "-" +
    this.tools + "-" +
    this.course
  )
}