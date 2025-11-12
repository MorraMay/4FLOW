// Константи
const CART_STORAGE_KEY = 'lavarice_cart';
const WISHLIST_STORAGE_KEY = 'lavarice_wishlist';
const CURRENCY_STORAGE_KEY = 'lavarice_currency';
const LANGUAGE_STORAGE_KEY = 'lavarice_language';

// Дані про товари
const products = {
    1: { id: 1, title: "TOP GISELE SHINE COLD", price: 48.95, image: "./lots/1.jpg" },
    2: { id: 2, title: "BOTTOM GISELE SHINE COLD", price: 47.95, image: "./lots/3.jpg" },
    3: { id: 3, title: "TOP GISELE SHINE GREEN", price: 48.95, image: "./lots/5.jpg" },
    4: { id: 4, title: "BOTTOM GISELE SHINE GREEN", price: 47.95, image: "./lots/7.jpg" },
    5: { id: 5, title: "TOP GISELE SHINE BLUE", price: 49.95, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" },
    6: { id: 6, title: "BOTTOM GISELE SHINE BLUE", price: 48.95, image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
    7: { id: 7, title: "TOP GISELE SHINE PINK", price: 49.95, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    8: { id: 8, title: "BOTTOM GISELE SHINE PINK", price: 48.95, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" }
};

// Курсы валют
const exchangeRates = {
    EUR: 1,
    USD: 1.08,
    UAH: 41.5,
    GBP: 0.85
};

// Переводы
const translations = {
    en: {
        "shop": "Shop",
        "all": "All",
        "tops": "Tops",
        "bottoms": "Bottoms",
        "accessories": "Accessories",
        "about": "About",
        "contacts": "Contacts",
        "NEW IN": "NEW IN",
        "VIEW ALL": "VIEW ALL",
        "ATHLEISURE": "ATHLEISURE",
        "Autumn Collection": "Autumn Collection",
        "ESSENTIALS": "ESSENTIALS",
        "NEW": "NEW",
        "SHOP ALL": "SHOP ALL",
        "TOPS": "TOPS",
        "Sets": "Sets",
        "Shop the look": "Shop the look",
        "SS 2025": "SS 2025",
        "ELUSIVE": "ELUSIVE",
        "view": "view",
        "Keep updated": "Keep updated",
        "Newsletter": "Newsletter",
        "Subscribe to our newsletter and receive emails about the latest arrivals, promotions and sales!": "Subscribe to our newsletter and receive emails about the latest arrivals, promotions and sales!",
        "By leaving my email, I confirm my acceptance of the terms of the": "By leaving my email, I confirm my acceptance of the terms of the",
        "user agreement and privacy policy": "user agreement and privacy policy",
        "SUBSCRIBE": "SUBSCRIBE",
        "HERE FOR YOU": "HERE FOR YOU",
        "Email us at": "Email us at",
        "or": "or",
        "DUTIES AND TAXES MAY VARY.": "DUTIES AND TAXES MAY VARY.",
        "Extra charges may apply outside of EU members.": "Extra charges may apply outside of EU members.",
        "BRAND": "BRAND",
        "About Us": "About Us",
        "Terms of Service": "Terms of Service",
        "CCPA": "CCPA",
        "SHOP": "SHOP",
        "Size Guide": "Size Guide",
        "Shipment & Delivery": "Shipment & Delivery",
        "Returns & Exchanges": "Returns & Exchanges",
        "Duties & Taxes": "Duties & Taxes",
        "LANGUAGE": "LANGUAGE",
        "Your Cart": "Your Cart",
        "Total:": "Total:",
        "Checkout": "Checkout",
        "Your cart is empty": "Your cart is empty",
        "Wishlist": "Wishlist",
        "Your wishlist is empty": "Your wishlist is empty",
        "Add to Cart": "Add to Cart",
        "Product added to cart": "Product added to cart",
        "Product removed from cart": "Product removed from cart",
        "Product added to wishlist": "Product added to wishlist",
        "Product removed from wishlist": "Product removed from wishlist",
        "VIEW PRODUCT": "VIEW PRODUCT"
    },
    uk: {
        "shop": "Магазин",
        "all": "Всі",
        "tops": "Топи",
        "bottoms": "Низ",
        "accessories": "Аксесуари",
        "about": "Про нас",
        "contacts": "Контакти",
        "NEW IN": "НОВИНКИ",
        "VIEW ALL": "ПЕРЕГЛЯНУТИ ВСЕ",
        "ATHLEISURE": "СПОРТИВНИЙ СТИЛЬ",
        "Autumn Collection": "Осіння колекція",
        "ESSENTIALS": "БАЗОВІ РЕЧІ",
        "NEW": "НОВИНКИ",
        "SHOP ALL": "ВСІ ТОВАРИ",
        "TOPS": "ТОПИ",
        "Sets": "Сети",
        "Shop the look": "Купити образ",
        "SS 2025": "Весна-Літо 2025",
        "ELUSIVE": "ELUSIVE",
        "view": "переглянути",
        "Keep updated": "Будьте в курсі",
        "Newsletter": "Розсилка",
        "Subscribe to our newsletter and receive emails about the latest arrivals, promotions and sales!": "Підпишіться на нашу розсилку та отримуйте email-и про останні надходження, акції та знижки!",
        "By leaving my email, I confirm my acceptance of the terms of the": "Залишаючи мій email, я підтверджую прийняття умов",
        "user agreement and privacy policy": "користувальницької угоди та політики конфіденційності",
        "SUBSCRIBE": "ПІДПИСАТИСЯ",
        "HERE FOR YOU": "МИ ПОРУЧ",
        "Email us at": "Напишіть нам на",
        "or": "або",
        "DUTIES AND TAXES MAY VARY.": "МИТНІ ЗБОРИ ТА ПОДАТКИ МОЖУТЬ ВІДРІЗНЯТИСЯ.",
        "Extra charges may apply outside of EU members.": "Додаткові збори можуть застосовуватися поза межами країн ЄС.",
        "BRAND": "БРЕНД",
        "About Us": "Про нас",
        "Terms of Service": "Умови використання",
        "CCPA": "CCPA",
        "SHOP": "МАГАЗИН",
        "Size Guide": "Таблиця розмірів",
        "Shipment & Delivery": "Доставка",
        "Returns & Exchanges": "Повернення та обмін",
        "Duties & Taxes": "Мито та податки",
        "LANGUAGE": "МОВА",
        "Your Cart": "Ваш кошик",
        "Total:": "Всього:",
        "Checkout": "Оформити замовлення",
        "Your cart is empty": "Ваш кошик порожній",
        "Wishlist": "Список бажань",
        "Your wishlist is empty": "Ваш список бажань порожній",
        "Add to Cart": "Додати в кошик",
        "Product added to cart": "Товар додано до кошика",
        "Product removed from cart": "Товар видалено з кошика",
        "Product added to wishlist": "Товар додано до списку бажань",
        "Product removed from wishlist": "Товар видалено зі списку бажань",
        "VIEW PRODUCT": "ПЕРЕГЛЯНУТИ ТОВАР"
    }
};

// Глобальное состояние приложения
const appState = {
    cart: {},
    wishlist: {},
    currentSlide: 0,
    currentProductIndex: 0,
    currency: 'EUR',
    language: 'en',
    isScrolling: false
};

// Утилиты
const utils = {
    debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },

    $(selector) {
        return document.querySelector(selector);
    },

    $$(selector) {
        return document.querySelectorAll(selector);
    },

    showNotification(message, duration = 3000) {
        // Удаляем существующие уведомления
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    }
};

// Функции для работы с localStorage
function loadFromLocalStorage() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
        const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY);
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        
        if (savedCart) appState.cart = JSON.parse(savedCart);
        if (savedWishlist) appState.wishlist = JSON.parse(savedWishlist);
        if (savedCurrency) appState.currency = savedCurrency;
        if (savedLanguage) appState.language = savedLanguage;
    } catch (e) {
        console.warn('Ошибка загрузки из localStorage');
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(appState.cart));
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(appState.wishlist));
        localStorage.setItem(CURRENCY_STORAGE_KEY, appState.currency);
        localStorage.setItem(LANGUAGE_STORAGE_KEY, appState.language);
    } catch (e) {
        console.warn('Ошибка сохранения в localStorage');
    }
}

