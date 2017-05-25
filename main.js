window.onload=main;

function main()
{
    ejump();
}

function ejump()
{
    if (window.location.hash.length<=0)
    {
        return;
    }

    var link=window.location.hash.slice(1);

    var eboxes=document.querySelectorAll("e-box");

    for (var x=0;x<eboxes.length;x++)
    {
        if (eboxes[x].sid==link)
        {
            eboxes[x].classList.add("marked");
            return;
        }
    }
}