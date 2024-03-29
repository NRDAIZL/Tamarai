const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="photos/thewhiteicon.png" class="logo" alt="Thamaraii Logo" style="width:175px;height:175px;">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Men</li>
                <li><a href="" class="footer-link">T-shirts</a></li>
                <li><a href="" class="footer-link">SweatShirts</a></li>
                <li><a href="" class="footer-link">Shirts</a></li>
                <li><a href="" class="footer-link">Jeans</a></li>
                <li><a href="" class="footer-link">Trousers</a></li>
                <li><a href="" class="footer-link">Shoes</a></li>
                <li><a href="" class="footer-link">Casuals</a></li>
                <li><a href="" class="footer-link">Formals</a></li>
                <li><a href="" class="footer-link">Sportive</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Women</li>
                <li><a href="#" class="footer-link">T-shirts</a></li>
                <li><a href="#" class="footer-link">SweatShirts</a></li>
                <li><a href="" class="footer-link">Shirts</a></li>
                <li><a href="" class="footer-link">Jeans</a></li>
                <li><a href="" class="footer-link">Trousers</a></li>
                <li><a href="" class="footer-link">Shoes</a></li>
                <li><a href="" class="footer-link">Casuals</a></li>
                <li><a href="" class="footer-link">Formals</a></li>
                <li><a href="" class="footer-link">Sportive</a></li>
            </ul>
            <!-- <ul class="category">
                <li class="category-title">Get Help</li>
                <li><a href="#" class="footer-link">Help Center</a></li>
                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                <li><a href="#" class="footer-link">Terms</a></li>
                <li><a href="#" class="footer-link">Login</a></li>
            </ul> -->
        </div>
    </div>
    <h1 style="text-align: left;" class="footer-title">Tamarai</h1>
    <p class="info">We could not have reached this milestone of achievement without you.</p>
    <p class="info">Support Emails - help@tamarai.com, support@tamarai.com</p>
    <p class="info">Telephone - 0123456789</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & Services</a>
            <a href="#" class="social-link">Privacy & Policy</a>
        </div>
        <div>
            <div class="social-media">
                <a href="#"><i class="bx bxl-linkedin-square"></i></a>
                <a href="#"><i class="bx bxl-facebook-square"></i></a>
                <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                <a href="#"><i class="bx bxl-github"></i></a>
            </div>
        </div>
    </div>
    <p class="footer-credit">Tamarai, Best Online store.</p>
    `;

}

createFooter();