function aside() {
  return `
    <div class="sideHead">
      <span>Pay now and get </span>3% instant discount
    </div>
    <hr />
    <div class="kCartProducts" id ="productAppend">
    </div>
    <hr />
    <div class="kDiscountarea">
      <input
        type="text"
        name=""
        id="discount"
        placeholder="Gift card or discount code"
      />
      <button class="kapplyBtn">Apply</button>
    </div>
    <hr />
    <div class="kprePayment">
      <div class="subTotal">
        <p>Subtotal</p>
        <p id="subTotal"></p>
      </div>
      <div class="kShipping">
        <p>Shipping</p>
        <span>Calculated at next step </span>
      </div>
    </div>
    <hr />
    <div class="kfullTotal">
      <p>Total</p>
      <div class="totalStyle">
        <span>INR</span>
        <p class="checkBold" id="finalTotal"></p>
      </div>
    </div>
  `;
}

export default aside;
