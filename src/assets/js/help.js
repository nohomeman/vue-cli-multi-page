$(function(){
  function Tab(num)
{
    var i;
    for(i=1;i<=5;i++)
    {
        if(i==num)
           document.getElementById("d"+i).style.display="block";
         else
           document.getElementById("d"+i).style.display="none";
        if(i==num)
           document.getElementById("L"+i).style.color="#d70937"
         else
           document.getElementById("L"+i).style.color="#666464";      
    }
}

})