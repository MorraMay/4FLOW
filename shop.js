// Проверяем, находимся ли мы на странице shop
function isShopPage() {
    return document.getElementById('product-grid') !== null;
}

// Дані про товари для сторінки shop
const shopProducts = [
    // TOPS (10 items)
    { id: 1, name: 'Basic Tee', price: 35.00, category: 'tops', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'black', image: './lots/01.jpg' },
    { id: 2, name: 'Ribbed Tank Top', price: 28.00, category: 'tops', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'white', image: './lots/02.jpg' },
    { id: 3, name: 'Long Sleeve Top', price: 45.00, category: 'tops', availability: 'in-stock', size: ['m', 'l', 'xl'], color: 'beige', image: './lots/01.jpg' },
    { id: 4, name: 'Silk Cami', price: 50.00, category: 'tops', availability: 'in-stock', size: ['s', 'm'], color: 'black', image: './lots/02.jpg' },
    { id: 5, name: 'Crop Sweater', price: 60.00, category: 'tops', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'brown', image: './lots/01.jpg' },
    { id: 6, name: 'Cotton T-Shirt', price: 30.00, category: 'tops', availability: 'in-stock', size: ['xs', 's', 'm', 'l'], color: 'white', image: './lots/02.jpg' },
    { id: 7, name: 'Off-Shoulder Blouse', price: 55.00, category: 'tops', availability: 'in-stock', size: ['m', 'l'], color: 'black', image: './lots/01.jpg' },
    { id: 8, name: 'Knit Cardigan', price: 70.00, category: 'tops', availability: 'out-of-stock', size: ['s', 'm'], color: 'beige', image: './lots/02.jpg' },
    { id: 9, name: 'Graphic Tee', price: 40.00, category: 'tops', availability: 'in-stock', size: ['l', 'xl'], color: 'white', image: './lots/01.jpg' },
    { id: 10, name: 'High-Neck Top', price: 48.00, category: 'tops', availability: 'in-stock', size: ['s', 'm'], color: 'brown', image: './lots/02.jpg' },

    // BOTTOMS (10 items)
    { id: 11, name: 'Wide Leg Pants', price: 70.00, category: 'bottoms', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'black', image: './lots/01.jpg' },
    { id: 12, name: 'Linen Shorts', price: 45.00, category: 'bottoms', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'beige', image: './lots/02.jpg' },
    { id: 13, name: 'Denim Skirt', price: 55.00, category: 'bottoms', availability: 'in-stock', size: ['m', 'l'], color: 'brown', image: './lots/01.jpg' },
    { id: 14, name: 'Pleated Trousers', price: 65.00, category: 'bottoms', availability: 'in-stock', size: ['s', 'm'], color: 'white', image: './lots/02.jpg' },
    { id: 15, name: 'Flowy Maxi Skirt', price: 80.00, category: 'bottoms', availability: 'out-of-stock', size: ['m', 'l', 'xl'], color: 'black', image: './lots/01.jpg' },
    { id: 16, name: 'Sporty Leggings', price: 40.00, category: 'bottoms', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'brown', image: './lots/02.jpg' },
    { id: 17, name: 'Chino Pants', price: 58.00, category: 'bottoms', availability: 'in-stock', size: ['l', 'xl'], color: 'beige', image: './lots/01.jpg' },
    { id: 18, name: 'Faux Leather Skirt', price: 75.00, category: 'bottoms', availability: 'in-stock', size: ['s', 'm'], color: 'black', image: './lots/02.jpg' },
    { id: 19, name: 'Comfortable Joggers', price: 50.00, category: 'bottoms', availability: 'in-stock', size: ['m', 'l'], color: 'white', image: './lots/01.jpg' },
    { id: 20, name: 'High-Waist Jeans', price: 72.00, category: 'bottoms', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'brown', image: './lots/02.jpg' },

    // ACCESSORIES (10 items)
    { id: 21, name: 'Minimalist Necklace', price: 25.00, category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/01.jpg' },
    { id: 22, name: 'Leather Belt', price: 40.00, category: 'accessories', availability: 'in-stock', size: [], color: 'black', image: './lots/02.jpg' },
    { id: 23, name: 'Silk Scarf', price: 30.00, category: 'accessories', availability: 'in-stock', size: [], color: 'beige', image: './lots/01.jpg' },
    { id: 24, name: 'Small Hoop Earrings', price: 20.00, category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/02.jpg' },
    { id: 25, name: 'Canvas Tote Bag', price: 35.00, category: 'accessories', availability: 'in-stock', size: [], color: 'white', image: './lots/01.jpg' },
    { id: 26, name: 'Sun Hat', price: 22.00, category: 'accessories', availability: 'out-of-stock', size: [], color: 'black', image: './lots/02.jpg' },
    { id: 27, name: 'Statement Ring', price: 38.00, category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/01.jpg' },
    { id: 28, name: 'Gloves', price: 28.00, category: 'accessories', availability: 'in-stock', size: [], color: 'brown', image: './lots/02.jpg' },
    { id: 29, name: 'Wrist Watch', price: 90.00, category: 'accessories', availability: 'in-stock', size: [], color: 'black', image: './lots/01.jpg' },
    { id: 30, name: 'Hair Clips (Set of 2)', price: 15.00, category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/02.jpg' }
];

let currentCategory = 'all';
let currentSort = 'featured';
let currentFilters = {
    availability: [],
    size: [],
    color: [],
    category: []
};

// Функции для работы с магазином
function renderProducts(prods = shopProducts) {
    if (!isShopPage()) return;
    
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };

    if (prods.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; width: 100%;">No products found matching your criteria.</p>';
        updateProductCount(0);
        return;
    }

    productGrid.innerHTML = prods.map(product => {
        const convertedPrice = (product.price * rate).toFixed(2);
        const isInWishlist = appState.wishlist[product.id];
        const availabilityClass = product.availability === 'out-of-stock' ? 'out-of-stock' : '';
        
        return `
            <div class="product-card ${availabilityClass}" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                    ${product.availability === 'out-of-stock' ? '<div class="out-of-stock-badge">Out of Stock</div>' : ''}
                    <div class="product-actions">
                        <button class="action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn cart-btn" data-id="${product.id}" ${product.availability === 'out-of-stock' ? 'disabled' : ''}>
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">${currencySymbols[appState.currency]}${convertedPrice}</div>
                </div>
            </div>
        `;
    }).join('');

    updateProductCount(prods.length);
    addProductEventListeners();
}

function updateProductCount(count) {
    if (!isShopPage()) return;
    
    const productCountElement = document.querySelector('.product-count');
    if (productCountElement) {
        productCountElement.textContent = `${count} PRODUCTS`;
    }
}

function sortProducts(prods, criteria) {
    switch (criteria) {
        case 'featured':
            return [...prods];
        case 'best-selling':
            return [...prods].sort((a, b) => a.id - b.id);
        case 'alpha-asc':
            return [...prods].sort((a, b) => a.name.localeCompare(b.name));
        case 'alpha-desc':
            return [...prods].sort((a, b) => b.name.localeCompare(a.name));
        case 'price-low-high':
            return [...prods].sort((a, b) => a.price - b.price);
        case 'price-high-low':
            return [...prods].sort((a, b) => b.price - a.price);
        case 'date-old-new':
            return [...prods].sort((a, b) => a.id - b.id);
        case 'date-new-old':
            return [...prods].sort((a, b) => b.id - a.id);
        default:
            return prods;
    }
}

function filterProductsByCategory(category) {
    if (category === 'all') {
        return shopProducts;
    }
    return shopProducts.filter(product => product.category === category);
}

function applyFilters() {
    let filtered = [...shopProducts];

    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(product => product.category === currentCategory);
    }

    // Availability filter
    if (currentFilters.availability.length > 0) {
        filtered = filtered.filter(product =>
            currentFilters.availability.includes(product.availability)
        );
    }

    // Size filter
    if (currentFilters.size.length > 0) {
        filtered = filtered.filter(product =>
            product.size && currentFilters.size.some(filterSize => 
                product.size.includes(filterSize)
            )
        );
    }

    // Color filter
    if (currentFilters.color.length > 0) {
        filtered = filtered.filter(product =>
            currentFilters.color.includes(product.color)
        );
    }

    return filtered;
}

function updateAndRender() {
    if (!isShopPage()) return;
    
    let filteredProducts = applyFilters();
    filteredProducts = sortProducts(filteredProducts, currentSort);
    renderProducts(filteredProducts);
    updateActiveCategory();
    updateActiveSort();
}

function updateActiveCategory() {
    if (!isShopPage()) return;
    
    document.querySelectorAll('.category-filter').forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateActiveSort() {
    if (!isShopPage()) return;
    
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.value = currentSort;
    }
}

function handleCategorySelection(category) {
    if (!isShopPage()) return;
    
    currentCategory = category;
    updateAndRender();
}

function handleSortChange(sortType) {
    if (!isShopPage()) return;
    
    currentSort = sortType;
    updateAndRender();
}

function addProductEventListeners() {
    if (!isShopPage()) return;
    
    // Обработчики для кнопок wishlist
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            toggleWishlist(productId);
            
            // Обновляем состояние кнопки
            btn.classList.toggle('active', !!appState.wishlist[productId]);
        });
    });

    // Обработчики для кнопок добавления в корзину
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            const product = shopProducts.find(p => p.id === productId);
            
            if (product && product.availability !== 'out-of-stock') {
                addToCart(productId);
            }
        });
    });

    // Обработчики для клика по карточке товара
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            // Здесь можно добавить переход на страницу товара
            console.log('View product:', productId);
        });
    });
}

