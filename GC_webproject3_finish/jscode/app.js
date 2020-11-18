//using selectors inside the element
//traversing the dom

//const items = document.querySelectorAll("section");

//items.forEach(function (item) {
//  item.addEventListener("click", function(e){
//    console.log(e.currentTarget);
//  });
//});


//using selectors inside the element

const items = document.querySelectorAll("section");

 items.forEach(function (item)){
  const item = item.querySelectorAll("section");

  item.addEventListener("click", function (){
    items.forEach(function (index){
      if (index !== question){
        index.classList.remove("show");
      }
    });
    item.classList.toggle("show-text");
  });
});
