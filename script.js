```javascript
/* =========================================================
   TÓC MÂY CỎ MỀM
   script.js

   Chức năng:
   - Dữ liệu sản phẩm
   - Hiển thị sản phẩm
   - Tìm kiếm
   - Lọc sản phẩm
   - Chi tiết sản phẩm
   - Giỏ hàng
   - Tăng / giảm số lượng
   - Xóa sản phẩm
   - Tính tổng tiền
   - Lưu giỏ hàng bằng localStorage

   Lưu ý:
   - Không sử dụng letter-spacing để tránh chữ tiếng Việt
     bị cách nhau bất thường.
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

        name: "Dầu gội thảo dược Tóc Mây",

        shortName: "Dầu gội Tóc Mây",

        category: "dau-goi",

        categoryName: "Dầu gội",

        price: 329000,

        oldPrice: 350000,

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwhDoQqbkZEReDgqgEdPU0u6i4bFlVlgtrNWTJC_I9vAwsdUjg9NhRydt&s=10",

        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        badge: "Bán chạy",

        origin: "Cỏ Mềm HomeLab",

        weight: "300 gram",

        hairProblem:
            "Tóc xơ, gàu, gãy rụng nhiều",

        fragrance:
            "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên",

        shelfLife:
            "24 tháng",

        description:
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm.",

        highlights: [

            "Không silicone",

            "Không sulfate",

            "Phù hợp với da đầu nhạy cảm",

            "Kết hợp thảo mộc truyền thống và hoạt chất thiên nhiên",

            "Hương thảo dược dịu nhẹ"

        ],

        benefits: [

            "Làm sạch tóc và da đầu",

            "Hỗ trợ cải thiện tình trạng gàu",

            "Hỗ trợ chăm sóc tóc gãy rụng",

            "Hỗ trợ chăm sóc tóc chẻ ngọn",

            "Giúp mái tóc mềm mượt, chắc khỏe"

        ],

        ingredients: [

            "Nước tinh khiết (Purified water)",

            "Cao dược liệu: quả Bồ kết",

            "Rễ và lá Dâu Tằm",

            "Cỏ Mần Trầu",

            "Cỏ Ngũ Sắc",

            "Lá Tre",

            "Quả Mắc Kham",

            "Quả Bồ Hòn",

            "Propanediol",

            "Glycerin",

            "Tinh dầu vỏ Bưởi (Citrus maxima peel essential oil)",

            "Tinh dầu Hương nhu (Ocimum gratissimum essential oil)",

            "Tinh dầu Sả chanh (Cymbopogon citratus essential oil)",

            "Dầu quả Bơ (Persea gratissima fruit oil)",

            "Vitamin E (Tocopherol)",

            "Phenoxyethanol",

            "Protein từ đậu Hà Lan (Cetearamidoethyldiethonium Succinoyl Hydrolyzed Pea Protein)"

        ],

        usage: [

            "Làm ướt tóc và thoa đều dầu gội lên tóc",

            "Massage nhẹ nhàng tóc và da đầu",

            "Xả sạch lại tóc với nước",

            "Có thể gội 2 lần nếu muốn"

        ],

        note:
            "Chiết xuất Bồ kết đậm đặc có thể gây cay nhẹ nếu rơi vào mắt. Nếu sản phẩm tiếp xúc với mắt, hãy rửa sạch lại bằng nước sạch.",

        descriptionLong:
            "Dầu gội thảo dược Tóc Mây Cỏ Mềm là lựa chọn chăm sóc tóc với Bồ kết, Bồ hòn, Cỏ ngũ sắc, Hương nhu, Cỏ mần trầu cùng các loại tinh dầu và hoạt chất thiên nhiên.",

        tags: [
            "tóc mây",
            "dầu gội",
            "thảo dược",
            "bồ kết",
            "cỏ mềm",
            "dầu gội thiên nhiên",
            "gội đầu"
        ]
    },


    /* -----------------------------------------------------
       SẢN PHẨM 2
       ----------------------------------------------------- */

    {
        id: 2,

        name: "Combo dầu gội xả thảo dược Tóc Mây",

        shortName: "Combo dầu gội xả Tóc Mây",

        category: "combo",

        categoryName: "Combo",

        price: 629000,

        oldPrice: 680000,

        image:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        detailImage:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        badge: "Combo tiết kiệm",

        origin: "Cỏ Mềm HomeLab",

        weight:
            "Combo gồm dầu gội Tóc Mây 300 gram và kem xả Tóc Mây 200 gram",

        hairProblem:
            "Tóc xơ, khô, gàu, gãy rụng và cần chăm sóc mềm mượt",

        fragrance:
            "Hương thơm thảo dược nhẹ nhàng",

        shelfLife:
            "Theo hạn sử dụng ghi trên từng sản phẩm",

        description:
            "Combo dầu gội xả thảo dược Tóc Mây kết hợp dầu gội Tóc Mây và kem xả Tóc Mây, phù hợp cho nhu cầu chăm sóc tóc trọn bộ. Bộ sản phẩm hỗ trợ làm sạch tóc và da đầu, đồng thời chăm sóc tóc mềm mượt, chắc khỏe.",

        highlights: [

            "Gồm dầu gội Tóc Mây 300 gram",

            "Gồm kem xả Tóc Mây 200 gram",

            "Kết hợp chăm sóc tóc toàn diện",

            "Hương thơm thảo dược dịu nhẹ",

            "Phù hợp cho tóc khô, xơ và hư tổn"

        ],

        benefits: [

            "Làm sạch tóc và da đầu với dầu gội Tóc Mây",

            "Hỗ trợ chăm sóc tóc khô và xơ",

            "Giúp tóc mềm mượt hơn",

            "Hỗ trợ chăm sóc tóc gãy rụng và chẻ ngọn",

            "Tiện lợi khi sử dụng theo bộ"

        ],

        ingredients: [

            "Dầu gội thảo dược Tóc Mây",

            "Bồ kết",

            "Bồ hòn",

            "Cỏ Mần Trầu",

            "Cỏ Ngũ Sắc",

            "Hương nhu",

            "Tinh dầu vỏ Bưởi",

            "Tinh dầu Sả chanh",

            "Dầu quả Bơ",

            "Vitamin E",

            "Kem xả Tóc Mây"

        ],

        usage: [

            "Làm ướt tóc và sử dụng dầu gội Tóc Mây",

            "Massage nhẹ nhàng tóc và da đầu",

            "Xả sạch lại với nước",

            "Sau đó sử dụng Kem Xả Tóc Mây để chăm sóc phần thân và ngọn tóc",

            "Xả sạch tóc sau khi sử dụng kem xả"

        ],

        note:
            "Đối với dầu gội Tóc Mây, chiết xuất Bồ kết đậm đặc có thể gây cay nhẹ nếu rơi vào mắt. Nếu sản phẩm tiếp xúc với mắt, hãy rửa sạch lại bằng nước sạch.",

        descriptionLong:
            "Combo dầu gội xả thảo dược Tóc Mây là lựa chọn tiện lợi cho chu trình chăm sóc tóc với dầu gội và kem xả Tóc Mây.",

        tags: [
            "combo",
            "combo tóc mây",
            "dầu gội xả",
            "tóc mây",
            "cỏ mềm",
            "thảo dược",
            "chăm sóc tóc"
        ]
    }

];


/* =========================================================
   2. BIẾN GIỎ HÀNG
   ========================================================= */

let cart = [];


/* =========================================================
   3. LẤY GIỎ HÀNG TỪ LOCAL STORAGE
   ========================================================= */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem("tocMayCart");

        if (savedCart) {

            cart =
                JSON.parse(savedCart);

        } else {

            cart = [];

        }

    } catch (error) {

        console.error(
            "Không thể tải giỏ hàng:",
            error
        );

        cart = [];
    }
}


/* =========================================================
   4. LƯU GIỎ HÀNG
   ========================================================= */

function saveCart() {

    try {

        localStorage.setItem(
            "tocMayCart",
            JSON.stringify(cart)
        );

    } catch (error) {

        console.error(
            "Không thể lưu giỏ hàng:",
            error
        );

    }
}


/* =========================================================
   5. FORMAT GIÁ
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(price) + "đ";

}


/* =========================================================
   6. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {

        return "";

    }

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


/* =========================================================
   7. LẤY CÁC PHẦN TỬ HTML
   ========================================================= */

function getElement(...selectors) {

    for (const selector of selectors) {

        const element =
            document.querySelector(selector);

        if (element) {

            return element;

        }

    }

    return null;
}


/* =========================================================
   8. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(productList = products) {

    const productContainer =
        getElement(
            "#productList",
            ".product-list",
            ".products-grid",
            "#products"
        );


    if (!productContainer) {

        console.warn(
            "Không tìm thấy khu vực hiển thị sản phẩm."
        );

        return;
    }


    if (!productList.length) {

        productContainer.innerHTML = `

            <div class="no-product">

                <div class="no-product-icon">
                    <i class="fa-solid fa-leaf"></i>
                </div>

                <h3>
                    Không tìm thấy sản phẩm
                </h3>

                <p>
                    Hãy thử tìm kiếm với từ khóa khác.
                </p>

            </div>

        `;

        return;
    }


    productContainer.innerHTML =
        productList.map(product => `

            <article
                class="product-card"
                data-product-id="${product.id}"
                onclick="openProductDetail(${product.id})"
            >

                <div class="product-image-wrap">

                    <img
                        class="product-image"
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        onerror="handleImageError(this)"
                    >

                    ${
                        product.badge
                            ? `
                                <span class="product-badge">
                                    ${escapeHTML(product.badge)}
                                </span>
                              `
                            : ""
                    }

                </div>


                <div class="product-content">

                    <span class="product-category">
                        ${escapeHTML(product.categoryName)}
                    </span>


                    <h3 class="product-name">
                        ${escapeHTML(product.name)}
                    </h3>


                    <p class="product-description">

                        ${escapeHTML(
                            product.description.substring(
                                0,
                                120
                            )
                        )}...

                    </p>


                    <div class="product-bottom">

                        <div class="product-price">

                            <strong>
                                ${formatPrice(product.price)}
                            </strong>

                            ${
                                product.oldPrice
                                    ? `
                                        <del>
                                            ${formatPrice(
                                                product.oldPrice
                                            )}
                                        </del>
                                      `
                                    : ""
                            }

                        </div>


                        <button
                            type="button"
                            class="product-add-button"
                            onclick="event.stopPropagation(); addToCart(${product.id})"
                            aria-label="Thêm ${escapeHTML(product.name)} vào giỏ"
                        >

                            <i class="fa-solid fa-plus"></i>

                        </button>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   9. XỬ LÝ ẢNH LỖI
   ========================================================= */

