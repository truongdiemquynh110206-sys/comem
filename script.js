/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   SCRIPT.JS
   Sản phẩm - Lọc - Tìm kiếm - Giỏ hàng - Chi tiết sản phẩm
========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
========================================================= */

const products = [

    {
        id: 1,

        name: "Dầu gội Bưởi Cocoon 500ml",

        price: 388000,

        category: "dau-goi",

        size: "500ml",

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        description:
            "Dầu gội bưởi không sulfate với tinh dầu bưởi, Xylishine™, Vitamin B5 và axít amin, giúp làm sạch nhẹ nhàng và chăm sóc mái tóc.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó gội sạch.",
            "Sử dụng hằng ngày để có kết quả tốt nhất.",
            "Tránh tiếp xúc với mắt."
        ],

        amount:
            "Từ 1-2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da",

        origin:
            "Việt Nam",

        mainIngredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi chứa hàm lượng lớn limonene. Tinh dầu vỏ bưởi có khả năng hỗ trợ chăm sóc da đầu, đồng thời có tính kháng khuẩn và chống oxy hóa."
            },

            {
                name: "Xylishine™",

                description:
                    "Được chiết xuất từ tảo nâu Pelvetia canaliculata và các loại đường tự nhiên có trong gỗ. Xylishine™ giúp dưỡng ẩm, phục hồi và tăng cường độ bóng của tóc."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Có chức năng như một tác nhân dưỡng tóc, giúp cung cấp độ ẩm lâu dài, hỗ trợ ngăn ngừa hư tổn, làm dày và cải thiện độ bóng khỏe của mái tóc."
            },

            {
                name: "Axít amin",

                description:
                    "Có tác dụng dưỡng ẩm, củng cố cấu trúc, bảo vệ màu sắc và hỗ trợ phục hồi những hư tổn trên bề mặt tóc."
            }

        ]

    },


    {
        id: 2,

        name: "Dầu gội Bưởi Cocoon 310ml",

        price: 269000,

        category: "dau-goi",

        size: "310ml",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        description:
            "Dầu gội bưởi dung tích 310ml với tinh dầu bưởi, Vitamin B5, Xylishine™ và axít amin.",

        usage: [
            "Thoa sản phẩm lên tóc ướt và tạo bọt.",
            "Mát-xa nhẹ nhàng từ gốc đến ngọn rồi gội sạch.",
            "Sử dụng hằng ngày để có kết quả tốt nhất.",
            "Tránh tiếp xúc với mắt."
        ],

        amount:
            "Từ 1-2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da",

        origin:
            "Việt Nam",

        mainIngredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Chiết xuất từ vỏ bưởi, giàu limonene, kết hợp đặc tính kháng khuẩn và chống oxy hóa để chăm sóc da đầu và tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Thành phần dưỡng ẩm và phục hồi tóc có nguồn gốc từ tảo nâu và các loại đường tự nhiên, giúp tóc tăng độ bóng."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Giúp cung cấp độ ẩm, hỗ trợ bảo vệ tóc khỏi hư tổn và cải thiện độ bóng khỏe."
            },

            {
                name: "Axít amin",

                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ phục hồi bề mặt tóc."
            }

        ]

    },


    {
        id: 3,

        name: "Túi Refill Dầu gội Bưởi Cocoon",

        price: 310000,

        category: "refill",

        size: "500ml",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        description:
            "Túi refill dầu gội bưởi giúp bổ sung sản phẩm thuận tiện, hạn chế việc sử dụng nhiều chai nhựa.",

        usage: [
            "Cắt hoặc mở túi refill theo hướng dẫn trên bao bì.",
            "Rót sản phẩm vào chai dầu gội sạch.",
            "Sử dụng như dầu gội bưởi thông thường.",
            "Tránh tiếp xúc với mắt."
        ],

        amount:
            "Từ 1-2 lần nhấn",

        texture:
            "Dạng gel trong mờ",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da",

        origin:
            "Việt Nam",

        mainIngredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi, chứa limonene và có đặc tính kháng khuẩn, chống oxy hóa."
            },

            {
                name: "Xylishine™",

                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng cường độ bóng của tóc."
            },

            {
                name: "Vitamin B5",

                description:
                    "Giúp cung cấp độ ẩm lâu dài và hỗ trợ chăm sóc mái tóc."
            },

            {
                name: "Axít amin",

                description:
                    "Hỗ trợ dưỡng ẩm và củng cố cấu trúc tóc."
            }

        ]

    },


    {
        id: 4,

        name: "Dầu xả Bưởi Cocoon 310ml",

        price: 388000,

        category: "dau-xa",

        size: "310ml",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        description:
            "Dầu xả Bưởi Cocoon giúp bổ sung dưỡng chất và độ ẩm, hỗ trợ mái tóc mềm mại và mượt mà.",

        usage: [
            "Sau khi gội tóc với Dầu Gội Bưởi.",
            "Thoa sản phẩm lên tóc ướt.",
            "Mát-xa nhẹ nhàng lên thân tóc.",
            "Sau đó xả sạch lại với nước.",
            "Sử dụng hằng ngày để có kết quả tốt nhất.",
            "Tránh tiếp xúc với mắt."
        ],

        amount:
            "Từ 1-2 lần nhấn",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da",

        origin:
            "Việt Nam",

        mainIngredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Thành phần có nguồn gốc từ vỏ bưởi, mang đến hương thơm tươi mát và hỗ trợ chăm sóc tóc."
            },

            {
                name: "Xylishine™",

                description:
                    "Giúp dưỡng ẩm, phục hồi và tăng cường độ bóng của tóc."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Cung cấp độ ẩm lâu dài và hỗ trợ cải thiện độ mềm mại, bóng khỏe của tóc."
            },

            {
                name: "Axít amin",

                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và bảo vệ bề mặt tóc."
            }

        ]

    },


    {
        id: 5,

        name: "Combo Dầu gội xả Bưởi Cocoon 310ml",

        price: 590000,

        category: "combo",

        size: "310ml x 2",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        description:
            "Combo chăm sóc tóc gồm dầu gội và dầu xả Bưởi Cocoon 310ml, phù hợp cho quy trình chăm sóc tóc đồng bộ.",

        usage: [
            "Bước 1: Thoa dầu gội lên tóc ướt và tạo bọt.",
            "Mát-xa nhẹ nhàng từ gốc đến ngọn rồi gội sạch.",
            "Bước 2: Sau khi gội, thoa dầu xả lên thân tóc ướt.",
            "Mát-xa nhẹ nhàng rồi xả sạch lại với nước.",
            "Sử dụng hằng ngày để có kết quả tốt nhất.",
            "Tránh tiếp xúc với mắt."
        ],

        amount:
            "Dầu gội: từ 1-2 lần nhấn",

        texture:
            "Dầu gội dạng gel trong mờ; dầu xả dạng kem đặc màu trắng ngà",

        scent:
            "Mùi tinh dầu bưởi thơm mát",

        note:
            "Tránh dùng vùng mắt, chỉ dùng ngoài da",

        origin:
            "Việt Nam",

        mainIngredients: [

            {
                name: "Tinh dầu bưởi",

                description:
                    "Được trích ly từ vỏ bưởi, chứa limonene và có đặc tính kháng khuẩn, chống oxy hóa."
            },

            {
                name: "Xylishine™",

                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng cường độ bóng cho mái tóc."
            },

            {
                name: "Vitamin B5 (D-panthenol)",

                description:
                    "Cung cấp độ ẩm lâu dài và hỗ trợ bảo vệ tóc khỏi hư tổn."
            },

            {
                name: "Axít amin",

                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ sửa chữa các hư hỏng trên bề mặt tóc."
            }

        ]

    }

];


