let userAddress = (e) => {
  e.preventDefault();
  let data = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    address: document.getElementById("address").value,
    aptNo: document.getElementById("apartment").value,
    pincode: document.getElementById("pinCode").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    phoneNum: document.getElementById("phoneNumber").value,
  };
  localStorage.setItem("shippingAddress", JSON.stringify(data));
  location.href = "shiping.html";
};

document.getElementById("submit").addEventListener("click", userAddress);
