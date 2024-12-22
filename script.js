window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerText = header.querySelectorAll('.nav_links li a'); // Chọn tất cả phần tử <li> trong header
    const scrollY = window.scrollY; // Lấy khoảng cách cuộn

    const opacity = Math.min(scrollY / 380, 1); // Giới hạn opacity từ 0 đến 1

    if (scrollY > 0) {
        // Đổi màu nền dần
        header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;

        // Chuyển màu chữ từ trắng (#ffffff) sang đen
        const r = Math.round(255 - (255 - 0) * opacity); // Chuyển từ 255 (trắng) sang 3
        const g = Math.round(255 - (255 - 0) * opacity); // Chuyển từ 255 (trắng) sang 242
        const b = Math.round(255 - (255 - 0) * opacity); // Chuyển từ 255 (trắng) sang 166

        headerText.forEach((element) => {
            element.style.color = `rgb(${r}, ${g}, ${b})`; // Gán màu RGB cho chữ
        });
    } else {
        // Reset trạng thái khi cuộn lên đầu
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        headerText.forEach((element) => {
            element.style.color = 'rgb(255, 255, 255)'; // Màu chữ trở về trắng
        });
    }
});
