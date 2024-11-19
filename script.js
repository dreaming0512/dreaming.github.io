const image = document.getElementById('image');

// 이미지가 눌렸을 때
image.addEventListener('mousedown', () => {
  image.src = 'image2.jpg';  // 두 번째 이미지로 변경
});

// 이미지에서 손을 뗐을 때
image.addEventListener('mouseup', () => {
  image.src = 'image1.jpg';  // 첫 번째 이미지로 변경
});

// 모바일 터치 이벤트 처리 (손가락을 눌렀을 때)
image.addEventListener('touchstart', () => {
  image.src = 'image2.jpg';  // 두 번째 이미지로 변경
});

// 모바일 터치 이벤트 처리 (손가락을 떼었을 때)
image.addEventListener('touchend', () => {
  image.src = 'image1.jpg';  // 첫 번째 이미지로 변경
});