function handleImageError(image) {

    image.classList.add(
        "image-error"
    );


    image.alt =
        "Hình ảnh sản phẩm Tóc Mây";

}


/* =========================================================
   10. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function searchProducts(keyword) {

    const value =
        String(keyword || "")
            .trim()
            .toLowerCase();


    if (!value) {

        renderProducts(products);

        return;

    }


    const result =
        products.filter(product => {

            const searchText = [

                product.name,

                product.shortName,

                product.categoryName,

                product.description,

                product.origin,

                ...(product.ingredients || []),

                ...(product.tags || [])

            ]
                .join(" ")
                .toLowerCase();


            return searchText.includes(value);

        });


    renderProducts(result);

}


/* =========================================================
   11. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(category) {

    const value =
        String(category || "")
            .trim()
            .toLowerCase();


    if (
        !value ||
        value === "all" ||
        value === "tat-ca" ||
        value === "tất cả"
    ) {

        renderProducts(products);

        return;

    }


    const filtered =
        products.filter(
            product =>
                product.category === value
        );


    renderProducts(filtered);

}


/* =========================================================
   12. KẾT HỢP TÌM KIẾM + LỌC
   ========================================================= */

function filterAndSearchProducts() {

    const searchInput =
        getElement(
            "#searchInput",
            "#productSearch",
            ".search-input"
        );


    const activeFilter =
        document.querySelector(
            ".filter-button.active, .category-button.active"
        );


    const keyword =
        searchInput
            ? searchInput.value
            : "";


    const category =
        activeFilter
            ? activeFilter.dataset.category ||
              activeFilter.dataset.filter ||
              "all"
            : "all";


    let result =
        [...products];


    /* Lọc theo danh mục */

    if (
        category !== "all" &&
        category !== "tat-ca" &&
        category !== "tất cả"
    ) {

        result =
            result.filter(
                product =>
                    product.category === category
            );

    }


    /* Tìm kiếm */

    const searchValue =
        keyword
            .trim()
            .toLowerCase();


    if (searchValue) {

        result =
            result.filter(product => {

                const text = [

                    product.name,

                    product.shortName,

                    product.description,

                    product.categoryName,

                    ...(product.ingredients || []),

                    ...(product.tags || [])

                ]
                    .join(" ")
                    .toLowerCase();


                return text.includes(
                    searchValue
                );

            });

    }


    renderProducts(result);

}


