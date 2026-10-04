/* =========================================================
   NÂNG NIU MÁI TÓC VIỆT
   script.js
   ---------------------------------------------------------
   Chức năng:
   - Dữ liệu 5 sản phẩm
   - Hiển thị sản phẩm
   - Tìm kiếm sản phẩm
   - Tìm kiếm có dấu / không dấu
   - Lọc sản phẩm
   - Xem chi tiết khi bấm tên sản phẩm
   - Thêm vào giỏ hàng
   - Tăng / giảm số lượng
   - Xóa sản phẩm
   - Xóa toàn bộ giỏ hàng
   - Tính tổng tiền
   - Lưu giỏ hàng bằng localStorage
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    /* =====================================================
       1. DẦU GỘI BƯỞI 500ML
       ===================================================== */
    {
        id: 1,

        name: "Dầu gội Bưởi Cocoon 500ml",

        price: 388000,

        category: "dau-goi",

        categoryName: "Dầu gội",

        image:
            "https://image.cocoonvietnam.com/uploads/IMG_5252_8f3fe2deab.jpg",

        description:
            "Dầu gội Bưởi Cocoon giúp làm sạch tóc và da đầu, kết hợp tinh dầu bưởi cùng các thành phần dưỡng tóc giúp mái tóc mềm mượt và bóng khỏe.",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó xả sạch. Sử dụng hằng ngày. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giàu limonene, hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Có nguồn gốc từ tảo nâu và đường tự nhiên, giúp dưỡng ẩm, phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5 (D-panthenol)",
                description:
                    "Giúp cung cấp độ ẩm lâu dài, hỗ trợ hạn chế hư tổn và cải thiện vẻ bóng khỏe của tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc tóc, bảo vệ màu và hỗ trợ cải thiện hư tổn bề mặt."
            }
        ]
    },


    /* =====================================================
       2. DẦU GỘI BƯỞI 310ML
       ===================================================== */
    {
        id: 2,

        name: "Dầu gội Bưởi Cocoon 310ml",

        price: 200000,

        category: "dau-goi",

        categoryName: "Dầu gội",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO9qvYFAEuGH2AkFhsus8McXksD5--YRyhFYcsqTdwg&s=10",

        description:
            "Dầu gội Bưởi Cocoon 310ml là lựa chọn tiện lợi cho chu trình chăm sóc tóc hằng ngày, giúp làm sạch tóc và da đầu đồng thời hỗ trợ dưỡng tóc.",

        usage:
            "Thoa sản phẩm lên tóc ướt và tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó xả sạch. Sử dụng hằng ngày. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giàu limonene, hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, phục hồi và tăng cường độ bóng cho tóc."
            },
            {
                name: "Vitamin B5 (D-panthenol)",
                description:
                    "Cung cấp độ ẩm lâu dài, hỗ trợ hạn chế hư tổn và cải thiện độ bóng khỏe."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    },


    /* =====================================================
       3. TÚI REFILL DẦU GỘI BƯỞI
       ===================================================== */
    {
        id: 3,

        name: "Túi Refill Dầu gội Bưởi Cocoon",

        price: 310000,

        category: "refill",

        categoryName: "Refill",

        image:
            "https://cdn.hstatic.net/products/1000006063/new_project_4f782c61380f46bc8013b609d3849d29_1024x1024.jpg",

        description:
            "Túi Refill Dầu gội Bưởi Cocoon giúp bổ sung dầu gội tiện lợi, phù hợp cho nhu cầu sử dụng thường xuyên.",

        usage:
            "Bổ sung sản phẩm vào chai đựng phù hợp. Khi sử dụng, thoa dầu gội lên tóc ướt, tạo bọt, mát-xa nhẹ nhàng từ gốc đến ngọn rồi xả sạch.",

        amount:
            "Từ 1–2 lần nhấn",

        texture:
            "Gel trong mờ",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Hỗ trợ chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5 (D-panthenol)",
                description:
                    "Giúp duy trì độ ẩm và hỗ trợ mái tóc mềm mại, bóng khỏe."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm và hỗ trợ củng cố cấu trúc tóc."
            }
        ]
    },


    /* =====================================================
       4. DẦU XẢ BƯỞI 310ML
       ===================================================== */
    {
        id: 4,

        name: "Dầu xả Bưởi Cocoon 310ml",

        price: 388000,

        category: "dau-xa",

        categoryName: "Dầu xả",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTToPG_yudvoDtXvIjkh-42g8gBg6_rNUnREextcb85SNZAT1Ao3bdoyw&s=10",

        description:
            "Dầu xả Bưởi Cocoon giúp dưỡng tóc sau bước gội, cung cấp độ ẩm và hỗ trợ mái tóc mềm mượt, bóng khỏe.",

        usage:
            "Sau khi gội tóc với Dầu gội Bưởi, thoa sản phẩm lên tóc ướt, mát-xa nhẹ nhàng lên thân tóc, sau đó xả sạch lại với nước. Sử dụng hằng ngày. Tránh tiếp xúc với mắt.",

        amount:
            "1–2 lần nhấn",

        texture:
            "Kem đặc màu trắng ngà",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giúp chăm sóc da đầu và tóc, đồng thời mang lại cảm giác tươi mát."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng độ bóng cho tóc."
            },
            {
                name: "Vitamin B5 (D-panthenol)",
                description:
                    "Cung cấp độ ẩm lâu dài, hỗ trợ hạn chế hư tổn và cải thiện vẻ bóng khỏe."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    },


    /* =====================================================
       5. COMBO DẦU GỘI + DẦU XẢ
       ===================================================== */
    {
        id: 5,

        name: "Combo Dầu gội & Dầu xả Bưởi Cocoon 310ml x 2",

        price: 590000,

        category: "combo",

        categoryName: "Combo",

        image:
            "https://oharabeauty.com/wp-content/uploads/2024/02/dau-xa-cocoon-buoi-cung-cap-duong-chat-do-am-310ml-2.png",

        description:
            "Combo Dầu gội và Dầu xả Bưởi Cocoon 310ml x 2 kết hợp bước làm sạch và dưỡng tóc trong một chu trình chăm sóc tiện lợi.",

        usage:
            "Bước 1: Thoa dầu gội lên tóc ướt, tạo bọt và mát-xa nhẹ nhàng từ gốc đến ngọn, sau đó xả sạch. Bước 2: Sau khi gội, thoa dầu xả lên thân tóc, mát-xa nhẹ nhàng rồi xả sạch với nước. Sử dụng hằng ngày.",

        amount:
            "Dầu gội: 1–2 lần nhấn. Dầu xả: 1–2 lần nhấn",

        texture:
            "Dầu gội dạng gel trong mờ; dầu xả dạng kem đặc màu trắng ngà",

        scent:
            "Tinh dầu bưởi thơm mát",

        note:
            "Tránh vùng mắt, chỉ dùng ngoài da.",

        origin:
            "Việt Nam",

        ingredients: [
            {
                name: "Tinh dầu bưởi",
                description:
                    "Giúp chăm sóc da đầu và tóc, đồng thời có đặc tính kháng khuẩn và chống oxy hóa."
            },
            {
                name: "Xylishine™",
                description:
                    "Giúp dưỡng ẩm, hỗ trợ phục hồi và tăng cường độ bóng của tóc."
            },
            {
                name: "Vitamin B5 (D-panthenol)",
                description:
                    "Giúp cung cấp độ ẩm lâu dài và hỗ trợ cải thiện vẻ bóng khỏe của mái tóc."
            },
            {
                name: "Axít amin",
                description:
                    "Giúp dưỡng ẩm, củng cố cấu trúc và hỗ trợ cải thiện hư tổn bề mặt tóc."
            }
        ]
    }

];


