const creatNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
\        <div class="nav">
            <img src="photos/thebluelogo.png" class="brand-logo" alt="Tamarii Logo" >
            <span class = "title"><h1>Tamarai</h1></span>
            <div class="nav_items">
                <div class="search">
                    <div class="box">
                        <input type="text" placeholder="Search...">
                        <a href="#">
                            <i class="fas"><img src="photos/search.png" style="width:18px;height:18px"></i>
                        </a>
                    </div>
                    <!-- <form class="search-box">
                        <input type="text" placeholder="Search...">
                        <button type="reset"></button>
                    </form> -->
                    <!-- <input type="text" class="search-bar" placeholder="Search for a shop, product !">
                    <button class="search-btn">Search</button> -->
                    <a href=""><img src="photos/user2.0.png" alt="user"></a>
                    <a href="shopping cart.html"><img src="photos/shoppingCart.png" alt="cart"></a>
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