// Функции корзины
function updateHeaderCounts() {
    const cartCount = utils.$('.cart-count');
    const wishlistCount = utils.$('.wishlist-count');
    
    if (cartCount) {
        const totalItems = Object.values(appState.cart).reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    if (wishlistCount) {
        wishlistCount.textContent = Object.keys(appState.wishlist).length;
    }
}

function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    if (appState.cart[productId]) {
        appState.cart[productId].quantity += 1;
    } else {
        appState.cart[productId] = { 
            ...product, 
            quantity: 1,
            addedAt: Date.now()
        };
    }
    
    updateHeaderCounts();
    saveToLocalStorage();
    
    const message = translations[appState.language]?.['Product added to cart'] || 'Product added to cart';
    utils.showNotification(message);
    
    // Обновляем корзину если она открыта
    if (utils.$('.cart-sidebar')?.classList.contains('active')) {
        renderCartItems();
    }
}

function removeFromCart(productId) {
    if (appState.cart[productId]) {
        delete appState.cart[productId];
        updateHeaderCounts();
        saveToLocalStorage();
        
        const message = translations[appState.language]?.['Product removed from cart'] || 'Product removed from cart';
        utils.showNotification(message);
        
        renderCartItems();
    }
}

function updateCartItemQuantity(productId, change) {
    if (appState.cart[productId]) {
        const newQuantity = appState.cart[productId].quantity + change;
        
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            appState.cart[productId].quantity = newQuantity;
            updateHeaderCounts();
            saveToLocalStorage();
            renderCartItems();
        }
    }
}

