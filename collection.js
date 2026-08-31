var search=document.querySelector(".itag")
var container=document.querySelector(".products")
var elements=container.querySelectorAll(".productbox")

search.addEventListener("keyup",function()
{
    var entertext=event.target.value.toUpperCase()
    for(var i=0;i<elements.length;i=i+1)
    {
        var elementname=elements[i].querySelector("p").textContent
        if(elementname.toUpperCase().indexOf(entertext)<0){
            elements[i].style.display="none"
        }
        else{
             elements[i].style.display="block"
        }
    }
})