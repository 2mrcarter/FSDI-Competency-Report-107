

/*let items=[
    //first item
    {
        code:'123',
        title:'Samsung TV',
        price:400,
        description:'TV 4k 55"',
        category:'Electronics',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV9oW2klhu5wEdsZA3Al-gT0Xwb4DUQnNNFycZABRFyw_sPWg1XcM0S8Fu&usqp=CAc'
    },
    //second item
    {
        code:'456',
        title:'Huwei TV',
        price:1000,
        description:'4k 65"',
        category:'Electronics',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP2f0rQ0_YsujHELn10VcC0ucf1Sb0w8QKSf7mfXMNsDgSS-Ym0MdBZIKyq0InxPyDjXMnfgM&usqp=CAc'
    },
    //third item
    {
        code:'789',
        title:'LG TV',
        price:500,
        description:'4k 65"',
        category:'Electronics',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCWZGD5OnDl99W3mAAMb6kqhF4q_RPVkpIsPHsWG9Q2A7wglFfcw_FVY0yDcVtRjgtmC-9FGY&usqp=CAc'
    },
    //4th item
    {
        code:'224',
        title:'Smart Desk',
        price:2999,
        description: 'Smart Desk',
        category:"furniture",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJiTEaodNM3tpD_EwSLkT0K5srcSWR9gqvU3Q1hKckIFYwI4qWc-2zmFXuZd2-EyJVbj7QkuvS&usqp=CAc'
    },
    {
        code:777,
        title: 'Smart Refridgerator',
        price: 4599,
        description: 'Smart Refridgerator',
        category: 'appliances',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSuBIAOKK7OKL-V_6qr9mRYBqgsl3MOsKiOpOWmlu9SE1R7Jw_wROiAR9OpT9J5g&usqp=CAc'
    },
    {
        code:987,
        title: 'The Smart Mirror',
        price: 1495,
        description: 'Smart Mirror',
        category: 'Home Goods',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAh1BMVEVHcEwrEAAaBwAKBwEIAwEwEQAsDwAFAgICBQQbCAAHAwEIBAE6FQANBQESCQEHBAAMBgEHAwALBwE3EwAQCAEXCgIzEwAoDwAKBwIkDgA2FgAqDwEEBAIYCgIbCgFBGwAuDwAmDwBoGQBKHgAsEABOGwJ0IAC0UQBYRgdZYgBkJQAfqTAJTGMKQgjUAAAALXRSTlMA0eoK7Mnl8ffkMUCd5XUXSCNl5FfWpdyDvsOykqDJvu6YjrSMoXTWm9XVl8NEOXsWAAAJAElEQVRogb2b3XazuA6Ga8KfARNCMMa4cUJCOmu+mfu/vpFkQ9K952CvvT5VIUnbgz56Jf/INnx8/F471vVv/o//o526drHGmHGsfpR7qIZ2zIwRYFkmmrH7IfCx7p3PBIFFRpcH/MDNPVCkgZsF2+BwMas/QaStCIZkC/CMxIdvZvUOoLO1JHqml93IREf8gRGfWWtnG+GkPkY/+gDBZ8TbDOAWNKPsDP2g8KMLzjnLjRdz9jL7+lFQDISw3Hg3jqPbEk/mRaAP68KNN/MMEZ/njNjgyzLtEXDs6o+gfmnHmSxr67Zdlyw0u/DlAH9kw5/E3MzXNYt86n5zFth08eKrbG7adZ3n63XeDF3Yxz/XXBjx9XxF9fM1vjYH5tAOBTO+u16btgXtQN7woRVSRxBiZMUPVzJ3fVnsfVE+L76/Xh+PN/Q1tAGKu9ZapmOzdEe2ntc+wK70hk+H2oUwSqXRioYfT4Zgk9+SoigiGa6ibMZPRvxKXARLKfEtIxneBXrCi3c5GWAVRrxIVNAOuosfwNv8fD7nuSoiL+CDcjTFixc50vOdiPjiRS8kL95E9RtThchvVmrEn9jwIfUY/JReaoeH3AN+YlR/y8+5Oeexn234csOXAvFs6g+Iz3Oz93O540MIPKv64w3piC9C0uV75gFvWdWfbqHb72OsLN56HTu+fgs+5f6/8RdGfLerx+CXRSqL4hveseKHgM9Dw7Ou+Dd8zYbvQ/BDg3Oj06r4xi+h2mj51Lc3GnMTAj6t1TKwy6IMxotfQ/ATGnOfDyhwwiwPVvwAfgnBJ/Xp/T6nNOO86GXDio/TfRLy/LwTvnwzXrxF+O0Wcz2S/FK7p6NCE0u9kRPv8+z+fD6/vprH/Wu93+9faAO874/702Oxw4k3MOJl2ROwd/gIX40TXqsQeyx2GPH5HvzMT/f70D28j7kv3vBc64w46CWQ5XIavqrqujc6wmtW/GEfc4F/qaq608Um/gfwR8CfN7xv+7ZX70NewPeA50n+CauNM+GhrAPxHZVZr2HHs+Kr2z7spKl63p9jLLM29RkrvttyT+u6EYc9mnJ29ZYVP4QhP6dCT47ZvPrvuYdihxFP073BagvmfFH1XTVRky829Y7wFRM+Tvc4yZe264a6Hl5ofvyKK6wz4As1QLvvgf8+5tF0/9nXXPjlHNSXGoacugad1Wf5PuECfuJTP0Z8AeyqqgZQX73P9gHPpt4GfNpXdVV/prod6spR9l/FDqP6LOK7qvvUgFXTUA3v0efFi4AvuqEMextyqiv9avxY7DDizYbvSyrvVar7qn21/JRXfdjaOBfY3XG0TdLSdVW6x16xqj/covoa1Ke0tVIUn5D9reKQrPhjwJ/L7lLShpbEueeza7eRR/PjYdgra097mYQvVH/yIflFwHP1+2rDf+HqAjcVUX3pB6g6yriz88mnvg74vPiiaT7F1T2usS7Q+cq4s8OI7wJ+/rpDiSdl2NtAa/uAx2qjZcP3hBcP8VSpVBIu6v3Q4WpM/gvPs85ozzH4tLmht+DjZuaD2h4WO9z4s0yhvyvvMfi0swToOy10HSt+iXiUrL1Iii34ZXl15Y6vmfCXF15m3put5eP64r4VO3x4R3SDm4raeiGSreVD43umOx6Dz8G3W+7TAvDeUMvf1xl4kMOaexHUJ6jee21U8m0z/R3PwTdBPY642OuLJCm+WcAPNRM+D+rp3Ijw6js+DXhQzzLs5STfKJUkidEykelriVPEYie2fAb8IRdGGGOkDCdpCR6mgS8qiWdpVOywBf+I8LMwW1sryY8EXmRJorHUYwt+hTdnGcIHi+eYSE7wrYN6LnwOdMSn8eyO8EBGNBpVGxR8DnwXbk0zodT4F/U+4JnUD4bUyzINZ3hpUB9zz47vzS83m1+/vI6jbOgBkvgYfMuKb6HZZwY3j8vUXj4/FYjPt2YvX3im3K9msY0wWulSaW11KinlL/U43fPhF7O2rVnayRZ//9X99defYL/O5ySJh3obnin4o13WSbh2gjXO31PA//nHy1Je9dbAEsMInOaUlkWZYsBRdrhxJCmw2ph6PjzxEa+x0ISU5wk1unAlI6t6kT2cnTOtlfRCKxzyk33EBzxNeKCeKffGPbJZiEuj/cU/LdS62P7ByAf4aFiDnwuHdyd5QFr71MrrfBo8/GqzCzrBiz/cFueceFql/MVYr7ww9iK0lJdfq5c6wZMUPvzx5rzIsmcLgi/2nmkstR3WnNJp7SH6rOpPCVQ65uwkVvnuDjH3ur1fPZbcNN/iUcbEhq8AL6HrwXRjvPZpmktt/9BQ9GndynbBYgf6HRe+kyA+hyUWVFngCE33SRqGfCu9D+rZ8ANAc4Pb2WUKCy2Y7vOtzqGvQkQ8T7/vST2u8ErQW+JKI3mjb9UGl/o2wR2NOLfLfazbfEiSjDX3EzGVVClkXFFhjxPNJl9BtbEw4pegV4XFBdh2gEXrq1QpXvwF1esXXeGSGlb4qohniY4Vb5Nv2hWdn+LdgnF9veE7wv92vk/wDsk3PKrHUmM7TBqbZdrV/3Y8zCnYwr4bdENcYeLfU8L3XPjReiOpyUu8IVga+ISSP8XRCFaaWGstU7sF/3fTP4RoD1XXrnSbiEQqGPwYHoqABVDo9ly5F77/OByPp6oe2nVxFoodmIK0D8+FQB3UNCuNuSz4g8gGwJ8QP/R9207rsozkhTbhaawGY8+EP2a2i/iO8OAA2UJeZALvEoXYM+FPNqtC8Ik/kAPtFH2YpnV0DsVDw+fAV9aeCI/yuwET0LfBh2BLM0bxHPjO2uPHgaIf+ejAmw+ABzofPoN/iXw8ve6CA5sLaICH3ztMPQN+2PHERweiB+gEvJamCXQW/AlbPhjJJwfqLvgQvOiapoHfaib8R+vWcDfSHoAYg2jjuNQbnWORdVrcZRq23fIwBLyCUI/NWgc6Dx6fwRxaWGkt7bsTMQ7VOK4V3tNAdL6nwg7HuocxZlzbrjpuf4JsjGNbVUE8Iz3asRomCARkI94VfHSuP23a2fFk9ECsC4FYrYNueSD4D+GDQTKm0bb1TzL/0w7/V2P/BypkB6trDan6AAAAAElFTkSuQmCC',
    }
];
*/
var items =[];
var serverURL="http://localhost:8080/API/";

