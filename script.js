/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js
   ---------------------------------------------------------
   Chức năng:
   1. Dữ liệu sản phẩm
   2. Hiển thị sản phẩm
   3. Tìm kiếm sản phẩm có dấu / không dấu
   4. Lọc sản phẩm theo danh mục
   5. Xem chi tiết sản phẩm
   6. Thêm vào giỏ hàng
   7. Tăng / giảm số lượng
   8. Xóa sản phẩm khỏi giỏ
   9. Xóa toàn bộ giỏ hàng
   10. Tính tổng tiền
   11. Lưu giỏ hàng vào localStorage
   12. Thông báo thao tác
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    /* -----------------------------------------------------
       SẢN PHẨM 1
       ----------------------------------------------------- */
    {
        id: 1,

        name: "Dầu gội Bưởi Cocoon 500ml",

        price: 388000,

        category: "dau-goi",

        categoryName: "Dầu gội",

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        shortDescription:
            "Dầu gội Bưởi Cocoon với tinh dầu bưởi, Vitamin B5, Xylishine™ và axít amin giúp làm sạch tóc, chăm sóc da đầu và mang lại mái tóc mềm mượt.",

        description:
            "Dầu gội Bưởi Cocoon là sản phẩm chăm sóc tóc với tinh dầu bưởi kết hợp cùng các thành phần dưỡng tóc có nguồn gốc thiên nhiên. Công thức giúp làm sạch tóc và da đầu, đồng thời hỗ trợ dưỡng ẩm, cải thiện độ bóng và vẻ mềm mượt của mái tóc.",

        usage:
            "Làm ướt tóc, lấy một lượng dầu gội vừa đủ rồi tạo bọt. Mát-xa nhẹ nhàng từ chân tóc đến ngọn tóc, sau đó xả sạch với nước. Có thể sử dụng hằng ngày. Tránh để sản phẩm tiếp xúc trực tiếp với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Dạng gel trong mờ, tạo bọt nhẹ.",

        scent:
            "Hương tinh dầu bưởi thơm mát, dễ chịu.",

        note:
            "Tránh vùng mắt. Chỉ sử dụng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            "Tinh dầu bưởi",
            "Xylishine™",
            "Vitamin B5 (D-panthenol)",
            "Axít amin"
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 2
       ----------------------------------------------------- */
    {
        id: 2,

        name: "Dầu gội Bưởi Cocoon 310ml",

        price: 200000,

        category: "dau-goi",

        categoryName: "Dầu gội",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        shortDescription:
            "Dầu gội Bưởi Cocoon 310ml giúp làm sạch tóc và da đầu, kết hợp tinh dầu bưởi cùng các thành phần dưỡng tóc.",

        description:
            "Dầu gội Bưởi Cocoon 310ml có công thức kết hợp tinh dầu bưởi, Vitamin B5, Xylishine™ và axít amin. Sản phẩm giúp làm sạch tóc, hỗ trợ dưỡng ẩm và mang lại cảm giác tóc mềm mại, bóng khỏe.",

        usage:
            "Làm ướt tóc, lấy dầu gội và tạo bọt. Mát-xa nhẹ nhàng từ chân tóc đến ngọn tóc rồi xả sạch với nước. Có thể sử dụng hằng ngày.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ, tạo bọt nhẹ.",

        scent:
            "Mùi tinh dầu bưởi thơm mát.",

        note:
            "Tránh vùng mắt. Chỉ sử dụng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            "Tinh dầu bưởi",
            "Xylishine™",
            "Vitamin B5 (D-panthenol)",
            "Axít amin"
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 3
       ----------------------------------------------------- */
    {
        id: 3,

        name: "Túi Refill Dầu gội Bưởi Cocoon",

        price: 310000,

        category: "refill",

        categoryName: "Refill",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        shortDescription:
            "Túi Refill Dầu gội Bưởi Cocoon giúp bổ sung sản phẩm tiện lợi, tiết kiệm bao bì và phù hợp sử dụng lâu dài.",

        description:
            "Túi Refill Dầu gội Bưởi Cocoon là lựa chọn tiện lợi để bổ sung dầu gội vào chai đang sử dụng. Sản phẩm giữ công thức chăm sóc tóc với tinh dầu bưởi cùng các thành phần dưỡng tóc.",

        usage:
            "Đổ sản phẩm từ túi Refill vào chai đựng dầu gội sạch và khô. Sử dụng dầu gội trên tóc ướt, tạo bọt, mát-xa nhẹ nhàng và xả sạch với nước.",

        amount:
            "Tùy theo lượng tóc và nhu cầu sử dụng.",

        texture:
            "Dạng gel trong mờ.",

        scent:
            "Hương tinh dầu bưởi thơm mát.",

        note:
            "Tránh vùng mắt. Chỉ sử dụng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            "Tinh dầu bưởi",
            "Xylishine™",
            "Vitamin B5 (D-panthenol)",
            "Axít amin"
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 4
       ----------------------------------------------------- */
    {
        id: 4,

        name: "Dầu xả Bưởi Cocoon 310ml",

        price: 388000,

        category: "dau-xa",

        categoryName: "Dầu xả",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        shortDescription:
            "Dầu xả Bưởi Cocoon 310ml giúp dưỡng tóc, cung cấp độ ẩm và hỗ trợ mái tóc mềm mượt, bóng khỏe.",

        description:
            "Dầu xả Bưởi Cocoon được sử dụng sau bước gội để chăm sóc phần thân và ngọn tóc. Công thức kết hợp các thành phần dưỡng tóc giúp cung cấp độ ẩm, hỗ trợ tóc mềm mượt và cải thiện vẻ bóng khỏe.",

        usage:
            "Sau khi gội sạch tóc với Dầu gội Bưởi Cocoon, lấy một lượng dầu xả vừa đủ thoa lên tóc ướt. Mát-xa nhẹ nhàng phần thân và ngọn tóc, sau đó xả sạch với nước. Có thể sử dụng hằng ngày.",

        amount:
            "1–2 lần nhấn hoặc tùy độ dài của tóc.",

        texture:
            "Dạng kem đặc màu trắng ngà.",

        scent:
            "Hương tinh dầu bưởi thơm mát.",

        note:
            "Tránh vùng mắt. Chỉ sử dụng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            "Tinh dầu bưởi",
            "Xylishine™",
            "Vitamin B5 (D-panthenol)",
            "Axít amin"
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 5
       ----------------------------------------------------- */
    {
        id: 5,

        name: "Combo Dầu gội & Dầu xả Bưởi Cocoon 310ml x 2",

        price: 590000,

        category: "combo",

        categoryName: "Combo",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        shortDescription:
            "Combo Dầu gội và Dầu xả Bưởi Cocoon giúp kết hợp làm sạch và dưỡng tóc trong một chu trình chăm sóc tiện lợi.",

        description:
            "Combo Dầu gội và Dầu xả Bưởi Cocoon 310ml x 2 là lựa chọn tiện lợi cho chu trình chăm sóc tóc hằng ngày. Dầu gội giúp làm sạch tóc và da đầu, trong khi dầu xả hỗ trợ dưỡng ẩm, làm mềm tóc và tăng vẻ bóng khỏe.",

        usage:
            "Bước 1: Làm ướt tóc, sử dụng dầu gội, tạo bọt và mát-xa nhẹ nhàng từ chân tóc đến ngọn tóc rồi xả sạch. Bước 2: Sau khi gội, thoa dầu xả lên thân và ngọn tóc, mát-xa nhẹ nhàng rồi xả sạch.",

        amount:
            "Dầu gội: 1–2 lần nhấn. Dầu xả: tùy theo độ dài và lượng tóc.",

        texture:
            "Dầu gội dạng gel trong mờ. Dầu xả dạng kem đặc màu trắng ngà.",

        scent:
            "Hương tinh dầu bưởi thơm mát.",

        note:
            "Tránh vùng mắt. Chỉ sử dụng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            "Tinh dầu bưởi",
            "Xylishine™",
            "Vitamin B5 (D-panthenol)",
            "Axít amin"
        ]
    }
];


/* =========================================================
   2. BIẾN TOÀN CỤC
   ========================================================= */

let cart = loadCart();

let currentProducts = [...products];


/* =========================================================
   3. CÁC HÀM TIỆN ÍCH
   ========================================================= */


/* ---------------------------------------------------------
   Chuẩn hóa tiếng Việt để tìm kiếm
   Ví dụ:
   "Dầu xả" -> "dau xa"
   "dau xa" -> "dau xa"
   "DẦU XẢ" -> "dau xa"
   --------------------------------------------------------- */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/\s+/g, " ")
        .trim();
}


