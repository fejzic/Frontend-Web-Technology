var listaZaPredmete = [];

$(document).ready(function () {//ovdje pocinje funkcija zadataka 3
    $("#hide").click(function () {
        $(".wrapper").hide();
    });
    $("#hide1").click(function () {
        $(".wrapper1").hide();
    });

    $("#show2").click(function () {
        $(".wrapper, .wrapper1").show();
    });

    //1 zadatak
    $(".prof-img, .ass-img").on('mouseenter', function (e) {
        console.log(e);
        if (e.target.width != 247)
            $(e.target).css({ "width": "247px" });
        
    });
    $(".prof-img, .ass-img").on('mouseleave',function(e){

        console.log(e);
        $(e.target).css({ "width": "108px" });
    });
    //zadatak 4
    $(".tabela tr td:last-child").on('mouseenter', function(e){

        var listOfRows = $(".tabela tr");
        for(var i = 0;i<listOfRows.length;i++)
        {
            if(listOfRows[i].innerText.includes(e.target.innerText))//
            {
                $(listOfRows[i]).css({"backgroundColor": "yellow"});
                listaZaPredmete.push(listOfRows[i]);
            }
        }
    });

    
    $(".tabela tr td:last-child").on('mouseleave', function(e){
        for(var i =0;i<listaZaPredmete.length;i++)
        {
            $(listaZaPredmete[i]).css({"backgroundColor":"inherit"});//vraca defoult vrijednost  backgroundcolor
        }
        listaZaPredmete = [];
    });


    //2. zadatak sortiranje
    $("#alphBnt").on('click', function(){
        var list = $(".wrapper, .wrapper1");
        console.log(list)

        for(var i = 0;i < list.length-1;i++)
        {
            for(var k = i;k < list.length;k++)
            {
                if(list[i].getElementsByClassName("ime")[0].innerText.
                localeCompare(list[k].getElementsByClassName("ime")[0].innerText) == 1)
                {
                    console.log(list[i].getElementsByClassName("ime")[0].innerText);
                    console.log(list[k].getElementsByClassName("ime")[0].innerText)
                   
                    var temp = list[i].innerHTML;
                    list[i].innerHTML = list[k].innerHTML;
                    list[k].innerHTML = temp;
                }
            }
        }
    })
});






