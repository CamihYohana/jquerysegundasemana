$(function () {
    $('.card').click(function () {
        $(this).toggleClass('card--open');
    })
    $('.card__like').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).toggleClass('card__like--red');
    })
});