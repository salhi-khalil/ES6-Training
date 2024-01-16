function testLet() {
  let x=10
  if(true) {
    let x = 5;
    console.log("in block : " + x);
  }

  console.log(x);
}

testLet();