/* ---------------------------------------------------------
   Định dạng tiền Việt Nam
   --------------------------------------------------------- */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}


/* ---------------------------------------------------------
   Tìm sản phẩm theo ID
   --------------------------------------------------------- */

function getProductById(id) {

    return products.find(
        product => Number(product.id) === Number(id)
    );
}


/* =========================================================
   4. LOCAL STORAGE - GIỎ HÀNG
   ========================================================= */

function loadCart() {

    try {

        const savedCart = localStorage.getItem(
            "nangNiuMaiTocVietCart"
        );

        if (!savedCart) {
            return [];
        }

        const parsedCart = JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart;

    } catch (error) {

        console.error(
            "Không thể tải giỏ hàng:",
            error
        );

        return [];
    }
}


function saveCart() {

    localStorage.setItem(
        "nangNiuMaiTocVietCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   5. TÌM KIẾM + LỌC SẢN PHẨM
   ========================================================= */

function filterProducts() {

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const keyword = normalizeText(
        searchInput ? searchInput.value : ""
    );

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    currentProducts = products.filter(product => {

        /*
         * Gộp toàn bộ nội dung sản phẩm thành
         * một chuỗi để tìm kiếm.
         *
         * Nhờ vậy:
         * "dầu xả"
         * "dau xa"
         * "xả"
         * "dầu"
         * "Cocoon"
         * đều tìm được.
         */

        const searchableText = normalizeText(`
            ${product.name}
            ${product.category}
            ${product.categoryName}
            ${product.shortDescription}
            ${product.description}
            ${product.usage}
            ${product.ingredients.join(" ")}
        `);


        const matchKeyword =
            keyword === "" ||
            searchableText.includes(keyword);


        const matchCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;


        return matchKeyword && matchCategory;

    });


    renderProducts(currentProducts);
}


/* =========================================================
   6. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");


    if (!productGrid) {
        console.warn(
            "Không tìm thấy #productGrid trong HTML."
        );
        return;
    }


    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">
                <div class="no-products-icon">🌿</div>

                <h3>Không tìm thấy sản phẩm</h3>

                <p>
                    Hãy thử tìm với từ khóa khác
                    hoặc chọn "Tất cả sản phẩm".
                </p>

                <button
                    type="button"
                    class="reset-search-btn"
                    id="resetSearch"
                >
                    Xem tất cả sản phẩm
                </button>
            </div>
        `;

        return;
    }


    productGrid.innerHTML =
        productList
            .map(product => createProductCard(product))
            .join("");
}


/* =========================================================
   7. TẠO CARD SẢN PHẨM
   ========================================================= */

function createProductCard(product) {

    return `
        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-image-wrap">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22 viewBox=%220 0 600 600%22%3E%3Crect width=%22600%22 height=%22600%22 fill=%22%23f4efe5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%235b4636%22 font-size=%2230%22 font-family=%22Arial%22%3ECocoon%3C/text%3E%3C/svg%3E';"
                >

                <span class="product-category">
                    ${product.categoryName}
                </span>

            </div>


            <div class="product-info">

                <button
                    type="button"
                    class="product-name-button"
                    data-action="detail"
                    data-id="${product.id}"
                >
                    ${product.name}
                </button>


                <p class="product-description">
                    ${product.shortDescription}
                </p>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <button
                        type="button"
                        class="add-cart-btn"
                        data-action="add"
                        data-id="${product.id}"
                    >
                        <span>+</span>
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   8. GIỎ HÀNG
   ========================================================= */


/* ---------------------------------------------------------
   Thêm sản phẩm vào giỏ
   --------------------------------------------------------- */

function addToCart(productId) {

    const product = getProductById(productId);

    if (!product) {
        return;
    }


    const existingItem =
        cart.find(
            item => Number(item.id) === Number(productId)
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }


    saveCart();

    renderCart();

    updateCartCount();

    showNotification(
        `Đã thêm "${product.name}" vào giỏ hàng.`
    );
}


/* ---------------------------------------------------------
   Tăng số lượng
   --------------------------------------------------------- */

function increaseCartItem(productId) {

    const item =
        cart.find(
            item => Number(item.id) === Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity += 1;

    saveCart();

    renderCart();

    updateCartCount();
}


/* ---------------------------------------------------------
   Giảm số lượng
   --------------------------------------------------------- */

function decreaseCartItem(productId) {

    const item =
        cart.find(
            item => Number(item.id) === Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    Number(cartItem.id) !== Number(productId)
            );

    }


    saveCart();

    renderCart();

    updateCartCount();
}


/* ---------------------------------------------------------
   Xóa sản phẩm
   --------------------------------------------------------- */

function removeFromCart(productId) {

    const product =
        getProductById(productId);


    cart =
        cart.filter(
            item =>
                Number(item.id) !== Number(productId)
        );


    saveCart();

    renderCart();

    updateCartCount();


    if (product) {

        showNotification(
            `Đã xóa "${product.name}" khỏi giỏ hàng.`
        );

    }
}


/* ---------------------------------------------------------
   Xóa toàn bộ giỏ hàng
   --------------------------------------------------------- */

function clearCart() {

    if (cart.length === 0) {
        return;
    }


    const confirmed =
        window.confirm(
            "Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng?"
        );


    if (!confirmed) {
        return;
    }


    cart = [];

    saveCart();

    renderCart();

    updateCartCount();

    showNotification(
        "Đã xóa toàn bộ giỏ hàng."
    );
}


/* =========================================================
   9. TÍNH SỐ LƯỢNG VÀ TỔNG TIỀN
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );
}


function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                getProductById(item.id);

            if (!product) {
                return total;
            }

            return total +
                product.price *
                Number(item.quantity || 0);

        },

        0
    );
}


/* =========================================================
   10. CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }


    const quantity =
        getCartQuantity();


    cartCount.textContent =
        quantity;


    if (quantity > 0) {

        cartCount.classList.add(
            "has-items"
        );

    } else {

        cartCount.classList.remove(
            "has-items"
        );

    }
}


/* =========================================================
   11. HIỂN THỊ GIỎ HÀNG
   ========================================================= */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>Giỏ hàng đang trống</h3>

                <p>
                    Hãy chọn sản phẩm bạn yêu thích
                    để bắt đầu chăm sóc mái tóc.
                </p>

            </div>
        `;

    } else {

        cartItems.innerHTML =
            cart
                .map(item => createCartItem(item))
                .join("");
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(getCartTotal());

    }


    updateCartCount();

    renderOrderSummary();
}


/* =========================================================
   12. TẠO ITEM GIỎ HÀNG
   ========================================================= */

function createCartItem(item) {

    const product =
        getProductById(item.id);


    if (!product) {
        return "";
    }


    const quantity =
        Number(item.quantity || 1);


    const subtotal =
        product.price * quantity;


    return `
        <div
            class="cart-item"
            data-product-id="${product.id}"
        >

            <img
                class="cart-item-image"
                src="${product.image}"
                alt="${product.name}"
                onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%23f4efe5%22/%3E%3C/svg%3E';"
            >


            <div class="cart-item-info">

                <button
                    type="button"
                    class="cart-item-name"
                    data-action="detail"
                    data-id="${product.id}"
                >
                    ${product.name}
                </button>


                <div class="cart-item-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="cart-item-controls">

                    <button
                        type="button"
                        class="quantity-btn"
                        data-action="decrease"
                        data-id="${product.id}"
                        aria-label="Giảm số lượng"
                    >
                        −
                    </button>


                    <span class="cart-item-quantity">
                        ${quantity}
                    </span>


                    <button
                        type="button"
                        class="quantity-btn"
                        data-action="increase"
                        data-id="${product.id}"
                        aria-label="Tăng số lượng"
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="cart-item-right">

                <strong>
                    ${formatPrice(subtotal)}
                </strong>


                <button
                    type="button"
                    class="remove-cart-btn"
                    data-action="remove"
                    data-id="${product.id}"
                >
                    Xóa
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   13. THÔNG TIN ĐƠN HÀNG
   ========================================================= */

function renderOrderSummary() {

    const orderItems =
        document.getElementById("orderItems");

    const orderTotal =
        document.getElementById("orderTotal");


    if (orderItems) {

        if (cart.length === 0) {

            orderItems.innerHTML =
                "<p>Chưa có sản phẩm.</p>";

        } else {

            orderItems.innerHTML =
                cart
                    .map(item => {

                        const product =
                            getProductById(item.id);

                        if (!product) {
                            return "";
                        }

                        return `
                            <div class="order-item">

                                <span>
                                    ${product.name}
                                    × ${item.quantity}
                                </span>

                                <strong>
                                    ${formatPrice(
                                        product.price *
                                        item.quantity
                                    )}
                                </strong>

                            </div>
                        `;

                    })
                    .join("");
        }
    }


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(getCartTotal());

    }
}


/* =========================================================
   14. MODAL CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    const modal =
        document.getElementById("productModal");

    const modalBody =
        document.getElementById("modalBody");


    if (!modal || !modalBody) {

        createProductModal();

        return openProductDetail(productId);
    }


    modalBody.innerHTML = createProductDetail(product);


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================================
   15. NỘI DUNG CHI TIẾT SẢN PHẨM
   ========================================================= */

function createProductDetail(product) {

    return `
        <div class="product-detail">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22 viewBox=%220 0 600 600%22%3E%3Crect width=%22600%22 height=%22600%22 fill=%22%23f4efe5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%235b4636%22 font-size=%2230%22 font-family=%22Arial%22%3ECocoon%3C/text%3E%3C/svg%3E';"
                >

            </div>


            <div class="product-detail-content">

                <span class="product-detail-category">
                    ${product.categoryName}
                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="product-detail-description">
                    ${product.description}
                </p>


                <div class="product-detail-section">

                    <h3>
                        Cách sử dụng
                    </h3>

                    <p>
                        ${product.usage}
                    </p>

                </div>


                <div class="product-detail-grid">

                    <div>

                        <strong>
                            Lượng dùng
                        </strong>

                        <p>
                            ${product.amount}
                        </p>

                    </div>


                    <div>

                        <strong>
                            Kết cấu
                        </strong>

                        <p>
                            ${product.texture}
                        </p>

                    </div>


                    <div>

                        <strong>
                            Mùi hương
                        </strong>

                        <p>
                            ${product.scent}
                        </p>

                    </div>


                    <div>

                        <strong>
                            Xuất xứ
                        </strong>

                        <p>
                            ${product.origin}
                        </p>

                    </div>

                </div>


                <div class="product-detail-section">

                    <h3>
                        Thành phần chính
                    </h3>

                    <ul class="ingredient-list">

                        ${product.ingredients
                            .map(
                                ingredient =>
                                    `<li>${ingredient}</li>`
                            )
                            .join("")
                        }

                    </ul>

                </div>


                <div class="product-detail-section product-note">

                    <h3>
                        Lưu ý
                    </h3>

                    <p>
                        ${product.note}
                    </p>

                </div>


                <button
                    type="button"
                    class="detail-add-cart-btn"
                    data-action="add"
                    data-id="${product.id}"
                >
                    Thêm vào giỏ hàng
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   16. TẠO MODAL TỰ ĐỘNG
   ========================================================= */

function createProductModal() {

    if (document.getElementById("productModal")) {
        return;
    }


    const modal =
        document.createElement("div");


    modal.id =
        "productModal";


    modal.className =
        "product-modal";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    modal.innerHTML = `

        <div
            class="product-modal-overlay"
            data-action="close-modal"
        ></div>


        <div
            class="product-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label="Thông tin sản phẩm"
        >

            <button
                type="button"
                class="product-modal-close"
                data-action="close-modal"
                aria-label="Đóng"
            >
                ×
            </button>


            <div id="modalBody"></div>

        </div>
    `;


    document.body.appendChild(modal);
}


/* =========================================================
   17. ĐÓNG MODAL
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById("productModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   18. THÔNG BÁO
   ========================================================= */

function showNotification(message) {

    let notification =
        document.getElementById(
            "siteNotification"
        );


    if (!notification) {

        notification =
            document.createElement("div");

        notification.id =
            "siteNotification";

        notification.className =
            "site-notification";

        document.body.appendChild(
            notification
        );
    }


    notification.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        showNotification.timer
    );


    showNotification.timer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);
}