/* =========================================================
   2. BIẾN TOÀN CỤC
========================================================= */

let cart = [];

let currentFilter = "all";

let currentSearch = "";


/* =========================================================
   3. ĐỌC GIỎ HÀNG TỪ LOCAL STORAGE
========================================================= */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(
                "nangNiuMaiTocVietCart"
            );

        if (savedCart) {

            cart =
                JSON.parse(savedCart);

        }

        if (!Array.isArray(cart)) {

            cart = [];

        }

    } catch (error) {

        console.error(
            "Không thể đọc giỏ hàng:",
            error
        );

        cart = [];

    }

}


/* =========================================================
   4. LƯU GIỎ HÀNG
========================================================= */

function saveCart() {

    localStorage.setItem(
        "nangNiuMaiTocVietCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   5. FORMAT GIÁ
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(price) + " VNĐ";

}


/* =========================================================
   6. TÌM SẢN PHẨM
========================================================= */

function getProductById(id) {

    return products.find(
        product =>
            product.id === Number(id)
    );

}


/* =========================================================
   7. LỌC SẢN PHẨM
========================================================= */

function getFilteredProducts() {

    let result = [...products];


    /* -------------------------
       Lọc danh mục
    ------------------------- */

    if (
        currentFilter !== "all"
    ) {

        result =
            result.filter(
                product =>
                    product.category ===
                    currentFilter
            );

    }


    /* -------------------------
       Tìm kiếm
    ------------------------- */

    if (
        currentSearch.trim() !== ""
    ) {

        const keyword =
            currentSearch
                .toLowerCase()
                .normalize("NFD")
                .replace(
                    /[\u0300-\u036f]/g,
                    ""
                );


        result =
            result.filter(
                product => {

                    const name =
                        product.name
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(
                                /[\u0300-\u036f]/g,
                                ""
                            );

                    const description =
                        product.description
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(
                                /[\u0300-\u036f]/g,
                                ""
                            );


                    return (
                        name.includes(keyword) ||
                        description.includes(keyword)
                    );

                }
            );

    }


    return result;

}


/* =========================================================
   8. HIỂN THỊ SẢN PHẨM
========================================================= */

function renderProducts() {

    const productGrid =
        document.getElementById(
            "productGrid"
        );


    if (!productGrid) {

        console.warn(
            "Không tìm thấy #productGrid"
        );

        return;

    }


    const filteredProducts =
        getFilteredProducts();


    if (
        filteredProducts.length === 0
    ) {

        productGrid.innerHTML = `

            <div class="no-products">

                <div class="no-products-icon">
                    🌿
                </div>

                <h3>
                    Không tìm thấy sản phẩm
                </h3>

                <p>
                    Hãy thử từ khóa khác hoặc
                    chọn lại danh mục.
                </p>

            </div>

        `;

        return;

    }


    productGrid.innerHTML =
        filteredProducts
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");

}


/* =========================================================
   9. TẠO CARD SẢN PHẨM
========================================================= */

function createProductCard(product) {

    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-image-wrap">

                <span class="product-tag">
                    COCOON
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='${products[0].image}';"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>


                <!--
                    QUAN TRỌNG:
                    Ấn trực tiếp vào tên sản phẩm
                    để xem thông tin chi tiết.
                -->

                <h3>

                    <button
                        type="button"
                        class="product-name-button"
                        data-product-detail="${product.id}"
                    >
                        ${product.name}
                    </button>

                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-meta">

                    <span>
                        ${product.size}
                    </span>

                    <span>
                        ${product.origin}
                    </span>

                </div>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <button
                        type="button"
                        class="add-product"
                        data-add-cart="${product.id}"
                        aria-label="Thêm ${product.name} vào giỏ hàng"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   10. TÊN DANH MỤC
========================================================= */

function getCategoryName(category) {

    const categories = {

        "dau-goi":
            "DẦU GỘI BƯỞI",

        "dau-xa":
            "DẦU XẢ BƯỞI",

        "refill":
            "REFILL",

        "combo":
            "COMBO BƯỞI"

    };


    return (
        categories[category] ||
        "SẢN PHẨM BƯỞI"
    );

}


/* =========================================================
   11. THÊM SẢN PHẨM VÀO GIỎ
========================================================= */

function addToCart(productId) {

    const id =
        Number(productId);


    const product =
        getProductById(id);


    if (!product) {

        return;

    }


    const existingItem =
        cart.find(
            item =>
                item.id === id
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: id,

            quantity: 1

        });

    }


    saveCart();

    updateCartUI();

    showNotification(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   12. GIẢM SỐ LƯỢNG
========================================================= */

function decreaseQuantity(productId) {

    const id =
        Number(productId);


    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (!item) {

        return;

    }


    item.quantity -= 1;


    if (
        item.quantity <= 0
    ) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== id
            );

    }


    saveCart();

    updateCartUI();

}


