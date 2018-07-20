$(function () {
    $('.card').click(function () {
        $(this).toggleClass('card--open');
    })
    $('.card__like').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).toggleClass('card__like--red');
    })
    $('.card__follow-btn').click(function (e) {
        event.stopPropagation();
        $(this).toggleClass('card__follow-btn--following');
    })
});