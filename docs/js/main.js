(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


// 직전 짠거
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === "" || password === "") {
            var errorDiv = document.createElement("div");
            errorDiv.className = "alert alert-danger";

            if (email === "") {
                errorDiv.innerText = "이메일을 입력해주세요";
            } else {
                errorDiv.innerText = "비밀번호를 입력해주세요";
            }

    
            var errorContainer = document.getElementById("error-container");
            errorContainer.innerHTML = ""; 
            errorContainer.appendChild(errorDiv);

            return; 
        }

        fetch("./json/user.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var users = data.users;
                var state = false;

                for (var i = 0; i < users.length; i++) {
                    if (users[i].email === email && users[i].password === password) {
                        state = true;
                        break;
                    }
                }

                if (state) {
                    alert("로그인 성공");
                    window.location.href = "index.html";
                } else {
                    alert("로그인 실패");
                }
            })
            .catch(function(error) {
                console.error("JSON 파일 에러", error);
            });
    });
});

const texts = [
    { content: '공항서비스', additional: '여행 라운지' },
    { content: '최대 10만머니', additional: '스탬프' },
    { content: '트래블로그', additional: '환율 100% 우대' }
];

let currentIndex = 0;
const contentElement = document.getElementById('content');
const additionalElement = document.getElementById('additional');

function changeText() {
    const currentText = texts[currentIndex];

    contentElement.classList.remove('slide-in');
    contentElement.textContent = currentText.content;
    setTimeout(() => {
        contentElement.classList.add('slide-in');
    }, 200);

    additionalElement.classList.remove('slide-in');
    additionalElement.textContent = currentText.additional;
    setTimeout(() => {
        additionalElement.classList.add('slide-in');
    }, 400);

    currentIndex = (currentIndex + 1) % texts.length;
}

    setInterval(changeText, 5000);