/* =========================================================
   13. TĂNG SỐ LƯỢNG
========================================================= */

function increaseQuantity(productId) {

    const id =
        Number(productId);


    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (!item) {

        return;

    }


    item.quantity += 1;


    saveCart();

    updateCartUI();

}


/* =========================================================
   14. XÓA SẢN PHẨM KHỎI GIỎ
========================================================= */

function removeFromCart(productId) {

    const id =
        Number(productId);


    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    updateCartUI();


    showNotification(
        "Đã xóa sản phẩm khỏi giỏ hàng."
    );

}


/* =========================================================
   15. XÓA TOÀN BỘ GIỎ HÀNG
========================================================= */

function clearCart() {

    cart = [];

    saveCart();

    updateCartUI();


    showNotification(
        "Đã xóa toàn bộ giỏ hàng."
    );

}


/* =========================================================
   16. TÍNH TỔNG SỐ LƯỢNG
========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            item.quantity,
        0
    );

}


/* =========================================================
   17. TÍNH TỔNG TIỀN
========================================================= */

function getCartTotal() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            const product =
                getProductById(
                    item.id
                );


            if (!product) {

                return total;

            }


            return (
                total +
                product.price *
                item.quantity
            );

        },
        0
    );

}


/* =========================================================
   18. RENDER GIỎ HÀNG
========================================================= */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartItems) {

        return;

    }


    /* -------------------------
       Số lượng
    ------------------------- */

    const quantity =
        getCartQuantity();


    if (cartCount) {

        cartCount.textContent =
            quantity;

    }


    /* -------------------------
       Tổng tiền
    ------------------------- */

    const total =
        getCartTotal();


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }


    /* -------------------------
       Giỏ trống
    ------------------------- */

    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn sản phẩm
                    để chăm sóc mái tóc của bạn.
                </p>

                <button
                    type="button"
                    class="btn btn-primary"
                    data-go-products
                >
                    Xem sản phẩm
                </button>

            </div>

        `;

        return;

    }


    /* -------------------------
       Hiển thị sản phẩm
    ------------------------- */

    cartItems.innerHTML =
        cart
            .map(
                item => {

                    const product =
                        getProductById(
                            item.id
                        );


                    if (!product) {

                        return "";

                    }


                    const subtotal =
                        product.price *
                        item.quantity;


                    return `

                        <div class="cart-item">

                            <div class="cart-item-image">

                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                    onerror="this.onerror=null;this.src='${products[0].image}';"
                                >

                            </div>


                            <div class="cart-item-content">

                                <button
                                    type="button"
                                    class="cart-product-name"
                                    data-product-detail="${product.id}"
                                >
                                    ${product.name}
                                </button>


                                <strong>
                                    ${formatPrice(product.price)}
                                </strong>


                                <div class="cart-item-actions">

                                    <div class="quantity-control">

                                        <button
                                            type="button"
                                            data-decrease="${product.id}"
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            data-increase="${product.id}"
                                        >
                                            +
                                        </button>

                                    </div>


                                    <button
                                        type="button"
                                        class="remove-item"
                                        data-remove="${product.id}"
                                    >
                                        Xóa
                                    </button>

                                </div>


                                <div class="cart-subtotal">
                                    Thành tiền:
                                    <strong>
                                        ${formatPrice(subtotal)}
                                    </strong>
                                </div>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   19. UPDATE TOÀN BỘ CART UI