/* =========================================================
   13. TẠO MODAL CHI TIẾT SẢN PHẨM
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
            class="product-detail-overlay"
            onclick="closeProductDetail()"
        ></div>


        <div
            class="product-detail-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="detailProductName"
        >

            <button
                type="button"
                class="product-detail-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >

                <i class="fa-solid fa-xmark"></i>

            </button>


            <div
                id="productDetailBody"
                class="product-detail-body"
            ></div>

        </div>

    `;


    document.body.appendChild(modal);

}


/* =========================================================
   14. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    createProductModal();


    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    if (!product) {

        return;

    }


    const modal =
        document.getElementById(
            "productDetailModal"
        );


    const body =
        document.getElementById(
            "productDetailBody"
        );


    if (!modal || !body) {

        return;

    }


    body.innerHTML = `

        <div class="product-detail-grid">


            <!-- =========================================
                 ẢNH
                 ========================================= -->

            <div class="product-detail-image">

                <img
                    src="${product.detailImage || product.image}"
                    alt="${escapeHTML(product.name)}"
                    onerror="handleImageError(this)"
                >

            </div>


            <!-- =========================================
                 THÔNG TIN
                 ========================================= -->

            <div class="product-detail-info">


                <span class="detail-category">

                    ${escapeHTML(
                        product.categoryName
                    )}

                </span>


                <h2 id="detailProductName">

                    ${escapeHTML(
                        product.name
                    )}

                </h2>


                <div class="detail-price">

                    <strong>
                        ${formatPrice(
                            product.price
                        )}
                    </strong>


                    ${
                        product.oldPrice
                            ? `
                                <del>
                                    ${formatPrice(
                                        product.oldPrice
                                    )}
                                </del>
                              `
                            : ""
                    }

                </div>


                <p class="detail-description">

                    ${escapeHTML(
                        product.description
                    )}

                </p>


                <!-- THÔNG SỐ -->

                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-circle-info"></i>
                        Thông tin sản phẩm
                    </h3>


                    <div class="detail-specs">


                        <div class="detail-spec-item">

                            <span>
                                Xuất xứ
                            </span>

                            <strong>
                                ${escapeHTML(
                                    product.origin
                                )}
                            </strong>

                        </div>


                        <div class="detail-spec-item">

                            <span>
                                Khối lượng
                            </span>

                            <strong>
                                ${escapeHTML(
                                    product.weight
                                )}
                            </strong>

                        </div>


                        <div class="detail-spec-item">

                            <span>
                                Vấn đề của tóc
                            </span>

                            <strong>
                                ${escapeHTML(
                                    product.hairProblem
                                )}
                            </strong>

                        </div>


                        <div class="detail-spec-item">

                            <span>
                                Mùi hương
                            </span>

                            <strong>
                                ${escapeHTML(
                                    product.fragrance
                                )}
                            </strong>

                        </div>


                        <div class="detail-spec-item">

                            <span>
                                Hạn sử dụng
                            </span>

                            <strong>
                                ${escapeHTML(
                                    product.shelfLife
                                )}
                            </strong>

                        </div>


                    </div>

                </div>


                <!-- ƯU ĐIỂM -->

                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-leaf"></i>
                        Ưu điểm nổi bật
                    </h3>


                    <ul class="detail-list">

                        ${
                            product.highlights
                                .map(item => `

                                    <li>

                                        <i class="fa-solid fa-check"></i>

                                        <span>
                                            ${escapeHTML(item)}
                                        </span>

                                    </li>

                                `)
                                .join("")
                        }

                    </ul>

                </div>


                <!-- CÔNG DỤNG -->

                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-heart"></i>
                        Công dụng
                    </h3>


                    <ul class="detail-list">

                        ${
                            product.benefits
                                .map(item => `

                                    <li>

                                        <i class="fa-solid fa-check"></i>

                                        <span>
                                            ${escapeHTML(item)}
                                        </span>

                                    </li>

                                `)
                                .join("")
                        }

                    </ul>

                </div>


                <!-- THÀNH PHẦN -->

                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-seedling"></i>
                        Thành phần
                    </h3>


                    <div class="ingredient-tags">

                        ${
                            product.ingredients
                                .map(item => `

                                    <span class="ingredient-tag">

                                        ${escapeHTML(item)}

                                    </span>

                                `)
                                .join("")
                        }

                    </div>

                </div>


                <!-- HƯỚNG DẪN -->

                <div class="detail-section">

                    <h3>
                        <i class="fa-solid fa-list-check"></i>
                        Hướng dẫn sử dụng
                    </h3>


                    <ol class="usage-list">

                        ${
                            product.usage
                                .map(item => `

                                    <li>
                                        ${escapeHTML(item)}
                                    </li>

                                `)
                                .join("")
                        }

                    </ol>

                </div>


                <!-- LƯU Ý -->

                <div class="detail-note">

                    <strong>

                        <i class="fa-solid fa-triangle-exclamation"></i>

                        Lưu ý:

                    </strong>

                    <span>

                        ${escapeHTML(
                            product.note
                        )}

                    </span>

                </div>


                <!-- NÚT GIỎ HÀNG -->

                <div class="detail-actions">

                    <button
                        type="button"
                        class="detail-add-cart"
                        onclick="addToCartFromDetail(${product.id})"
                    >

                        <i class="fa-solid fa-cart-shopping"></i>

                        Thêm vào giỏ hàng

                    </button>

                </div>


            </div>

        </div>

    `;


    modal.classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   15. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productDetailModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   16. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId, quantity = 1) {

    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    if (!product) {

        return;

    }


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: quantity

        });

    }


    saveCart();

    updateCart();

    showCartMessage(
        `${product.name} đã được thêm vào giỏ hàng.`
    );

}


/* =========================================================
   17. THÊM TỪ TRANG CHI TIẾT
   ========================================================= */

