function payCard() {
  return `<h2>Enter Card's Details</h2>
    <input type="number" name="" id="cardNumber" placeholder="Card Number" />
    <br />
    <div class="monthYear">
      <input type="number" name="" id="month" placeholder="MM/YY" />

      <div class="cVV">
        <input type="number" id="cvv" placeholder="CVV" maxlength="3" />
      </div>
    </div>
    <div class="cardhName">
      <input type="text" name="" id="hName" placeholder="Card Holder Name" />
    </div>
    <button class="submit" id="cardSubmit">Submit</button>`;
}
export default payCard;
