//////////////////////// the date day now///////////////////////////////////////////////
const date = new Date(Date.now());
const thedatedaye = new Intl.DateTimeFormat('ar', { dateStyle: 'full', timeZone: 'Egypt' }).format(date);
console.log(document.getElementById("date").innerHTML = thedatedaye);
document.getElementById("date").innerHTML = thedatedaye;


let ii=0;
let news = ['<a class="linkNews" href="https://egyls.com/%d9%86%d9%82%d9%8a%d8%a8-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a%d9%86-%d9%8a%d8%b3%d9%86%d8%af-%d9%85%d9%87%d9%85%d8%a9-%d8%a7%d9%84%d8%a5%d8%b4%d8%b1%d8%a7%d9%81-%d8%b9%d9%84%d9%89-%d8%a7%d9%84/" class="news1">نقيب المحامين يسند مهمة الإشراف على الشئون القانونية للنقابة إلى الأستاذ وائل ذكري</a>',
'<a class="linkNews" href="https://egyls.com/%d8%aa%d8%b3%d9%84%d9%8a%d9%85-%d8%b4%d9%87%d8%a7%d8%af%d8%a7%d8%aa-%d8%a7%d8%ac%d8%aa%d9%8a%d8%a7%d8%b2-%d8%a7%d9%84%d8%af%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%ae%d8%a7%d9%85%d8%b3%d8%a9-%d8%a8%d9%85/">تسليم شهادات اجتياز الدورة الخامسة بمعهد محاماة القاهرة الكبرى</a>',
' <a class="linkNews" href="https://egyls.com/%d8%a7%d8%b3%d8%aa%d9%85%d8%b1%d8%a7%d8%b1-%d9%85%d8%b9%d8%b1%d8%b6-%d8%a7%d9%84%d9%83%d8%aa%d8%a8-%d9%88%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%88%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88/">استمرار معرض الكتب والموسوعات القانونية بنقابة المحامين | صور</a>',
'<a class="linkNews" href="https://egyls.com/%d9%86%d9%82%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a%d9%86-%d8%aa%d8%aa%d9%84%d9%82%d9%89-%d8%b9%d8%b1%d8%b6%d9%8b%d8%a7-%d9%84%d8%ad%d8%ac%d8%b2-%d9%88%d8%ad%d8%af%d8%a7%d8%aa/">نقابة المحامين تتلقى عرضًا لحجز وحدات إدارية بميدان المطرية</a>',
'<a class="linkNews" href="https://egyls.com/%d9%86%d9%82%d9%8a%d8%a8-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a%d9%86-2/">في خطوة جديدة للتيسير على المحامين..  النقيب العام يمنح النقابات الفرعية حق ختم بطاقة الرقم القومي والشهادات الخاصة بالسجلات</a>',
];
let arrowright = document.querySelector(".arrow1 > .fa-arrow-right ");
let arrowleft = document.querySelector(".arrow1 > .fa-arrow-left ");
arrowright.addEventListener("click",arrowrightfun);
arrowleft.addEventListener("click",arrowleftfun);
function arrowrightfun() {
    if (ii < news.length-1) {
        ii++;
        
    } else {
        ii=0;
        
    }
    document.getElementById("type").innerHTML = news[ii];
    
}
function arrowleftfun() {
    if (ii<=0) {
        i=news.length-1;
    } else {
        ii--;
    }
    document.getElementById("type").innerHTML = news[ii];
}
console.log(arrowleft);

setInterval(() => {
    
    if (ii < news.length-1) {
        ii++;
        
    } else {
        ii=0;
        
    }
    document.getElementById("type").innerHTML = news[ii];
    
    
        
}, 20000);
//////////////////////news day ////////////////////////
let i=0; 
let backimg = document.querySelector(".img-news");
let backcover = document.querySelector(".background-cover");
let activicon = document.querySelectorAll(".iconimg-news img");
let text = document.querySelectorAll(".text-news p");
let arrowLeft = document.querySelector(".arrow2 .fa-arrow-left");
let arrowRight = document.querySelector(".arrow2 .fa-arrow-right");
let imgarr = ["1 (2).jpg","2.jpg","3.jpg"];
let imgarricon = ["blure1.jpg","blure2.png","blure3.jpeg"];
let textarr = ["نشاط مكثف لنقيب المحامين في بني سويف والمنيا وأسيوط"
,"المحامون الجدد يؤدون اليمين القانونية",
"نقيب المحامين ينعى زوجة الأستاذ خالد نافع المحامي"];
console.log(typeof(arrowRight));
arrowRight.addEventListener("click",arrRfunction);
arrowLeft.addEventListener("click",arrLfunction);
function arrRfunction() {
    if (i < imgarr.length-1) {
        i++;
        console.log(i);
    } else {
        i=0;
        console.log(i);
    }
       
        backimg.style.backgroundImage = 'url("image/'+ imgarr[i] + '")';
        backcover.style.backgroundImage = 'url("image/'+ imgarricon[i] + '")';
        
        
        activicon.forEach(img => {
            img.classList.remove("active");
        });
        activicon[i].classList.add("active");
        
    document.querySelector(".text-news p").innerHTML = textarr[i];
   
    
}
function arrLfunction() {
    if (i<=0) {
        i=imgarr.length-1;
    } else {
        i--;
    }
       
        backimg.style.backgroundImage = 'url("image/'+ imgarr[i] + '")';
        backcover.style.backgroundImage = 'url("image/'+ imgarricon[i] + '")';
        
        
        activicon.forEach(img => {
            img.classList.remove("active");
        });
        activicon[i].classList.add("active");
        
    document.querySelector(".text-news p").innerHTML = textarr[i];
   
    console.log(imgarr.length-1);
}


 

  intervalback=setInterval(() => {

    if (i < imgarr.length-1) {
        i++;
        console.log(i);
    } else {
        i=0;
        console.log(i);
    }
        
        backimg.style.backgroundImage = 'url("image/'+ imgarr[i] + '")';
        backcover.style.backgroundImage = 'url("image/'+ imgarricon[i] + '")';
        
        
        activicon.forEach(img => {
            img.classList.remove("active");
        });
        activicon[i].classList.add("active");
        
    document.querySelector(".text-news p").innerHTML = textarr[i];
   
    
      }, 10000);