function addToCartFromDetail(productId) {

    addToCart(
        productId,
        1
    );


    closeProductDetail();

}


/* =========================================================
   18. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const cartItems =
        getElement(
            "#cartItems",
            ".cart-items"
        );


    const cartTotal =
        getElement(
            "#cartTotal",
            ".cart-total-price"
        );


    const cartCount =
        getElement(
            "#cartCount",
            ".cart-count"
        );


    /* Tổng số lượng */

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    /* Tổng tiền */

    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,
            0
        );


    /* Cập nhật số lượng */

    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    /* Cập nhật tổng tiền */

    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(totalPrice);

    }


    /* Nếu không có khu vực giỏ */

    if (!cartItems) {

        return;

    }


    /* Giỏ trống */

    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">

                    <i class="fa-solid fa-bag-shopping"></i>

                </div>

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn một sản phẩm Tóc Mây
                    để bắt đầu mua sắm.
                </p>

            </div>

        `;

        return;

    }


    /* Có sản phẩm */

    cartItems.innerHTML =
        cart.map(item => `

            <div
                class="cart-item"
                data-cart-id="${item.id}"
            >

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${escapeHTML(item.name)}"
                        onerror="handleImageError(this)"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>

                        ${escapeHTML(
                            item.name
                        )}

                    </h4>


                    <strong class="cart-item-price">

                        ${formatPrice(
                            item.price
                        )}

                    </strong>


                    <div class="cart-item-controls">


                        <button
                            type="button"
                            onclick="decreaseQuantity(${item.id})"
                            aria-label="Giảm số lượng"
                        >

                            <i class="fa-solid fa-minus"></i>

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            onclick="increaseQuantity(${item.id})"
                            aria-label="Tăng số lượng"
                        >

                            <i class="fa-solid fa-plus"></i>

                        </button>


                    </div>

                </div>


                <button
                    type="button"
                    class="cart-remove"
                    onclick="removeFromCart(${item.id})"
                    aria-label="Xóa sản phẩm"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `).join("");

}


/* =========================================================
   19. TĂNG SỐ LƯỢNG
   ========================================================= */

function increaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === Number(productId)
        );


    if (!item) {

        return;

    }


    item.quantity++;


    saveCart();

    updateCart();

}


/* =========================================================
   20. GIẢM SỐ LƯỢNG
   ========================================================= */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === Number(productId)
        );


    if (!item) {

        return;

    }


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !==
                    Number(productId)
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   21. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveCart();

    updateCart();


    if (product) {

        showCartMessage(
            `${product.name} đã được xóa khỏi giỏ hàng.`
        );

    }

}


/* =========================================================
   22. XÓA TOÀN BỘ GIỎ HÀNG
   ========================================================= */

function clearCart() {

    cart = [];


    saveCart();

    updateCart();


    showCartMessage(
        "Đã xóa toàn bộ sản phẩm trong giỏ hàng."
    );

}


/* =========================================================
   23. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    const sidebar =
        getElement(
            "#cartSidebar",
            ".cart-sidebar"
        );


    const overlay =
        getElement(
            "#cartOverlay",
            ".cart-overlay"
        );


    if (sidebar) {

        sidebar.classList.add(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "cart-open"
    );

}


/* =========================================================
   24. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const sidebar =
        getElement(
            "#cartSidebar",
            ".cart-sidebar"
        );


    const overlay =
        getElement(
            "#cartOverlay",
            ".cart-overlay"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "cart-open"
    );

}


/* =========================================================
   25. THÔNG BÁO GIỎ HÀNG
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


    notification.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <span>
            ${escapeHTML(message)}
        </span>

    `;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        window.cartNotificationTimer
    );


    window.cartNotificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   26. SỰ KIỆN TÌM KIẾM
   ========================================================= */