// Инициализация страницы shop
function initShopPage() {
    if (!isShopPage()) return;
    
    // Обработчики для фильтров категорий
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            handleCategorySelection(category);
        });
    });

    // Обработчик для селекта сортировки
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            handleSortChange(e.target.value);
        });
    }

    // Обработчики для view options (Grid/List)
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const productGrid = document.getElementById('product-grid');

    if (gridViewBtn && listViewBtn && productGrid) {
        gridViewBtn.addEventListener('click', () => {
            productGrid.classList.remove('list-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            productGrid.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }

    // Sort Dropdown
    const sortButton = document.getElementById('sort-button');
    const sortDropdown = document.getElementById('sort-dropdown');

    if (sortButton && sortDropdown) {
        sortButton.addEventListener('click', () => {
            sortDropdown.classList.toggle('show');
        });

        sortDropdown.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const selectedSort = e.target.dataset.sort;
                currentSort = selectedSort;
                sortButton.innerHTML = `SORT BY <i class="fas fa-chevron-down"></i>`;
                sortDropdown.classList.remove('show');
                updateAndRender();
            }
        });
    }

    // Filter Sidebar
    const filterButton = document.getElementById('filter-button');
    const filterSidebar = document.getElementById('filter-sidebar');
    const closeFilterBtn = document.getElementById('close-filter');
    const filterGroupHeaders = document.querySelectorAll('.filter-group-header');
    const viewResultsButton = document.querySelector('.view-results-button');

    if (filterButton && filterSidebar) {
        filterButton.addEventListener('click', () => {
            filterSidebar.classList.add('open');
            document.querySelector('.overlay')?.classList.add('active');
        });
    }

    if (closeFilterBtn && filterSidebar) {
        closeFilterBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('open');
            document.querySelector('.overlay')?.classList.remove('active');
        });
    }

    // Toggle filter groups in sidebar
    if (filterGroupHeaders) {
        filterGroupHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const targetId = header.dataset.target;
                const targetOptions = document.getElementById(targetId);
                if (targetOptions) {
                    targetOptions.classList.toggle('show');
                    const icon = header.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-chevron-up');
                        icon.classList.toggle('fa-chevron-down');
                    }
                }
            });
        });
    }

    // Update currentFilters when checkboxes change in sidebar
    if (filterSidebar) {
        filterSidebar.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const filterType = e.target.name;
                const filterValue = e.target.value;

                if (e.target.checked) {
                    if (!currentFilters[filterType].includes(filterValue)) {
                        currentFilters[filterType].push(filterValue);
                    }
                } else {
                    currentFilters[filterType] = currentFilters[filterType].filter(item => item !== filterValue);
                }
            }
        });
    }

    // Apply filters and close sidebar when "VIEW RESULTS" is clicked
    if (viewResultsButton) {
        viewResultsButton.addEventListener('click', () => {
            updateAndRender();
            filterSidebar?.classList.remove('open');
            document.querySelector('.overlay')?.classList.remove('active');
        });
    }

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.matches('#sort-button') && !e.target.matches('#sort-button *')) {
            if (sortDropdown?.classList.contains('show')) {
                sortDropdown.classList.remove('show');
            }
        }
    });

    // Инициализация
    updateAndRender();
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли на странице элементы магазина
    if (isShopPage()) {
        initShopPage();
    }
});

// Обновление при изменении валюты
function updateShopPrices() {
    if (!isShopPage()) return;
    updateAndRender();
}

// Добавляем функцию в глобальную область видимости для доступа из главного JS
window.updateShopPrices = updateShopPrices;