// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// contentProduct
let contentProduct = {
  button: document.getElementById("ButtonContent"),
  array: [
      `<img src="img/img_01.jpeg" alt="" /><span><p>Content: Shoe</p></span>`,
      `<img src="img/img_02.png" alt="" /><span><p>Content: Manga</p></span>`,
      `<img src="img/img_03.png" alt="" /><span><p>Content: Pixel</p></span>`,
      `<img src="img/img_04.png" alt="" /><span><p>Content: Expensive shoe</p></span>`,
    ],
  arrayName: [`Nike Air Force 1 '07`,`Dead Dead Demons Dededede... vol. 1`,`Google Pixel 6 128 GB`,`Y-3 Multicolor Kaiwa Sneakers`],
  arrayPrice: [`$99`,`$15`,`$650`,`$480`],
  arrayTotal: [`$99`,`$15`,`$650`,`$480`],
  toggle: 0,
}

// let contentImg
if (document.getElementById("summary-img-1")) {
  contentProduct.img = []
  contentProduct.img.push(document.getElementById("summary-img-1"))
  contentProduct.img.push(document.getElementById("summary-img-2"))
  contentProduct.img.push(document.getElementById("summary-img-3"))
  contentProduct.img.push(document.getElementById("summary-img-4"))

  contentProduct.name = document.getElementById("summary-name");
  contentProduct.price = document.getElementById("summary-price");
  contentProduct.total = document.getElementById("summary-total");
}

// contentProduct Function
contentProduct.switch = function(n) {
  if (n == "02") {

    if (document.getElementById("summary-img-1")) {
      for (var i in contentProduct.img) {
        contentProduct.img[i].classList.remove("shown");
      }
      contentProduct.img[1].classList.add("shown");
      contentProduct.name.innerHTML = contentProduct.arrayName[1];
      contentProduct.price.innerHTML = contentProduct.arrayPrice[1];
      contentProduct.total.innerHTML = contentProduct.arrayTotal[1];
    }
      contentProduct.button.innerHTML = contentProduct.array[1];
      contentProduct.toggle = 1;
      localStorage.setItem("contentProduct", "02")}

  if (n == "03") {

    if (document.getElementById("summary-img-2")) {
      for (var i in contentProduct.img) {
        contentProduct.img[i].classList.remove("shown");
      }
      contentProduct.img[2].classList.add("shown");
      contentProduct.name.innerHTML = contentProduct.arrayName[2];
      contentProduct.price.innerHTML = contentProduct.arrayPrice[2];
      contentProduct.total.innerHTML = contentProduct.arrayTotal[2];
    }
      contentProduct.button.innerHTML = contentProduct.array[2];
      contentProduct.toggle = 2;
      localStorage.setItem("contentProduct", "03")}

   if (n == "04") {

    if (document.getElementById("summary-img-3")) {
      for (var i in contentProduct.img) {
        contentProduct.img[i].classList.remove("shown");
      }
      contentProduct.img[3].classList.add("shown");
      contentProduct.name.innerHTML = contentProduct.arrayName[3];
      contentProduct.price.innerHTML = contentProduct.arrayPrice[3];
      contentProduct.total.innerHTML = contentProduct.arrayTotal[3];
    }
      contentProduct.button.innerHTML = contentProduct.array[3];
      contentProduct.toggle = 3;
      localStorage.setItem("contentProduct", "04")}

  if (n == "01") {

    if (document.getElementById("summary-img-4")) {
      for (var i in contentProduct.img) {
        contentProduct.img[i].classList.remove("shown");
      }
      contentProduct.img[0].classList.add("shown");
      contentProduct.name.innerHTML = contentProduct.arrayName[0];
      contentProduct.price.innerHTML = contentProduct.arrayPrice[0];
      contentProduct.total.innerHTML = contentProduct.arrayTotal[0];
    }
      contentProduct.button.innerHTML = contentProduct.array[0];
      contentProduct.toggle = 0;
      localStorage.removeItem("contentProduct")
  }
}

// contentProduct Event listener and checking toggle
contentProduct.button.addEventListener("click", function () {
if (contentProduct.toggle == 0) {
  contentProduct.switch("02")
} else
if (contentProduct.toggle == 1) {
  contentProduct.switch("03")
} else
if (contentProduct.toggle == 2) {
  contentProduct.switch("04")
} else
if (contentProduct.toggle == 3) {
  contentProduct.switch("01")
}
});

// Preserving contentProduct settings
if (localStorage.getItem("contentProduct") == null) {
contentProduct.switch("01")
};

if (localStorage.getItem("contentProduct") == "01") {
contentProduct.switch("01")
};

if (localStorage.getItem("contentProduct") == "02") {
  contentProduct.switch("02")
};
if (localStorage.getItem("contentProduct") == "03") {
  contentProduct.switch("03")
};
if (localStorage.getItem("contentProduct") == "04") {
  contentProduct.switch("04")
};



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// Advanced Options

let settings = {
    button: document.getElementById("ButtonSettings"),
    section: document.getElementById("ButtonExtraOptions"),
    array: [
        `<svg class="feather"><use href="feather-sprite.svg#settings" /></svg><span><p>Show options</p></span>`,
        `<svg class="feather"><use href="feather-sprite.svg#settings" /></svg><span><p>Hide options</p></span>`,
    ],
    toggle: 0,
}

// settings Function
settings.switch = function(n) {
    if (n == "on") {
        settings.section.classList.add("show");
        settings.button.innerHTML = settings.array[1];
        settings.toggle++;
        localStorage.setItem("settings", true)}
    if (n == "off") {
        settings.section.classList.remove("show");
        settings.button.innerHTML = settings.array[0];
        settings.toggle = 0;
        localStorage.setItem("settings", false)
    }
}

