/* =========================================================
   TÓC MÂY CỎ MỀM
   script.js
   ---------------------------------------------------------
   Chức năng:
   1. Dữ liệu sản phẩm
   2. Hiển thị sản phẩm + HÌNH ẢNH
   3. Tìm kiếm sản phẩm
   4. Lọc sản phẩm
   5. Xem chi tiết sản phẩm
   6. Hiển thị xuất xứ + thành phần
   7. Thêm vào giỏ hàng
   8. Tăng / giảm số lượng
   9. Xóa sản phẩm khỏi giỏ
   10. Tính tổng tiền
   11. Lưu giỏ hàng vào localStorage
   12. Responsive
   13. Không dùng letter-spacing làm tách chữ
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

        oldPrice: 359000,

        badge: "Bán chạy",

        /* ẢNH SẢN PHẨM CHÍNH */
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwhDoQqbkZEReDgqgEdPU0u6i4bFlVlgtrNWTJC_I9vAwsdUjg9NhRydt&s=10",

        /* ẢNH DÙNG TRONG CHI TIẾT */
        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        origin: "Cỏ Mềm HomeLab - Việt Nam",

        weight: "300 gram",

        hairProblem:
            "Tóc xơ, tóc gàu, tóc gãy rụng nhiều, tóc chẻ ngọn",

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
            "Kết hợp thảo dược truyền thống và hoạt chất thiên nhiên",
            "Hương thảo dược dịu nhẹ"
        ],

        benefits: [
            "Làm sạch tóc và da đầu",
            "Hỗ trợ cải thiện tình trạng gàu",
            "Hỗ trợ giảm tình trạng tóc gãy rụng",
            "Hỗ trợ chăm sóc tóc chẻ ngọn",
            "Giúp tóc mềm mượt và chắc khỏe",
            "Góp phần chăm sóc nang tóc"
        ],

        ingredients: [
            "Nước tinh khiết (Purified water)",
            "Cao quả Bồ kết",
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
            "Phenoxyethanol"
        ],

        herbalIngredients: [
            {
                name: "Bồ kết",
                description:
                    "Chứa saponin, hỗ trợ làm sạch tóc và da đầu."
            },
            {
                name: "Bồ hòn",
                description:
                    "Nguồn saponin thực vật, hỗ trợ tạo bọt và làm sạch."
            },
            {
                name: "Cỏ ngũ sắc",
                description:
                    "Thảo dược truyền thống được sử dụng trong công thức chăm sóc tóc."
            },
            {
                name: "Hương nhu",
                description:
                    "Hỗ trợ chăm sóc da đầu và tóc."
            },
            {
                name: "Cỏ mần trầu",
                description:
                    "Được sử dụng trong công thức chăm sóc tóc và da đầu."
            },
            {
                name: "Tinh dầu vỏ Bưởi",
                description:
                    "Góp phần chăm sóc tóc, hỗ trợ hạn chế tình trạng tóc gãy rụng."
            },
            {
                name: "Dầu quả Bơ",
                description:
                    "Giàu vitamin A, C, D, E, hỗ trợ dưỡng tóc mềm mượt và chắc khỏe."
            },
            {
                name: "Protein đậu Hà Lan",
                description:
                    "Hỗ trợ làm mượt và chăm sóc tóc hư tổn."
            }
        ],

        usage: [
            "Làm ướt tóc và thoa đều dầu gội lên tóc.",
            "Massage nhẹ nhàng tóc và da đầu.",
            "Xả sạch tóc lại với nước.",
            "Có thể gội 2 lần nếu cần."
        ],

        note:
            "Chiết xuất Bồ kết đậm đặc có thể gây cay nhẹ nếu rơi vào mắt. Nếu sản phẩm tiếp xúc với mắt, hãy rửa sạch lại bằng nước."
    },


    {
        id: 2,

        name: "Combo dầu gội xả thảo dược Tóc Mây",

        shortName: "Combo dầu gội xả Tóc Mây",

        category: "Combo",

        price: 629000,

        oldPrice: 699000,

        badge: "Tiết kiệm",

        /* ẢNH COMBO */
        image:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        detailImage:
            "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99.webp",

        origin: "Cỏ Mềm HomeLab - Việt Nam",

        weight: "Combo gồm dầu gội 300 gram và kem xả ủ 200 gram",

        hairProblem:
            "Tóc xơ, khô, gàu, gãy rụng, tóc thiếu độ mềm mượt",

        fragrance:
            "Hương thơm thảo dược dịu nhẹ",

        shelfLife:
            "Theo hạn sử dụng được in trên từng sản phẩm",

        description:
            "Combo dầu gội xả thảo dược Tóc Mây là lựa chọn chăm sóc tóc kết hợp giữa dầu gội thảo dược và kem xả ủ Tóc Mây. Combo giúp làm sạch tóc và da đầu, đồng thời hỗ trợ dưỡng tóc mềm mượt, chắc khỏe và dễ chăm sóc hơn.",

        highlights: [
            "Gồm dầu gội thảo dược Tóc Mây",
            "Gồm kem xả ủ Tóc Mây",
            "Kết hợp chăm sóc tóc từ bước làm sạch đến dưỡng tóc",
            "Hương thảo dược dịu nhẹ",
            "Phù hợp với nhu cầu chăm sóc tóc khô, xơ"
        ],

        benefits: [
            "Làm sạch tóc và da đầu",
            "Hỗ trợ cải thiện tình trạng gàu",
            "Hỗ trợ chăm sóc tóc gãy rụng",
            "Giúp tóc mềm mượt hơn",
            "Hỗ trợ dưỡng tóc khô và hư tổn",
            "Tiện lợi khi sử dụng trọn bộ"
        ],

        ingredients: [
            "Dầu gội thảo dược Tóc Mây",
            "Cao dược liệu từ Bồ kết",
            "Bồ hòn",
            "Cỏ Ngũ Sắc",
            "Cỏ Mần Trầu",
            "Dâu Tằm",
            "Tinh dầu vỏ Bưởi",
            "Tinh dầu Hương nhu",
            "Tinh dầu Sả chanh",
            "Dầu quả Bơ",
            "Vitamin E",
            "Kem xả ủ Tóc Mây"
        ],

        usage: [
            "Bước 1: Làm ướt tóc.",
            "Bước 2: Sử dụng dầu gội Tóc Mây để làm sạch tóc và da đầu.",
            "Bước 3: Massage nhẹ nhàng và xả sạch với nước.",
            "Bước 4: Sử dụng kem xả ủ Tóc Mây ở phần thân và ngọn tóc.",
            "Bước 5: Ủ trong thời gian phù hợp rồi xả sạch."
        ],

        note:
            "Nên đọc hướng dẫn sử dụng và thông tin thành phần được in trên bao bì của từng sản phẩm trong combo."
    }
];


