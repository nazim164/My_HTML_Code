function add()
{
    n1=Number(document.getElementById("fnumber").value);
     n2=Number(document.getElementById("snumber").value);
    document.getElementById("result").innerHTML=n1+n2;
}

function Subs()
{
    n1=document.getElementById("fnumber").value;
    n2=document.getElementById("snumber").value;
    document.getElementById("result").innerHTML=n1-n2;
}
function multi()
{
    n1=document.getElementById("fnumber").value;
    n2=document.getElementById("snumber").value;
    document.getElementById("result").innerHTML=n1*n2;
}
function divide()
{
    n1=document.getElementById("fnumber").value;
    n2=document.getElementById("snumber").value;
    document.getElementById("result").innerHTML=n1/n2;
}
function mod()
{
    n1=document.getElementById("fnumber").value;
    n2=document.getElementById("snumber").value;
    document.getElementById("result").innerHTML=n1%n2;
}