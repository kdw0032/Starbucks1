document.addEventListener('DOMContentLoaded', ()=>{
    var interval = window.setInterval(rollingCallback, 3000);
})
function rollingCallback(){
    //.prev 클래스 삭제
    document.querySelector('.m_rollingbanner .m_prev').classList.remove('m_prev');

    //.current -> .prev
    let current2 = document.querySelector('.m_rollingbanner .m_current');
    current2.classList.remove('m_current');
    current2.classList.add('m_prev');

    //.next -> .current
    let next2 = document.querySelector('.m_rollingbanner .m_next');
    //다음 목록 요소가 널인지 체크
    if(next2.nextElementSibling == null){
        document.querySelector('.m_rollingbanner ul li:first-child').classList.add('m_next');
    }else{
        //목록 처음 요소를 다음 요소로 선택
        next2.nextElementSibling.classList.add('m_next');
    }
    next2.classList.remove('m_next');
    next2.classList.add('m_current');
}