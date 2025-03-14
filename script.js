const Gen_btn = document.getElementById("Gen-btn");
const InpText = document.getElementById("input-Id");
let ImgClass = document.getElementsByClassName("Image-Gen");
let QR_img = document.getElementById("QR-img");

Gen_btn.addEventListener("click",()=>{
    if(InpText.value.length>0)
    {
        ImgClass[0].classList.add("Img");
        QR_img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${InpText.value}`;
    }
})