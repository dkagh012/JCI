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
const MainCommunity = document.querySelectorAll(".tabled");
const subMenuOpenBtn = document.querySelector(".subMenuOpenBtn");
const SubMenuList = document.querySelector(".sub_MenuList");
const MemberHistoryButton = document.querySelectorAll(".MemberHistoryButton");
for (let i = 0; i < SubMenuOpen.length; i++) {
  SubMenuOpen[i].addEventListener("mouseover", () => {
    SubMenu[i].style.display = "flex";
    header.style.background = "white";
    headerMenuList.style.color = "black";
    Black_Logo.style.display = "block";
    White_Logo.style.display = "none";
    addClassList(header, "MenuOpenEvent");
    header.style.boxShadow = "0px 0px 7px 0px #999";
    header.style.borderBottom = "1px solid #dcdcdc";
  });
  SubMenu[i].addEventListener("mouseover", () => {
    SubMenu[i].style.display = "flex";
    header.style.background = "white";
    headerMenuList.style.color = "black";
    Black_Logo.style.display = "block";
    addClassList(header, "MenuOpenEvent");
    White_Logo.style.display = "none";
    header.style.boxShadow = "0px 0px 7px 0px #999";
    header.style.borderBottom = "1px solid #dcdcdc";
  });
  SubMenuOpen[i].addEventListener("mouseout", () => {
    if (window.scrollY > 66) {
      // 스크롤 위치가 66보다 크면 다른 이벤트를 적용
      SubMenu[i].style.display = "none";
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      removeClassList(header, "MenuOpenEvent");
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else {
      SubMenu[i].style.display = "none";
      header.style.background = "transparent";
      headerMenuList.style.color = "white";
      Black_Logo.style.display = "none";
      White_Logo.style.display = "block";
      removeClassList(header, "MenuOpenEvent");
      header.style.boxShadow = "none";
      header.style.borderBottom = "none";
    }
  });
  SubMenu[i].addEventListener("mouseout", () => {
    if (window.scrollY > 66) {
      // 스크롤 위치가 66보다 크면 다른 이벤트를 적용
      SubMenu[i].style.display = "none";
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      removeClassList(header, "MenuOpenEvent");
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else {
      SubMenu[i].style.display = "none";
      header.style.background = "transparent";
      headerMenuList.style.color = "white";
      Black_Logo.style.display = "none";
      White_Logo.style.display = "block";
      removeClassList(header, "MenuOpenEvent");
      header.style.boxShadow = "none";
      header.style.borderBottom = "none";
    }
  });
}
if (document.querySelector(".MainSwiperContainer")) {
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768 && window.scrollY >= 66) {
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else if (
      window.innerWidth <= 768 &&
      window.innerWidth > 425 &&
      window.scrollY >= 66
    ) {
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else if (
      window.innerWidth <= 768 &&
      window.innerWidth > 425 &&
      window.scrollY >= 0
    ) {
      headerMenuList.style = " ";
      header.style = " ";
      Black_Logo.style.display = "none";
      White_Logo.style.display = "block";
      header.style.boxShadow = "none";
      header.style.borderBottom = "none";
    } else if (window.innerWidth <= 425 && window.scrollY >= 66) {
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else if (window.innerWidth <= 425 && window.scrollY >= 0) {
      headerMenuList.style = " ";
      header.style = " ";
      Black_Logo.style.display = "none";
      White_Logo.style.display = "block";
      header.style.boxShadow = "none";
      header.style.borderBottom = "none";
    } else if ((header.className === "MenuOpenEvent") === true) {
      header.style.background = "white";
      headerMenuList.style.color = "black";
      Black_Logo.style.display = "block";
      White_Logo.style.display = "none";
      header.style.boxShadow = "0px 0px 7px 0px #999";
      header.style.borderBottom = "1px solid #dcdcdc";
    } else {
      headerMenuList.style = " ";
      header.style = " ";
      Black_Logo.style.display = "none";
      White_Logo.style.display = "block";
      header.style.boxShadow = "none";
      header.style.borderBottom = "none";
    }
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

pop_Click.forEach((Item, index) => {
  Item.addEventListener("click", () => {
    MainCommunity.forEach((elem, i) => {
      if (index === i) {
        removeClassList(elem, "hide");
      } else {
        addClassList(elem, "hide");
      }
    });
    addClassList(Item, "Click");
  });
});

$(".gallery_swiper ").each(function () {
  var swiper = new Swiper(".gallery_swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    default: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3, // 한 번에 5개의 슬라이드 보이기
        slidesPerGroup: 1, // 5개의 슬라이드를 그룹으로 설정
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3, // 한 번에 5개의 슬라이드 보이기
        slidesPerGroup: 1, // 5개의 슬라이드를 그룹으로 설정
        spaceBetween: 40,
      },
      555: {
        slidesPerView: 2, // 한 번에 5개의 슬라이드 보이기
        slidesPerGroup: 1, // 5개의 슬라이드를 그룹으로 설정
        spaceBetween: 20,
      },
      280: {
        slidesPerView: 1, // 한 번에 5개의 슬라이드 보이기
        slidesPerGroup: 1, // 5개의 슬라이드를 그룹으로 설정
      },
    },
    pagination: {
      el: ".gallery_swiper .swiper-pagination", //페이징 태그 클래스 설정
      type: "bullets",
    },
    navigation: {
      nextEl: ".gallery_swiper .swiper-button-next",
      prevEl: ".gallery_swiper .swiper-button-prev",
    },
  });
  $(".gallery_swiper .slide_btn .start").on("click", function () {
    $(this).hide().siblings(".pause").show();
    swiper.autoplay.start();
  });

  $(".gallery_swiper .slide_btn .pause").on("click", function () {
    $(this).hide().siblings(".start").show();
    swiper.autoplay.stop();
  });
});
const selfooter = document.getElementById("selfooter");
selfooter.addEventListener("change", function () {
  const selectedOption = selfooter.options[selfooter.selectedIndex];
  const url = selectedOption.value;
  if (url) {
    window.open(url, "_blank");
  }
});
if (subMenuOpenBtn) {
  subMenuOpenBtn.addEventListener("click", () => {
    toggleClassList(SubMenuList, "open");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".subMenuOpenBtn")) {
      SubMenuList.classList.remove("open");
    }
  });
}

const introductionBox = document.querySelector(".introduction_box");
const introductionMemberList = document.querySelector(
  ".introduction_MemberList"
);

MemberHistoryButton.forEach((Item) => {
  Item.addEventListener("click", () => {
    MemberHistoryButton.forEach((prevItem) => {
      if (prevItem !== Item && prevItem.classList.contains("MemberActive")) {
        removeClassList(prevItem, "MemberActive");
      }
    });

    if (Item === MemberHistoryButton[0]) {
      introductionBox.style.display = "block";
      introductionMemberList.style.display = "none";
    } else if (Item === MemberHistoryButton[1]) {
      introductionBox.style.display = "none";
      introductionMemberList.style.display = "block";
    }

    addClassList(Item, "MemberActive");
  });
});