// settings Event listener and checking toggle
settings.button.addEventListener("click", function () {
  if (settings.toggle == 0) {
    settings.switch("on")
  } else
  if (settings.toggle == 1) {
    settings.switch("off")
  }
});

// if (localStorage.getItem("settings") == "true") {
//     rtl.switch("on")
//   };


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// fillOptions 
let fillOptions = {
    button: document.getElementById("ButtonFillOptions"),
    array: [
        `<svg class="feather"><use href="feather-sprite.svg#zap" /></svg><span><p>Prefill controls: on</p></span>`,
        `<svg class="feather"><use href="feather-sprite.svg#zap-off" /></svg><span><p>Prefill controls hidden</p></span>`,
      ],
    toggle: 0,
}



// fillOptions Function
fillOptions.switch = function(n) {
    if (n == "on") {
      if (document.getElementById("prefillOptions")) {
        document.getElementById("prefillOptions").classList.add("hide");
      }

        body.classList.add("fillOptions");
        fillOptions.button.innerHTML = fillOptions.array[1];
        fillOptions.toggle++;
        localStorage.setItem("fillOptions", true)}
    if (n == "off") {
      if (document.getElementById("prefillOptions")) {
        document.getElementById("prefillOptions").classList.remove("hide");
      }

        body.classList.remove("fillOptions");
        fillOptions.button.innerHTML = fillOptions.array[0];
        fillOptions.toggle = 0;
        localStorage.setItem("fillOptions", false)
    }
}

// fillOptions Event listener and checking toggle
fillOptions.button.addEventListener("click", function () {
  if (fillOptions.toggle == 0) {
    fillOptions.switch("on")
  } else
  if (fillOptions.toggle == 1) {
    fillOptions.switch("off")
  }
});

// Preserving fillOptions settings
if (localStorage.getItem("fillOptions") == "true") {
    fillOptions.switch("on")
  };


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// autocomplete Language Suppot
let autocomplete = {
    button: document.getElementById("ButtonAutocomplete"),
    array: [
        `<svg class="feather"><use href="feather-sprite.svg#check-circle"></use></svg> <span><p>Autocomplete=on</p></span>`,
        `<svg class="feather orange"><use href="feather-sprite.svg#x-circle"></use></svg> <span><p>Autocomplete=off</p></span>`,
        `<svg class="feather red"><use href="feather-sprite.svg#trash"></use></svg> <span><p>Autocomplete=garbage</p></span>`,
        `<svg class="feather purple"><use href="feather-sprite.svg#help-circle"></use></svg> <span><p>Unclassified fields</p></span>`,
      ],
    toggle: 0,
}

// autocomplete Function
autocomplete.switch = function(n, animation) {
    if (n == "off") {
        autocomplete.button.innerHTML = autocomplete.array[1];
        localStorage.setItem("autocomplete", "off")}
        if (autocomplete.update){autocomplete.update("off", animation);}
        autocomplete.toggle = 1;


    if (n == "garbage") {
        autocomplete.button.innerHTML = autocomplete.array[2];
        localStorage.setItem("autocomplete", "garbage")
        if (autocomplete.update){autocomplete.update("garbage", animation);}
        autocomplete.toggle = 2;
    }
    if (n == "unclassified") {

        autocomplete.button.innerHTML = autocomplete.array[3];
        localStorage.setItem("autocomplete", "unclassified")
        if (autocomplete.update){autocomplete.update("unclassified", animation);}
        autocomplete.toggle = 3;
    }
    if (n == "on") {
      autocomplete.button.innerHTML = autocomplete.array[0];
      localStorage.setItem("autocomplete", "on")
      if (autocomplete.update){autocomplete.update("on", animation);}
      autocomplete.toggle = 0;
    }
}

// autocomplete Event listener and checking toggle
autocomplete.button.addEventListener("click", function () {
  // console.log(autocomplete.toggle)

  if (autocomplete.toggle == 0) {
    autocomplete.switch("off", true)
  } else
  if (autocomplete.toggle == 1) {
    autocomplete.switch("garbage", true)
  } else
  if (autocomplete.toggle == 2) {
    autocomplete.switch("unclassified", true)
  } else
  if (autocomplete.toggle == 3) {
    autocomplete.switch("on", true)
  }
});




// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// RTL Language Suppot
let rtl = {
    button: document.getElementById("ButtonRtl"),
    array: [
        `<svg class="feather"><use href="feather-sprite.svg#align-left" /></svg><span><p>Left to Right</p></span>`,
        `<svg class="feather"><use href="feather-sprite.svg#align-right" /></svg><span><p>Right to Left</p></span>`,
      ],
    toggle: 0,
}

// RTL Function
rtl.switch = function(n) {
    if (n == "on") {
        body.classList.add("rtl");
        rtl.button.innerHTML = rtl.array[1];
        rtl.toggle++;
        localStorage.setItem("rtl", true)}
    if (n == "off") {
        body.classList.remove("rtl");
        rtl.button.innerHTML = rtl.array[0];
        rtl.toggle = 0;
        localStorage.setItem("rtl", false)
    }
}

// RTL Event listener and checking toggle
rtl.button.addEventListener("click", function () {
  if (rtl.toggle == 0) {
    rtl.switch("on")
  } else
  if (rtl.toggle == 1) {
    rtl.switch("off")
  }
});

// Preserving rtl settings
if (localStorage.getItem("rtl") == "true") {
    rtl.switch("on")
  };

  ButtonMenu = document.getElementById("ButtonMenu");
  ButtonMenu.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------