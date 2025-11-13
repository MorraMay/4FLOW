// Проверяем, находимся ли мы на странице shop2
function isShopPage2() {
    return document.getElementById('product-grid2') !== null;
}

// Данные о товарах для страницы shop2
const shopProducts2 = [
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

let currentCategory2 = 'all';
let currentSort2 = 'featured';
let currentFilters2 = {
    availability: [],
    size: [],
    color: [],
    category: []
};

// УБИРАЕМ повторное объявление exchangeRates и appState
// Используем существующие переменные из глобальной области видимости

// Функции для работы с wishlist и cart (используем существующие или создаем новые)
function toggleWishlist2(productId) {
    console.log('Toggle wishlist2:', productId);
    // Используем существующий appState или создаем новый если не существует
    if (!window.appState) window.appState = { currency: 'EUR', wishlist: {} };
    
    if (window.appState.wishlist[productId]) {
        delete window.appState.wishlist[productId];
    } else {
        window.appState.wishlist[productId] = true;
    }
    renderProducts2();
}

function addToCart2(productId) {
    console.log('Add to cart2:', productId);
    alert('Product added to cart!');
}

// Основная функция рендеринга товаров
function renderProducts2(products = shopProducts2) {
    if (!isShopPage2()) return;
    
    const productGrid2 = document.getElementById('product-grid2');
    if (!productGrid2) return;

    // Используем существующий exchangeRates или создаем по умолчанию
    const exchangeRates = window.exchangeRates || { 'EUR': 1, 'USD': 1.1, 'UAH': 40, 'GBP': 0.85 };
    const appState = window.appState || { currency: 'EUR', wishlist: {} };
    
    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };

    if (products.length === 0) {
        productGrid2.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px;">No products found matching your criteria.</p>';
        updateProductCount2(0);
        return;
    }

    productGrid2.innerHTML = products.map(product => {
        const convertedPrice = (product.price * rate).toFixed(2);
        const isInWishlist = appState.wishlist[product.id];
        const availabilityClass = product.availability === 'out-of-stock' ? 'out-of-stock2' : '';
        
        return `
            <div class="product-card2 ${availabilityClass}" data-id="${product.id}">
                <div class="product-image2">
                    <img src="${product.image}" alt="${product.name}" class="main-image2">
                    ${product.availability === 'out-of-stock' ? '<div class="out-of-stock-badge2">Out of Stock</div>' : ''}
                    <div class="product-actions2">
                        <button class="action-btn2 wishlist-btn2 ${isInWishlist ? 'active2' : ''}" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn2 cart-btn2" data-id="${product.id}" ${product.availability === 'out-of-stock' ? 'disabled' : ''}>
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info2">
                    <h3 class="product-title2">${product.name}</h3>
                    <div class="product-price2">${currencySymbols[appState.currency]}${convertedPrice}</div>
                </div>
            </div>
        `;
    }).join('');

    updateProductCount2(products.length);
    addProductEventListeners2();
}

function updateProductCount2(count) {
    if (!isShopPage2()) return;
    
    const productCountElement2 = document.querySelector('.product-count2');
    if (productCountElement2) {
        productCountElement2.textContent = `${count} PRODUCTS`;
    }
}

function sortProducts2(products, criteria) {
    const sorted = [...products];
    switch (criteria) {
        case 'featured':
            return sorted;
        case 'best-selling':
            return sorted.sort((a, b) => a.id - b.id);
        case 'alpha-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'alpha-desc':
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-low-high':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high-low':
            return sorted.sort((a, b) => b.price - a.price);
        case 'date-old-new':
            return sorted.sort((a, b) => a.id - b.id);
        case 'date-new-old':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

function applyFilters2() {
    let filtered = [...shopProducts2];

    // Category filter
    if (currentCategory2 !== 'all') {
        filtered = filtered.filter(product => product.category === currentCategory2);
    }

    // Availability filter
    if (currentFilters2.availability.length > 0) {
        filtered = filtered.filter(product =>
            currentFilters2.availability.includes(product.availability)
        );
    }

    // Size filter
    if (currentFilters2.size.length > 0) {
        filtered = filtered.filter(product =>
            product.size && currentFilters2.size.some(filterSize => 
                product.size.includes(filterSize)
            )
        );
    }

    // Color filter
    if (currentFilters2.color.length > 0) {
        filtered = filtered.filter(product =>
            currentFilters2.color.includes(product.color)
        );
    }

    return filtered;
}

function updateAndRender2() {
    if (!isShopPage2()) return;
    
    let filteredProducts = applyFilters2();
    filteredProducts = sortProducts2(filteredProducts, currentSort2);
    renderProducts2(filteredProducts);
}

function handleSortChange2(sortType) {
    if (!isShopPage2()) return;
    
    currentSort2 = sortType;
    updateAndRender2();
}

function addProductEventListeners2() {
    if (!isShopPage2()) return;
    
    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn2').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            toggleWishlist2(productId);
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.cart-btn2').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            const product = shopProducts2.find(p => p.id === productId);
            
            if (product && product.availability !== 'out-of-stock') {
                addToCart2(productId);
            }
        });
    });

    // Product card clicks
    document.querySelectorAll('.product-card2').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            console.log('View product:', productId);
        });
    });
}