========================================================= */

function updateCartUI() {

    renderCart();

    renderOrderSummary();

}


/* =========================================================
   20. TÓM TẮT ĐƠN HÀNG
========================================================= */

function renderOrderSummary() {

    const orderItems =
        document.getElementById(
            "orderItems"
        );

    const orderTotal =
        document.getElementById(
            "orderTotal"
        );


    if (!orderItems) {

        return;

    }


    if (
        cart.length === 0
    ) {

        orderItems.innerHTML = `

            <div class="empty-order">
                Chưa có sản phẩm trong giỏ hàng.
            </div>

        `;


        if (orderTotal) {

            orderTotal.textContent =
                formatPrice(0);

        }


        return;

    }


    orderItems.innerHTML =
        cart
            .map(
                item => {

                    const product =
                        getProductById(
                            item.id
                        );


                    if (!product) {

                        return "";

                    }


                    const subtotal =
                        product.price *
                        item.quantity;


                    return `

                        <div class="order-item">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                onerror="this.onerror=null;this.src='${products[0].image}';"
                            >


                            <div class="order-item-info">

                                <button
                                    type="button"
                                    class="order-product-name"
                                    data-product-detail="${product.id}"
                                >
                                    ${product.name}
                                </button>

                                <span>
                                    ${item.quantity}
                                    ×
                                    ${formatPrice(product.price)}
                                </span>

                            </div>


                            <strong>
                                ${formatPrice(subtotal)}
                            </strong>

                        </div>

                    `;

                }
            )
            .join("");


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }

}


