

function goMain(btn) {
    const preload_btn = btn;
    const start_page = document.getElementsByClassName('start-page');

    setTimeout(() => { $(start_page).css('opacity', '0'); }, 1000);
    setTimeout(() => { $('.content').css('display', 'block'); }, 3900);
    setTimeout(() => $(start_page).css('display', 'none'), 4000);
    setTimeout(() => { $('.content').css('opacity', '1') }, 4000);
    setTimeout(() => {
        $(document).ready(function () {
            var typed = new Typed('#content-about-text', {
                stringsElement: '#about_text',
                typeSpeed: 100,
                showCursor: false
            });
        });
    }, 6000)
    setTimeout(() => DrowHeart(), 6000);
}

function DrowHeart() {
    var drawPath, paper, pos, renderNodes;

    renderNodes = function (i) {
        var node;
        node = paper.circle(pos[i].x, pos[i].y, Math.random() * 5 + 2);
        return node.attr({
            fill: '#fff'
        });
    };

    drawPath = function (i) {
        var path;
        if (i < pos.length - 1) {
            return path = paper.path("M " + pos[i].x + " " + pos[i].y).attr({
                fill: "transparent",
                stroke: "#fff",
                strokeWidth: 1
            }).animate({
                d: "M " + pos[i].x + " " + pos[i].y + " L " + pos[i + 1].x + " " + pos[i + 1].y + " "
            }, 100, mina.easeInOut, function () {
                renderNodes(i);
                return drawPath(i + 1);
            }).animate({
                stroke: '#c22085'
            }, 500);
        };
    }
    pos = [
        {
            x: 9,
            y: 67
        },
        {
            x: 9,
            y: 139
        },
        {
            x: 32,
            y: 105
        },
        {
            x: 9,
            y: 67
        },
        {
            x: 9,
            y: 139
        },
        {
            x: 51,
            y: 190
        },
        {
            x: 32,
            y: 105
        },
        {
            x: 85,
            y: 96
        },
        {
            x: 9,
            y: 67
        },
        {
            x: 50,
            y: 20
        },
        {
            x: 126,
            y: 16
        },
        {
            x: 93,
            y: 32
        },
        {
            x: 85,
            y: 96
        },
        {
            x: 50,
            y: 20
        },
        {
            x: 95,
            y: 32
        },
        {
            x: 126,
            y: 16
        },
        {
            x: 178,
            y: 59
        },
        {
            x: 85,
            y: 96
        },
        {
            x: 51,
            y: 190
        },
        {
            x: 178,
            y: 315
        },
        {
            x: 155,
            y: 277
        },
        {
            x: 116,
            y: 240
        },
        {
            x: 51,
            y: 190
        },
        {
            x: 85,
            y: 96
        },
        {
            x: 116,
            y: 240
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 85,
            y: 96
        },
        {
            x: 178,
            y: 61
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 230,
            y: 248
        },
        {
            x: 155,
            y: 277
        },
        {
            x: 229,
            y: 248
        },
        {
            x: 178,
            y: 315
        },
        {
            x: 322,
            y: 178
        },
        {
            x: 273,
            y: 204
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 230,
            y: 248
        },
        {
            x: 322,
            y: 178
        },
        {
            x: 355,
            y: 128
        },
        {
            x: 343,
            y: 56
        },
        {
            x: 300,
            y: 16
        },
        {
            x: 235,
            y: 15
        },
        {
            x: 178,
            y: 61
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 235,
            y: 15
        },
        {
            x: 307,
            y: 32
        },
        {
            x: 300,
            y: 16
        },
        {
            x: 307,
            y: 32
        },
        {
            x: 343,
            y: 56
        },
        {
            x: 355,
            y: 128
        },
        {
            x: 307,
            y: 32
        },
        {
            x: 355,
            y: 128
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 307,
            y: 32
        },
        {
            x: 355,
            y: 128
        },
        {
            x: 322,
            y: 178
        },
        {
            x: 204,
            y: 123
        },
        {
            x: 273,
            y: 204
        },
        {
            x: 230,
            y: 248
        },
        {
            x: 116,
            y: 240
        }


    ];

    paper = Snap('#love-js');

    drawPath(0);

};
const sections = document.querySelectorAll("section");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const navLinks = document.querySelectorAll('.nav-link');
const anchors = document.querySelectorAll('.content-navigation a');
const animationDuration = 1500;
let activeLiIndex;
let lastTime = 0;
let index = 0;
const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const toggleText = (index, state) => {
    if (state === 'show') {
        sections[index].querySelector('.content-text').classList.add('show');
        if(is_safari){
            sections[index].querySelector('.content-text').classList.remove('hide-top');
        }
        setTimeout(() => navLinks[index].classList.add('active'), 500);

    } else {
        sections[index].querySelector('.content-text').classList.remove('show');
        if(is_safari){
            sections[index].querySelector('.content-text').classList.add('hide-top');
        }
        setTimeout(() => navLinks[index].classList.remove('active'), 500);
    }
}
toggleText(0, 'show');
nextBtn.addEventListener('click', () => {
    if (index == 3) {
        toggleText(3, 'hide');
        index = 0;
        toggleText(0, 'show');
        if(!is_safari){
            sections[0].scrollIntoView({ behavior: 'smooth' });
            return;
        }
        setTimeout(()=>  sections[0].scrollIntoView({ behavior: 'smooth' }),550);
        return;
    }
    toggleText(index, 'hide');
    index++;
    sections.forEach((section, i) => {
        if (i === index) {
            toggleText(i, 'show');
            if(!is_safari){
                section.scrollIntoView({ behavior: 'smooth' })
                return;
            }
            setTimeout(()=>  section.scrollIntoView({ behavior: 'smooth' }),550);
            return;
        }
    })
}
)
prevBtn.addEventListener('click', () => {
    if (index == 0) {
        toggleText(0, 'hide');
        index = 3;
        toggleText(3, 'show');
        if(!is_safari){
            sections[3].scrollIntoView({ behavior: 'smooth' })
            return;
        }
        setTimeout(()=>  sections[3].scrollIntoView({ behavior: 'smooth' }),550);
        return;
    }
    toggleText(index, 'hide');
    index--;
    sections.forEach((section, i) => {
        if (i === index) {
            toggleText(i, 'show');
            if(!is_safari){
                section.scrollIntoView({ behavior: 'smooth' });
                return;
            }
            setTimeout(()=>  section.scrollIntoView({ behavior: 'smooth' }),550);
            return;
            
            
        }
    })
}
)

