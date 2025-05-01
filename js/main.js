// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 다크 모드 토글 초기화
    initThemeToggle();
});

// 다크 모드 토글 기능
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // 사용자 선호 테마 확인 (시스템 설정 또는 이전 선택)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        }
    });
}
