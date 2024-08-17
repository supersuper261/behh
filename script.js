document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const flowerFlower = document.querySelector(".flower-flower"); // Get the flower-flower element
  const flowerFlower2 = document.querySelector(".flower-flower2");
  const letter2 = document.querySelector(".letter"); // Get the flower-flower element
  const body = document.body;

  envelope.addEventListener('click', () => {
    container.classList.add('clicked');
    letter2.classList.add("open");
  });

  container.addEventListener("click", function () {
    container.classList.toggle("clicked");
    flowerFlower.classList.toggle("show"); // Toggle the show class
    flowerFlower2.classList.toggle("show");
    body.classList.toggle("active");
  });

  letter2.addEventListener('click', function() {
    letter2.classList.add('clicked');
  });

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.remove("not-loaded");
    }, 1000);
  });
});

  window.onload = function() {
    const container = document.querySelector(".container")
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];

    const letter2 = document.querySelector(".letter"); // Move this line here
    letter2.addEventListener('click', function() {
      container.classList.remove('clicked');
    });


    function init() {
      box.addEventListener("click", openBox, false);
      box.addEventListener('click', function() {
        const envelope = document.querySelector(".envelope");
        setTimeout(function() {
          envelope.classList.add('visible');
        }, 1900); // add a 1-second delay
    
        envelope.addEventListener('click', function() {
          container.classList.add('clicked');
        });
      });
    }

  
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }
  
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {}
      if (step === 4) {
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
  }