/* =========================================================
   19. MỞ / ĐÓNG GIỎ HÀNG
   ========================================================= */

function openCart() {

    const cartDrawer =
        document.getElementById("cartDrawer");

    const cartOverlay =
        document.getElementById("cartOverlay");


    if (cartDrawer) {

        cartDrawer.classList.add(
            "active"
        );

        cartDrawer.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    if (cartOverlay) {

        cartOverlay.classList.add(
            "active"
        );
    }


    document.body.classList.add(
        "cart-open"
    );
}


function closeCart() {

    const cartDrawer =
        document.getElementById("cartDrawer");

    const cartOverlay =
        document.getElementById("cartOverlay");


    if (cartDrawer) {

        cartDrawer.classList.remove(
            "active"
        );

        cartDrawer.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    if (cartOverlay) {

        cartOverlay.classList.remove(
            "active"
        );
    }


    document.body.classList.remove(
        "cart-open"
    );
}


/* =========================================================
   20. RESET TÌM KIẾM
   ========================================================= */

function resetSearch() {

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");


    if (searchInput) {
        searchInput.value = "";
    }


    if (categoryFilter) {
        categoryFilter.value = "all";
    }


    currentProducts =
        [...products];


    renderProducts(
        currentProducts
    );
}


/* =========================================================
   21. XỬ LÝ SỰ KIỆN TRÊN TRANG
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target.closest(
                "[data-action]"
            );


        if (!target) {
            return;
        }


        const action =
            target.dataset.action;


        const productId =
            target.dataset.id;


        /* -----------------------------------------------
           XEM CHI TIẾT
           ----------------------------------------------- */

        if (action === "detail") {

            openProductDetail(
                Number(productId)
            );

            return;
        }


        /* -----------------------------------------------
           THÊM VÀO GIỎ
           ----------------------------------------------- */

        if (action === "add") {

            addToCart(
                Number(productId)
            );

            return;
        }


        /* -----------------------------------------------
           TĂNG SỐ LƯỢNG
           ----------------------------------------------- */

        if (action === "increase") {

            increaseCartItem(
                Number(productId)
            );

            return;
        }


        /* -----------------------------------------------
           GIẢM SỐ LƯỢNG
           ----------------------------------------------- */

        if (action === "decrease") {

            decreaseCartItem(
                Number(productId)
            );

            return;
        }


        /* -----------------------------------------------
           XÓA KHỎI GIỎ
           ----------------------------------------------- */

        if (action === "remove") {

            removeFromCart(
                Number(productId)
            );

            return;
        }


        /* -----------------------------------------------
           ĐÓNG MODAL
           ----------------------------------------------- */

        if (action === "close-modal") {

            closeProductDetail();

            return;
        }


        /* -----------------------------------------------
           MỞ GIỎ
           ----------------------------------------------- */

        if (action === "open-cart") {

            openCart();

            return;
        }


        /* -----------------------------------------------
           ĐÓNG GIỎ
           ----------------------------------------------- */

        if (action === "close-cart") {

            closeCart();

            return;
        }


        /* -----------------------------------------------
           XÓA GIỎ
           ----------------------------------------------- */

        if (action === "clear-cart") {

            clearCart();

            return;
        }


        /* -----------------------------------------------
           RESET TÌM KIẾM
           ----------------------------------------------- */

        if (action === "reset-search") {

            resetSearch();

            return;
        }
    }
);


