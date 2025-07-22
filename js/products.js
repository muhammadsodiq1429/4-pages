const mainEl = document.querySelector(".products.main");
const wrapperEL = document.createElement("div");
wrapperEL.className = "wrapper container";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      const productEl = document.createElement("div");
      productEl.className = "product-card";
      productEl.innerHTML = `
        <img class="product-card__image" src="${product.thumbnail}" alt="${
        product.title
      }" />
        <div class="product-card__info">
          <h2>${product.title}</h2>
          <p class="desc">${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Discount:</strong> ${product.discountPercentage}%</p>
          <p><strong>Rating:</strong> ${product.rating} ⭐</p>
          <p><strong>Status:</strong> ${product.availabilityStatus}</p>
          <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
          <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
          <p><strong>Minimum Order:</strong> ${product.minimumOrderQuantity}</p>
          <div class="qr-code">
            <img src="${product.meta.qrCode}" width="80" alt="QR Code" />
          </div>
          <div class="reviews">
            <h4>Reviews:</h4>
            <ul>
              ${product.reviews
                .map(
                  (review) =>
                    `<li>“${review.comment}” - <i>${review.reviewerName}</i> (${review.rating}⭐)</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>`;
      wrapperEL.appendChild(productEl);
    });
    mainEl.appendChild(wrapperEL);
  });