/* =========================================================
   2. BIẾN GIỎ HÀNG
   ========================================================= */

let cart = [];


/* =========================================================
   3. CHUẨN HÓA CHUỖI
   ---------------------------------------------------------
   Cho phép tìm:
   "dầu xả"
   "dau xa"
   "DẦU XẢ"
   "xả"
   "xa"
   ========================================================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================================
   4. ĐỊNH DẠNG GIÁ
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}


/* =========================================================
   5. TÌM SẢN PHẨM
   ========================================================= */

function getProductById(id) {

    return products.find(
        product => Number(product.id) === Number(id)
    );
}


/* =========================================================
   6. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(list = products) {

    const productGrid =
        document.getElementById("productGrid");

    if (!productGrid) {
        console.warn(
            "Không tìm thấy #productGrid"
        );
        return;
    }


    if (list.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">
                <h3>Không tìm thấy sản phẩm</h3>

                <p>
                    Hãy thử nhập từ khóa khác.
                </p>

                <button
                    type="button"
                    onclick="resetProductFilter()"
                >
                    Xem tất cả sản phẩm
                </button>
            </div>
        `;

        return;
    }


    productGrid.innerHTML =
        list.map(
            product => createProductCard(product)
        ).join("");
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
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

                <span class="product-category">
                    ${product.categoryName}
                </span>

            </div>


            <div class="product-info">

                <!--
                    BẤM VÀO TÊN SẢN PHẨM
                    SẼ MỞ THÔNG TIN CHI TIẾT
                -->

                <button
                    type="button"
                    class="product-name-button"
                    onclick="openProductDetail(${product.id})"
                >
                    ${product.name}
                </button>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <button
                        type="button"
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   8. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function filterProducts() {

    const searchInput =
        document.getElementById("productSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");


    const keyword =
        normalizeText(
            searchInput
                ? searchInput.value
                : ""
        );


    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const filtered =
        products.filter(product => {

            /*
             * Tạo nội dung tìm kiếm từ:
             * - Tên sản phẩm
             * - Danh mục
             * - Mô tả
             * - Thành phần
             */

            const ingredients =
                product.ingredients
                    .map(item => item.name)
                    .join(" ");


            const searchableText =
                normalizeText(`
                    ${product.name}
                    ${product.categoryName}
                    ${product.category}
                    ${product.description}
                    ${ingredients}
                `);


            const matchesSearch =
                keyword === "" ||
                searchableText.includes(keyword);


            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );
        });


    renderProducts(filtered);
}