function setupSearch() {

    const searchInput =
        getElement(
            "#searchInput",
            "#productSearch",
            ".search-input"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function() {

            filterAndSearchProducts();

        }
    );

}


/* =========================================================
   27. SỰ KIỆN LỌC
   ========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button, .category-button, [data-filter]"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                filterButtons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                this.classList.add(
                    "active"
                );


                filterAndSearchProducts();

            }
        );

    });

}


/* =========================================================
   28. NÚT GIỎ HÀNG
   ========================================================= */

function setupCartButtons() {

    const cartButtons =
        document.querySelectorAll(
            "[data-open-cart], .open-cart"
        );


    cartButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                openCart();

            }
        );

    });


    const closeButtons =
        document.querySelectorAll(
            "[data-close-cart], .close-cart"
        );


    closeButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                closeCart();

            }
        );

    });


    const overlay =
        getElement(
            "#cartOverlay",
            ".cart-overlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeCart
        );

    }

}


/* =========================================================
   29. NÚT XÓA GIỎ HÀNG
   ========================================================= */

function setupClearCart() {

    const clearButton =
        getElement(
            "#clearCart",
            ".clear-cart"
        );


    if (!clearButton) {

        return;

    }


    clearButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            clearCart();

        }
    );

}


/* =========================================================
   30. NÚT THANH TOÁN
   ========================================================= */