function renderCartItems() {
    const cartItemsContainer = utils.$('.cart-items');
    const totalAmount = utils.$('.total-amount');
    
    if (!cartItemsContainer) return;
    
    const cartItems = Object.values(appState.cart);
    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };
    
    if (cartItems.length === 0) {
        const emptyText = translations[appState.language]?.['Your cart is empty'] || 'Your cart is empty';
        cartItemsContainer.innerHTML = `<div class="empty-cart">${emptyText}</div>`;
        if (totalAmount) totalAmount.textContent = `${currencySymbols[appState.currency]}0.00`;
        return;
    }
    
    let total = 0;
    cartItemsContainer.innerHTML = cartItems.map(item => {
        const convertedPrice = (item.price * rate).toFixed(2);
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <div class="cart-item-price">${currencySymbols[appState.currency]}${convertedPrice}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus-btn" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
    }).join('');
    
    if (totalAmount) {
        const convertedTotal = (total * rate).toFixed(2);
        totalAmount.textContent = `${currencySymbols[appState.currency]}${convertedTotal}`;
    }
}

// Функции избранного
function toggleWishlist(productId) {
    const product = products[productId];
    if (!product) return;

    if (appState.wishlist[productId]) {
        delete appState.wishlist[productId];
        const message = translations[appState.language]?.['Product removed from wishlist'] || 'Product removed from wishlist';
        utils.showNotification(message);
    } else {
        appState.wishlist[productId] = { ...product, addedAt: Date.now() };
        const message = translations[appState.language]?.['Product added to wishlist'] || 'Product added to wishlist';
        utils.showNotification(message);
    }
    
    updateHeaderCounts();
    saveToLocalStorage();
    
    // Обновляем кнопку
    const wishlistBtn = utils.$(`.wishlist-btn[data-id="${productId}"]`);
    if (wishlistBtn) {
        wishlistBtn.classList.toggle('active', !!appState.wishlist[productId]);
    }
    
    // Обновляем избранное если оно открыто
    if (utils.$('.wishlist-sidebar')?.classList.contains('active')) {
        renderWishlistItems();
    }
}

function renderWishlistItems() {
    const wishlistItemsContainer = utils.$('.wishlist-items');
    if (!wishlistItemsContainer) return;
    
    const wishlistItems = Object.values(appState.wishlist);
    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };
    
    if (wishlistItems.length === 0) {
        const emptyText = translations[appState.language]?.['Your wishlist is empty'] || 'Your wishlist is empty';
        wishlistItemsContainer.innerHTML = `<div class="empty-wishlist">${emptyText}</div>`;
        return;
    }
    
    wishlistItemsContainer.innerHTML = wishlistItems.map(item => {
        const convertedPrice = (item.price * rate).toFixed(2);
        const addToCartText = translations[appState.language]?.['Add to Cart'] || 'Add to Cart';
        
        return `
            <div class="wishlist-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="wishlist-item-image">
                <div class="wishlist-item-details">
                    <h3 class="wishlist-item-title">${item.title}</h3>
                    <div class="wishlist-item-price">${currencySymbols[appState.currency]}${convertedPrice}</div>
                    <button class="move-to-cart" data-id="${item.id}">${addToCartText}</button>
                </div>
                <div class="remove-wishlist" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `;
    }).join('');
}

