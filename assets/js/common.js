//Eenter key 방지 함수
function enterBrakey(e) { 
    if(e.keyCode==13 && e.srcElement.type != "textarea") 
    return false; 
}

//확인 모달 - 열기
$(".confirm-open").on("click", function(){
    confirmOpen();
});

//확인 모달 - 닫기
$(".confirm-cancel, .confirm-done").on("click", function(){
    confirmClose();
});

//확인 모달 - 열기 함수
function confirmOpen(){
    $(".confirm-modal").fadeIn(200);
    $(".confirm-box").slideDown(200);
}

//확인 모달 - 닫기 함수
function confirmClose(){
    $(".confirm-modal").fadeOut(200);
    $(".confirm-box").slideUp(200);
}