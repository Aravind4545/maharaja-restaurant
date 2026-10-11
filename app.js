/**
 * Maharaja Restaurant - Interactive Frontend Controller
 * Powers the Digital Menu, Cart / Pre-order Wishlist, Ambiance Gallery Lightbox,
 * and Table Reservation system.
 */

// State Management
const state = {
  activeCategory: "biryani",
  activeDiet: "all",
  searchQuery: "",
  cart: {}, // { [itemId]: { item: Object, qty: Number } }
  activeGalleryCategory: "all",
  lightboxIndex: 0,
  galleryItems: []
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initCategoryTabs();
  initDietaryFilter();
  initMenuSearch();
  renderMenuItems();
  initGallery();
  initReservationForm();
  initCartDrawer();
  initMobileNav();
  setupInitialDates();
});

/* ===================================================================
   NAVBAR & SCROLL HANDLING
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

/* ===================================================================
   CATEGORY TABS & DIET FILTERS
   =================================================================== */
function initCategoryTabs() {
  const tabsList = document.getElementById("categoryTabsList");
  if (!tabsList) return;

  // Specific categories - "Full Royal Menu" removed for fast, clean browsing
  const categories = [
    { id: "biryani", name: "Biryani Boutique", icon: "fa-bowl-rice" },
    { id: "family", name: "Family Specials", icon: "fa-users" },
    { id: "tandoor", name: "Tandoori & Kebabs", icon: "fa-fire" },
    { id: "chicken", name: "Chicken Delicacies", icon: "fa-drumstick-bite" },
    { id: "mutton", name: "Mutton Delicacies", icon: "fa-wheat-awn" },
    { id: "veg-starters", name: "Veg Starters", icon: "fa-leaf" },
    { id: "veg-curries", name: "Veg Gravies", icon: "fa-pepper-hot" },
    { id: "rice", name: "Fried & Flavoured Rice", icon: "fa-seedling" },
    { id: "soups", name: "Warm Soups", icon: "fa-mug-hot" }
  ];

  tabsList.innerHTML = categories.map(cat => {
    const count = MENU_DATA.filter(item => item.category === cat.id).length;
    const isActive = cat.id === state.activeCategory;

    return `
      <li>
        <button class="category-tab-btn ${isActive ? 'active' : ''}" data-category="${cat.id}">
          <i class="fa-solid ${cat.icon}"></i>
          <span>${cat.name}</span>
          <span class="tab-count">${count}</span>
        </button>
      </li>
    `;
  }).join("");

  // Tab click listeners
  tabsList.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsList.querySelectorAll(".category-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeCategory = btn.dataset.category;
      renderMenuItems();
      
      // Auto center tab in view on mobile
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });
}

function initDietaryFilter() {
  const dietButtons = document.querySelectorAll(".diet-btn");
  dietButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dietButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeDiet = btn.dataset.diet;
      renderMenuItems();
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (state.searchQuery.length > 0) {
      clearBtn.style.display = "block";
    } else {
      clearBtn.style.display = "none";
    }
    renderMenuItems();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearBtn.style.display = "none";
    searchInput.focus();
    renderMenuItems();
  });
}

/* ===================================================================
   RENDER MENU ITEMS AS SIMPLE POINTS (NO BULKY DESCRIPTIONS)
   =================================================================== */
