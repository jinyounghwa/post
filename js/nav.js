document.addEventListener('DOMContentLoaded', function() {
    // 섹션 네비게이션 요소 선택
    const sectionNav = document.querySelector('.section-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    
    // 토글 버튼 클릭 이벤트
    navToggle.addEventListener('click', function() {
        sectionNav.classList.toggle('active');
    });
    
    // 네비게이션 아이템 클릭 이벤트
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 메뉴 닫기
            sectionNav.classList.remove('active');
            
            // 스크롤 애니메이션
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 부드러운 스크롤 효과
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 문서 클릭 시 메뉴 닫기
    document.addEventListener('click', function(event) {
        if (!sectionNav.contains(event.target)) {
            sectionNav.classList.remove('active');
        }
    });
    
    // 스크롤 이벤트에 따라 현재 섹션 표시
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // 모든 섹션 확인
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 현재 섹션에 해당하는 네비게이션 아이템 강조
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.style.fontWeight = 'bold';
                        item.style.color = 'var(--primary-color)';
                    } else {
                        item.style.fontWeight = 'normal';
                        item.style.color = '';
                    }
                });
            }
        });
    });
});
