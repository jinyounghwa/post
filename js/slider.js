document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 요소 선택
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    
    // 슬라이더 설정
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;
    
    // 슬라이드 표시 함수
    function showSlide(n) {
        // 현재 활성화된 슬라이드 비활성화
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // 새 슬라이드 활성화
        slides[n].classList.add('active');
        
        // 도트 활성화 상태 업데이트
        dots.forEach((dot, index) => {
            if (index === n) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // 다음 슬라이드로 이동
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    // 이전 슬라이드로 이동
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }
    
    // 이벤트 리스너 설정
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // 도트 클릭 이벤트 설정
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // 슬라이더에 마우스 오버 시 화살표 표시 효과
    const sliderContainer = document.querySelector('.slider-container');
    
    sliderContainer.addEventListener('mouseenter', () => {
        prevButton.style.opacity = '0.8';
        nextButton.style.opacity = '0.8';
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        prevButton.style.opacity = '0.3';
        nextButton.style.opacity = '0.3';
    });
    
    // 터치 이벤트 처리
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50; // 스와이프 감지 경계값
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // 왼쪽으로 스와이프: 다음 슬라이드
            nextSlide();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // 오른쪽으로 스와이프: 이전 슬라이드
            prevSlide();
        }
    }
    
    // 자동 슬라이드 함수
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // 초기 슬라이드 표시 및 자동 슬라이드 시작
    showSlide(currentSlide);
    startInterval();
});