/* =========================================================
   2. TRẠNG THÁI GIỎ HÀNG
   ========================================================= */

let cart = [];


/* =========================================================
   3. LẤY DỮ LIỆU GIỎ HÀNG TỪ LOCAL STORAGE
   ========================================================= */

function loadCart() {
    try {
        const savedCart = localStorage.getItem("tocMayCart");

        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {
                cart = parsedCart;
            }
        }
    } catch (error) {
        console.warn("Không thể đọc giỏ hàng:", error);
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
        console.warn("Không thể lưu giỏ hàng:", error);
    }
}


/* =========================================================
   5. ĐỊNH DẠNG GIÁ TIỀN
   ========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}


/* =========================================================
   6. ESCAPE HTML
   Giúp tránh lỗi khi đưa dữ liệu vào innerHTML.
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
   7. TÌM KHU VỰC HIỂN THỊ SẢN PHẨM
   ========================================================= */

function getProductContainer() {
    let container =
        document.querySelector("#productList") ||
        document.querySelector(".product-list") ||
        document.querySelector(".products-grid") ||
        document.querySelector(".product-grid") ||
        document.querySelector("#products");

    /*
       Nếu HTML chưa có khu vực sản phẩm,
       tự tạo một khu vực mới.
    */

    if (!container) {
        container = document.createElement("div");

        container.id = "productList";

        container.className =
            "product-list products-grid";

        const main =
            document.querySelector("main") ||
            document.body;

        main.appendChild(container);
    }

    return container;
}


/* =========================================================
   8. CSS BỔ SUNG TỰ ĐỘNG
   Giúp script.js vẫn hiển thị đúng ảnh và sản phẩm
   ngay cả khi CSS chính chưa đầy đủ.
   ========================================================= */

