function aside() {
  return `
    <div class="sideHead">
      <span>Pay now and get </span>3% instant discount
    </div>
    <hr />
    <div class="kCartProducts">
      <div class="productCard">
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_e13fe0e4-6313-45f1-b5f6-fe829a4c5dec_small.jpg?v=1650465566"
          alt=""
        />
        <div class="productText">
          <p>
            20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades
            Pigmentation & Dark Spots| Combination, Oily, Dry Skin | Women
            and Men
          </p>

          <span>25ml</span>
        </div>
        <span>₹565.01</span>
      </div>
      <div class="productCard">
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_e13fe0e4-6313-45f1-b5f6-fe829a4c5dec_small.jpg?v=1650465566"
          alt=""
        />
        <div class="productText">
          <p>
            20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades
            Pigmentation & Dark Spots| Combination, Oily, Dry Skin | Women
            and Men
          </p>

          <span>25ml</span>
        </div>
        <span>₹565.01</span>
      </div>
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
        <p>₹1,038.00</p>
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
        <p class="checkBold">₹1,038.00</p>
      </div>
    </div>
  `;
}

export default aside;
