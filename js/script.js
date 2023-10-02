document.addEventListener('DOMContentLoaded', () => {
    const quizSliders = document.querySelectorAll('.quiz__slide'),
          quiz = document.querySelector('.quiz__container'),
          sex = document.querySelectorAll('.choose-sex button'),
          skin = document.querySelectorAll('.quiz__container .quiz__slide .choose__container .choose__item'),
          input = document.querySelector('.quiz__container .quiz__slide .input button'),
          inputText = document.querySelector('.quiz__container .quiz__slide .input input');

    let i = 0;

    const slide = (index) => {
        quizSliders.forEach(item => item.classList.remove('active'));

        quizSliders[index].classList.add('active');
        if (i >= quizSliders.length - 1) {
            i = index = quizSliders.length - 1;
        }else{
            i++;
        }
    }

    slide(i);

    quizSliders.forEach(item => {
        item.addEventListener('dblclick', (e) => {
            if (i !== 1 && i !== 2 && i !== 6 && i !== 7 && i !== 8 &&
                e.target !== document.querySelector('.choose-body') &&
                !document.querySelector('.choose-body').contains(e.target) &&
                e.target !== document.querySelector('.choose-body.body') &&
                !document.querySelector('.choose-body.body').contains(e.target) &&
                e.target !== document.querySelector('.choose-year') &&
                !document.querySelector('.choose-year').contains(e.target)
                ) {
                slide(i);
            }
        })
    })

    sex.forEach(item => {
        item.addEventListener('click', () => {
            slide(i);
        })
    })

    skin.forEach(item => {
        item.addEventListener('click', () => {
            slide(i);
        })
    })

    input.addEventListener('click', () => {
        slide(i);
    });

    inputText.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            slide(i);
        }
    });




    //score years
    const scoreBtns = document.querySelectorAll('.quiz__container .quiz__slide .choose-year button'),
          prev = scoreBtns[0], next = scoreBtns[1],
          score = document.querySelector('.quiz__container .quiz__slide .choose-year span');

    let scoreIndex = 1;

    next.addEventListener('click', () => {
        changeScore('+', scoreIndex);
    })
    prev.addEventListener('click', () => {
        changeScore('-', scoreIndex);
    })

    const changeScore = (method) => {
        if (method == '+') {
            scoreIndex++;
        }else{
            scoreIndex--;
        }

        if (scoreIndex >= 18) {
            scoreIndex = 18;
        }
        if (scoreIndex <= 1) {
            scoreIndex = 1;
        }

        score.textContent = scoreIndex;
    }


    //change body
    changeBody('.quiz__container .quiz__slide .choose-body .person', '.quiz__container .quiz__slide .choose-body button:last-child', '.quiz__container .quiz__slide .choose-body button:first-child', 'height', '320px');
    changeBody('.quiz__container .quiz__slide .choose-body.body .person', '.quiz__container .quiz__slide .choose-body.body button:first-child', '.quiz__container .quiz__slide .choose-body.body button:last-child', 'width', '320px');
    function changeBody(personSelector, lessSelector, moreSelector, body, start) {
        const person = document.querySelector(personSelector),
              less = document.querySelector(lessSelector),
              more = document.querySelector(moreSelector),
              delta = 20;
        let sizeIndex = 0;

        less.addEventListener('click', () => {
            changeSize('-');
        })

        more.addEventListener('click', () => {
            changeSize('+');
        })

        const changeSize = (method) => {
            if (method == '+') {
                sizeIndex++;
            }else{
                sizeIndex--;
            }

            if (sizeIndex >= 5) {
                sizeIndex = 5;
            }

            if (sizeIndex <= -5) {
                sizeIndex = -5
            }

            person.style[body] = `calc(${start} + ${delta * sizeIndex}px)`
        }
    }

    //first page
    const title = document.querySelector('h2'),
          span = title.querySelectorAll('span');

    const animateText = () => {
        index = 0;
        const int = setInterval(() => {
            if (index > span.length - 1) {
                clearInterval(int);
            }else{
                span[index].style.top = '100vh';
                index++;
            }
        }, 100);

        setTimeout(() => {
            slide(1);
        }, 1500);
    }

    quizSliders[0].addEventListener('click', () => {
        animateText();
    })

})
