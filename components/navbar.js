function navbar() {
  return ` <div id="left-side-bar" class="container nav-container">
  <div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
          <li><a href="./index.html">WHAT'S NEW?</a></li>
            <li><a href="#">HAIR CARE</a></li>
            <li><a href="./serum.html">BODY CARE</a></li>
            <li><a href="#">IKWI NUTRITION</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="center-logo">
  <img
    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
    alt=""
  />
</div>

<div id="right-side">
  <a href="#"><i class="fas fa-search"></i></a>
  <a href="#"><i class="fas fa-map-marker-alt"></i></a>
  <a href="./cart.html"><i class="fas fa-shopping-bag"></i></a>
  <a href="./login.html"><i class="fa-solid fa-user"></i></a>
</div>`;
}
export default navbar;
