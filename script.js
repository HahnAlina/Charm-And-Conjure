// Example JavaScript for homepage banner image switching
const bannerImages = document.querySelectorAll('.banner-container img');
let currentImageIndex = 0;

function switchBannerImage() {
  // Hide current image
  bannerImages[currentImageIndex].style.opacity = 0;
  
  // Update current image index
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  
  // Show next image
  bannerImages[currentImageIndex].style.opacity = 1;
}

// Start image switching after 3 seconds (3000 milliseconds)
setInterval(switchBannerImage, 3000);







const products = [
  {
    name: "Mini Cauldron Keychain",
    imageSrc: "assets/product01.png",
    price: 4.99,
    url: 'product_01.html',
    category: "accessory",
  },
  {
    name: "Book of Shadows Grimoire",
    imageSrc: "assets/product02.png",
    price: 299.99,
    url: 'product_02.html',
    category: "book",
  },
  {
    name: "Midnight Whisk Broomstick",
    imageSrc: "assets/product03.png",
    price: 59.99,
    url: 'product_03.html',
    category: "broomstick",
  },
  {
    name: "Enchanting Blossom Broomstick",
    imageSrc: "assets/product04.png",
    price: 69.99,
    url: 'product_04.html',
    category: "broomstick",
  },
  {
    name: "Scarlet Ember Broomstick",
    imageSrc: "assets/product05.png",
    price: 64.99,
    url: 'product_05.html',
    category: "broomstick",
  },
  {
    name: "Rainbow Dreams Broomstick",
    imageSrc: "assets/product06.png",
    price: 79.99,
    url: 'product_06.html',
    category: "broomstick",
  },
  {
    name: "Earthy Enchantment Broomstick",
    imageSrc: "assets/product07.png",
    price: 67.99,
    url: 'product_07.html',
    category: "broomstick",
  },
  {
    name: "Plush Purple Dream Broomstick",
    imageSrc: "assets/product08.png",
    price: 74.99,
    url: 'product_08.html',
    category: "broomstick",
  },
  {
    name: "Basic Brown Bristle Broomstick",
    imageSrc: "assets/product09.png",
    price: 49.99,
    url: 'product_09.html',
    category: "broomstick",
  },
  {
    name: "Ribbon Cascade Broomstick",
    imageSrc: "assets/product10.png",
    price: 57.99,
    url: 'product_10.html',
    category: "broomstick",
  },
  {
    name: "Brush of Elemental Colors",
    imageSrc: "assets/product11.png",
    price: 69.99,
    url: 'product_11.html',
    category: "broomstick",
  },
  {
    name: "Obsidian Mist Cauldron",
    imageSrc: "assets/product12.png",
    price: 39.99,
    url: 'product_12.html',
    category: "cauldron",
  },
  {
    name: "Shadowfire Cauldron",
    imageSrc: "assets/product13.png",
    price: 49.99,
    url: 'product_13.html',
    category: "cauldron",
  },
  {
    name: "Copper Ember Cauldron",
    imageSrc: "assets/product14.png",
    price: 59.99,
    url: 'product_14.html',
    category: "cauldron",
  },
  {
    name: "Twilight Enigma Cauldron",
    imageSrc: "assets/product15.png",
    price: 44.99,
    url: 'product_15.html',
    category: "cauldron",
  },
  {
    name: "Runekeeper Cauldron Set",
    imageSrc: "assets/product16.png",
    price: 79.99,
    url: 'product_16.html',
    category: "cauldron",
  },
  {
    name: "Elemental Essence Cauldron Set",
    imageSrc: "assets/product17.png",
    price: 99.99,
    url: 'product_17.html',
    category: "cauldron",
  },
  {
    name: "Celestial Star Cauldron",
    imageSrc: "assets/product18.png",
    price: 79.99,
    url: 'product_18.html',
    category: "cauldron",
  },
  {
    name: "Enchanted Moon Cauldron",
    imageSrc: "assets/product19.png",
    price: 69.99,
    url: 'product_19.html',
    category: "cauldron",
  },
  {
    name: "Enchanted Herbal Grimoire",
    imageSrc: "assets/product20.png",
    price: 89.99,
    url: 'product_20.html',
    category: "book",
  },
  {
    name: "The Witch's Handbook: Embrace Your Craft",
    imageSrc: "assets/product21.png",
    price: 29.99,
    url: 'product_21.html',
    category: "book",
  },
  {
    name: "Spells of the Enchantress: A Grimoire of Mystical Incantations",
    imageSrc: "assets/product22.png",
    price: 49.99,
    url: 'product_22.html',
    category: "book",
  },
  {
    name: "Potions and Elixirs: Recipes for Magical Brews",
    imageSrc: "assets/product23.png",
    price: 39.99,
    url: 'product_23.html',
    category: "book",
  },
  {
    name: "The Essential Potion Guide: Brews for Everyday Magic",
    imageSrc: "assets/product24.png",
    price: 49.99,
    url: 'product_24.html',
    category: "book",
  },
  {
    name: "The Herbalist's Guide: A Comprehensive Handbook on Magickal Herbs",
    imageSrc: "assets/product25.png",
    price: 49.99,
    url: 'product_25.html',
    category: "book",
  },
  {
    name: "Celestial Glow Crystal Ball",
    imageSrc: "assets/product26.png",
    price: 79.99,
    url: 'product_26.html',
    category: "divination",
  },
  {
    name: "Elemental Harmony Crystal Ball",
    imageSrc: "assets/product27.png",
    price: 129.99,
    url: 'product_27.html',
    category: "divination",
  },
  {
    name: "Mystical Vision Crystal Ball",
    imageSrc: "assets/product28.png",
    price: 59.99,
    url: 'product_28.html',
    category: "divination",
  },
  {
    name: "Enchanted Amethyst Crystal Ball",
    imageSrc: "assets/product29.png",
    price: 99.99,
    url: 'product_29.html',
    category: "divination",
  },
  {
    name: "Kaleidoscope Crystal Ball",
    imageSrc: "assets/product30.png",
    price: 99.99,
    url: 'product_30.html',
    category: "divination",
  },
  {
    name: "Spiral Shadow Crystal Ball",
    imageSrc: "assets/product31.png",
    price: 99.99,
    url: 'product_31.html',
    category: "divination",
  },
  {
    name: "Botanical Enchantment Crystal Ball",
    imageSrc: "assets/product32.png",
    price: 69.99,
    url: 'product_32.html',
    category: "divination",
  },
  {
    name: "Arcane Secrets Tarot Card Set",
    imageSrc: "assets/product33.png",
    price: 29.99,
    url: 'product_33.html',
    category: "divination",
  },
  {
    name: "Lunar Dreams Tarot Card Set",
    imageSrc: "assets/product34.png",
    price: 34.99,
    url: 'product_34.html',
    category: "divination",
  },
  {
    name: "Elemental Wisdom Tarot Card Set",
    imageSrc: "assets/product35.png",
    price: 39.99,
    url: 'product_35.html',
    category: "divination",
  },
  {
    name: "Mystic Moonlight Tarot Card Set",
    imageSrc: "assets/product36.png",
    price: 24.99,
    url: 'product_36.html',
    category: "divination",
  },
  {
    name: "Enigmatic Enchanter's Hat",
    imageSrc: "assets/product37.png",
    price: 39.99,
    url: 'product_37.html',
    category: "accessory",
  },
  {
    name: "Mystical Fedora Hat",
    imageSrc: "assets/product38.png",
    price: 29.99,
    url: 'product_38.html',
    category: "accessory",
  },
  {
    name: "Shadowcaster's Wide Brim Hat",
    imageSrc: "assets/product39.png",
    price: 34.99,
    url: 'product_39.html',
    category: "accessory",
  },
  {
    name: "Moonstone Pendant Necklace",
    imageSrc: "assets/product40.png",
    price: 49.99,
    url: 'product_40.html',
    category: "accessory",
  },
  {
    name: "Mystical Cone Pendulum",
    imageSrc: "assets/product41.png",
    price: 19.99,
    url: 'product_41.html',
    category: "accessory",
  },
  {
    name: "Mystical Crystal Pendulum",
    imageSrc: "assets/product42.png",
    price: 24.99,
    url: 'product_42.html',
    category: "accessory",
  },
  {
    name: "Enchanted Woodland Wand",
    imageSrc: "assets/product43.png",
    price: 39.99,
    url: 'product_43.html',
    category: "accessory",
  },
  {
    name: "Arcane Celestial Wand",
    imageSrc: "assets/product44.png",
    price: 44.99,
    url: 'product_44.html',
    category: "accessory",
  },
  {
    name: "Enchanted Familiar's Collar",
    imageSrc: "assets/product45.png",
    price: 29.99,
    url: 'product_45.html',
    category: "accessory",
  },
  {
    name: "Shadowheart Crystal Familiar's Collar",
    imageSrc: "assets/product46.png",
    price: 49.99,
    url: 'product_46.html',
    category: "accessory",
  },
  {
    name: "Runebound Woodland Familiar's Collar",
    imageSrc: "assets/product47.png",
    price: 34.99,
    url: 'product_47.html',
    category: "accessory",
  },
];