/* =========================================================
   21. MỞ SLIDE / MODAL CHI TIẾT SẢN PHẨM
========================================================= */

function openProductDetail(productId) {

    const product =
        getProductById(
            productId
        );


    if (!product) {

        return;

    }


    const modal =
        document.getElementById(
            "productModal"
        );

    const modalBody =
        document.getElementById(
            "modalBody"
        );


    if (!modal || !modalBody) {

        /*
            Nếu index.html của bạn chưa có
            #productModal / #modalBody,
            tạo tự động để script vẫn hoạt động.
        */

        createProductModal();

        return openProductDetail(
            productId
        );

    }


    modalBody.innerHTML =
        createProductDetailHTML(
            product
        );


    modal.classList.add(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   22. NỘI DUNG SLIDE CHI TIẾT
========================================================= */

function createProductDetailHTML(product) {

    return `

        <div class="modal-product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.onerror=null;this.src='${products[0].image}';"
            >

        </div>


        <div class="modal-product-content">

            <span class="product-category">
                ${getCategoryName(product.category)}
            </span>


            <h2 id="modalProductName">
                ${product.name}
            </h2>


            <div class="modal-product-price">
                ${formatPrice(product.price)}
            </div>


            <p class="modal-product-description">
                ${product.description}
            </p>


            <!-- THÔNG TIN NHANH -->

            <div class="product-facts">

                <div class="product-fact">

                    <span class="fact-icon">
                        ◷
                    </span>

                    <div>

                        <small>
                            Lượng dùng
                        </small>

                        <strong>
                            ${product.amount}
                        </strong>

                    </div>

                </div>


                <div class="product-fact">

                    <span class="fact-icon">
                        ◌
                    </span>

                    <div>

                        <small>
                            Kết cấu
                        </small>

                        <strong>
                            ${product.texture}
                        </strong>

                    </div>

                </div>


                <div class="product-fact">

                    <span class="fact-icon">
                        ♡
                    </span>

                    <div>

                        <small>
                            Mùi hương
                        </small>

                        <strong>
                            ${product.scent}
                        </strong>

                    </div>

                </div>


                <div class="product-fact">

                    <span class="fact-icon">
                        🇻🇳
                    </span>

                    <div>

                        <small>
                            Xuất xứ
                        </small>

                        <strong>
                            ${product.origin}
                        </strong>

                    </div>

                </div>

            </div>


            <!-- CÁCH SỬ DỤNG -->

            <div class="modal-section">

                <h3>
                    Cách sử dụng
                </h3>


                <div class="usage-list">

                    ${product.usage
                        .map(
                            (
                                step,
                                index
                            ) => `

                                <div class="usage-item">

                                    <span>
                                        ${String(
                                            index + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <p>
                                        ${step}
                                    </p>

                                </div>

                            `
                        )
                        .join("")}

                </div>

            </div>


            <!-- THÀNH PHẦN CHÍNH -->

            <div class="modal-section">

                <h3>
                    Thành phần chính
                </h3>


                <div class="ingredient-list">

                    ${product.mainIngredients
                        .map(
                            ingredient => `

                                <details>

                                    <summary>
                                        ${ingredient.name}
                                    </summary>

                                    <p>
                                        ${ingredient.description}
                                    </p>

                                </details>

                            `
                        )
                        .join("")}

                </div>

            </div>


            <!-- LƯU Ý -->

            <div class="modal-note">

                <strong>
                    Lưu ý
                </strong>

                <p>
                    ${product.note}
                </p>

            </div>


            <!-- BUTTON -->

            <button
                type="button"
                class="btn btn-primary btn-full"
                data-modal-add="${product.id}"
            >
                Thêm vào giỏ hàng
            </button>

        </div>

    `;

}


/* =========================================================
   23. TẠO MODAL TỰ ĐỘNG
========================================================= */

function createProductModal() {

    if (
        document.getElementById(
            "productModal"
        )
    ) {

        return;

    }


    const modal =
        document.createElement(
            "div"
        );


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
            class="modal-overlay"
            data-close-modal
        ></div>


        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="modal-close"
                data-close-modal
                aria-label="Đóng"
            >
                ×
            </button>


            <div
                class="modal-body"
                id="modalBody"
            ></div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    "[data-close-modal]"
                )
            ) {

                closeProductDetail();

            }

        }
    );

}