// Функции валюты и языка
function updateCurrencyDisplay() {
    const currentCurrencyElement = utils.$('.current-currency');
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };
    
    if (currentCurrencyElement) {
        currentCurrencyElement.textContent = `${appState.currency} ${currencySymbols[appState.currency]}`;
    }
    
    const footerCurrency = utils.$('.footer .currency');
    if (footerCurrency) {
        footerCurrency.textContent = `${appState.currency} ${currencySymbols[appState.currency]}`;
    }
    
    // Обновляем отображение в мобильном меню
    const mobileCurrentCurrency = utils.$('.mobile-current-currency');
    if (mobileCurrentCurrency) {
        mobileCurrentCurrency.textContent = `${appState.currency} ${currencySymbols[appState.currency]}`;
    }
}

function updateAllPrices() {
    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };
    
    // Обновляем цены в продуктах
    const priceElements = utils.$$('.product-price, .product-price1');
    priceElements.forEach(element => {
        const originalPrice = element.getAttribute('data-price-eur') || 
                            parseFloat(element.textContent.replace(/[^\d.,]/g, '').replace(',', '.'));
        const convertedPrice = (originalPrice * rate).toFixed(2);
        element.textContent = `${currencySymbols[appState.currency]}${convertedPrice}`;
        
        if (!element.hasAttribute('data-price-eur')) {
            element.setAttribute('data-price-eur', originalPrice);
        }
    });
    
    // Обновляем корзину и избранное
    if (utils.$('.cart-sidebar')?.classList.contains('active')) {
        renderCartItems();
    }
    if (utils.$('.wishlist-sidebar')?.classList.contains('active')) {
        renderWishlistItems();
    }
}

function changeCurrency(newCurrency) {
    if (appState.currency === newCurrency) return;
    
    appState.currency = newCurrency;
    saveToLocalStorage();
    updateCurrencyDisplay();
    updateAllPrices();
}

function translatePage() {
    const currentLang = appState.language;
    const currentTranslations = translations[currentLang];
    
    if (!currentTranslations) return;
    
    const translatableElements = utils.$$('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
    
    // Обновляем плейсхолдеры
    const searchInput = utils.$('.search-input');
    if (searchInput) {
        searchInput.placeholder = currentLang === 'uk' ? 'Пошук товарів...' : 'Search products...';
    }
    
    const newsletterInput = utils.$('.newsletter-form-email');
    if (newsletterInput) {
        newsletterInput.placeholder = currentLang === 'uk' ? 'e-mail' : 'e-mail';
    }
    
    const mobileSearchInput = utils.$('.mobile-search-input');
    if (mobileSearchInput) {
        mobileSearchInput.placeholder = currentLang === 'uk' ? 'Пошук товарів...' : 'Search products...';
    }
}

function changeLanguage(newLanguage) {
    if (appState.language === newLanguage) return;
    
    appState.language = newLanguage;
    saveToLocalStorage();
    updateLanguageDisplay();
    translatePage();
}

function updateLanguageDisplay() {
    const languageOptions = utils.$$('.language-option');
    
    languageOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === appState.language) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Слайдеры
function initMainSlider() {
    const slides = utils.$$('.slide');
    const dots = utils.$$('.dot');
    const slider = utils.$('.hero-slider');
    
    if (!slides.length || !slider) return;

    let slideInterval;

    function showSlide(index) {
        if (index >= slides.length) appState.currentSlide = 0;
        else if (index < 0) appState.currentSlide = slides.length - 1;
        else appState.currentSlide = index;

        slider.classList.add('changing');

        requestAnimationFrame(() => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === appState.currentSlide);
                if (dots[i]) dots[i].classList.toggle('active', i === appState.currentSlide);
            });
            
            setTimeout(() => {
                slider.classList.remove('changing');
            }, 100);
        });
    }

    function nextSlide() {
        showSlide(appState.currentSlide + 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    startSlideShow();

    // Клик по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideShow();
        });
    });

    // Свайпы для мобильных
    if (utils.isTouchDevice()) {
        let startX = 0;
        let isSwiping = false;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
            clearInterval(slideInterval);
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    showSlide(appState.currentSlide + 1);
                } else {
                    showSlide(appState.currentSlide - 1);
                }
            }
            
            isSwiping = false;
            startSlideShow();
        }, { passive: true });
    }
}

