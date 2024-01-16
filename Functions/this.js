function Person() {
  // let that=this
  this.age = 20;

  setInterval(function(){
    this.age++;
    // console.log(that.age)
  }, 1000);
}

var p = new Person();
// console.log(p.age);

setInterval(function() {
  console.log(p.age);
}, 1000);