/* =========================================================
   24. ĐÓNG MODAL
========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   25. THÊM VÀO GIỎ TỪ MODAL
========================================================= */

function addFromModal(productId) {

    addToCart(
        productId
    );


    closeProductDetail();


    /*
       Nếu index có cart drawer,
       mở giỏ hàng sau khi thêm.
    */

    const cartDrawer =
        document.getElementById(
            "cartDrawer"
        );

    const cartOverlay =
        document.getElementById(
            "cartOverlay"
        );


    if (cartDrawer) {

        cartDrawer.classList.add(
            "open"
        );

    }


    if (cartOverlay) {

        cartOverlay.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   26. EVENT DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {


        /* -----------------------------------------
           XEM CHI TIẾT SẢN PHẨM
        ----------------------------------------- */

        const detailButton =
            event.target.closest(
                "[data-product-detail]"
            );


        if (detailButton) {

            event.preventDefault();

            openProductDetail(
                detailButton.dataset.productDetail
            );

            return;

        }


        /* -----------------------------------------
           THÊM GIỎ HÀNG
        ----------------------------------------- */

        const addButton =
            event.target.closest(
                "[data-add-cart]"
            );


        if (addButton) {

            event.preventDefault();

            addToCart(
                addButton.dataset.addCart
            );

            return;

        }


        /* -----------------------------------------
           TĂNG
        ----------------------------------------- */

        const increaseButton =
            event.target.closest(
                "[data-increase]"
            );


        if (increaseButton) {

            increaseQuantity(
                increaseButton.dataset.increase
            );

            return;

        }


        /* -----------------------------------------
           GIẢM
        ----------------------------------------- */

        const decreaseButton =
            event.target.closest(
                "[data-decrease]"
            );


        if (decreaseButton) {

            decreaseQuantity(
                decreaseButton.dataset.decrease
            );

            return;

        }


        /* -----------------------------------------
           XÓA
        ----------------------------------------- */

        const removeButton =
            event.target.closest(
                "[data-remove]"
            );


        if (removeButton) {

            removeFromCart(
                removeButton.dataset.remove
            );

            return;

        }


        /* -----------------------------------------
           THÊM TỪ MODAL
        ----------------------------------------- */

        const modalAddButton =
            event.target.closest(
                "[data-modal-add]"
            );


        if (modalAddButton) {

            addFromModal(
                modalAddButton.dataset.modalAdd
            );

            return;

        }


        /* -----------------------------------------
           ĐI ĐẾN SẢN PHẨM
        ----------------------------------------- */

        const goProducts =
            event.target.closest(
                "[data-go-products]"
            );


        if (goProducts) {

            const productsSection =
                document.getElementById(
                    "products"
                );


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    }
);


/* =========================================================
   27. FILTER
========================================================= */

function setupProductFilters() {

    const filterButtons =
        document.querySelectorAll(
            "[data-filter]"
        );


    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    currentFilter =
                        button.dataset.filter;


                    filterButtons.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    renderProducts();

                }
            );

        }
    );

}


/* =========================================================
   28. SEARCH
========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "productSearch"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value;

            renderProducts();

        }
    );

}


/* =========================================================
   29. ĐÓNG MODAL BẰNG ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductDetail();

        }

    }
);


/* =========================================================
   30. HIỂN THỊ THÔNG BÁO
========================================================= */

let notificationTimer = null;


function showNotification(message) {

    let notification =
        document.getElementById(
            "siteNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "siteNotification";

        notification.className =
            "site-notification";


        document.body.appendChild(
            notification
        );

    }


    notification.innerHTML = `

        <span class="notification-check">
            ✓
        </span>

        <span>
            ${message}
        </span>

    `;


    requestAnimationFrame(
        () => {

            notification.classList.add(
                "show"
            );

        }
    );


    clearTimeout(
        notificationTimer
    );


    notificationTimer =
        setTimeout(
            () => {

                notification.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   31. KHỞI TẠO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCart();

        createProductModal();

        renderProducts();

        updateCartUI();

        setupProductFilters();

        setupSearch();

    }
);


/* =========================================================
   32. EXPORT
   Có thể dùng nếu HTML cần gọi trực tiếp.
========================================================= */

window.products =
    products;

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.formatPrice =
    formatPrice;
