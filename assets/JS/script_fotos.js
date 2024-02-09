let box1 = document.querySelector('.box1');
            window.addEventListener('mousemove', function (e) {
                let x = e.clientX / 3;
                box1.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
            });
