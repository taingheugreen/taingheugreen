const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header-content-product h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header-content-product p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header-image-content-product ", {
    duration: 1000,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".product__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".product__card", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll(".product__colors div");
    const productSection = document.querySelector(".product");
    const productImage = document.querySelector(".product__image img");
  
    colorOptions.forEach((color) => {
      color.addEventListener("click", function () {
        const selectedColor = this.getAttribute("data-color");
        const selectedImage = this.getAttribute("data-image");
  
        // Đổi ảnh sản phẩm
        if (selectedImage) {
          productImage.style.opacity = "0"; // Làm mờ ảnh trước khi đổi

        setTimeout(() => {
          productImage.src = selectedImage; // Đổi ảnh
          productImage.style.opacity = "1"; // Hiện lại ảnh từ từ
        }, 500); // Đợi 200ms để tránh giật ảnh
      }
 
  
        // Hiệu ứng chọn màu
        colorOptions.forEach((c) => c.innerHTML = ""); // Xóa dấu check ở tất cả
        this.innerHTML = '<i class="ri-check-line"></i>'; // Thêm dấu check vào màu được chọn
      });
    });
  });