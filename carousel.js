function generateProductCarousel() {
    const carouselContainer = document.getElementById("product-carousel");
    const numberOfProductsToShow = 7; // Adjust the number of products to show in the carousel

    // Generate an array of randomly selected products
    const randomProducts = [];
    while (randomProducts.length < numberOfProductsToShow) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!randomProducts.some(product => product.name === randomProduct.name)) {
            randomProducts.push(randomProduct);
        }
    }

    // Clear the carousel container
    carouselContainer.innerHTML = '';

    // Create carousel item elements for each product
    randomProducts.forEach((product) => {
        // Create a div element for the carousel item
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        // Create an image element for the product
        const image = document.createElement("img");
        image.src = product.imageSrc;
        image.alt = product.name; // Set the alt attribute
        carouselItem.appendChild(image);

        // Create a heading element for the product name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = product.name;
        carouselItem.appendChild(nameHeading);

        // Add a click event listener to the carousel item
        carouselItem.addEventListener("click", () => {
            // Open the product's individual page in a new tab
            window.open(product.url, "_blank");
        });

        // Append the carousel item to the container
        carouselContainer.appendChild(carouselItem);
    });
}


class Carousel {
    constructor(container, products) {
        this.container = container;
        this.products = products;
        this.currentProductIndex = 0;
        this.showProduct();
    }

    showProduct() {
        const currentProduct = this.products[this.currentProductIndex];
        this.container.innerHTML = `<img src="${currentProduct.imageSrc}" alt="${currentProduct.name}">
                                   <h3>${currentProduct.name}</h3>`;
    }

    nextProduct() {
        this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
        this.showProduct();
    }

    previousProduct() {
        this.currentProductIndex = (this.currentProductIndex - 1 + this.products.length) % this.products.length;
        this.showProduct();
    }
}

// Find the carousel container element
const carouselContainer = document.getElementById("product-carousel");

// Initialize the carousel
const carousel = new Carousel(carouselContainer, products);

// Generate the product carousel
generateProductCarousel();