/* =========================================================
   9. RESET BỘ LỌC
   ========================================================= */

function resetProductFilter() {

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


    renderProducts(products);
}


/* =========================================================
   10. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    let modal =
        document.getElementById("productModal");


    /*
     * Nếu HTML chưa có modal,
     * JavaScript tự tạo.
     */

    if (!modal) {

        createProductModal();

        modal =
            document.getElementById("productModal");
    }


    const modalBody =
        document.getElementById("modalBody");


    if (!modalBody) {
        return;
    }


    modalBody.innerHTML =
        createProductDetail(product);


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
   11. TẠO NỘI DUNG CHI TIẾT
   ========================================================= */

function createProductDetail(product) {

    return `
        <div class="product-detail">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none';"
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


                <!-- ================================
                     CÁCH SỬ DỤNG
                     ================================ -->

                <section class="product-detail-section">

                    <h3>
                        Cách sử dụng
                    </h3>

                    <p>
                        ${product.usage}
                    </p>

                </section>


                <!-- ================================
                     THÔNG TIN NHANH
                     ================================ -->

                <div class="product-detail-grid">

                    <div class="detail-box">

                        <strong>
                            Lượng dùng
                        </strong>

                        <span>
                            ${product.amount}
                        </span>

                    </div>


                    <div class="detail-box">

                        <strong>
                            Kết cấu
                        </strong>

                        <span>
                            ${product.texture}
                        </span>

                    </div>


                    <div class="detail-box">

                        <strong>
                            Mùi hương
                        </strong>

                        <span>
                            ${product.scent}
                        </span>

                    </div>


                    <div class="detail-box">

                        <strong>
                            Xuất xứ
                        </strong>

                        <span>
                            ${product.origin}
                        </span>

                    </div>

                </div>


                <!-- ================================
                     THÀNH PHẦN CHÍNH
                     ================================ -->

                <section class="product-detail-section">

                    <h3>
                        Thành phần chính
                    </h3>


                    <div class="ingredients-list">

                        ${product.ingredients
                            .map(
                                ingredient => `
                                    <div class="ingredient-item">

                                        <h4>
                                            ${ingredient.name}
                                        </h4>

                                        <p>
                                            ${ingredient.description}
                                        </p>

                                    </div>
                                `
                            )
                            .join("")
                        }

                    </div>

                </section>


                <!-- ================================
                     LƯU Ý
                     ================================ -->

                <section
                    class="product-detail-section product-note"
                >

                    <h3>
                        Lưu ý
                    </h3>

                    <p>
                        ${product.note}
                    </p>

                </section>


                <!-- ================================
                     THÊM VÀO GIỎ
                     ================================ -->

                <button
                    type="button"
                    class="detail-add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Thêm vào giỏ hàng
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   12. TẠO MODAL
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
            onclick="closeProductDetail()"
        ></div>


        <div
            class="product-modal-content"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="product-modal-close"
                onclick="closeProductDetail()"
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
   13. ĐÓNG CHI TIẾT
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
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   14. LOAD GIỎ HÀNG
   ========================================================= */

function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "nangNiuMaiTocVietCart"
            );


        if (!saved) {
            return [];
        }


        const parsed =
            JSON.parse(saved);


        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Không thể đọc giỏ hàng:",
            error
        );

        return [];
    }
}


/* =========================================================
   15. LƯU GIỎ HÀNG
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "nangNiuMaiTocVietCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   16. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product =
        getProductById(productId);


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (existing) {

        existing.quantity += 1;

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


/* =========================================================
   17. TĂNG SỐ LƯỢNG
   ========================================================= */

function increaseCartItem(productId) {

    const item =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity += 1;


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   18. GIẢM SỐ LƯỢNG
   ========================================================= */

function decreaseCartItem(productId) {

    const item =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    Number(item.id) !==
                    Number(productId)
            );
    }


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   19. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                Number(item.id) !==
                Number(productId)
        );


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   20. XÓA TOÀN BỘ GIỎ
   ========================================================= */

function clearCart() {

    if (cart.length === 0) {
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
   21. TÍNH SỐ LƯỢNG SẢN PHẨM
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.quantity || 0),
        0
    );
}


/* =========================================================
   22. TÍNH TỔNG TIỀN
   ========================================================= */

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
   23. CẬP NHẬT SỐ LƯỢNG TRÊN ICON GIỎ
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    cartCount.textContent =
        getCartQuantity();
}


/* =========================================================
   24. HIỂN THỊ GIỎ HÀNG
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


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn sản phẩm bạn yêu thích.
                </p>

            </div>
        `;

    } else {

        cartItems.innerHTML =
            cart
                .map(
                    item =>
                        createCartItem(item)
                )
                .join("");
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );
    }


    updateCartCount();

    renderOrderSummary();
}