function initProductSlider() {
    const productsContainer = utils.$('.products-container');
    const productCards = utils.$$('.product-card');
    const prevBtn = utils.$('.prev-btn');
    const nextBtn = utils.$('.next-btn');
    
    if (!productsContainer || productCards.length === 0) return;
    
    function updateProductSlider() {
        const cardWidth = productCards[0].offsetWidth + 30;
        productsContainer.style.transform = `translate3d(-${appState.currentProductIndex * cardWidth}px, 0, 0)`;
    }

    function slide(direction) {
        const productsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
        
        if (direction === 'next' && appState.currentProductIndex < productCards.length - productsPerView) {
            appState.currentProductIndex++;
        } else if (direction === 'prev' && appState.currentProductIndex > 0) {
            appState.currentProductIndex--;
        }
        
        updateProductSlider();
    }

    prevBtn?.addEventListener('click', () => slide('prev'));
    nextBtn?.addEventListener('click', () => slide('next'));

    window.addEventListener('resize', utils.debounce(updateProductSlider, 250));
}

function initSliderChoice() {
    const sliderWrapper = utils.$('.slider-wrapper1');
    const slides = utils.$$('.slide1');
    if (!sliderWrapper || !slides.length) return;

    let currentIndex = 0;
    const slideCount = slides.length;

    // Product data for hotspots
    const allProducts = {
        "101": {
            image: "./lots/02.jpg",
            name: "TOP WITH RAISED SEAMS SPORT",
            color: "WHITE",
            price: "85.95"
        },
        "102": {
            image: "./lots/03.jpg",
            name: "HIGH-WAISTED LEGGINGS",
            color: "BLACK",
            price: "99.50"
        },
        "201": {
            image: "./lots/05.jpg",
            name: "ATHLETIC BRA TOP",
            color: "BLACK",
            price: "75.00"
        },
        "202": {
            image: "./lots/06.jpg",
            name: "SPORT LEGGINGS",
            color: "BLACK",
            price: "89.50"
        },
        "301": {
            image: "./lots/08.jpg",
            name: "HIGH-WAISTED LEGGINGS",
            color: "GREY",
            price: "99.50"
        },
        "302": {
            image: "./lots/09.jpg",
            name: "SPORT TOP",
            color: "GREY",
            price: "79.50"
        }
    };

    // Create dots
    const sliderDotsContainer = utils.$('.slider-dots1');
    if (sliderDotsContainer) {
        sliderDotsContainer.innerHTML = '';
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = `dot1 ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            sliderDotsContainer.appendChild(dot);
        }
    }

    const dots = utils.$$('.dot1');

    function updateSliderPosition() {
        sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateSliderPosition();
        updateDots();
    }

    // Store initial product info
    slides.forEach((slide) => {
        const productInfoArea = slide.querySelector('.product-info-area1');
        if (productInfoArea) {
            productInfoArea.dataset.primaryImage = productInfoArea.querySelector('.product-info-image1').src;
            productInfoArea.dataset.primaryName = productInfoArea.querySelector('.product-name1').textContent;
            productInfoArea.dataset.primaryColor = productInfoArea.querySelector('.product-color1').textContent;
            productInfoArea.dataset.primaryPrice = productInfoArea.querySelector('.product-price1').textContent;
        }
    });

    // Hotspot functionality
    slides.forEach(slide => {
        const hotspots = slide.querySelectorAll('.hotspot1');
        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', () => {
                const productId = hotspot.dataset.productId;
                const product = allProducts[productId];

                if (product) {
                    const productInfoArea = slide.querySelector('.product-info-area1');
                    if (productInfoArea) {
                        productInfoArea.querySelector('.product-info-image1').src = product.image;
                        productInfoArea.querySelector('.product-name1').textContent = product.name;
                        productInfoArea.querySelector('.product-color1').textContent = product.color;
                        
                        // Обновляем цену с учетом валюты
                        const rate = exchangeRates[appState.currency];
                        const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };
                        const convertedPrice = (parseFloat(product.price) * rate).toFixed(2);
                        productInfoArea.querySelector('.product-price1').textContent = 
                            `${currencySymbols[appState.currency]}${convertedPrice}`;
                    }
                }
            });
        });
    });

    // Initial setup
    updateSliderPosition();
    updateDots();

 
}

// Header state
function initHeaderState() {
    const header = utils.$('header');
    if (!header) return;

    function updateHeaderState() {
        const scrolled = window.scrollY > 30 || window.innerWidth < 750;
        
        if (scrolled) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', utils.debounce(updateHeaderState, 10));
    window.addEventListener('resize', utils.debounce(updateHeaderState, 250));
    
    updateHeaderState();
}

// Инициализация всех компонентов
function initCartAndWishlist() {
    // Один раз вешаем обработчики на корзину и избранное
    const cartItemsContainer = utils.$('.cart-items');
    const wishlistItemsContainer = utils.$('.wishlist-items');
    
    // Обработчики для корзины
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', function(e) {
            const target = e.target;
            
            if (target.closest('.minus-btn')) {
                const productId = target.closest('.minus-btn').getAttribute('data-id');
                updateCartItemQuantity(productId, -1);
                return;
            }
            
            if (target.closest('.plus-btn')) {
                const productId = target.closest('.plus-btn').getAttribute('data-id');
                updateCartItemQuantity(productId, 1);
                return;
            }
            
            if (target.closest('.remove-item')) {
                const productId = target.closest('.remove-item').getAttribute('data-id');
                removeFromCart(productId);
                return;
            }
        });
    }
    
    // Обработчики для избранного
    if (wishlistItemsContainer) {
        wishlistItemsContainer.addEventListener('click', function(e) {
            const target = e.target;
            
            if (target.closest('.move-to-cart')) {
                const productId = target.closest('.move-to-cart').getAttribute('data-id');
                addToCart(productId);
                return;
            }
            
            if (target.closest('.remove-wishlist')) {
                const productId = target.closest('.remove-wishlist').getAttribute('data-id');
                toggleWishlist(productId);
                return;
            }
        });
    }
    
    // Делегирование событий для открытия/закрытия и кнопок на карточках
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Открытие корзины
        if (target.closest('.cart-icon')) {
            utils.$('.cart-sidebar').classList.add('active');
            utils.$('.overlay').classList.add('active');
            renderCartItems();
            return;
        }

        // Открытие избранного
        if (target.closest('.wishlist-icon')) {
            utils.$('.wishlist-sidebar').classList.add('active');
            utils.$('.overlay').classList.add('active');
            renderWishlistItems();
            return;
        }

        // Закрытие сайдбаров
        if (target.closest('.close-cart') || target.closest('.close-wishlist') || target === utils.$('.overlay')) {
            utils.$('.cart-sidebar').classList.remove('active');
            utils.$('.wishlist-sidebar').classList.remove('active');
            utils.$('.overlay').classList.remove('active');
        }

        // Кнопки добавления в корзину с карточек товаров
        if (target.closest('.cart-btn')) {
            const productId = target.closest('.cart-btn').getAttribute('data-id');
            addToCart(productId);
            return;
        }

        // Кнопки избранного на карточках товаров
        if (target.closest('.wishlist-btn')) {
            const productId = target.closest('.wishlist-btn').getAttribute('data-id');
            toggleWishlist(productId);
            return;
        }
    });
}

function initCurrencyDropdown() {
    const currencyDropdown = utils.$('.currency-dropdown');
    const currencyOptions = utils.$$('.currency-options div');
    
    if (!currencyDropdown) return;
    
    currencyOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const newCurrency = option.getAttribute('data-currency');
            changeCurrency(newCurrency);
        });
    });
    
    document.addEventListener('click', () => {
        currencyDropdown.classList.remove('active');
    });
    
    currencyDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        currencyDropdown.classList.toggle('active');
    });
}

function initLanguageSelector() {
    const languageOptions = utils.$$('.language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLanguage = option.getAttribute('data-lang');
            changeLanguage(newLanguage);
        });
    });
}

function initMobileMenu() {
    const mobileMenuBtn = utils.$('.mobile-menu-btn');
    const mobileMenu = utils.$('.mobile-menu');
    const mobileMenuClose = utils.$('.mobile-menu-close');
    const overlay = utils.$('.overlay');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Обработчик для выпадающего меню в мобильном меню
    document.querySelectorAll('.mobile-has-dropdown > a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentNode;
            parent.classList.toggle('active');
        });
    });

    // Обработчик для выбора валюты в мобильном меню
    const mobileCurrencyDropdown = utils.$('.mobile-currency-dropdown');
    const mobileCurrencyOptions = utils.$$('.mobile-currency-options div');
    
    if (mobileCurrencyDropdown) {
        mobileCurrencyDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileCurrencyDropdown.classList.toggle('active');
        });
        
        mobileCurrencyOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const newCurrency = option.getAttribute('data-currency');
                changeCurrency(newCurrency);
                mobileCurrencyDropdown.classList.remove('active');
            });
        });
        
        // Закрытие выпадающего списка при клике вне его
        document.addEventListener('click', () => {
            mobileCurrencyDropdown.classList.remove('active');
        });
    }
}

// Функция для подсветки совпадений в тексте
function highlightMatches(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function initSearch() {
    const searchBtn = utils.$('.search-btn');
    const searchOverlay = utils.$('.search-overlay');
    const searchClose = utils.$('.search-close');
    const searchInput = utils.$('.search-input');
    const mobileSearchInput = utils.$('.mobile-search-input');

    if (!searchBtn || !searchOverlay) return;

    // Функция для открытия поиска
    function openSearch() {
        searchOverlay.classList.add('active');
        searchInput?.focus();
        document.body.style.overflow = 'hidden';
    }

    // Функция для закрытия поиска
    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        // Очищаем результаты при закрытии
        clearSearchResults();
        if (searchInput) searchInput.value = '';
        if (mobileSearchInput) mobileSearchInput.value = '';
    }

    // Обработчики для десктопного поиска
    searchBtn.addEventListener('click', openSearch);
    searchClose?.addEventListener('click', closeSearch);

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });

    // Обработчик для мобильного поиска
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('focus', openSearch);
        
        // Обработка ввода для мобильного поиска
        mobileSearchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                clearSearchResults();
            }
        });
    }

    // Обработка ввода для поиска - теперь работает с одной буквой
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                clearSearchResults();
            }
        });
    }

    // Закрытие поиска при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });
}

function performSearch(query) {
    // Ищем товары, которые содержат запрос в любом месте названия
    const results = Object.values(products).filter(product => {
        const productTitle = product.title.toLowerCase();
        const searchQuery = query.toLowerCase();
        return productTitle.includes(searchQuery);
    });
    
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const searchResultsContainer = utils.$('.search-results');
    if (!searchResultsContainer) return;

    if (results.length === 0) {
        const noResultsText = appState.language === 'uk' 
            ? `Товари за запитом "${query}" не знайдено` 
            : `No products found for "${query}"`;
        searchResultsContainer.innerHTML = `<div class="no-results">${noResultsText}</div>`;
        return;
    }

    const rate = exchangeRates[appState.currency];
    const currencySymbols = { 'EUR': '€', 'USD': '$', 'UAH': '₴', 'GBP': '£' };

    searchResultsContainer.innerHTML = results.map(product => {
        const convertedPrice = (product.price * rate).toFixed(2);
        
        // Подсветка найденного текста в названии товара
        const productTitle = highlightMatches(product.title, query);
        
        return `
            <div class="search-result-item" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
                <div class="search-result-info">
                    <h4>${productTitle}</h4>
                    <div class="price">${currencySymbols[appState.currency]}${convertedPrice}</div>
                </div>
            </div>
        `;
    }).join('');

    // Добавляем обработчики клика на результаты поиска
    searchResultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.getAttribute('data-id');
            // Здесь можно добавить переход на страницу товара
            console.log('Selected product:', productId);
            closeSearch();
        });
    });
}

function clearSearchResults() {
    const searchResultsContainer = utils.$('.search-results');
    if (searchResultsContainer) {
        searchResultsContainer.innerHTML = '';
    }
}

function initNewsletterAnimation() {
    const newsletterBlock = utils.$('.newsletter');

    function checkScroll() {
        if (!newsletterBlock) return;
        
        const windowHeight = window.innerHeight;
        const elementTop = newsletterBlock.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            newsletterBlock.classList.add('animate');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
}

// Главная функция инициализации
function init() {
    // Загрузка данных
    loadFromLocalStorage();
    
    // Инициализация компонентов
    initCartAndWishlist();
    initCurrencyDropdown();
    initLanguageSelector();
    initMobileMenu();
    initSearch();
    initHeaderState();
    initMainSlider();
    initProductSlider();
    initSliderChoice();
    initNewsletterAnimation();
    
    // Обновление интерфейса
    updateHeaderCounts();
    updateCurrencyDisplay();
    updateLanguageDisplay();
    translatePage();
    updateAllPrices();
    
    // Обновление состояния кнопок избранного
    utils.$$('.wishlist-btn').forEach(btn => {
        const productId = btn.getAttribute('data-id');
        if (appState.wishlist[productId]) {
            btn.classList.add('active');
        }
    });
}

// Запуск при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    // Скрытие loading screen
    const loadingOverlay = document.getElementById('loadingOverlay');
    const hideLoadingScreen = () => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
            loadingOverlay.addEventListener('transitionend', () => {
                loadingOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, { once: true });
        }
    };
    setTimeout(hideLoadingScreen, 1100);

    // Инициализация основного приложения
    init();
});

// Всплывающее окно и кнопка "Наверх"
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popup-overlay');
    if (!popupOverlay) return;

    const popupContent = popupOverlay.querySelector('.popup-content');
    const closeButton = popupOverlay.querySelector('.popup-close-button');
    const noThanksLink = popupOverlay.querySelector('.popup-no-thanks');
    const popupForm = popupOverlay.querySelector('.popup-form');
    const emailInput = popupOverlay.querySelector('.popup-email-input');

    function showPopup() {
        popupOverlay.classList.add('popup-show');
        localStorage.setItem('popupSeen', 'true');
    }

    function hidePopup() {
        popupOverlay.classList.remove('popup-show');
    }

    if (!localStorage.getItem('popupSeen') || localStorage.getItem('popupPromoReceived') !== 'true') {
        setTimeout(showPopup, 3500);
    }

    closeButton?.addEventListener('click', hidePopup);
    noThanksLink?.addEventListener('click', (e) => {
        e.preventDefault();
        hidePopup();
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            hidePopup();
        }
    });

    popupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const userEmail = emailInput.value;

        console.log(`Email submitted: ${userEmail}`);
        
        const promoCode = 'SAVE5NOW';

        popupContent.innerHTML = `
            <span class="popup-close-button">&times;</span>
            <h2 class="popup-success-message">SUCCESS! CHECK YOUR EMAIL!</h2>
            <p class="popup-text">A unique 5% off promo code has been sent to your inbox.</p>
            <div class="popup-promo-code">${promoCode}</div>
            <a href="#" class="popup-continue-shopping">Continue Shopping</a>
        `;

        const newCloseButton = popupContent.querySelector('.popup-close-button');
        if (newCloseButton) {
            newCloseButton.addEventListener('click', hidePopup);
        }
        const newContinueShoppingLink = popupContent.querySelector('.popup-continue-shopping');
        if (newContinueShoppingLink) {
            newContinueShoppingLink.addEventListener('click', (event) => {
                event.preventDefault();
                hidePopup();
            });
        }

        localStorage.setItem('popupPromoReceived', 'true');
    });

    // Кнопка "Наверх"
    const scrollToTopButton = document.getElementById('popup-scroll-to-top');
    const scrollThreshold = 1000;

    function toggleScrollToTopButton() {
        if (window.scrollY > scrollThreshold) {
            scrollToTopButton.classList.add('popup-show');
        } else {
            scrollToTopButton.classList.remove('popup-show');
        }
    }

    window.addEventListener('scroll', toggleScrollToTopButton);
    scrollToTopButton?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    toggleScrollToTopButton();
});