function injectProductStyles() {

    if (document.querySelector("#tocMayProductStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "tocMayProductStyles";

    style.textContent = `
        /* ==============================
           KHÔNG TÁCH CHỮ TIẾNG VIỆT
           ============================== */

        body,
        button,
        input,
        select,
        textarea,
        .product-card,
        .product-card *,
        .product-modal,
        .product-modal *,
        .cart-sidebar,
        .cart-sidebar * {
            letter-spacing: normal;
        }

        /* ==============================
           DANH SÁCH SẢN PHẨM
           ============================== */

        .tocmay-product-list,
        #productList,
        .product-list,
        .products-grid,
        .product-grid {
            width: 100%;
        }

        #productList,
        .tocmay-product-list {
            display: grid;
            grid-template-columns: repeat(
                auto-fit,
                minmax(260px, 1fr)
            );
            gap: 28px;
            padding: 20px 0;
        }

        /* ==============================
           CARD SẢN PHẨM
           ============================== */

        .tocmay-product-card {
            position: relative;
            overflow: hidden;
            background: #fffdf7;
            border: 1px solid #e5e2cf;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(71, 85, 45, 0.08);
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
        }

        .tocmay-product-card:hover {
            transform: translateY(-6px);
            box-shadow:
                0 18px 40px rgba(71, 85, 45, 0.14);
        }

        .tocmay-product-image-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            background: #edf0d2;
            cursor: pointer;
        }

        .tocmay-product-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .tocmay-product-card:hover
        .tocmay-product-image {
            transform: scale(1.04);
        }

        .tocmay-product-badge {
            position: absolute;
            top: 14px;
            left: 14px;
            z-index: 3;
            padding: 7px 12px;
            border-radius: 999px;
            background: #4d6722;
            color: #fff;
            font-size: 13px;
            font-weight: 700;
        }

        .tocmay-product-info {
            padding: 20px;
        }

        .tocmay-product-category {
            margin-bottom: 7px;
            color: #73854c;
            font-size: 13px;
            font-weight: 600;
        }

        .tocmay-product-name {
            margin: 0 0 12px;
            color: #3d4c20;
            font-size: 20px;
            line-height: 1.4;
            font-weight: 700;
        }

        .tocmay-product-description {
            margin: 0 0 15px;
            color: #686b5d;
            font-size: 14px;
            line-height: 1.7;
        }

        .tocmay-product-price {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 9px;
            margin-bottom: 17px;
        }

        .tocmay-current-price {
            color: #4b6723;
            font-size: 20px;
            font-weight: 800;
        }

        .tocmay-old-price {
            color: #999;
            font-size: 14px;
            text-decoration: line-through;
        }

        .tocmay-product-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .tocmay-btn {
            min-height: 44px;
            padding: 10px 14px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font: inherit;
            font-weight: 700;
            transition: 0.25s ease;
        }

        .tocmay-btn-detail {
            background: #e8ecd2;
            color: #4b6126;
        }

        .tocmay-btn-detail:hover {
            background: #dce4bc;
        }

        .tocmay-btn-cart {
            background: #536d27;
            color: #fff;
        }

        .tocmay-btn-cart:hover {
            background: #3f551c;
        }

        /* ==============================
           MODAL CHI TIẾT
           ============================== */

        .tocmay-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: rgba(28, 37, 17, 0.65);
            opacity: 0;
            visibility: hidden;
            transition: 0.25s ease;
        }

        .tocmay-modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .tocmay-product-modal {
            position: relative;
            width: min(1050px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: #fffdf8;
            border-radius: 24px;
            box-shadow:
                0 30px 80px rgba(0, 0, 0, 0.25);
            transform: translateY(20px);
            transition: 0.3s ease;
        }

        .tocmay-modal-overlay.active
        .tocmay-product-modal {
            transform: translateY(0);
        }

        .tocmay-modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 10;
            width: 42px;
            height: 42px;
            border: none;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.95);
            color: #3f4d24;
            font-size: 25px;
            line-height: 1;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,.12);
        }

        .tocmay-modal-grid {
            display: grid;
            grid-template-columns: minmax(300px, 0.95fr) minmax(320px, 1.05fr);
        }

        .tocmay-modal-image {
            min-height: 500px;
            background: #e9edcc;
        }

        .tocmay-modal-image img {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 500px;
            object-fit: cover;
        }

        .tocmay-modal-content {
            padding: 40px;
        }

        .tocmay-modal-category {
            margin-bottom: 8px;
            color: #7b8e4c;
            font-size: 14px;
            font-weight: 700;
        }

        .tocmay-modal-title {
            margin: 0 0 15px;
            color: #3e4e20;
            font-size: 31px;
            line-height: 1.3;
        }

        .tocmay-modal-price {
            margin-bottom: 20px;
            color: #4d6925;
            font-size: 25px;
            font-weight: 800;
        }

        .tocmay-modal-description {
            color: #606456;
            font-size: 15px;
            line-height: 1.8;
        }

        .tocmay-detail-section {
            margin-top: 27px;
            padding-top: 22px;
            border-top: 1px solid #e3e5d7;
        }

        .tocmay-detail-section h3 {
            margin: 0 0 14px;
            color: #455a24;
            font-size: 19px;
        }

        .tocmay-specs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .tocmay-spec {
            padding: 13px;
            border-radius: 12px;
            background: #f1f3e4;
        }

        .tocmay-spec strong {
            display: block;
            margin-bottom: 5px;
            color: #53632f;
            font-size: 12px;
        }

        .tocmay-spec span {
            color: #4f5148;
            font-size: 14px;
            line-height: 1.5;
        }

        .tocmay-list {
            margin: 0;
            padding-left: 20px;
            color: #55584e;
        }

        .tocmay-list li {
            margin-bottom: 9px;
            line-height: 1.6;
        }

        .tocmay-ingredients {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tocmay-ingredient {
            display: inline-block;
            padding: 8px 11px;
            border-radius: 999px;
            background: #edf0dc;
            color: #53652c;
            font-size: 13px;
        }

        .tocmay-herbal {
            display: grid;
            gap: 10px;
        }

        .tocmay-herbal-item {
            padding: 13px;
            border-left: 3px solid #79933d;
            border-radius: 0 10px 10px 0;
            background: #f5f5e9;
        }

        .tocmay-herbal-item strong {
            display: block;
            margin-bottom: 4px;
            color: #4c6129;
        }

        .tocmay-herbal-item span {
            color: #65675c;
            font-size: 14px;
            line-height: 1.6;
        }

        .tocmay-note {
            padding: 15px;
            border-radius: 12px;
            background: #fff5dc;
            color: #6c5a32;
            font-size: 14px;
            line-height: 1.7;
        }

        .tocmay-modal-add {
            width: 100%;
            margin-top: 24px;
            padding: 15px;
            border: none;
            border-radius: 13px;
            background: #536d27;
            color: #fff;
            cursor: pointer;
            font: inherit;
            font-weight: 800;
            font-size: 16px;
        }

        .tocmay-modal-add:hover {
            background: #40551d;
        }

        /* ==============================
           GIỎ HÀNG
           ============================== */

        .tocmay-cart-overlay {
            position: fixed;
            inset: 0;
            z-index: 9996;
            background: rgba(0,0,0,.4);
            opacity: 0;
            visibility: hidden;
            transition: .25s ease;
        }

        .tocmay-cart-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .tocmay-cart-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 9997;
            width: min(440px, 94vw);
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: #fffdf8;
            box-shadow: -15px 0 45px rgba(0,0,0,.15);
            transform: translateX(100%);
            transition: .3s ease;
        }

        .tocmay-cart-sidebar.active {
            transform: translateX(0);
        }

        .tocmay-cart-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 1px solid #e6e6db;
        }

        .tocmay-cart-header h2 {
            margin: 0;
            color: #435423;
            font-size: 22px;
        }

        .tocmay-cart-close {
            width: 38px;
            height: 38px;
            border: none;
            border-radius: 50%;
            background: #edf0dd;
            color: #4e602a;
            font-size: 20px;
            cursor: pointer;
        }

        .tocmay-cart-items {
            flex: 1;
            overflow-y: auto;
            padding: 18px;
        }

        .tocmay-cart-item {
            display: grid;
            grid-template-columns: 75px 1fr;
            gap: 12px;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #ecece2;
        }

        .tocmay-cart-item img {
            width: 75px;
            height: 75px;
            border-radius: 10px;
            object-fit: cover;
        }

        .tocmay-cart-item-name {
            margin: 0 0 5px;
            color: #4b592e;
            font-size: 15px;
            font-weight: 700;
        }

        .tocmay-cart-item-price {
            color: #536b29;
            font-size: 14px;
            font-weight: 700;
        }

        .tocmay-cart-controls {
            display: flex;
            align-items: center;
            gap: 7px;
            margin-top: 9px;
        }

        .tocmay-quantity-btn {
            width: 27px;
            height: 27px;
            border: 1px solid #d9ddca;
            border-radius: 7px;
            background: #f4f5eb;
            color: #53642c;
            cursor: pointer;
        }

        .tocmay-remove {
            margin-left: auto;
            border: none;
            background: none;
            color: #a36363;
            cursor: pointer;
            font-size: 13px;
        }

        .tocmay-cart-empty {
            padding: 50px 20px;
            text-align: center;
            color: #77796f;
        }

        .tocmay-cart-footer {
            padding: 20px;
            border-top: 1px solid #e5e5db;
        }

        .tocmay-cart-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            color: #455522;
            font-size: 19px;
            font-weight: 800;
        }

        .tocmay-checkout {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 12px;
            background: #536d27;
            color: #fff;
            cursor: pointer;
            font: inherit;
            font-weight: 800;
        }

        /* ==============================
           THÔNG BÁO
           ============================== */

        .tocmay-toast {
            position: fixed;
            right: 22px;
            bottom: 22px;
            z-index: 10000;
            max-width: 350px;
            padding: 13px 18px;
            border-radius: 12px;
            background: #4e6825;
            color: #fff;
            box-shadow: 0 10px 30px rgba(0,0,0,.18);
            opacity: 0;
            visibility: hidden;
            transform: translateY(15px);
            transition: .25s ease;
        }

        .tocmay-toast.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        body.tocmay-modal-open {
            overflow: hidden;
        }

        /* ==============================
           RESPONSIVE
           ============================== */

        @media (max-width: 800px) {

            .tocmay-modal-grid {
                grid-template-columns: 1fr;
            }

            .tocmay-modal-image,
            .tocmay-modal-image img {
                min-height: 320px;
                height: 320px;
            }

            .tocmay-modal-content {
                padding: 25px;
            }

            .tocmay-modal-title {
                font-size: 25px;
            }

            .tocmay-specs {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {

            #productList,
            .tocmay-product-list {
                grid-template-columns: 1fr;
            }

            .tocmay-product-actions {
                grid-template-columns: 1fr;
            }

            .tocmay-modal-overlay {
                padding: 10px;
            }

            .tocmay-product-modal {
                max-height: 94vh;
                border-radius: 17px;
            }

            .tocmay-modal-content {
                padding: 20px;
            }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================================
   9. TẠO CARD SẢN PHẨM
   ========================================================= */

function createProductCard(product) {

    return `
        <article
            class="tocmay-product-card"
            data-product-id="${product.id}"
        >

            <div
                class="tocmay-product-image-wrap"
                onclick="openProductDetail(${product.id})"
                role="button"
                tabindex="0"
                aria-label="Xem ${escapeHTML(product.name)}"
            >

                <img
                    class="tocmay-product-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >

                <span class="tocmay-product-badge">
                    ${escapeHTML(product.badge)}
                </span>

            </div>


            <div class="tocmay-product-info">

                <div class="tocmay-product-category">
                    ${escapeHTML(product.category)}
                </div>


                <h3 class="tocmay-product-name">
                    ${escapeHTML(product.name)}
                </h3>


                <p class="tocmay-product-description">
                    ${escapeHTML(product.description)}
                </p>


                <div class="tocmay-product-price">

                    <span class="tocmay-current-price">
                        ${formatPrice(product.price)}
                    </span>

                    ${
                        product.oldPrice
                            ? `
                                <span class="tocmay-old-price">
                                    ${formatPrice(product.oldPrice)}
                                </span>
                              `
                            : ""
                    }

                </div>


                <div class="tocmay-product-actions">

                    <button
                        type="button"
                        class="tocmay-btn tocmay-btn-detail"
                        onclick="openProductDetail(${product.id})"
                    >
                        Xem chi tiết
                    </button>


                    <button
                        type="button"
                        class="tocmay-btn tocmay-btn-cart"
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
   10. HIỂN THỊ TẤT CẢ SẢN PHẨM
   ========================================================= */

function renderProducts(productArray = products) {

    const container = getProductContainer();

    if (!productArray.length) {

        container.innerHTML = `
            <div
                class="tocmay-empty-products"
                style="
                    grid-column: 1 / -1;
                    padding: 50px 20px;
                    text-align: center;
                    color: #6b6d62;
                "
            >
                <h3>Không tìm thấy sản phẩm</h3>

                <p>
                    Bạn hãy thử từ khóa hoặc lựa chọn bộ lọc khác.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = productArray
        .map(createProductCard)
        .join("");
}


/* =========================================================
   11. TÌM KIẾM SẢN PHẨM
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

    const result = products.filter(product => {

        const searchableText = [
            product.name,
            product.shortName,
            product.category,
            product.description,
            product.origin,
            product.hairProblem,
            ...(product.ingredients || [])
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(value);
    });

    renderProducts(result);
}


/* =========================================================
   12. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(category) {

    if (
        !category ||
        category === "all" ||
        category === "tat-ca" ||
        category === "Tất cả"
    ) {
        renderProducts(products);
        return;
    }

    const normalizedCategory =
        String(category)
            .trim()
            .toLowerCase();

    const result = products.filter(product =>
        product.category
            .toLowerCase()
            .includes(normalizedCategory)
    );

    renderProducts(result);
}


/* =========================================================
   13. TẠO MODAL CHI TIẾT
   ========================================================= */

function createProductModal() {

    if (document.querySelector("#tocmayProductModal")) {
        return;
    }

    const modal = document.createElement("div");

    modal.id = "tocmayProductModal";

    modal.className = "tocmay-modal-overlay";

    modal.innerHTML = `
        <div
            class="tocmay-product-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Thông tin sản phẩm"
        >

            <button
                type="button"
                class="tocmay-modal-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>


            <div id="tocmayProductDetail"></div>

        </div>
    `;

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeProductDetail();
        }

    });

    document.body.appendChild(modal);
}


/* =========================================================
   14. TẠO NỘI DUNG CHI TIẾT SẢN PHẨM
   ========================================================= */

function createProductDetailHTML(product) {

    const ingredientsHTML =
        product.ingredients
            .map(item => `
                <span class="tocmay-ingredient">
                    ${escapeHTML(item)}
                </span>
            `)
            .join("");


    const benefitsHTML =
        product.benefits
            .map(item => `
                <li>${escapeHTML(item)}</li>
            `)
            .join("");


    const highlightsHTML =
        product.highlights
            .map(item => `
                <li>${escapeHTML(item)}</li>
            `)
            .join("");


    const usageHTML =
        product.usage
            .map(item => `
                <li>${escapeHTML(item)}</li>
            `)
            .join("");


    const herbalHTML =
        product.herbalIngredients
            ? `
                <div class="tocmay-herbal">

                    ${product.herbalIngredients
                        .map(item => `
                            <div class="tocmay-herbal-item">

                                <strong>
                                    ${escapeHTML(item.name)}
                                </strong>

                                <span>
                                    ${escapeHTML(item.description)}
                                </span>

                            </div>
                        `)
                        .join("")}

                </div>
              `
            : "";


    return `
        <div class="tocmay-modal-grid">

            <!-- =============================
                 ẢNH SẢN PHẨM
                 ============================= -->

            <div class="tocmay-modal-image">

                <img
                    src="${product.detailImage || product.image}"
                    alt="${escapeHTML(product.name)}"
                    onerror="
                        this.onerror=null;
                        this.src='${product.image}';
                    "
                >

            </div>


            <!-- =============================
                 THÔNG TIN SẢN PHẨM
                 ============================= -->

            <div class="tocmay-modal-content">

                <div class="tocmay-modal-category">
                    ${escapeHTML(product.category)}
                </div>


                <h2 class="tocmay-modal-title">
                    ${escapeHTML(product.name)}
                </h2>


                <div class="tocmay-modal-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="tocmay-modal-description">
                    ${escapeHTML(product.description)}
                </p>


                <!-- THÔNG SỐ -->

                <section class="tocmay-detail-section">

                    <h3>
                        Thông số sản phẩm
                    </h3>


                    <div class="tocmay-specs">

                        <div class="tocmay-spec">
                            <strong>Xuất xứ</strong>
                            <span>
                                ${escapeHTML(product.origin)}
                            </span>
                        </div>


                        <div class="tocmay-spec">
                            <strong>Khối lượng</strong>
                            <span>
                                ${escapeHTML(product.weight)}
                            </span>
                        </div>


                        <div class="tocmay-spec">
                            <strong>Vấn đề của tóc</strong>
                            <span>
                                ${escapeHTML(product.hairProblem)}
                            </span>
                        </div>


                        <div class="tocmay-spec">
                            <strong>Mùi hương</strong>
                            <span>
                                ${escapeHTML(product.fragrance)}
                            </span>
                        </div>


                        <div class="tocmay-spec">
                            <strong>Hạn sử dụng</strong>
                            <span>
                                ${escapeHTML(product.shelfLife)}
                            </span>
                        </div>

                    </div>

                </section>


                <!-- ƯU ĐIỂM -->

                <section class="tocmay-detail-section">

                    <h3>
                        Ưu điểm nổi bật
                    </h3>

                    <ul class="tocmay-list">
                        ${highlightsHTML}
                    </ul>

                </section>


                <!-- CÔNG DỤNG -->

                <section class="tocmay-detail-section">

                    <h3>
                        Công dụng
                    </h3>

                    <ul class="tocmay-list">
                        ${benefitsHTML}
                    </ul>

                </section>


                <!-- THÀNH PHẦN -->

                <section class="tocmay-detail-section">

                    <h3>
                        Thành phần
                    </h3>


                    <div class="tocmay-ingredients">
                        ${ingredientsHTML}
                    </div>

                </section>


                ${
                    herbalHTML
                        ? `
                            <section class="tocmay-detail-section">

                                <h3>
                                    Thành phần thảo dược nổi bật
                                </h3>

                                ${herbalHTML}

                            </section>
                          `
                        : ""
                }


                <!-- HƯỚNG DẪN -->

                <section class="tocmay-detail-section">

                    <h3>
                        Hướng dẫn sử dụng
                    </h3>

                    <ol class="tocmay-list">
                        ${usageHTML}
                    </ol>

                </section>


                <!-- LƯU Ý -->

                <section class="tocmay-detail-section">

                    <h3>
                        Lưu ý
                    </h3>

                    <div class="tocmay-note">
                        ${escapeHTML(product.note)}
                    </div>

                </section>


                <!-- THÊM GIỎ -->

                <button
                    type="button"
                    class="tocmay-modal-add"
                    onclick="addToCartFromDetail(${product.id})"
                >
                    Thêm sản phẩm vào giỏ hàng
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   15. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        products.find(item => item.id === Number(productId));

    if (!product) {
        return;
    }

    createProductModal();

    const modal =
        document.querySelector("#tocmayProductModal");

    const content =
        document.querySelector("#tocmayProductDetail");

    content.innerHTML =
        createProductDetailHTML(product);

    modal.classList.add("active");

    document.body.classList.add("tocmay-modal-open");
}


/* =========================================================
   16. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.querySelector("#tocmayProductModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove("tocmay-modal-open");
}


/* =========================================================
   17. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const id = Number(productId);

    const product =
        products.find(item => item.id === id);

    if (!product) {
        return;
    }

    const existingItem =
        cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });

    }

    saveCart();

    updateCart();

    showCartMessage(
        `${product.name} đã được thêm vào giỏ hàng.`
    );
}


/* =========================================================
   18. THÊM TỪ MODAL
   ========================================================= */

function addToCartFromDetail(productId) {

    addToCart(productId);

    closeProductDetail();

    setTimeout(() => {
        openCart();
    }, 250);
}


/* =========================================================
   19. TÍNH SỐ LƯỢNG
   ========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );
}


/* =========================================================
   20. TÍNH TỔNG TIỀN
   ========================================================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            Number(item.quantity || 0),
        0
    );
}


/* =========================================================
   21. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const cartCount =
        document.querySelector("#cartCount");

    if (cartCount) {
        cartCount.textContent =
            getCartQuantity();
    }


    const cartItems =
        document.querySelector("#cartItems") ||
        document.querySelector(".cart-items") ||
        document.querySelector("#tocmayCartItems");


    const cartTotal =
        document.querySelector("#cartTotal") ||
        document.querySelector(".cart-total");


    if (cartTotal) {
        cartTotal.textContent =
            formatPrice(getCartTotal());
    }


    if (!cartItems) {
        updateInternalCart();
        return;
    }


    if (!cart.length) {

        cartItems.innerHTML = `
            <div class="tocmay-cart-empty">
                <p>Giỏ hàng đang trống.</p>
                <p>
                    Hãy chọn sản phẩm Tóc Mây bạn yêu thích.
                </p>
            </div>
        `;

        return;
    }


    cartItems.innerHTML =
        cart
            .map(createCartItem)
            .join("");
}


/* =========================================================
   22. TẠO ITEM GIỎ HÀNG
   ========================================================= */

function createCartItem(item) {

    return `
        <div class="tocmay-cart-item">

            <img
                src="${item.image}"
                alt="${escapeHTML(item.name)}"
                onerror="handleImageError(this)"
            >


            <div>

                <p class="tocmay-cart-item-name">
                    ${escapeHTML(item.name)}
                </p>


                <div class="tocmay-cart-item-price">
                    ${formatPrice(item.price)}
                </div>


                <div class="tocmay-cart-controls">

                    <button
                        type="button"
                        class="tocmay-quantity-btn"
                        onclick="decreaseQuantity(${item.id})"
                    >
                        −
                    </button>


                    <strong>
                        ${item.quantity}
                    </strong>


                    <button
                        type="button"
                        class="tocmay-quantity-btn"
                        onclick="increaseQuantity(${item.id})"
                    >
                        +
                    </button>


                    <button
                        type="button"
                        class="tocmay-remove"
                        onclick="removeFromCart(${item.id})"
                    >
                        Xóa
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   23. TỰ TẠO GIỎ HÀNG NẾU HTML CHƯA CÓ
   ========================================================= */

function createCartUI() {

    if (
        document.querySelector("#tocmayCartSidebar") ||
        document.querySelector("#cartSidebar")
    ) {
        return;
    }


    const overlay =
        document.createElement("div");

    overlay.id = "tocmayCartOverlay";

    overlay.className =
        "tocmay-cart-overlay";


    const sidebar =
        document.createElement("aside");

    sidebar.id = "tocmayCartSidebar";

    sidebar.className =
        "tocmay-cart-sidebar";


    sidebar.innerHTML = `

        <div class="tocmay-cart-header">

            <h2>
                Giỏ hàng
            </h2>

            <button
                type="button"
                class="tocmay-cart-close"
                onclick="closeCart()"
            >
                ×
            </button>

        </div>


        <div
            id="tocmayCartItems"
            class="tocmay-cart-items"
        ></div>


        <div class="tocmay-cart-footer">

            <div class="tocmay-cart-total">

                <span>
                    Tổng cộng
                </span>

                <strong id="tocmayCartTotal">
                    0 ₫
                </strong>

            </div>


            <button
                type="button"
                class="tocmay-checkout"
                onclick="checkoutCart()"
            >
                Tiến hành đặt hàng
            </button>

        </div>

    `;


    overlay.addEventListener(
        "click",
        closeCart
    );


    document.body.appendChild(overlay);

    document.body.appendChild(sidebar);
}


/* =========================================================
   24. CẬP NHẬT GIỎ HÀNG TỰ TẠO
   ========================================================= */

function updateInternalCart() {

    const items =
        document.querySelector("#tocmayCartItems");

    const total =
        document.querySelector("#tocmayCartTotal");


    if (!items || !total) {
        return;
    }


    if (!cart.length) {

        items.innerHTML = `
            <div class="tocmay-cart-empty">
                <p>Giỏ hàng đang trống.</p>
            </div>
        `;

    } else {

        items.innerHTML =
            cart
                .map(createCartItem)
                .join("");
    }


    total.textContent =
        formatPrice(getCartTotal());
}


/* =========================================================
   25. TĂNG SỐ LƯỢNG
   ========================================================= */

function increaseQuantity(productId) {

    const item =
        cart.find(
            item => item.id === Number(productId)
        );

    if (!item) {
        return;
    }

    item.quantity += 1;

    saveCart();

    updateCart();
}


/* =========================================================
   26. GIẢM SỐ LƯỢNG
   ========================================================= */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            item => item.id === Number(productId)
        );

    if (!item) {
        return;
    }

    item.quantity -= 1;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== Number(productId)
            );
    }

    saveCart();

    updateCart();
}


/* =========================================================
   27. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    const id = Number(productId);

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

    showCartMessage(
        "Đã xóa sản phẩm khỏi giỏ hàng."
    );
}


/* =========================================================
   28. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    createCartUI();

    const overlay =
        document.querySelector("#tocmayCartOverlay");

    const sidebar =
        document.querySelector("#tocmayCartSidebar");


    if (!overlay || !sidebar) {
        return;
    }


    updateInternalCart();

    overlay.classList.add("active");

    sidebar.classList.add("active");
}


/* =========================================================
   29. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const overlay =
        document.querySelector("#tocmayCartOverlay");

    const sidebar =
        document.querySelector("#tocmayCartSidebar");


    if (overlay) {
        overlay.classList.remove("active");
    }

    if (sidebar) {
        sidebar.classList.remove("active");
    }
}


/* =========================================================
   30. THÔNG BÁO
   ========================================================= */

let toastTimer = null;

function showCartMessage(message) {

    let toast =
        document.querySelector("#tocmayToast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "tocmayToast";

        toast.className =
            "tocmay-toast";

        document.body.appendChild(toast);
    }


    toast.textContent = message;

    toast.classList.add("active");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("active");

        }, 2500);
}


/* =========================================================
   31. XỬ LÝ ẢNH KHÔNG TẢI ĐƯỢC
   ========================================================= */

function handleImageError(image) {

    if (!image) {
        return;
    }


    /*
       Không để ảnh bị vỡ biểu tượng.
       Thay bằng nền nhẹ nếu URL ảnh không tải được.
    */

    image.style.objectFit = "contain";

    image.style.padding = "35px";

    image.style.background = "#edf0d2";


    /*
       Không gọi onerror lặp vô hạn.
    */

    image.onerror = null;
}


/* =========================================================
   32. THANH TÌM KIẾM
   Tự nhận nhiều loại ID/class phổ biến.
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector("#searchInput") ||
        document.querySelector("#productSearch") ||
        document.querySelector(".product-search");


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        function() {

            searchProducts(this.value);

        }
    );
}


/* =========================================================
   33. NÚT LỌC
   ========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(
            "[data-filter]"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function() {

                filterButtons.forEach(
                    item =>
                        item.classList.remove("active")
                );


                this.classList.add("active");


                filterProducts(
                    this.dataset.filter
                );

            }
        );

    });
}


/* =========================================================
   34. NÚT MỞ GIỎ HÀNG
   ========================================================= */

function setupCartButtons() {

    const cartButtons =
        document.querySelectorAll(
            "#openCart, .open-cart, [data-open-cart]"
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
}


/* =========================================================
   35. PHÍM ESC
   ========================================================= */

function setupKeyboard() {

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
}


/* =========================================================
   36. CLICK ẢNH / CARD BẰNG ENTER
   ========================================================= */

function setupCardKeyboard() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }


            const target =
                event.target.closest(
                    ".tocmay-product-image-wrap"
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            const card =
                target.closest(
                    ".tocmay-product-card"
                );


            if (!card) {
                return;
            }


            const productId =
                card.dataset.productId;


            openProductDetail(productId);

        }
    );
}


/* =========================================================
   37. ĐẶT HÀNG
   ========================================================= */

function checkoutCart() {

    if (!cart.length) {

        showCartMessage(
            "Giỏ hàng của bạn đang trống."
        );

        return;
    }


    /*
       Nếu website có form đặt hàng riêng,
       có thể thay phần này bằng chuyển đến
       section/form đặt hàng.
    */

    const orderText =
        cart
            .map(item =>
                `${item.name} x ${item.quantity}`
            )
            .join("\n");


    const total =
        formatPrice(getCartTotal());


    alert(
        "Đơn hàng của bạn:\n\n" +
        orderText +
        "\n\nTổng cộng: " +
        total +
        "\n\nVui lòng điền thông tin đặt hàng để hoàn tất."
    );
}


/* =========================================================
   38. TỰ TẠO NÚT GIỎ HÀNG NẾU CẦN
   ========================================================= */

function createFloatingCartButton() {

    const existingButton =
        document.querySelector(
            "#tocmayFloatingCart"
        );


    if (existingButton) {
        return;
    }


    const button =
        document.createElement("button");


    button.id =
        "tocmayFloatingCart";


    button.type = "button";


    button.innerHTML = `
        🛒
        <span
            id="cartCount"
            style="
                display:inline-flex;
                align-items:center;
                justify-content:center;
                min-width:22px;
                height:22px;
                padding:0 5px;
                border-radius:999px;
                background:#fff;
                color:#536d27;
                font-size:12px;
                font-weight:800;
                vertical-align:middle;
            "
        >
            0
        </span>
    `;


    button.style.cssText = `
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 9990;
        display: flex;
        align-items: center;
        gap: 7px;
        min-width: 58px;
        height: 52px;
        padding: 0 15px;
        border: none;
        border-radius: 999px;
        background: #536d27;
        color: white;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,.18);
        letter-spacing: normal;
    `;


    button.addEventListener(
        "click",
        openCart
    );


    document.body.appendChild(button);
}


/* =========================================================
   39. ĐỒNG BỘ NÚT GIỎ HÀNG CÓ SẴN
   ========================================================= */

function ensureCartCountElement() {

    let cartCount =
        document.querySelector("#cartCount");


    if (cartCount) {
        return cartCount;
    }


    return null;
}


/* =========================================================
   40. KHỞI TẠO WEBSITE
   ========================================================= */

function initTocMay() {

    /*
       Bước 1:
       Nạp CSS bổ sung
    */

    injectProductStyles();


    /*
       Bước 2:
       Nạp giỏ hàng
    */

    loadCart();


    /*
       Bước 3:
       Hiển thị sản phẩm
       -> ĐÂY LÀ PHẦN QUAN TRỌNG ĐỂ ẢNH HIỆN RA
    */

    renderProducts(products);


    /*
       Bước 4:
       Tạo modal
    */

    createProductModal();


    /*
       Bước 5:
       Tạo giỏ hàng
    */

    createCartUI();


    /*
       Bước 6:
       Tạo nút giỏ hàng nổi nếu HTML
       chưa có nút giỏ hàng.
    */

    const hasCartButton =
        document.querySelector(
            "#openCart, .open-cart, [data-open-cart]"
        );


    if (!hasCartButton) {
        createFloatingCartButton();
    }


    /*
       Bước 7:
       Cập nhật giỏ hàng
    */

    updateCart();

    updateInternalCart();


    /*
       Bước 8:
       Các sự kiện
    */

    setupSearch();

    setupFilters();

    setupCartButtons();

    setupKeyboard();

    setupCardKeyboard();


    /*
       Bước 9:
       Đồng bộ số lượng giỏ hàng
    */

    const countElement =
        ensureCartCountElement();


    if (countElement) {
        countElement.textContent =
            getCartQuantity();
    }


    console.log(
        "Tóc Mây Cỏ Mềm: script.js đã được khởi tạo."
    );

}


/* =========================================================
   41. CHẠY KHI HTML ĐÃ TẢI XONG
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initTocMay
    );

} else {

    initTocMay();

}


/* =========================================================
   42. EXPORT RA WINDOW
   Cho phép HTML gọi trực tiếp các hàm:
   
   onclick="openProductDetail(1)"
   onclick="addToCart(1)"
   onclick="openCart()"
   ...
   ========================================================= */

window.products = products;

window.renderProducts = renderProducts;

window.searchProducts = searchProducts;

window.filterProducts = filterProducts;

window.openProductDetail = openProductDetail;

window.closeProductDetail = closeProductDetail;

window.addToCart = addToCart;

window.addToCartFromDetail = addToCartFromDetail;

window.updateCart = updateCart;

window.increaseQuantity = increaseQuantity;

window.decreaseQuantity = decreaseQuantity;

window.removeFromCart = removeFromCart;

window.openCart = openCart;

window.closeCart = closeCart;

window.checkoutCart = checkoutCart;

window.formatPrice = formatPrice;

window.handleImageError = handleImageError;


/* =========================================================
   KẾT THÚC script.js
   ========================================================= */
