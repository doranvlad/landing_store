$(document).ready(function () {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt=""></button>',
    });
    $('ul.products__choice').on('click', 'li:not(.products__choice-item_active)', function () {
        $(this)
            .addClass('products__choice-item_active').siblings().removeClass('products__choice-item_active')
            .closest('div.container').find('div.catalog__con').removeClass('catalog__con_active').eq($(this).index()).addClass('catalog__con_active');
    });
    $('a.catalog__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
    })

    $('a.catalog__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
    })

});