const productPreviewsContainer = document.getElementById("product-previews");

function renderProductPreviews(filteredProducts) {
  // Clear the existing product previews
  productPreviewsContainer.innerHTML = "";

  filteredProducts.forEach((product) => {
    // Create a div element for the product preview
    const previewDiv = document.createElement("div");
    previewDiv.classList.add("product-preview");

    // Create an anchor element for the product's individual page
    const link = document.createElement("a");
    link.href = product.url; // Set the URL of the product's individual page
    link.target = "_blank"; // Open the link in a new tab

    // Create an image element for the product
    const image = document.createElement("img");
    image.src = product.imageSrc;

    // Append the image to the link
    link.appendChild(image);

    // Create a heading element for the product name
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = product.name;
    link.appendChild(nameHeading);

    // Append the link to the product preview
    previewDiv.appendChild(link);

    // Append the product preview to the container
    productPreviewsContainer.appendChild(previewDiv);
  });
}









function searchProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.querySelector(".category-buttons button.selected").dataset.category;

  // Filter products based on search input and selected category
  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();

    // Check if product name matches the search input and category matches the selected category
    return (
      (productName.includes(searchInput) || searchInput === "") &&
      (productCategory === selectedCategory || selectedCategory === "")
    );
  });


  // Display the filtered products
  renderProductPreviews(filteredProducts);
}

// Initial rendering of all products
renderProductPreviews(products);



function filterProductsByCategory(category) {
  const categoryButtons = document.querySelectorAll(".category-buttons button");

  // Remove the "selected" class from all buttons
  categoryButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  // Add the "selected" class to the clicked button
  event.target.classList.add("selected");

  // Trigger the search functionality
  searchProducts();
}