/* =========================================================
   22. TÌM KIẾM THEO THỜI GIAN THỰC
   ========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target &&
            event.target.id === "productSearch"
        ) {

            filterProducts();
        }
    }
);


/* =========================================================
   23. LỌC THEO DANH MỤC
   ========================================================= */

document.addEventListener(
    "change",
    function(event) {

        if (
            event.target &&
            event.target.id === "categoryFilter"
        ) {

            filterProducts();
        }
    }
);


/* =========================================================
   24. PHÍM ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Escape") {
            return;
        }


        closeProductDetail();

        closeCart();
    }
);


/* =========================================================
   25. KHỞI TẠO WEBSITE
   ========================================================= */

function initializeWebsite() {

    /*
     * Tạo modal nếu HTML chưa có.
     */

    createProductModal();


    /*
     * Hiển thị toàn bộ sản phẩm.
     */

    currentProducts =
        [...products];

    renderProducts(
        currentProducts
    );


    /*
     * Hiển thị giỏ hàng.
     */

    renderCart();


    /*
     * Cập nhật số lượng trên icon giỏ.
     */

    updateCartCount();
}


/* =========================================================
   26. CHẠY SAU KHI HTML ĐÃ TẢI
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();
}


/* =========================================================
   27. EXPORT RA WINDOW
   ---------------------------------------------------------
   Cho phép HTML hoặc code khác gọi trực tiếp.
   ========================================================= */

window.products = products;

window.cart = cart;

window.filterProducts =
    filterProducts;

window.renderProducts =
    renderProducts;

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.increaseCartItem =
    increaseCartItem;

window.decreaseCartItem =
    decreaseCartItem;

window.clearCart =
    clearCart;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.resetSearch =
    resetSearch;

window.formatPrice =
    formatPrice;


/* =========================================================
   KẾT THÚC SCRIPT
   ========================================================= */
