const creatNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <img src="photos/icons8-lotus-100.png" class="brand-logo" alt="Tamarii Logo">
            <div class="nav_items">
                <div class="search">
                    <form class="search-box">
                        <input type="text" placeholder="Search...">
                        <button type="reset"></button>
                    </form>
                    <!-- <input type="text" class="search-bar" placeholder="Search for a shop, product !">
                    <button class="search-btn">Search</button> -->
                    <a href=""><img src="photos/user2.0.jpg" alt="user"></a>
                    <a href="shopping cart.html"><img src="photos/shoppingCart.jpg" alt="cart"></a>
                    <a href="wishList.html"><img src="photos/wishlist.png" alt="Wishlist"></a>
                    <!--<a href="chat.html"><img src="photos/chat.png" alt="chat"></a>-->
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