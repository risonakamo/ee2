function steamtileMain()
{
    steamtileRun();

    $(".search_pagination a").click(function(){
        setTimeout(steamtileMain,1000);        
    });
}

function steamtileRun()
{
    //addJQ();

    pageClean();

    expandImgs();
}

// function addJQ()
// {
//     var a=document.createElement("script");
//     a.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js");

//     document.head.appendChild(a);
// }

function pageClean()
{
    $(".rightcol").remove();

    // $("#search_result_container div:nth-child(2) a").css("width","480px")
    //     .css("display","inline-block")
    //     .css("height","300px");

    $("#search_result_container div").eq(1).css("width","1200px").addClass("searchList");

    // $(".searchList a").css("width","460px")
    //     .css("display","inline-block")
    //     .css("height","300px");

    // $(".search_capsule").css("height","215px");
    
}

function expandImgs()
{
    var entries=$("#search_result_container div").eq(1).children();
    var appid;

    for (x=0;x<entries.length;x++)
    {
        appid=entries.eq(x).attr("data-ds-appid");

        if (appid)
        {
            entries.eq(x).find("img").attr("src","http://cdn.akamai.steamstatic.com/steam/apps/"+appid+"/header.jpg");
        }
    }
}

// function getIDs()
// {
//     // $("#search_result_container div").eq(1).children().eq(1).attr("data-ds-appid");

//     var entries=$("#search_result_container div").eq(1).children();
//     var appid;
//     var appids=[];
//     var title;
//     var titles=[];

//     for (x=0;x<entries.size();x++)
//     {
//         appid=entries.eq(x).attr("data-ds-appid");
//         title=entries.eq(x).find("span").eq(0).text();
//         if (appid)
//         {
//             appids.push(appid);
//             titles.push(title);

//             entries.eq(x).find("img").attr("src","http://cdn.akamai.steamstatic.com/steam/apps/"+appid+"/header.jpg");
//         }
//     }

//     console.log(appids);
//     console.log(titles);
//     return appids;
// }

steamtileMain();