function renderMenuItems() {
  const grid = document.getElementById("menuGrid");
  const countSpan = document.getElementById("resultsCount");
  if (!grid) return;

  // Filter items - by selected category (or search query across all)
  const isSearching = state.searchQuery.length > 0;
  const filtered = MENU_DATA.filter(item => {
    const matchesCat = isSearching || item.category === state.activeCategory;

    let matchesDiet = true;
    if (state.activeDiet === "veg") matchesDiet = item.type === "veg";
    else if (state.activeDiet === "nonveg") matchesDiet = item.type === "nonveg";
    else if (state.activeDiet === "special") matchesDiet = item.badge !== null;

    let matchesSearch = true;
    if (isSearching) {
      const q = state.searchQuery;
      matchesSearch = item.name.toLowerCase().includes(q) ||
                      item.categoryName.toLowerCase().includes(q) ||
                      (item.badge && item.badge.toLowerCase().includes(q));
    }

    return matchesCat && matchesDiet && matchesSearch;
  });

  if (countSpan) {
    countSpan.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="menu-empty-state">
        <i class="fa-solid fa-utensils empty-icon"></i>
        <h3 class="font-royal" style="color: #ffffff; font-size: 1.2rem; margin-bottom: 6px;">No Dishes in this Selection</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 14px;">
          Try selecting another category or resetting your diet filters.
        </p>
        <button class="btn-royal btn-royal-secondary" onclick="resetMenuFilters()">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  // Render items as sleek, simple points with dots and prices
  grid.innerHTML = filtered.map(item => {
    const qty = state.cart[item.id] ? state.cart[item.id].qty : 0;
    const spiceIcon = getSpiceIndicator(item.spice);

    return `
      <div class="menu-point-row" data-id="${item.id}">
        <div class="point-left">
          <span class="diet-indicator ${item.type}"></span>
          <span class="point-bullet">•</span>
          <div class="point-text-wrap">
            <span class="point-name">${item.name}</span>
            <div class="point-tags">
              ${item.badge ? `<span class="point-badge">${item.badge}</span>` : ''}
              ${isSearching ? `<span class="point-cat-tag">${item.categoryName}</span>` : ''}
              ${spiceIcon ? `<span class="point-spice">${spiceIcon}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="point-dots-leader"></div>

        <div class="point-right">
          <span class="point-price">₹${item.price}/-</span>
          <button class="point-add-btn add-to-cart-btn" 
                  data-id="${item.id}" 
                  title="Add to Table Order"
                  style="${qty > 0 ? 'display: none;' : 'display: inline-flex;'}">
            <i class="fa-solid fa-plus"></i>
          </button>
          <div class="item-qty-control compact" 
               id="qty-ctrl-${item.id}" 
               style="${qty > 0 ? 'display: flex;' : 'display: none;'}">
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
            <span class="qty-val" id="qty-val-${item.id}">${qty}</span>
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach Add Button Listeners
  grid.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      updateItemQuantity(id, 1);
    });
  });
}

function getSpiceIndicator(spice) {
  switch (spice) {
    case "mild":
      return '<i class="fa-solid fa-leaf" style="color: #4ade80;" title="Mild"></i>';
    case "medium":
      return '<i class="fa-solid fa-pepper-hot" title="Medium Spiced"></i>';
    case "hot":
      return '<i class="fa-solid fa-pepper-hot" title="Spicy"></i>';
    case "fiery":
      return '<i class="fa-solid fa-fire-flame-curved" style="color: #ef4444;" title="Rayalaseema Fiery!"></i>';
    default:
      return '';
  }
}

function resetMenuFilters() {
  state.activeCategory = "biryani";
  state.activeDiet = "all";
  state.searchQuery = "";
  
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = "none";

  document.querySelectorAll(".category-tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.category === "biryani");
  });

  document.querySelectorAll(".diet-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.diet === "all");
  });

  renderMenuItems();
}

/* ===================================================================
   CART / PRE-ORDER WISHLIST MANAGEMENT
   =================================================================== */
function updateItemQuantity(itemId, delta) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  if (!state.cart[itemId]) {
    if (delta > 0) {
      state.cart[itemId] = { item, qty: delta };
    }
  } else {
    state.cart[itemId].qty += delta;
    if (state.cart[itemId].qty <= 0) {
      delete state.cart[itemId];
    }
  }

  // Update card UI locally
  const currentQty = state.cart[itemId] ? state.cart[itemId].qty : 0;
  const ctrl = document.getElementById(`qty-ctrl-${itemId}`);
  const valSpan = document.getElementById(`qty-val-${itemId}`);
  const addBtn = document.querySelector(`.add-to-cart-btn[data-id="${itemId}"]`);

  if (ctrl && addBtn && valSpan) {
    if (currentQty > 0) {
      ctrl.style.display = "flex";
      valSpan.textContent = currentQty;
      addBtn.style.display = "none";
    } else {
      ctrl.style.display = "none";
      addBtn.style.display = "inline-flex";
    }
  }

  updateCartBadges();
  renderCartDrawer();
  
  if (delta > 0) {
    showToast(`Added to Table Order`, `${item.name}`);
  }
}

