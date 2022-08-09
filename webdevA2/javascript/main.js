if ( document.URL.includes("2022_szn.html") ) {
    var dots = document.querySelectorAll('.dot');
    var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    for(i=0;i<dots.length;i++)
    {
         AEL(i)
    }
    function AEL(i)
    {
        console.log("sdfsdf");
        dots[i].addEventListener("click",function(){
            currentSlide(i+1);
        });
    }
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    } 
    
 if ( document.URL.includes("driver_info.html") ) {
            const audio = new Audio("music/maxwin.mp3");
            const buttons = document.querySelector("#test");
            buttons.addEventListener("click", () => {
                audio.play();
        });
            const audio2 = new Audio("music/alowin.mp3");
            const buttons2 = document.querySelector("#test2");
            buttons2.addEventListener("click", () => {
                audio2.play();
        });
            const audio3 = new Audio("music/lewiswin.mp3");
            const buttons3 = document.querySelector("#test3");
            buttons3.addEventListener("click", () => {
                audio3.play();
        });

            const audio4 = new Audio("music/sebwin.mp3");
            const buttons4 = document.querySelector("#test4");
            buttons4.addEventListener("click", () => {
                audio4.play();
        });
    } 
function ani() {
    document.getElementById('f1').style.animation="f1car 5s infinite";
    console.log(document.getElementById('f1'));
}




