const creatNav = () => {
    let nava = document.querySelector('.navbar2');
    nav.innerHTML = `
    <div class="header">
    <section id="navi">

        <ul id="navbar">
            <li>
                <i class="fa-solid fa-spa"></i>
            </li>
            <li>
                <a href="store-analysis.html">Analysis</a>
            </li>
            <li>
                <a href="manage-products.html">Listings</a>
            </li>
            <li>
                <a href="store-info.html">Info</a>
            </li>

        </ul>
        <a href=""><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
    </section>
</div>
    `;
}

creatNav();