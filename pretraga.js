var Pretraga = (function(){
    var predmeti;

    function pretragaPredmeta(nazivPredmeta){
        console.log("pretraga predmeta:function call");

        for(var i=0;i<listaEl.lenght;i++){
            listaEl[i].style.display="inherit";
        }

        if(nazivPredmeta==""){
            return;
        }

     

        for(var i=0; i<listaEl.length;i++){
            if(!listaEl.getElementsByTagName("td")[0].innerText.toUpperCase().includes(nazivPredmeta.toUpperCase())){
                listEl[i].style.display="none";
            }
        }
    }

    function postaviElemente(postavljeniPredmeti){
        predmet=postavljeniPredmeti;
        return predmeti;
    }

    return{
        pretragaPredmeta:pretragaPredmeta

    }


}());