// Инициализация страницы shop2
function initShopPage2() {
    if (!isShopPage2()) return;
    
    console.log('Initializing shop page 2');

    // View options (Grid/List)
    const gridViewBtn2 = document.getElementById('grid-view2');
    const listViewBtn2 = document.getElementById('list-view2');
    const productGrid2 = document.getElementById('product-grid2');

    if (gridViewBtn2 && listViewBtn2 && productGrid2) {
        gridViewBtn2.addEventListener('click', () => {
            productGrid2.classList.remove('list-view2');
            gridViewBtn2.classList.add('active2');
            listViewBtn2.classList.remove('active2');
        });

        listViewBtn2.addEventListener('click', () => {
            productGrid2.classList.add('list-view2');
            listViewBtn2.classList.add('active2');
            gridViewBtn2.classList.remove('active2');
        });
    }

    // Sort Dropdown
    const sortButton2 = document.getElementById('sort-button2');
    const sortDropdown2 = document.getElementById('sort-dropdown2');

    if (sortButton2 && sortDropdown2) {
        sortButton2.addEventListener('click', (e) => {
            e.stopPropagation();
            sortDropdown2.classList.toggle('show2');
        });

        sortDropdown2.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const selectedSort = e.target.dataset.sort;
                handleSortChange2(selectedSort);
                sortButton2.innerHTML = `SORT BY <i class="fas fa-chevron-down"></i>`;
                sortDropdown2.classList.remove('show2');
            }
        });
    }

    // Filter Sidebar
    const filterButton2 = document.getElementById('filter-button2');
    const filterSidebar2 = document.getElementById('filter-sidebar2');
    const closeFilterBtn2 = document.getElementById('close-filter2');
    const filterGroupHeaders2 = document.querySelectorAll('.filter-group-header2');
    const viewResultsButton2 = document.querySelector('.view-results-button2');

    if (filterButton2 && filterSidebar2) {
        filterButton2.addEventListener('click', () => {
            filterSidebar2.classList.add('open2');
            // Create overlay if it doesn't exist
            let overlay2 = document.querySelector('.overlay2');
            if (!overlay2) {
                overlay2 = document.createElement('div');
                overlay2.className = 'overlay2';
                document.body.appendChild(overlay2);
                
                // Close sidebar when clicking overlay
                overlay2.addEventListener('click', () => {
                    filterSidebar2.classList.remove('open2');
                    overlay2.classList.remove('active2');
                });
            }
            overlay2.classList.add('active2');
        });
    }

    if (closeFilterBtn2 && filterSidebar2) {
        closeFilterBtn2.addEventListener('click', () => {
            filterSidebar2.classList.remove('open2');
            document.querySelector('.overlay2')?.classList.remove('active2');
        });
    }

    // Toggle filter groups
    filterGroupHeaders2.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const targetOptions = document.getElementById(targetId);
            if (targetOptions) {
                targetOptions.classList.toggle('show2');
                const icon = header.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-up');
                    icon.classList.toggle('fa-chevron-down');
                }
            }
        });
    });

    // Filter change handlers
    if (filterSidebar2) {
        filterSidebar2.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const filterType = e.target.name.replace('2', ''); // Убираем 2 из имени
                const filterValue = e.target.value;

                if (e.target.checked) {
                    if (!currentFilters2[filterType].includes(filterValue)) {
                        currentFilters2[filterType].push(filterValue);
                    }
                } else {
                    currentFilters2[filterType] = currentFilters2[filterType].filter(item => item !== filterValue);
                }
                
                // Special handling for category
                if (filterType === 'category') {
                    if (e.target.checked) {
                        currentCategory2 = filterValue;
                        // Uncheck other category checkboxes
                        document.querySelectorAll('#category2 input[type="checkbox"]').forEach(cb => {
                            if (cb !== e.target) cb.checked = false;
                        });
                    } else {
                        currentCategory2 = 'all';
                    }
                }
            }
        });
    }

    // Apply filters
    if (viewResultsButton2) {
        viewResultsButton2.addEventListener('click', () => {
            updateAndRender2();
            filterSidebar2.classList.remove('open2');
            document.querySelector('.overlay2')?.classList.remove('active2');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.matches('#sort-button2') && !e.target.closest('#sort-button2')) {
            sortDropdown2?.classList.remove('show2');
        }
    });

    // Initial render
    updateAndRender2();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (isShopPage2()) {
        initShopPage2();
    }
});

// Global function for currency updates
window.updateShopPrices2 = function() {
    if (!isShopPage2()) return;
    updateAndRender2();
};