function updateCartBadges() {
  const badges = document.querySelectorAll(".cart-count-badge");
  const totalCount = Object.values(state.cart).reduce((sum, entry) => sum + entry.qty, 0);

  badges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  });
}

function initCartDrawer() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  const toggleBtns = document.querySelectorAll(".cart-toggle-btn");
  const closeBtn = document.getElementById("cartCloseBtn");
  const whatsappBtn = document.getElementById("whatsappOrderBtn");

  const openDrawer = () => {
    overlay.classList.add("active");
    drawer.classList.add("active");
    renderCartDrawer();
  };

  const closeDrawer = () => {
    overlay.classList.remove("active");
    drawer.classList.remove("active");
  };

  toggleBtns.forEach(btn => btn.addEventListener("click", openDrawer));
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", sendWhatsAppOrder);
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const whatsappBtn = document.getElementById("whatsappOrderBtn");

  if (!container) return;

  const entries = Object.values(state.cart);

  if (entries.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-bowl-food" style="font-size: 3rem; color: var(--gold-border); margin-bottom: 16px;"></i>
        <h4 class="font-royal" style="color: #ffffff; margin-bottom: 8px;">Your Table Order is Empty</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 260px; margin: 0 auto 20px;">
          Explore our menu and add your favorite biryanis, kebabs, and curries to pre-order.
        </p>
        <button class="btn-royal btn-royal-secondary" style="font-size: 0.85rem; padding: 8px 18px;" onclick="document.getElementById('cartCloseBtn').click();">
          Browse Menu
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (totalEl) totalEl.textContent = "₹0";
    if (whatsappBtn) whatsappBtn.style.opacity = "0.5";
    return;
  }

  if (whatsappBtn) whatsappBtn.style.opacity = "1";

  let subtotal = 0;
  container.innerHTML = entries.map(({ item, qty }) => {
    const itemTotal = item.price * qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item-row">
        <div style="flex-grow: 1;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
            <span class="diet-indicator ${item.type}"></span>
            <div class="cart-item-name">${item.name}</div>
          </div>
          <div class="cart-item-price">₹${item.price} × ${qty} = ₹${itemTotal}</div>
        </div>
        <div class="item-qty-control" style="display: flex;">
          <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (totalEl) totalEl.textContent = `₹${subtotal}`;
}

function sendWhatsAppOrder() {
  const entries = Object.values(state.cart);
  if (entries.length === 0) {
    showToast("Cart is Empty", "Please add dishes before pre-ordering.");
    return;
  }

  let total = 0;
  let itemsList = "";

  entries.forEach(({ item, qty }, index) => {
    const itemCost = item.price * qty;
    total += itemCost;
    itemsList += `${index + 1}. ${item.name} (${item.type === 'veg' ? 'Veg' : 'Non-Veg'}) x ${qty} = ₹${itemCost}\n`;
  });

  const message = 
`👑 *MAHARAJA RESTAURANT - PRE-ORDER / DINE-IN REQUEST* 👑
--------------------------------------------------
Hello Maharaja Team, I would like to pre-order the following feast:

${itemsList}
--------------------------------------------------
*Total Estimated Bill:* ₹${total}/-
*Restaurant:* Maharaja Restaurant, Nandyala
*Requested via:* Website Digital Menu

Kindly confirm availability and preparation time. Thank you!`;

  const phone = "919491101447";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===================================================================
   AMBIANCE GALLERY & LIGHTBOX
   =================================================================== */
function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");

  if (!galleryGrid) return;

  state.galleryItems = GALLERY_DATA;
  renderGalleryGrid();

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeGalleryCategory = btn.dataset.gallery;
      renderGalleryGrid();
    });
  });

  initLightbox();
}

