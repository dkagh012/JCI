function toggleClassList(target, className) {
  target.classList.toggle(className);
}

function addClassList(target, className) {
  target.classList.add(className);
}

function removeClassList(target, className) {
  target.classList.remove(className);
}

const SubMenuOpen = document.querySelectorAll(".headerMenuList li");
const SubMenu = document.querySelectorAll(".sub_Menu .subMenuList");
const header = document.querySelector("header");
const headerMenuList = document.querySelector(".headerMenuList");
const Black_Logo = document.querySelector(".pclogo .black_logo");
const White_Logo = document.querySelector(".pclogo .white_logo");
const pop_Click = document.querySelectorAll(".pop_menu div button");
console.log(pop_Click);
for (let i = 0; i < SubMenuOpen.length; i++) {
  SubMenuOpen[i].addEventListener("mouseover", () => {
    SubMenu[i].style.display = "flex";
    header.style.background = "white";
    headerMenuList.style.color = "black";
    Black_Logo.style.display = "block";
    White_Logo.style.display = "none";
  });
  SubMenu[i].addEventListener("mouseover", () => {
    SubMenu[i].style.display = "flex";
    header.style.background = "white";
    headerMenuList.style.color = "black";
    Black_Logo.style.display = "block";
    White_Logo.style.display = "none";
  });
  SubMenuOpen[i].addEventListener("mouseout", () => {
    SubMenu[i].style.display = "none";
    header.style.background = "transparent";
    headerMenuList.style.color = "white";
    Black_Logo.style.display = "none";
    White_Logo.style.display = "block";
  });
  SubMenu[i].addEventListener("mouseout", () => {
    SubMenu[i].style.display = "none";
    header.style.background = "transparent";
    headerMenuList.style.color = "white";
    Black_Logo.style.display = "none";
    White_Logo.style.display = "block";
  });
}
$(".MainSwiper ").each(function () {
  var swiper = new Swiper(".MainSwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 1,
    effect: "fade",
    loop: false, // 무한 롤링
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination", //페이징 태그 클래스 설정
      type: "bullets",
    },
    navigation: {
      nextEl: ".MainSwiper .swiper-button-next",
      prevEl: ".MainSwiper .swiper-button-prev",
    },
  });
  $(".MainSwiper .slide_btn .start").on("click", function () {
    $(this).hide().siblings(".pause").show();
    swiper.autoplay.start();
  });

  $(".MainSwiper .slide_btn .pause").on("click", function () {
    $(this).hide().siblings(".start").show();
    swiper.autoplay.stop();
  });
});

pop_Click.forEach((Item) => {
  Item.addEventListener("click", () => {
    // 이전에 클릭된 요소에서 "Click" 클래스 제거
    pop_Click.forEach((prevItem) => {
      if (prevItem !== Item && prevItem.classList.contains("Click")) {
        removeClassList(prevItem, "Click");
      }
    });
    // 새로 클릭된 요소에 "Click" 클래스 추가
    addClassList(Item, "Click");
  });
});
