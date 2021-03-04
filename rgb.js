$('.sliderR').on("change mousemove", function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', rgb(255, 0, 0)), '
                + 'color-stop(' + val + ', rgb(255, 255, 255))'
                + ')'
                );
});
$('.sliderG').on("change mousemove", function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', rgb(0, 255, 0)), '
                + 'color-stop(' + val + ', rgb(255, 255, 255)'
                + ')'
                );
});
$('.sliderB').on("change mousemove", function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', rgb(0, 0, 255)), '
                + 'color-stop(' + val + ', rgb(255, 255, 255))'
                + ')'
                );
});