function renderGalleryGrid() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  const filtered = state.galleryItems.filter(item => {
    return state.activeGalleryCategory === "all" || item.category === state.activeGalleryCategory;
  });

  galleryGrid.innerHTML = filtered.map((item, index) => {
    return `
      <div class="gallery-card" onclick="openLightbox(${index})">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-zoom-icon">
          <i class="fa-solid fa-expand"></i>
        </div>
        <div class="gallery-overlay">
          <span class="gallery-category-pill">${item.categoryName}</span>
          <h4 class="gallery-card-title">${item.title}</h4>
          <p class="gallery-card-subtitle">${item.subtitle}</p>
        </div>
      </div>
    `;
  }).join("");
}

function initLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");

  if (!lightbox) return;

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

window.openLightbox = function(index) {
  const filtered = state.galleryItems.filter(item => {
    return state.activeGalleryCategory === "all" || item.category === state.activeGalleryCategory;
  });

  if (!filtered[index]) return;

  state.lightboxIndex = index;
  updateLightboxContent(filtered[index]);

  const modal = document.getElementById("lightboxModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(dir) {
  const filtered = state.galleryItems.filter(item => {
    return state.activeGalleryCategory === "all" || item.category === state.activeGalleryCategory;
  });

  state.lightboxIndex = (state.lightboxIndex + dir + filtered.length) % filtered.length;
  updateLightboxContent(filtered[state.lightboxIndex]);
}

function updateLightboxContent(item) {
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxCaption");

  if (img) img.src = item.image;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
}

/* ===================================================================
   TABLE RESERVATION FORM
   =================================================================== */
function setupInitialDates() {
  const dateInput = document.getElementById("resDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

function initReservationForm() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("resName").value.trim();
    const phone = document.getElementById("resPhone").value.trim();
    const guests = document.getElementById("resGuests").value;
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const seating = document.getElementById("resSeating").value;
    const notes = document.getElementById("resNotes").value.trim();

    if (!name || !phone || !date || !time) {
      showToast("Incomplete Details", "Please fill in all required fields.");
      return;
    }

    // Reservation summary
    const confirmationMsg = `Table confirmed for ${guests} on ${date} at ${time}. Seating: ${seating}.`;
    showToast("Royal Table Reserved!", confirmationMsg);

    // Optional WhatsApp Booking Notification
    const waText = 
`👑 *MAHARAJA RESTAURANT - TABLE RESERVATION* 👑
--------------------------------------------------
*Guest Name:* ${name}
*Contact:* ${phone}
*Party Size:* ${guests}
*Date:* ${date}
*Preferred Time:* ${time}
*Seating Preference:* ${seating}
${notes ? `*Special Occasion/Notes:* ${notes}\n` : ''}--------------------------------------------------
Kindly confirm our reservation. Thank you!`;

    const sendViaWA = confirm(`Thank you, ${name}!\n\nYour royal table reservation has been received.\n\nWould you like to send this confirmation to Maharaja Restaurant on WhatsApp as well?`);
    if (sendViaWA) {
      const waUrl = `https://wa.me/919491101447?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
    }

    form.reset();
    setupInitialDates();
  });
}

/* ===================================================================
   TOAST NOTIFICATION
   =================================================================== */
function showToast(title, message) {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    toast.className = "toast-notification";
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check toast-icon"></i>
      <div>
        <div class="toast-title" id="toastTitle"></div>
        <div class="toast-msg" id="toastMsg"></div>
      </div>
    `;
    document.body.appendChild(toast);
  }

  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastMsg").textContent = message;

  toast.classList.add("active");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 4000);
}

/* ===================================================================
   MOBILE NAVIGATION
   =================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("mobile-open");
    toggleBtn.innerHTML = isOpen 
      ? '<i class="fa-solid fa-xmark"></i>' 
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close when clicking nav links
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      if (navLinks.classList.contains("mobile-open")) {
        navLinks.classList.remove("mobile-open");
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }
  });
}
