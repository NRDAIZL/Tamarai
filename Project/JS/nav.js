const creatNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <img style="width: 50px;margin-right: 2px;" src="photos/tamari.jpg" alt="Tamarii Logo">
        <div class="nav_items">
            <div class="search">
                <input type="text" name="search-bar" placeholder="Search for a shop, product !">
                <button class="search-btn">Search</button>
                <a href=""><img src="photos/user2.0.jpg" alt="user"></a>
                <a href=""><img src="photos/shoppingCart.jpg" alt="cart"></a>
            </div>
        </div>
    </div>
    <ul class="links">
        <li class="link-item"><a href="" class="link">Home</a></li>
        <li class="link-item"><a href="" class="link">Craft</a></li>
        <li class="link-item"><a href="" class="link">Women</a></li>
        <li class="link-item"><a href="" class="link">Men</a></li>
        <li class="link-item"><a href="" class="link">kids</a></li>
        <li class="link-item"><a href="" class="link">Accessories</a></li>
        <li class="link-item"><a href="" class="link">Gifts</a></li>
    </ul>
    `;
}

creatNav();