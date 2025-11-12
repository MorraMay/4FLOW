document.addEventListener('DOMContentLoaded', () => {
    // --- Product Data ---
    const products = [
        // TOPS (10 items)
        { id: 1, name: 'Basic Tee', price: '€35.00', category: 'tops', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'black', image: './lots/01.jpg' },
        { id: 2, name: 'Ribbed Tank Top', price: '€28.00', category: 'tops', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'white', image: './lots/02.jpg' },
        { id: 3, name: 'Long Sleeve Top', price: '€45.00', category: 'tops', availability: 'in-stock', size: ['m', 'l', 'xl'], color: 'beige', image: './lots/01.jpg' },
        { id: 4, name: 'Silk Cami', price: '€50.00', category: 'tops', availability: 'in-stock', size: ['s', 'm'], color: 'black', image: './lots/02.jpg' },
        { id: 5, name: 'Crop Sweater', price: '€60.00', category: 'tops', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'brown', image: './lots/01.jpg' },
        { id: 6, name: 'Cotton T-Shirt', price: '€30.00', category: 'tops', availability: 'in-stock', size: ['xs', 's', 'm', 'l'], color: 'white', image: './lots/02.jpg' },
        { id: 7, name: 'Off-Shoulder Blouse', price: '€55.00', category: 'tops', availability: 'in-stock', size: ['m', 'l'], color: 'black', image: './lots/01.jpg' },
        { id: 8, name: 'Knit Cardigan', price: '€70.00', category: 'tops', availability: 'out-of-stock', size: ['s', 'm'], color: 'beige', image: './lots/02.jpg' },
        { id: 9, name: 'Graphic Tee', price: '€40.00', category: 'tops', availability: 'in-stock', size: ['l', 'xl'], color: 'white', image: './lots/01.jpg' },
        { id: 10, name: 'High-Neck Top', price: '€48.00', category: 'tops', availability: 'in-stock', size: ['s', 'm'], color: 'brown', image: './lots/02.jpg' },

        // BOTTOMS (10 items)
        { id: 11, name: 'Wide Leg Pants', price: '€70.00', category: 'bottoms', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'black', image: './lots/01.jpg' },
        { id: 12, name: 'Linen Shorts', price: '€45.00', category: 'bottoms', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'beige', image: './lots/02.jpg' },
        { id: 13, name: 'Denim Skirt', price: '€55.00', category: 'bottoms', availability: 'in-stock', size: ['m', 'l'], color: 'brown', image: './lots/01.jpg' },
        { id: 14, name: 'Pleated Trousers', price: '€65.00', category: 'bottoms', availability: 'in-stock', size: ['s', 'm'], color: 'white', image: './lots/02.jpg' },
        { id: 15, name: 'Flowy Maxi Skirt', price: '€80.00', category: 'bottoms', availability: 'out-of-stock', size: ['m', 'l', 'xl'], color: 'black', image: './lots/01.jpg' },
        { id: 16, name: 'Sporty Leggings', price: '€40.00', category: 'bottoms', availability: 'in-stock', size: ['xs', 's', 'm'], color: 'brown', image: './lots/02.jpg' },
        { id: 17, name: 'Chino Pants', price: '€58.00', category: 'bottoms', availability: 'in-stock', size: ['l', 'xl'], color: 'beige', image: './lots/01.jpg' },
        { id: 18, name: 'Faux Leather Skirt', price: '€75.00', category: 'bottoms', availability: 'in-stock', size: ['s', 'm'], color: 'black', image: './lots/02.jpg' },
        { id: 19, name: 'Comfortable Joggers', price: '€50.00', category: 'bottoms', availability: 'in-stock', size: ['m', 'l'], color: 'white', image: './lots/01.jpg' },
        { id: 20, name: 'High-Waist Jeans', price: '€72.00', category: 'bottoms', availability: 'in-stock', size: ['s', 'm', 'l'], color: 'brown', image: './lots/02.jpg' },

        // ACCESSORIES (10 items)
        { id: 21, name: 'Minimalist Necklace', price: '€25.00', category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/01.jpg' },
        { id: 22, name: 'Leather Belt', price: '€40.00', category: 'accessories', availability: 'in-stock', size: [], color: 'black', image: './lots/02.jpg' },
        { id: 23, name: 'Silk Scarf', price: '€30.00', category: 'accessories', availability: 'in-stock', size: [], color: 'beige', image: './lots/01.jpg' },
        { id: 24, name: 'Small Hoop Earrings', price: '€20.00', category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/02.jpg' },
        { id: 25, name: 'Canvas Tote Bag', price: '€35.00', category: 'accessories', availability: 'in-stock', size: [], color: 'white', image: './lots/01.jpg' },
        { id: 26, name: 'Sun Hat', price: '€22.00', category: 'accessories', availability: 'out-of-stock', size: [], color: 'black', image: './lots/02.jpg' },
        { id: 27, name: 'Statement Ring', price: '€38.00', category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/01.jpg' },
        { id: 28, name: 'Gloves', price: '€28.00', category: 'accessories', availability: 'in-stock', size: [], color: 'brown', image: './lots/02.jpg' },
        { id: 29, name: 'Wrist Watch', price: '€90.00', category: 'accessories', availability: 'in-stock', size: [], color: 'black', image: './lots/01.jpg' },
        { id: 30, name: 'Hair Clips (Set of 2)', price: '€15.00', category: 'accessories', availability: 'in-stock', size: [], color: 'n/a', image: './lots/02.jpg' }
    ];

    let displayedProducts = [...products];
    let currentSort = 'featured';
    let currentFilters = {
        availability: [],
        size: [],
        color: [],
        category: []
    };

    // --- DOM Elements ---
    const productGrid = document.getElementById('product-grid');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const sortButton = document.getElementById('sort-button');
    const sortDropdown = document.getElementById('sort-dropdown');
    const filterButton = document.getElementById('filter-button');
    const filterSidebar = document.getElementById('filter-sidebar');
    const closeFilterBtn = document.getElementById('close-filter');
    const filterGroupHeaders = document.querySelectorAll('.filter-group-header');
    const viewResultsButton = document.querySelector('.view-results-button');
    const productCountElement = document.querySelector('.product-count');

    // Mobile menu elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const shopCategoryLinks = document.querySelectorAll('.dropdown-menu a, .mobile-dropdown-menu a');
    const categoryCheckboxes = document.querySelectorAll('#category input[type="checkbox"]');
    const overlay = document.querySelector('.overlay');

    // --- Functions ---

    function renderProducts(prods) {
        productGrid.innerHTML = '';
        if (prods.length === 0) {
            productGrid.innerHTML = '<p style="text-align: center; width: 100%;">No products found matching your criteria.</p>';
            updateProductCount(0);
            return;
        }
        prods.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
        updateProductCount(prods.length);
    }

    function updateProductCount(count) {
        productCountElement.textContent = `${count} PRODUCTS`;
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
                return [...prods].sort((a, b) => parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', '')));
            case 'price-high-low':
                return [...prods].sort((a, b) => parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', '')));
            case 'date-old-new':
                return [...prods].sort((a, b) => a.id - b.id);
            case 'date-new-old':
                return [...prods].sort((a, b) => b.id - a.id);
            default:
                return prods;
        }
    }

    function applyFilters() {
        let filtered = [...products];

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

        // Category filter
        if (currentFilters.category.length > 0) {
            filtered = filtered.filter(product =>
                currentFilters.category.includes(product.category)
            );
        }

        return filtered;
    }

    function updateAndRender() {
        let filteredProducts = applyFilters();
        displayedProducts = sortProducts(filteredProducts, currentSort);
        renderProducts(displayedProducts);
    }

    function handleCategorySelection(category) {
        // Clear all category checkboxes first
        categoryCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Clear current category filters
        currentFilters.category = [];

        if (category && category !== 'all') {
            // Find and check the corresponding checkbox
            const targetCheckbox = document.querySelector(`#category input[value="${category}"]`);
            if (targetCheckbox) {
                targetCheckbox.checked = true;
                currentFilters.category.push(category);
            }
        }

        updateAndRender();
    }

    // --- Mobile Menu Functionality ---
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Handle clicks on category links in both desktop and mobile menus
    shopCategoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-translate');
            
            handleCategorySelection(category);
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // --- Overlay functionality ---
    overlay.addEventListener('click', () => {
        // Close all sidebars and menus
        filterSidebar.classList.remove('open');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        // Also close cart and wishlist if they're open
        document.querySelector('.cart-sidebar')?.classList.remove('active');
        document.querySelector('.wishlist-sidebar')?.classList.remove('active');
    });

    // --- Initial Render ---
    updateAndRender();

    // --- Event Listeners for Main Page Controls ---

    // View options (Grid/List)
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

    // Sort Dropdown
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

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.matches('#sort-button') && !e.target.matches('#sort-button *')) {
            if (sortDropdown.classList.contains('show')) {
                sortDropdown.classList.remove('show');
            }
        }
    });

    // Filter Sidebar
    filterButton.addEventListener('click', () => {
        filterSidebar.classList.add('open');
        overlay.classList.add('active');
    });

    closeFilterBtn.addEventListener('click', () => {
        filterSidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Toggle filter groups in sidebar
    filterGroupHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const targetOptions = document.getElementById(targetId);
            targetOptions.classList.toggle('show');
            const icon = header.querySelector('i');
            icon.classList.toggle('fa-chevron-up');
            icon.classList.toggle('fa-chevron-down');
        });
    });

    // Update currentFilters when checkboxes change in sidebar
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

    // Apply filters and close sidebar when "VIEW RESULTS" is clicked
    viewResultsButton.addEventListener('click', () => {
        updateAndRender();
        filterSidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
});