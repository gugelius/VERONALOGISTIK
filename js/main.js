$('document').ready(function(){
    LoadUslugi();
    Change1();
    Change2();
    //ShowMore();
});

function LoadUslugi(){
    //uploading offerings
    $.getJSON('description.json', function (data) {
        //console.log(data);
        var out ='';
        for(var key in data){
            out+='<div class ="single-uslugi" data-art="'+key+'">';
            out+='<h3>'+data[key]["name"]+'</h3>';
            out+='<p>Описание: '+data[key]["description"]+'</p>';
            out+='<div hidden class ="hidden'+key+'">'+data[key]["hiddentext"]+'</div>';
            //out+='<button class ="show_text" data-art="'+key+'">Подробнее</button>';
            out+='<img src ="'+data[key].image+'">';
            out+='</div>';
        }
        $('#uslugi').html(out);
        $('div.single-uslugi').on('mouseover',Change1);
        $('div.single-uslugi').on('mouseout',Change2);
        //$('button.show_text').on('click',ShowMore);
    });
}

function Change1() {
    $(this).css('height','350px');
    if($(this).attr("data-art")==11111){
        $("div.hidden11111").show();
    }
    if($(this).attr("data-art")==11112){
        $("div.hidden11112").show();
    }
    if($(this).attr("data-art")==11113){
        $("div.hidden11113").show();
    }
}

function Change2() {
    $(this).css('height','');
    if($(this).attr("data-art")==11111){
        $("div.hidden11111").hide();
    }
    if($(this).attr("data-art")==11112){
        $("div.hidden11112").hide();
    }
    if($(this).attr("data-art")==11113){
        $("div.hidden11113").hide();
    }
}

/*function ShowMore() {
    if($(this).prev().is(':visible')) {
        $(this).text('Подробнее');
        $(this).prev().hide('slow');
    } 
    else {
        $(this).text('Скрыть');
        $(this).prev().show('slow');
    }
}*/


