// main.js
window.addEventListener('load', ()=> {
/* 주메뉴 */
// 각 li에 마우스를 올리면 (높이값 가져와서) 풀다운 메뉴 내려오고 보여야 됨, 
// 키보드 탭으로 움직여야됨.
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector(".header_wrap"); 

for(var i=0; i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener('mouseover', e => {
    e.currentTarget.classList.add('on');
    var ht =  e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+ht}px`;
  })

  gnbMenu[i].addEventListener('mouseout', e => {
    e.currentTarget.classList.remove('on');
    headerWrap.style.height = '70px';
  })

  gnbMenu[i].children[0].addEventListener('focus', e => {// li>a
    e.currentTarget.parentElement.classList.add('on');
    var ht =  e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = `${70+ht}px`;
  })

  gnbMenu[i].children[0].addEventListener('blur', e => {
    e.currentTarget.parentElement.classList.remove('on');
    headerWrap.style.height = '70px';
  })
}

/* 검색박스 */
//검색버튼 누르면 검색박스 보이고
//닫기버튼 누르면 검색박스 안보이고
const btnSrch = document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const btnSrchClose = document.querySelector(".btn_srch_close");

btnSrch.addEventListener("click", e => {
  e.preventDefault();
  srchWrap.classList.add("on");
});

btnSrchClose.addEventListener("click", e =>{
  e.preventDefault();
  srchWrap.classList.remove("on");
})

/* 오토배너 */
/*
const btnNext = document.querySelector('a.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide');//0,1,2
const slideRoll = document.querySelectorAll('.slide_roll li');//0,1,2
const btnPlay = document.querySelector('.btn_play');

let bnnNum=0;
let lastNum = document.querySelectorAll('.slide_wrap > li').length - 1;


function activation(index, list){
  for(let el of list){
      el.classList.remove("on", "active");
  }
  list[index].classList.add("on", "active");
}
// next 버튼 클릭
//li.slide.active
//.slide_roll>ul>li.on>a
btnNext.addEventListener('click', e => {
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0; 
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);

  // slide.forEach(item => {
  //     item.classList.remove('active');
  // });
  // slide[bnnNum].classList.add('active');

  // slideRoll.forEach(idx => {
  //     idx.classList.remove('on');
  // });
  // slideRoll[bnnNum].classList.add('on');

});

// prev버튼 클릭
btnPrev.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
})

// 오토배너 5초마다
function autoBanner(){
  //next버튼 눌렀을때
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0; 
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}

let autoBnn = setTimeout(autoBanner,5000);//최초호출

// 배너 재생 멈춤 버튼
// 배너 멈추고 이미지 바뀌고
// 배너 재생 이미지 바뀌고
let flag = true;

btnPlay.addEventListener('click', e => {
  e.preventDefault();
  if(flag){//멈춤
    btnPlay.classList.add('on');
    clearTimeout(autoBnn);
    flag = false;
  }else{//재생
    btnPlay.classList.remove('on');
    autoBnn = setTimeout(autoBanner,5000);
    flag = true;
  }
})

// 롤링버튼클릭
// 해당 배너로 이동
for(let i=0; i<slideRoll.length;i++) {
  slideRoll[i].addEventListener('click', e =>{
    e.preventDefault();
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
  })
}
*/
//top버튼
const  btnTop = document.querySelector('a.btn_top');

//클릭하면 스크롤이 맨위로 올라감
btnTop.addEventListener('click', e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

//스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜

window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0){
    btnTop.classList.remove("on","ab");
  }else if(scroll > 2700){
      btnTop.classList.add("ab");
      btnTop.classList.add("on");
  }else{
      btnTop.classList.remove("ab");
      btnTop.classList.add("on");
  }
})

// sub1 page
// step1 클릭
const step1_btn = document.querySelectorAll(".step1>ul>li>a");

step1_btn.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    for(let i=0;i<step1_btn.length;i++){
      step1_btn[i].style.backgroundColor = `transparent`;
      step1_btn[i].style.backgroundImage = `url(images/ico_inquiry_0${i+1}.png)`;
      step1_btn[i].style.color =`#333`;
    }
    el.style.backgroundColor = `#043285`;
    el.style.backgroundImage = `url(images/ico_inquiry_on_0${i+1}.png)`;
    el.style.color =`#fff`;
  });
});

});