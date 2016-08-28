(function () {

    function resize_parallax(){
        var windowsh = window.innerHeight;
        
        if(window.innerHeight > window.innerWidth){
            windowsh = windowsh/3;
        };

        $('.parallax').css("height", windowsh);
        $('.layer').css("height", windowsh);
    };

    $(document).ready(function(){
        resize_parallax();
    });

    $(window).on('resize', function(){
        resize_parallax();
    });

    window.addEventListener('scroll', function (event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll('[data-type=\'parallax\']');
        for (i = 0, len = layers.length; i < len; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
        window.CP.exitedLoop(1);
    });
}.call(this));


