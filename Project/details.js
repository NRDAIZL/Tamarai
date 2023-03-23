var index=0;
    function slider(){
        var images=document.getElementsByClassName("myslides");
        for(var i=0;i<images.length;i++)
        images[i].style.display="none";
        if(index > images.length-1)
        index=0;
        images[index].style.display="block";
        index++;
        setTimeout(slider,2000);
    }
    setTimeout(slider,1000);