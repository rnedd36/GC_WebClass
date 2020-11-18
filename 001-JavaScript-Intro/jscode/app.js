//  ******Alert Box**************
document.querySelectorAll('#btn1').forEach((item) => {
  item.addEventListener('click', () =>{
    alert('hello world');
  });

});
// *****************document****************
document.querySelectorAll('.btn2').forEach((item) => {
  item.addEventListener('click', () =>{
    document.write('hello world');
  });

});
// ****************console*********************
document.querySelectorAll('.btn1').forEach((item) => {
  item.addEventListener('click', () =>{
    console.log('hello world');
  });

});
// ****************innerHTML*********************
document.querySelectorAll('#btn3').forEach((item) => {
  item.addEventListener('click', () =>{
    document.querySelector('#header4').innerHTML = "hello world";
  });

});
// *****************String concatenation*************

document.querySelectorAll('#submitbtn').forEach((item) => {

  item.addEventListener('click', () =>{
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    let fullName = firstName + " " + lastName + "'s Webpage";

    document.querySelector('#header4').innerHTML = "Hello " + firstName + " " + lastName;
    document.querySelector('#header1').innerHTML = fullName;

  });

});
// *****************Compare ***************************
document.querySelectorAll('#cmpbtn').forEach((item) => {

  item.addEventListener('click', () =>{
    const num1 = 5;
    const num2 = '5';

    document.querySelector('#header4').innerHTML = num1 + " == '" + num2 + "' equals " + (num1==num2);
    document.querySelector('#header4').innerHTML += " but " + num1 + " === '" + num2 + "' equals " + (num1===num2);


  });

});
//*******************Datatype*****************************
document.querySelectorAll('#datatypes').forEach((item) => {

  item.addEventListener('click', () =>{
    const num1 = 5;
    const num2 = '5';

    let num3;


    console.log(typeof num1);
    console.log(typeof num2);
    console.log(typeof(num1 + " What Am I? "))
    console.log(typeof num3);
    console.log(typeof null);


  });

});
// ********************function one********************
function hello(){

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  let fullName = firstName + " " + lastName + "'s Webpage";

  document.querySelector('#header4').innerHTML = "Hello " + firstName + " " + lastName;
  document.querySelector('#header1').innerHTML = fullName;

}

// ***********************function two*****************
function hello2(fname, lname){

  const firstName = document.getElementById(fname).value;
  const lastName = document.getElementById(lname).value;
  let fullName = firstName + " " + lastName + "'s Webpage";

  document.querySelector('#header4').innerHTML = "Hello " + firstName + " " + lastName;
  document.querySelector('#header1').innerHTML = fullName;

}
// *****************Const***************************

function countConst(num){
  const count = num;
  while (count > 0){
      console.log(count);
      count --;
    }
  console.log('Blast OFF!!!!');
}
// ***********************Let*************************
function countLet(num){
  let count = num;
  while (count > 0){
      console.log(count);
      count --;
  }
  console.log('Blast OFF!!!!');

}
// *****************Using ID*************************
function chgColors(eid){
  const elem = document.getElementById(eid);
  elem.style.backgroundColor = '#ddd000';
  elem.style.borderColor = '#050bd4';
}
// ******************Using Class ********************
function chgColors2(classname){
  const items = document.getElementsByClassName(classname);
  items[1].style.backgroundColor = '#ddd000';
  items[1].style.borderColor = '#050bd4';
}
// ******************Using Tag **********************
function chgColors3(tagname){
  const items = document.getElementsByTagName(tagname);
  items[0].style.backgroundColor = '#ddd000';
  items[0].style.borderColor = '#050bd4';
}
// ******************Using Id and CSS ********************
function chgCSSID(eid, css){
  const item = document.getElementById(eid);
    // console.log(item);
    item.classList.toggle(css);

}
// *****************Query Selector All***************
function chgCSSClass(query, css){
  const items = document.querySelectorAll(query);
    console.log(items);
    items.forEach(function(item){
         item.classList.toggle(css);
        // console.log(item);
    });

}
