
// var data=[
//    {image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
//     head:"Salicylic & French Green Clay Face Mask With Match Tea",
//     lt:"RS:754.00",
//     currate:"RS:596.00"
//     },
 
//  {image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755",
//     head:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
//     lt:"RS:595.00",
//     currate:"RS:499.00"
//     },
//  {image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL.jpg?v=1655302658",
//     head:"CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic",
//     lt:"RS:595.00",
//     currate:"RS:506.00"
//     }
//  ]

var p1= document.querySelector("#productimg1")
var p= document.querySelector("#productimg")
var p2= document.querySelector("#productimg2")

var s1=document.querySelector("#simplep1")
var s2=document.querySelector("#simplep2")
var s=document.querySelector("#simplep")

var lt =document.querySelector("#lt")
var lt1 =document.querySelector("#lt1")
var lt2 =document.querySelector("#lt2")

var c =document.querySelector("#currrat")
var c1 =document.querySelector("#currrat1")
var c2 =document.querySelector("#currrat2")

var bc = document.querySelector("#bc")
var nutri = document.querySelector("#nutri")

var skin = document.querySelector("#skin")
var hair = document.querySelector("#hairc")

document.querySelector("#bc").addEventListener("click",bcproducts)

 function bcproducts(){
   bc.style.color="palevioletred"
   nutri.style.color="grey"
   hair.style.color="grey"
   skin.style.color="grey"
  p.innerHTML=""
  p1.innerHTML=""
  p2.innerHTML=""
  var img = document.createElement("img")
  var img2 = document.createElement("img")
    
  var img3 = document.createElement("img")
  img3.setAttribute("id","pimg1")

  img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908"
    p.append(img)
    s.innerText="Salicylic & French Green Clay Face Mask With Match Tea"
    c.innerText="RS:487.00"
    lt.innerText="RS:695.00"

      img2.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612"
    p2.append(img2)
    s2.innerText="Retinol & Ceramide Age Defense Night Cream For Face"
    c2.innerText="RS:622.00"
    lt2.innerText="RS:945.00"

    img3.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025"
    p1.append(img3)
    s1.innerText="CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil "
    c1.innerText="RS:506.00"
    lt1.innerText="RS:595.00"
 
}

document.querySelector("#skin").addEventListener("click",skinproducts)

 function skinproducts(){
   bc.style.color="grey"
   nutri.style.color="grey"
   hair.style.color="grey"
   skin.style.color="palevioletred"
  p.innerHTML=""
  p1.innerHTML=""
  p2.innerHTML=""
  var img = document.createElement("img")
  var img2 = document.createElement("img")
    
  var img3 = document.createElement("img")
  img3.setAttribute("id","pimg1")

  img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709"
    p.append(img)
    s.innerText="  72 HR Hydrating Probiotic Gel Moisturizer For Face With "
    c.innerText="RS:596.00"
    lt.innerText="RS:745.00"

      img2.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908"
    p2.append(img2)
    s2.innerText="Salicylic & French Green Clay Face Mask With Match Tea"
    c2.innerText="RS:487.00"
    lt2.innerText="RS:695.00"

    img3.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755"
    p1.append(img3)
    s1.innerText="Vitamin C Moisturizer With Kakadu Plum & Vitamin E "
    c1.innerText="RS:499.00"
    lt1.innerText="RS:595.00"
 
}
 

var offer=document.querySelector("#offer")
var right =document.querySelector("#rightc")
var  left =document.querySelector("#leftc")
var ss= document.querySelector("#slideshow")
var d1 =document.querySelector("#dot1")
var d2 =document.querySelector("#dot2")
var d3 =document.querySelector("#dot3")
var d4 =document.querySelector("#dot4")
var d5 =document.querySelector("#dot5")

function show(){

    var imageData=[
       "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278",
       "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278",
       "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278",
       
       "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967",
       "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395"

    ]
     let i=0

     setInterval(function(){
        if(i==imageData.length){
            i=0
        }
      
        let image = imageData[i]
        // console.log(i)
        document.querySelector("#slideshow").innerHTML=""
        var img = document.createElement("img")
        img.src=image
        document.querySelector("#slideshow").append(img)
        document.querySelector("#slideshow").style.transform=`translate3d(${i * 10}px,0 ,0)`
        
        i++

     },10000)
    }
    show()
    document.querySelector("#rightc").addEventListener("click",addimg1)
    document.querySelector("#leftc").addEventListener("click",addimg2)
    document.querySelector("#dot2").addEventListener("click",addindot2)
    document.querySelector("#dot1").addEventListener("click",addindot1)
    document.querySelector("#dot3").addEventListener("click",addindot3)
    document.querySelector("#dot4").addEventListener("click",addindot4)
    document.querySelector("#dot5").addEventListener("click",addindot5)




    function addindot2(){
       ss.innerHTML=""
       var img = document.createElement("img")
       img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278"
       img.setAttribute("class",`slideimg`)
       d1.style.backgroundColor="white"
       d3.style.backgroundColor="white"
       d4.style.backgroundColor="white"
       d5.style.backgroundColor="white"
       d2.style.backgroundColor="grey"

       ss.append(img)

    }

    function addindot1(){
        ss.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278"
        img.setAttribute("class",`slideimg`)
        d1.style.backgroundColor="grey"
        d3.style.backgroundColor="white"
        d4.style.backgroundColor="white"
        d5.style.backgroundColor="white"
        d2.style.backgroundColor="white"
 
        ss.append(img)
 
     }

     function addindot3(){
        ss.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278"
        img.setAttribute("class",`slideimg`)
        d1.style.backgroundColor="white"
        d3.style.backgroundColor="grey"
        d4.style.backgroundColor="white"
        d5.style.backgroundColor="white"
        d2.style.backgroundColor="white"
 
        ss.append(img)
 
     }

     function addindot4(){
        ss.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967"
        img.setAttribute("class",`slideimg`)
        d1.style.backgroundColor="white"
        d3.style.backgroundColor="white"
        d4.style.backgroundColor="grey"
        d5.style.backgroundColor="white"
        d2.style.backgroundColor="white"
 
        ss.append(img)
 
     }

     function addindot5(){
        ss.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395"
        img.setAttribute("class",`slideimg`)
        d1.style.backgroundColor="white"
        d3.style.backgroundColor="white"
        d4.style.backgroundColor="white"
        d5.style.backgroundColor="grey"
        d2.style.backgroundColor="white"
 
        ss.append(img)
 
     }

 
    function addimg1(){
        offer.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6DED8D82-1F40-4F87-8755-7C20094B4F05.jpg?v=1654025006"
        img.setAttribute("class",`offerimg`)
        left.style.backgroundColor="white"
        right.style.backgroundColor="grey"

        offer.append(img)
    }

    function addimg2(){
        offer.innerHTML=""
        var img = document.createElement("img")
        img.src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Sale_Banner1600_500.jpg?v=1654626718"
        img.setAttribute("class",`offerimg`)
        right.style.backgroundColor="white"
        left.style.backgroundColor="grey"
        offer.append(img)
    }
    
