//Slider Reviews

$(document).ready(function () {
  $('.slider__list').slick({
    autoplay: true,
    speed: 2000,
    dots: true,
    arrows: false,
    appendDots: $('.reviews__list'),
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});

//Timer
let startTime = new Date();
startTime.setMinutes(startTime.getMinutes() + 30);
let Timer = setInterval(function () {
  let now = new Date().getTime();
  let diff = startTime.getTime() - now;
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor(diff % (1000 * 60) / 1000);
  let Time = document.querySelector(".order__timer");
  // Time.innerHTML = startTime.getTime() + " " + now + " " + diff + " " + seconds;
  Time.innerHTML = "До конца акции " + minutes + "минут " + seconds + "секунд ";
  if (diff < 0) {
    clearInterval(Timer);
    Time.innerHTML = "Время акции истекло"
  }
}, 1000);

//Placeholder

let inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function () {
    for (input of inputs) {
      let labl = input["labels"];
      if (input["value"].length != 0) {
        labl[0].classList.add("visually-hidden");
      } else {
        labl[0].classList.remove("visually-hidden");
      }

    }
  });
};