window.addEventListener('keydown', (e) => {
    const currentTime = new Date().getTime();
    navLinks.forEach((content_li, i) => {
        if (content_li.classList.contains('active')) {
            activeLi = content_li;
            activeLiIndex = i;
        }
    })
    if (e.keyCode === 38) {
        if (currentTime - lastTime < animationDuration) {
            e.preventDefault();
            return;
        }
        setTimeout(() => navLinks[activeLiIndex].classList.remove('active'), 500);
        const prevBtnClick = new Event('click');
        prevBtn.dispatchEvent(prevBtnClick);
    }
    if (e.keyCode === 40) {
        if (currentTime - lastTime < animationDuration) {
            e.preventDefault();
            return;
        }
        setTimeout(() => navLinks[activeLiIndex].classList.remove('active'), 500);
        const nextBtnClick = new Event('click');
        nextBtn.dispatchEvent(nextBtnClick);
    }
    lastTime = currentTime;
})
$('.content-navigation a').click(function (e) {
    e.preventDefault();
});
window.addEventListener('wheel', (e) => {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();
    navLinks.forEach((content_li, i) => {
        if (content_li.classList.contains('active')) {
            activeLi = content_li;
            activeLiIndex = i;
        }
    })
    if (currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
    }
    if (delta < 0) {
        setTimeout(() => navLinks[activeLiIndex].classList.remove('active'), 500);
        const nextBtnClick = new Event('click');
        nextBtn.dispatchEvent(nextBtnClick);
    }
    else {
        setTimeout(() => navLinks[activeLiIndex].classList.remove('active'), 500);
        const prevBtnClick = new Event('click');
        prevBtn.dispatchEvent(prevBtnClick);
    }

    lastTime = currentTime;
}, { passive: false });

function navMoveTo(anch) {
    navLinks.forEach((content_li, i) => {
        if (content_li.classList.contains('active')) {
            activeLi = content_li;
            activeLiIndex = i;
        }
    })
    anchors.forEach((anchor, i) => {
        if (anchor == anch) {
            setTimeout(() => navLinks[activeLiIndex].classList.remove('active'), 500);
            if(!is_safari){
                sections[i].scrollIntoView({ behavior: 'smooth' })
            }
            setTimeout(()=>  sections[i].scrollIntoView({ behavior: 'smooth' }),550);
            setTimeout(() => navLinks[i].classList.add('active'), 500);
            toggleText(activeLiIndex, 'hide');
            toggleText(i, 'show');
            index = i;
        }
    })
}
$('input[type="text"]').on({
    focus: function () {
        $(this).siblings("label").addClass("focused");

    },

    blur: function () {
        tmpval = $(this).val();
        if (tmpval == '') {
            $(this).siblings("label").removeClass("focused");
        }

    }
});
$('textarea').on({
    focus: function () {
        $(this).siblings("label").addClass("focused");

    },

    blur: function () {
        tmpval = $(this).val();
        if (tmpval == '') {
            $(this).siblings("label").removeClass("focused");
        }

    }
});

document.querySelector('input[type="submit"]').onclick = function(e){
    e.preventDefault();
    let name = document.querySelector("input[name='name']");
    let email = document.querySelector("input[name='email']");
    let message = document.querySelector("textarea[name='message']");
    if(name.value === "" || email.value === "" || message.value === ""){
        let data = [name,email,message];
        let emptyData = [];
        data.forEach(item => item.value === "" ?  emptyData.push(item.name) : null);
        Swal.fire({
            title: 'Error!',
            text: ` ${emptyData.join(', ')} is also required`,
            type: 'error',
            confirmButtonText: 'Cool'
          })
    }else{
        Swal.fire(
            'You are welcome!',
            'I will try to answer nearest time. Thanks!',
            'success'
          )
    }
    
      
}
