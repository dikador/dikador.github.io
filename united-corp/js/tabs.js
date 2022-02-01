(function ($) {
    $(function () {

        $('ul.tabs__caption').each(function (i) {
            var storage = localStorage.getItem('tab' + i);
            if (storage) {
                $(this).find('li').removeClass('active').eq(storage).addClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
            }
        });

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
            localStorage.removeItem('tab' + ulIndex);
            localStorage.setItem('tab' + ulIndex, $(this).index());
        });

    });
})(jQuery);