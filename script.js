const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');


btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');

    if(btn.innerHTML === 'Menu') {
        btn.innerHTML = 'Close';
    } else {
        btn.innerHTML = 'Menu';
    }
});

// スクロールでアニメーション実行
$(function() {
    $(window).on('load scroll', function() {
        let scrollPosition = $(window).scrollTop();
        let windowHeight = $(window).height();

        $('.animation-box').each(function() {
            let elemPosition = $(this).offset().top;
            
            if(elemPosition < scrollPosition + windowHeight) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});
