```javascript
/* =========================================================
   TÓC MÂY CỎ MỀM
   script.js
   Sản phẩm - lọc - chi tiết - giỏ hàng
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    {
        id: 1,

        name: "Dầu gội thảo dược Tóc Mây",

        shortName: "Dầu gội Tóc Mây",

        category: "Dầu gội",

        price: 329000,

        oldPrice: 350000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwhDoQqbkZEReDgqgEdPU0u6i4bFlVlgtrNWTJC_I9vAwsdUjg9NhRydt&s=10",

        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        badge: "Bán chạy",

        origin: "Việt Nam",

        weight: "300 gram",

        hairProblem:
            "Tóc xơ, gàu, gãy rụng nhiều",

        fragrance:
            "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên",

        shelfLife:
            "24 tháng",

        description:
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, hỗ trợ cải thiện tình trạng gàu, gãy rụng và chẻ ngọn. Sản phẩm phù hợp với cả người có da đầu nhạy cảm.",

        highlights: [

            "Không silicone",

            "Không sulfate",

            "Phù hợp với da đầu nhạy cảm",

            "Bồ kết, Bồ hòn và Cỏ ngũ sắc giúp làm sạch tóc và da đầu",

            "Hương nhu và Cỏ mần trầu hỗ trợ chăm sóc tóc",

            "Tinh dầu vỏ Bưởi hỗ trợ chăm sóc tóc",

            "Dầu quả Bơ hỗ trợ dưỡng tóc khô và hư tổn",

            "Protein từ đậu Hà Lan giúp tóc mềm mượt"
        ],

        ingredients: [

            "Nước tinh khiết",

            "Cao quả Bồ kết",

            "Rễ và lá Dâu Tằm",

            "Cỏ Mần Trầu",

            "Cỏ Ngũ Sắc",

            "Lá Tre",

            "Quả Mắc Kham",

            "Quả Bồ Hòn",

            "Propanediol",

            "Glycerin",

            "Tinh dầu vỏ Bưởi",

            "Tinh dầu Hương nhu",

            "Tinh dầu Sả chanh",

            "Dầu quả Bơ",

            "Vitamin E",

            "Phenoxyethanol"
        ],

        benefits: [

            "Làm sạch tóc và da đầu",

            "Hỗ trợ ngăn ngừa và cải thiện tình trạng gàu",

            "Hỗ trợ giảm tình trạng gãy rụng",

            "Hỗ trợ chăm sóc tóc chẻ ngọn",

            "Giúp mái tóc mềm mượt",

            "Hỗ trợ chăm sóc mái tóc chắc khỏe"
        ],

        usage: [

            "Làm ướt tóc và thoa đều dầu gội lên tóc",

            "Massage nhẹ tóc và da đầu",

            "Xả sạch lại tóc với nước",

            "Có thể gội 2 lần nếu cần"
        ],

        note:
            "Chiết xuất Bồ kết đậm đặc có thể gây cay nếu rơi vào mắt. Nếu sản phẩm vào mắt, cần rửa sạch lại bằng nước."
    },


    {
        id: 2,

        name: "Combo dầu gội xả thảo dược Tóc Mây",

        shortName: "Combo gội xả Tóc Mây",

        category: "Combo chăm tóc",

        price: 629000,

        oldPrice: 680000,

        image:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        detailImage:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        badge: "Combo",

        origin: "Việt Nam",

        weight:
            "Bộ sản phẩm dầu gội và dầu xả Tóc Mây",

        hairProblem:
            "Tóc khô, xơ, gàu, gãy rụng và thiếu độ mềm mượt",

        fragrance:
            "Hương thảo dược dịu nhẹ",

        shelfLife:
            "Theo hạn sử dụng in trên từng sản phẩm",

        description:
            "Combo dầu gội xả thảo dược Tóc Mây là lựa chọn chăm sóc tóc kết hợp, giúp làm sạch tóc và da đầu đồng thời hỗ trợ dưỡng tóc mềm mượt sau khi gội.",

        highlights: [

            "Kết hợp dầu gội và dầu xả Tóc Mây",

            "Làm sạch tóc và da đầu",

            "Hỗ trợ chăm sóc tóc khô, xơ",

            "Giúp tóc mềm mượt sau khi gội",

            "Hương thảo dược nhẹ nhàng",

            "Phù hợp với chu trình chăm sóc tóc thiên nhiên"
        ],

        ingredients: [

            "Bồ kết",

            "Bồ hòn",

            "Cỏ Mần Trầu",

            "Cỏ Ngũ Sắc",

            "Hương nhu",

            "Tinh dầu vỏ Bưởi",

            "Tinh dầu Sả chanh",

            "Dầu quả Bơ",

            "Các thành phần chăm sóc tóc trong bộ sản phẩm"
        ],

        benefits: [

            "Làm sạch tóc và da đầu",

            "Hỗ trợ chăm sóc tóc khô và xơ",

            "Giúp tóc mềm mượt hơn sau khi chăm sóc",

            "Kết hợp quy trình gội và xả",

            "Phù hợp chăm sóc tóc hằng ngày"
        ],

        usage: [

            "Làm ướt tóc",

            "Sử dụng dầu gội và massage nhẹ da đầu",

            "Xả sạch với nước",

            "Sử dụng dầu xả ở phần thân và ngọn tóc",

            "Để sản phẩm trên tóc theo hướng dẫn rồi xả sạch"
        ],

        note:
            "Nên sử dụng theo hướng dẫn trên bao bì của từng sản phẩm trong combo."
    }

];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = [];


/* =========================================================
   3. LẤY PHẦN TỬ HTML
   ========================================================= */

const productList =
    document.getElementById("productList");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");


/* =========================================================
   4. ĐỊNH DẠNG GIÁ
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN")
        .format(price) + "đ";

}


/* =========================================================
   5. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(list = products) {

    if (!productList) return;

    productList.innerHTML = "";


    if (list.length === 0) {

        productList.innerHTML = `

            <div class="no-products">

                <div class="no-products-icon">
                    🌿
                </div>

                <h3>
                    Chưa tìm thấy sản phẩm
                </h3>

                <p>
                    Hãy thử tìm kiếm với từ khóa khác.
                </p>

            </div>

        `;

        return;
    }


    list.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.dataset.id =
            product.id;


        card.innerHTML = `

            <div
                class="product-image"
                onclick="openProductDetail(${product.id})">

                ${
                    product.badge
                        ? `
                            <span class="product-tag">
                                ${product.badge}
                            </span>
                        `
                        : ""
                }

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-real-image"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3
                    onclick="openProductDetail(${product.id})">
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="product-price">

                    <strong class="price">
                        ${formatPrice(product.price)}
                    </strong>

                    <del>
                        ${formatPrice(product.oldPrice)}
                    </del>

                </div>


                <div class="product-actions">

                    <button
                        class="detail-button"
                        onclick="openProductDetail(${product.id})">

                        Xem chi tiết

                    </button>


                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        aria-label="Thêm vào giỏ hàng">

                        +

                    </button>

                </div>

            </div>

        `;


        productList.appendChild(card);

    });

}


/* =========================================================
   6. TÌM KIẾM
   ========================================================= */

function searchProducts(keyword) {

    const text =
        String(keyword || "")
            .toLowerCase()
            .trim();


    if (!text) {

        renderProducts(products);

        return;

    }


    const result =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(text)

                ||

                product.category
                    .toLowerCase()
                    .includes(text)

                ||

                product.description
                    .toLowerCase()
                    .includes(text)

                ||

                product.ingredients
                    .join(" ")
                    .toLowerCase()
                    .includes(text)

            );

        });


    renderProducts(result);

}


/* =========================================================
   7. LỌC THEO DANH MỤC
   ========================================================= */

function filterProducts(category) {

    if (
        !category ||
        category === "all"
    ) {

        renderProducts(products);

        return;

    }


    const filtered =
        products.filter(
            product =>
                product.category === category
        );


    renderProducts(filtered);

}


/* =========================================================
   8. TẠO MODAL CHI TIẾT
   ========================================================= */

function createProductModal() {

    if (
        document.getElementById(
            "productDetailModal"
        )
    ) {

        return;

    }


    const modal =
        document.createElement("div");

    modal.id =
        "productDetailModal";

    modal.className =
        "product-detail-modal";


    modal.innerHTML = `

        <div
            class="product-modal-overlay"
            onclick="closeProductDetail()">
        </div>


        <div class="product-modal-content">

            <button
                class="product-modal-close"
                onclick="closeProductDetail()"
                aria-label="Đóng">

                ×

            </button>


            <div id="productDetailContent"></div>

        </div>

    `;


    document.body.appendChild(modal);

}


/* =========================================================
   9. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    createProductModal();


    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const content =
        document.getElementById(
            "productDetailContent"
        );


    content.innerHTML = `

        <div class="product-detail-grid">


            <!-- HÌNH ẢNH -->

            <div class="product-detail-image">

                <img
                    src="${product.detailImage}"
                    alt="${product.name}"
                >

                ${
                    product.badge
                        ? `
                            <span class="detail-badge">
                                ${product.badge}
                            </span>
                        `
                        : ""
                }

            </div>


            <!-- THÔNG TIN -->

            <div class="product-detail-info">

                <span class="product-detail-category">
                    ${product.category}
                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="detail-price">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <del>
                        ${formatPrice(product.oldPrice)}
                    </del>

                </div>


                <p class="detail-description">
                    ${product.description}
                </p>


                <!-- THÔNG SỐ -->

                <div class="detail-section">

                    <h3>
                        Thông số sản phẩm
                    </h3>


                    <div class="detail-specs">

                        <div>
                            <span>
                                Xuất xứ
                            </span>

                            <strong>
                                ${product.origin}
                            </strong>
                        </div>


                        <div>
                            <span>
                                Khối lượng
                            </span>

                            <strong>
                                ${product.weight}
                            </strong>
                        </div>


                        <div>
                            <span>
                                Vấn đề của tóc
                            </span>

                            <strong>
                                ${product.hairProblem}
                            </strong>
                        </div>


                        <div>
                            <span>
                                Mùi hương
                            </span>

                            <strong>
                                ${product.fragrance}
                            </strong>
                        </div>


                        <div>
                            <span>
                                Hạn sử dụng
                            </span>

                            <strong>
                                ${product.shelfLife}
                            </strong>
                        </div>

                    </div>

                </div>


                <!-- ĐIỂM NỔI BẬT -->

                <div class="detail-section">

                    <h3>
                        Điểm nổi bật
                    </h3>

                    <ul class="detail-list">

                        ${product.highlights
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")}

                    </ul>

                </div>


                <!-- CÔNG DỤNG -->

                <div class="detail-section">

                    <h3>
                        Công dụng
                    </h3>

                    <ul class="detail-list">

                        ${product.benefits
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")}

                    </ul>

                </div>


                <!-- THÀNH PHẦN -->

                <div class="detail-section">

                    <h3>
                        Thành phần
                    </h3>

                    <div class="ingredient-tags">

                        ${product.ingredients
                            .map(
                                item => `
                                    <span>
                                        ${item}
                                    </span>
                                `
                            )
                            .join("")}

                    </div>

                </div>


                <!-- HƯỚNG DẪN -->

                <div class="detail-section">

                    <h3>
                        Hướng dẫn sử dụng
                    </h3>

                    <ol class="usage-list">

                        ${product.usage
                            .map(
                                (item, index) => `
                                    <li>
                                        <b>
                                            Bước ${index + 1}:
                                        </b>
                                        ${item}
                                    </li>
                                `
                            )
                            .join("")}

                    </ol>

                </div>


                <!-- LƯU Ý -->

                <div class="detail-note">

                    <strong>
                        Lưu ý
                    </strong>

                    <p>
                        ${product.note}
                    </p>

                </div>


                <!-- THÊM GIỎ -->

                <div class="detail-actions">

                    <button
                        class="detail-add-cart"
                        onclick="addToCartFromDetail(${product.id})">

                        Thêm vào giỏ hàng

                        <span>
                            →
                        </span>

                    </button>

                </div>

            </div>

        </div>

    `;


    const modal =
        document.getElementById(
            "productDetailModal"
        );


    modal.classList.add("show");


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   10. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productDetailModal"
        );


    if (!modal) return;


    modal.classList.remove("show");


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   11. THÊM VÀO GIỎ HÀNG
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    updateCart();


    showCartMessage(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   12. THÊM TỪ CHI TIẾT
   ========================================================= */

function addToCartFromDetail(productId) {

    addToCart(productId);

    closeProductDetail();

    openCart();

}


/* =========================================================
   13. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    if (cartCount) {

        const count =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );

        cartCount.textContent =
            count;

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>
                    🛍
                </span>

                <p>
                    Giỏ hàng của bạn đang trống.
                </p>

                <button
                    onclick="closeCart()">

                    Khám phá sản phẩm

                </button>

            </div>

        `;


        if (cartTotal) {

            cartTotal.textContent =
                "0đ";

        }


        return;

    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;


        const element =
            document.createElement("div");


        element.className =
            "cart-item";


        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <strong>
                    ${formatPrice(item.price)}
                </strong>


                <div class="quantity-control">

                    <button
                        onclick="decreaseQuantity(${item.id})">

                        −

                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${item.id})">

                        +

                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(${item.id})"
                aria-label="Xóa sản phẩm">

                ×

            </button>

        `;


        cartItems.appendChild(element);

    });


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }

}


/* =========================================================
   14. TĂNG SỐ LƯỢNG
   ========================================================= */

function increaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) return;


    item.quantity += 1;


    updateCart();

}


/* =========================================================
   15. GIẢM SỐ LƯỢNG
   ========================================================= */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) return;


    item.quantity -= 1;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    updateCart();

}


/* =========================================================
   16. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    updateCart();

}


/* =========================================================
   17. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    if (cartSidebar) {

        cartSidebar.classList.add("show");

    }


    if (cartOverlay) {

        cartOverlay.classList.add("show");

    }

}


/* =========================================================
   18. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    if (cartSidebar) {

        cartSidebar.classList.remove("show");

    }


    if (cartOverlay) {

        cartOverlay.classList.remove("show");

    }

}


/* =========================================================
   19. THÔNG BÁO
   ========================================================= */

function showCartMessage(message) {

    let notification =
        document.getElementById(
            "cartNotification"
        );


    if (!notification) {

        notification =
            document.createElement("div");

        notification.id =
            "cartNotification";

        notification.className =
            "cart-notification";

        document.body.appendChild(
            notification
        );

    }


    notification.textContent =
        message;


    notification.classList.add("show");


    setTimeout(() => {

        notification.classList.remove("show");

    }, 2500);

}


/* =========================================================
   20. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCart();

        createProductModal();


        /* Tìm kiếm */

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                event => {

                    searchProducts(
                        event.target.value
                    );

                }
            );

        }


        /* Mở giỏ hàng */

        const openCartButton =
            document.getElementById(
                "openCart"
            );


        if (openCartButton) {

            openCartButton.addEventListener(
                "click",
                openCart
            );

        }


        /* Đóng giỏ hàng */

        const closeCartButton =
            document.getElementById(
                "closeCart"
            );


        if (closeCartButton) {

            closeCartButton.addEventListener(
                "click",
                closeCart
            );

        }


        /* Click nền ngoài */

        if (cartOverlay) {

            cartOverlay.addEventListener(
                "click",
                closeCart
            );

        }

    }
);


/* =========================================================
   21. PHÍM ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeProductDetail();

        closeCart();

    }
);


/* =========================================================
   22. XỬ LÝ ẢNH LỖI
   ========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName !== "IMG"
        ) {

            return;

        }


        event.target.classList.add(
            "image-error"
        );

    },
    true
);


/* =========================================================
   23. CHO PHÉP HTML GỌI HÀM
   ========================================================= */

window.products =
    products;

window.cart =
    cart;

window.renderProducts =
    renderProducts;

window.searchProducts =
    searchProducts;

window.filterProducts =
    filterProducts;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.addToCart =
    addToCart;

window.addToCartFromDetail =
    addToCartFromDetail;

window.increaseQuantity =
    increaseQuantity;

window.decreaseQuantity =
    decreaseQuantity;

window.removeFromCart =
    removeFromCart;

window.openCart =
    openCart;

window.closeCart =
    closeCart;
```