//function displayCatalog(){
//    // travel the array (for)
//    for(let i=0; i<items.length;i++){
//        var item =items[i];
//       drawItem(item);        
//    }
//}

function fetchCatalog(){

    //get items from the server
    $.ajax({
        url:serverURL+"items",
        type:"GET",
        success:function(res){
            console.log("it works",res);
                for(var i=0;i<res.length;i++){
                    console.log('traveling the array');
                    if(res[i].user=="Joel" && res[i].title!="" && res[i].description!="" && res[i].code!=""){
                        console.log('Next step');
                        items.push(res[i]);
                        drawItem(res[i]);
                    }    
                }

            console.log(items);
        },
        error:function(details){
            console.log("Error",details);
        }
    });
}


function drawItem(product){
    //create the template string
    var layout = ` <div id="${product.code}">
                            <img src="${product.image}" class="item">
                            <h4> ${product.title}</h4>
                            <h5 class="itemPrice">$${product.price}</h5>
                            <p> ${product.description} </p>
                            <div>
                                <button class="btn btn-primary"> Add to Cart 
                                </button>
                            </div>
                        </div>`;

    //display the layout on the DOM
        $('#catalog').append(layout);
}




function Search(){
    var searchText = $('#txt-search').val();
    $('#catalog').html("");
    // clear the prev results
    // $('#catalog').html("");


    // travel the array and display the items that contains searchText in the title,
    // OR the description contains the searchText
    //OR the code contains the searchText
    //OR by adding the price

        for(var i=0;i<items.length;i++){
            var item = items[i];
            if(item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText) || item.price.toString().includes(searchText)){
                drawItem(item);
            }
        }    
}


function init(){
    console.log("Catalog Page");
    fetchCatalog();
    
    //detecting events
    $('#btn-search').click(Search);
    

    $('#txt-search').change(function(){
        var searchText = $('#txt-search').val();
        for(var i=0;i<items.length;i++){
            if(searchText ==''){
                //$('#'+items[i].code).show();
                drawItem(items[i]);
            }
        }
    });

    $('#txt-search').keypress(function(e){
        if(e.keyCode==13){
            Search();
        }

    });
}


window.onload=init;