/* =========================================================
   25. TẠO ITEM GIỎ HÀNG
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
                src="${product.image}"
                alt="${product.name}"
                class="cart-item-image"
                onerror="this.style.display='none';"
            >


            <div class="cart-item-info">

                <button
                    type="button"
                    class="cart-item-name"
                    onclick="openProductDetail(${product.id})"
                >
                    ${product.name}
                </button>


                <span class="cart-item-price">
                    ${formatPrice(product.price)}
                </span>


                <div class="cart-item-controls">

                    <button
                        type="button"
                        onclick="decreaseCartItem(${product.id})"
                    >
                        −
                    </button>


                    <span>
                        ${quantity}
                    </span>


                    <button
                        type="button"
                        onclick="increaseCartItem(${product.id})"
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
                    onclick="removeFromCart(${product.id})"
                >
                    Xóa
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   26. TÓM TẮT ĐƠN HÀNG
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


    if (orderItems) {

        if (cart.length === 0) {

            orderItems.innerHTML =
                "<p>Chưa có sản phẩm.</p>";

        } else {

            orderItems.innerHTML =
                cart.map(item => {

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

                }).join("");
        }
    }


    if (orderTotal) {

        orderTotal.textContent =
            formatPrice(
                getCartTotal()
            );
    }
}


/* =========================================================
   27. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

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
            "active"
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


/* =========================================================
   28. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const cartDrawer =
        document.getElementById(
            "cartDrawer"
        );


    const cartOverlay =
        document.getElementById(
            "cartOverlay"
        );


    if (cartDrawer) {

        cartDrawer.classList.remove(
            "active"
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
   29. THÔNG BÁO
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
        window.notificationTimer
    );


    window.notificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);
}


/* =========================================================
   30. TÌM KIẾM THỜI GIAN THỰC
   ========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "productSearch"
        ) {

            filterProducts();
        }
    }
);


/* =========================================================
   31. LỌC DANH MỤC
   ========================================================= */

document.addEventListener(
    "change",
    function(event) {

        if (
            event.target &&
            event.target.id ===
            "categoryFilter"
        ) {

            filterProducts();
        }
    }
);


/* =========================================================
   32. PHÍM ESC ĐỂ ĐÓNG
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductDetail();

            closeCart();
        }
    }
);


/* =========================================================
   33. KHỞI TẠO
   ========================================================= */

function initializeWebsite() {

    /*
     * Đọc giỏ hàng đã lưu.
     */

    cart = loadCart();


    /*
     * Tạo modal nếu HTML chưa có.
     */

    createProductModal();


    /*
     * Hiển thị sản phẩm.
     */

    renderProducts(products);


    /*
     * Hiển thị giỏ hàng.
     */

    renderCart();


    /*
     * Cập nhật số lượng trên giỏ.
     */

    updateCartCount();
}


/* =========================================================
   34. CHẠY WEBSITE
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
   35. EXPORT HÀM
   ========================================================= */

window.products =
    products;

window.filterProducts =
    filterProducts;

window.resetProductFilter =
    resetProductFilter;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

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

window.formatPrice =
    formatPrice;


/* =========================================================
   KẾT THÚC FILE SCRIPT.JS
   ========================================================= */
