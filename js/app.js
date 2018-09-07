document.addEventListener('DOMContentLoaded', function () {

    var allImg = document.querySelectorAll('img');
    var hideBtn = document.getElementById('hideButton');
    var showBtn = document.getElementById('showButton');
    var toInput = document.getElementById('tagInput');

    //   console.log(allImg);
    //  console.log(hideBtn);
    //   console.log(showBtn);
    //  console.log(toInput);


    showBtn.addEventListener('click', function () {
        var text = toInput.value;
        toInput.value = "";

        for (i = 0; i < allImg.length; i++) {
            // console.log(allImg[i].dataset.tag);

            if (allImg[i].dataset.tag.indexOf(text) < 0) {
                allImg[i].classList.add('invisible');
            } else {
                allImg[i].classList.remove('invisible');
            }
        }


    });

    hideBtn.addEventListener('click', function () {

        var text = toInput.value;
        toInput.value = "";

        for (i = 0; i < allImg.length; i++) {
            //  console.log(allImg[i].dataset.tag);

            if (allImg[i].dataset.tag.indexOf(text) >= 0) {
                allImg[i].classList.add('invisible');
            } else {
                allImg[i].classList.remove('invisible');
            }
        }
    });

});

