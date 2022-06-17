let data = [
  {
    image_url: "./images/Product1.webp",
    name: "Vitamin C Serum with Blood Orange | For Skin Glow | Fades Pigmentation & Dark Spots| Women and Men",
    p_price: "Rs: 665.00",
    price: 632.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product2.webp",
    name: "Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| Women & Men",
    p_price: "Rs: 665.00",
    price: 665.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product3.webp",
    name: "RETINOL TIME REVERSE FACE SERUM",
    p_price: "Rs: 795.00",
    price: 795.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product4.webp",
    name: "HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
    p_price: "Rs: 665.00",
    price: 665.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product5.webp",
    name: "Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu Plum| For Skin Glow|  Women & Men",
    p_price: "Rs: 795.00",
    price: 795.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product6.webp",
    name: "AHA + 2% BHA EXFOLIATING GLOW HYDRO PEEL",
    p_price: "Rs: 595.00",
    price: 595.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product7.webp",
    name: "Alpha Arbutin + Azelaic Biphasic RADIANCE Serum",
    p_price: "Rs: 545.00",
    price: 545.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product8.webp",
    name: "PHA + Bakuchiol Daily Peel Serum",
    p_price: "Rs: 995.00",
    price: 995.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product9.webp",
    name: "Salicylic Face Serum With Tea Tree Oil & Zinc | Treats Acne, Blemishes & Acne Scars| Oily, Acne Prone Skin| Women and Men",
    p_price: "Rs: 665.00",
    price: 665.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product10.webp",
    name: "Rosehip Glow Elixir Face Oil",
    p_price: "Rs: 645.00",
    price: 645.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product1.webp",
    name: "AHA + 2% BHA GLOW ACCELERATOR PEEL",
    p_price: "Rs: 695.00",
    price: 695.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product2.webp",
    name: "Avocado + Superfoods Nourishing Face Oil",
    p_price: "Rs: 645.00",
    price: 645.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product3.webp",
    name: "SKIN AWAKENING MOISTURIZING SERUM",
    p_price: "Rs: 795.00",
    price: 795.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
  {
    image_url: "./images/Product4.webp",
    name: "AGE DEFENSE + GLOW NIGHT SERUM",
    p_price: "Rs: 595.00",
    price: 595.0,
    star: "https://previews.123rf.com/images/barks/barks1712/barks171200370/91718901-five-star-rating-icon-3-.jpg",
  },
];

document.querySelector("#sort").addEventListener("change", handleName);

function handleName() {
  var selected = document.querySelector("#sort").value;

  if (selected == "asc") {
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    displayData(data);
  }
  if (selected == "dsc") {
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });

    displayData(data);
  }
}

document.querySelector("#sort").addEventListener("change", handlePrice);

function handlePrice() {
  var dprice = document.querySelector("#sort").value;

  // console.log(price);
  if (dprice == "HTL") {
    data.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
    displayData(data);
  }
  if (dprice == "LTH") {
    data.sort(function (a, b) {
      let diff = Number(a.price) - Number(b.price);
      return diff;
    });
    displayData(data);
  }
}

displayData(data);

function displayData(data) {
  document.querySelector("#k_cart").innerHTML = null;

  data.forEach(function (elem) {
    let box = document.createElement("div");
    box.setAttribute("id", "k_box");

    let img_p = document.createElement("img");
    img_p.setAttribute("id", "k_img");
    img_p.src = elem.image_url;

    let r_img = document.createElement("img");
    r_img.setAttribute("id", "rate");
    r_img.src = elem.star;

    let name_p = document.createElement("p");
    name_p.setAttribute("id", "k_name");
    name_p.innerText = elem.name;
    name_p.style.color = "grey";
    name_p.style.textAlign = "center";

    let price_p = document.createElement("h3");
    price_p.setAttribute("id", "k_price");
    price_p.innerText = elem.p_price;

    let dprice_p = document.createElement("h3");
    dprice_p.setAttribute("id", "k_dprice");
    dprice_p.innerText = "RS:" + elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.setAttribute("id", "add_cart");
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box.append(img_p, r_img, name_p, price_p, dprice_p, btn);

    document.querySelector("#k_cart").append(box);
  });
}

var cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
function addToCart(elem) {
  cartArray.push(elem);
  alert("item added to cart");

  localStorage.setItem("cartItem", JSON.stringify(cartArray));
}
