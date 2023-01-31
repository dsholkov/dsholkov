function randomID(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


// autocomplete.switch("on")

let RememberID = []
let RememberPlaceholer = []

let Label = []
let RememberLabel = []
Label.present = false


if (document.getElementById("coupon")) {
  Field.push(document.getElementById("coupon"))
}

if (document.getElementsByClassName("labelID")[0]) {
  Label.present = true
  labelID = document.getElementsByClassName("labelID")
  Array.from(labelID).forEach((labelElement) => {
    Label.push(labelElement);
    RememberLabel.push(labelElement.innerHTML);
});
}


// console.log(RememberLabel)
// Autocomplete Function
 autocomplete.update = function (n, debug) {
    if (n == "on") {
      // console.log(RememberID)
      // console.log(RememberPlaceholer)
      for (let i in Field) {

        // console.log(i)
        // console.log(RememberID)
        Field[i].setAttribute("id", RememberID[i]);
        Field[i].setAttribute("placeholder", RememberPlaceholer[i]);
        Field[i].setAttribute("autocomplete", "on");
        
        if (Label.present) {
          Label[i].innerHTML = RememberLabel[i]
        }

        // console.log(Field[i].getAttribute("id"))
        if (debug){
            Field[i].classList.add("ac-on");
            Field[i].classList.remove("ac-off");
            Field[i].classList.remove("ac-garbage");
            Field[i].classList.remove("ac-unclassified");
        }

      }
      RememberID = []
      RememberPlaceholer = []
    };

    if (n == "off") {
      for (let i in Field) {
        Field[i].setAttribute("autocomplete", "off");
        // console.log(Field[i].getAttribute("id"))
        if (debug){
          Field[i].classList.remove("ac-on");
          Field[i].classList.add("ac-off");
          Field[i].classList.remove("ac-garbage");
          Field[i].classList.remove("ac-unclassified");
        }
    }
};

    if (n == "garbage") {
      for (let i in Field) {
        Field[i].setAttribute("autocomplete", "garbage");
        // console.log(Field[i].getAttribute("id"))
        if (debug){
          Field[i].classList.remove("ac-on");
          Field[i].classList.remove("ac-off");
          Field[i].classList.add("ac-garbage");
          Field[i].classList.remove("ac-unclassified");

    }
    }
  };

  if (n == "unclassified") {
    for (let i in Field) {
      // console.log(Field[i].getAttribute("id"))
      RememberID.push(Field[i].getAttribute("id"))
      RememberPlaceholer.push(Field[i].getAttribute("placeholder"))
      Field[i].setAttribute("id", randomID(5));
      Field[i].setAttribute("placeholder", randomID(5));
      Field[i].setAttribute("autocomplete", "on");

      if (Label.present) {
        Label[i].innerHTML = randomID(5)
      }

      if (debug){
        Field[i].classList.remove("ac-on");
        Field[i].classList.remove("ac-off");
        Field[i].classList.remove("ac-garbage");
        Field[i].classList.add("ac-unclassified");
  }
  }
};
};


// Preserving autocomplete settings
if (localStorage.getItem("autocomplete") == "off") {
  console.log("Mode: off")
  autocomplete.switch("off", false)
  settings.switch("on")
  
} else if (localStorage.getItem("autocomplete") == "garbage") {
  console.log("Mode: garbage")
  autocomplete.switch("garbage", false)
  settings.switch("on")
} else if (localStorage.getItem("autocomplete") == "unclassified") {
  console.log("Mode: unclassified")
  autocomplete.switch("unclassified", false)
  settings.switch("on")
};