function setupCheckout() {

    const checkoutButton =
        getElement(
            "#checkoutButton",
            ".checkout-button"
        );


    if (!checkoutButton) {

        return;

    }


    checkoutButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            if (!cart.length) {

                showCartMessage(
                    "Giỏ hàng đang trống."
                );

                return;

            }


            /*
             * Có thể thay phần này bằng
             * trang thanh toán / form đặt hàng
             * của website.
             */

            showCartMessage(
                "Giỏ hàng đã sẵn sàng để đặt hàng."
            );

        }
    );

}


/* =========================================================
   31. PHÍM ESC
   ========================================================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeProductDetail();

                closeCart();

            }

        }
    );

}


/* =========================================================
   32. CLICK BÊN NGOÀI MODAL
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "productDetailModal"
            );


        if (
            !modal ||
            !modal.classList.contains("show")
        ) {

            return;

        }


        if (
            event.target.classList.contains(
                "product-detail-overlay"
            )
        ) {

            closeProductDetail();

        }

    }
);


/* =========================================================
   33. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Tạo modal */

        createProductModal();


        /* Đọc giỏ hàng */

        loadCart();


        /* Hiển thị sản phẩm */

        renderProducts(
            products
        );


        /* Cập nhật giỏ */

        updateCart();


        /* Tìm kiếm */

        setupSearch();


        /* Bộ lọc */

        setupFilters();


        /* Nút giỏ */

        setupCartButtons();


        /* Xóa giỏ */

        setupClearCart();


        /* Thanh toán */

        setupCheckout();


        /* Bàn phím */

        setupKeyboard();

    }
);


/* =========================================================
   34. EXPORT RA WINDOW
   Cho HTML có thể gọi trực tiếp.
   ========================================================= */

window.products =
    products;

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

window.updateCart =
    updateCart;

window.increaseQuantity =
    increaseQuantity;

window.decreaseQuantity =
    decreaseQuantity;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.showCartMessage =
    showCartMessage;

window.formatPrice =
    formatPrice;

window.handleImageError =
    handleImageError;
```
