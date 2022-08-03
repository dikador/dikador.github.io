$.fn.circleMenu = function (options) {
    let iconCentral = $(this).children("span");
    let flagClick = false;
    let iconCircle = $(this).children("li");
    let iconLength = iconCircle.length;
    let angle = (Math.PI / iconLength) + (iconLength / 9);
    let angleIncrement = (Math.PI * 165) / 180 / iconLength;
    let {itemWidth, itemHeight} = options;

    iconCentral.on("click", function () {
        this.classList.toggle('active-menu')
        if (!flagClick) {
            angleAux = angle;
            radius = options.radius;
            flagClick = true;
            itemWidth = options.itemWidth;
            itemHeight = options.itemHeight;
        } else {
            radius = 0;
            itemWidth = 0;
            itemHeight = 0;
            flagClick = false;
        }
        iconCircle.each(function (i, el) {
            $(el).css(`transition-delay`, (i/10) + 's')
                left = radius * Math.cos(angleAux);
                bottom = radius * Math.sin(angleAux);

                $(this).css({
                    'left': left,
                    'bottom': bottom,
                    'width': itemWidth,
                    'heigth': itemHeight,
                });
                angleAux += angleIncrement;
        })
    })
}


$('#circle-menu').circleMenu({
    radius: 85,
    itemWidth: 35,
    itemHeight: 35
});