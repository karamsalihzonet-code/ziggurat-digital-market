const products=[
{id:1,title:"دورة JavaScript من الصفر",cat:"كورسات",price:50,icon:"🎓",seller:"أحمد للبرمجة",desc:"دورة عملية لتعلم JavaScript وبناء مشاريع حقيقية."},
{id:2,title:"حزمة كتب البرمجة",cat:"كتب رقمية",price:20,icon:"📚",seller:"Digital Books",desc:"مجموعة كتب رقمية للمبتدئين في البرمجة."},
{id:3,title:"UI Design Pack",cat:"فن وتصاميم",price:15,icon:"🎨",seller:"Creative Studio",desc:"حزمة تصاميم وواجهات جاهزة للمشاريع الرقمية."},
{id:4,title:"Music Creator Pack",cat:"موسيقى",price:12,icon:"🎵",seller:"Ziggurat Sounds",desc:"مؤثرات ومقاطع صوتية للاستخدام في المشاريع."},
{id:5,title:"Developer Tools Pack",cat:"برامج وأدوات",price:25,icon:"💻",seller:"Code Lab",desc:"أدوات وموارد رقمية للمطورين."},
{id:6,title:"دورة التصميم الحديثة",cat:"كورسات",price:35,icon:"🖌️",seller:"Design Hub",desc:"أساسيات التصميم الرقمي بطريقة مبسطة."},
{id:7,title:"كتاب بناء المشاريع",cat:"كتب رقمية",price:10,icon:"📖",seller:"Knowledge Store",desc:"دليل عملي لتخطيط وبناء مشروع رقمي."},
{id:8,title:"Icon Pack",cat:"فن وتصاميم",price:8,icon:"✨",seller:"Pixel Art",desc:"مجموعة أيقونات عالية الجودة."}
];
function card(p){return `<a class="card" href="product.html?id=${p.id}"><div class="thumb">${p.icon}</div><div class="card-body"><div class="muted">${p.cat}</div><h3>${p.title}</h3><div class="muted">${p.seller}</div><div class="price">$${p.price}</div></div></a>`}
const grid=document.getElementById("productGrid"); if(grid){grid.innerHTML=products.map(card).join("");document.getElementById("count").textContent=`${products.length} منتجات`;}
const detail=document.getElementById("detail"); if(detail){const id=new URLSearchParams(location.search).get("id");const p=products.find(x=>x.id==id)||products[0];detail.innerHTML=`<div class="thumb" style="height:260px;border-radius:18px">${p.icon}</div><p class="muted">${p.cat} · ${p.seller}</p><h1>${p.title}</h1><p class="muted">${p.desc}</p><div class="price">$${p.price}</div><button class="btn" onclick="alert('هذه نسخة تجريبية. الدفع الحقيقي سيضاف لاحقاً.')">شراء الآن</button>`}
function demoLogin(e){e.preventDefault();alert("تم تسجيل الدخول تجريبياً.");location.href="index.html"}function demoRegister(e){e.preventDefault();alert("تم إنشاء الحساب تجريبياً.");location.href="index.html"}