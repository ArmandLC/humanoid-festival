$(document).ready(function() {
        
    var count = 0;
    var list_type = new Array();
    var list_obj = new Array();

    $('#og-grid li').each(function(){
        list_type[count] = $(this).attr('class');
        list_obj[count] = $(this);
        count++;
    });

    $('#portfolio-filter a').each(function(){
        $(this).click(function(){
            $('#portfolio-filter a').removeClass('active');
            $(this).addClass('active');
            var type = $(this).attr('rel');

            $('#og-grid li').remove();

            var count_elem = 0;
            var output = '';

            if($(this).hasClass("reset")) {
               $(list_type).each(function(){
                   //$('#og-grid').append('<li class="' + this + '">' + list_obj[count_elem][0].innerHTML + '</li>').fadeOut(7000);
                   $('<li class="' + this + '">' + list_obj[count_elem][0].innerHTML + '</li>').appendTo('#og-grid').hide().fadeIn(500);
                   count_elem++;
               });
           } else {
               $(list_type).each(function(){
                   if(this == type) {
                       //$('#og-grid').append('<li class="' + this + '">' + list_obj[count_elem][0].innerHTML + '</li>').fadeOut(7000);
                       $('<li class="' + this + '">' + list_obj[count_elem][0].innerHTML + '</li>').appendTo('#og-grid').hide().fadeIn(500);
                   }
                   count_elem++;
               });
           };
            new_items = $('#og-grid').children('li');
            Grid.addItems(new_items);

        });
    });
});