// サムネイル
const swiperThumbnail = new Swiper(".swiper-thumbnail", {
    spaceBetween: 10, // 余白
    slidesPerView: 4, // サムネイル数
    watchSlidesProgress: true, //スライダーの動きにスライドを追従させる
});
// スライダー
const slider = new Swiper(".slider", {
    autoplay: true,
    effect: "fade",
    loop: true,
    thumbs: {
        swiper: swiperThumbnail //連動スライダー（swiperThumbnailを指定する）
    }
});

// リンク押下でHMを閉じる
// checkboxを取得
const navInput = document.getElementById('menu-btn-check')
// ハンバーガーメニュー内のリンクタグを全部取得
const hamburger = document.querySelectorAll('.nav__list li a')
// 配列にする
const hamburgerA = Array.from(hamburger)
// forEachで回す
hamburgerA.forEach( function(element) {
  // ハンバーガーメニュー内のリンクタグをクリックしたら
    element.addEventListener('click',function(){
        // ハンバーガーメニューのcheckedを外す
        navInput.checked = false
    })
})

//クラス名が「scroll-in」の要素を取得
const objects = document.querySelectorAll('.scroll-in');
//スクロール感知で実行
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('displayed');//スクロール感知で「displayed」のクラス名を付与
            observer.unobserve(entry.target); //監視の終了
        }
    });
}
// オプション
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}
// IntersectionObserverインスタンス化
const io = new IntersectionObserver(cb, options);
// 監視を開始
objects.forEach(object => {
    io.observe(object);
});
