let projects = {
    0: {
        "name": "portfolio_v1",
        "about": "My first portfolio",
        "date": "2018.03.18",
        "link": "http://khantorot.github.io/portfolio_v1/"
    },
    1: {
        "name": "kismod",
        "about": "First web studio",
        "date": "2018.03.10",
        "link": "http://khantorot.github.io/kismod"
    },
    2: {
        "name": "media_xyz",
        "about": "AI just templates",
        "date": "2017.03.13",
        "link": "http://khantorot.github.io/media_xyz"
    },
    3: {
        "name": "atom",
        "about": "Welcome to the hack",
        "date": "2019.02.03",
        "link": "http://khantorot.github.io/atom"
    },
    4: {
        "name": "hilltop",
        "about": "hilltop coffee",
        "date": "2018.11.11",
        "link": "http://khantorot.github.io/hilltop"
    },
    5: {
        "name": "escrow",
        "about": "First project 100$",
        "date": "2018.03.13",
        "link": "http://khantorot.github.io/escrow"
    },
    6: {
        "name": "charity",
        "about": "Fake charity in KG",
        "date": "2018.03.13",
        "link": "http://khantorot.github.io/charity"
    },
    7: {
        "name": "webhost",
        "about": "For free, but easy",
        "date": "2018.03.21",
        "link": "http://khantorot.github.io/webhost"
    },
    8: {
        "name": "wizard",
        "about": "Have not finish, Sorry",
        "date": "2019.03.30",
        "link": "http://khantorot.github.io/wizard"
    },
    9: {
        "name": "IQ",
        "about": "Design is main preority",
        "date": "2019.03.28",
        "link": "http://khantorot.github.io/iq"
    },
    10: {
        "name": "eatpizza",
        "about": "Have not finish, only mob version",
        "date": "2018.03.13",
        "link": "http://khantorot.github.io/eatpizza"
    },
    11: {
        "name": "lucktime",
        "about": "lucktime is much money for free",
        "date": "2020.11.11",
        "link": "http://khantorot.github.io/lucktime"
    },
    12: {
        "name": "mhotel",
        "about": "mhotel 3d",
        "date": "2018.04.09",
        "link": "http://khantorot.github.io/mhotel"
    },
    13: {
        "name": "memoryhack",
        "about": "lose, but eated like n***",
        "date": "2018.02.12",
        "link": "http://khantorot.github.io/memoryhack"
    },
    14: {
        "name": "innovation",
        "about": "f*ck u mr. ministr",
        "date": "2018.02.10",
        "link": "http://khantorot.github.io/innovation"
    },
}


const img_wrap = document.querySelector('.img_wrap');
const info_wrap = document.querySelector('.info_wrap');
const menu_btn = document.querySelector('.menu_btn');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');


if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    img_wrap.style.background = "url(./content/images/revival.jpg)";
    info_wrap.style.background = "url(./content/images/memory_hack.gif)";
    
    menu_btn.addEventListener('click', function(){
        menu.classList.toggle('menu_hide');
        this.classList.toggle('menu_btn_active');
        container.classList.toggle('menu_show');
        (this.classList.contains('menu_btn_active')) ? this.innerHTML = 'close' : this.innerHTML = 'info';
    })
} else {
    document.querySelector('.menu').addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('menu__item-inner')) {
            let keyID = e.target.getAttribute('data-atr');
            img_wrap.style.background = "url(./content/images/" + projects[keyID].name + ".jpg)";
            info_wrap.innerHTML = '<h4>' + projects[keyID].name + '</h4><p>' + projects[keyID].about + '</p><span>' + projects[keyID].date + '</span><a href="'+ projects[keyID].link +'" target="_blank">view</a>';
        }
    })
    img_wrap.style.background = "url(./content/images/" + projects[0].name + ".jpg)";
    info_wrap.innerHTML = '<h4>' + projects[0].name + '</h4><p>' + projects[0].about + '</p><span>' + projects[0].date + '</span><a href="'+ projects[0].link +'" target="_blank">view</a>';
}



showPage()

function showPage() {
    let out_menu = '';
    let out_img = '';
    for (key in projects) {
        out_menu += '<div class="menu__item"><a class="menu__item-inner" data-atr="' + key + '" target="_blank" href="'+ projects[key].link +'">' + projects[key].name + '</a></div>';

        out_img += ' <img class="content__img" src="./content/images/' + projects[key].name + '.jpg" alt="" />';
    }
    document.querySelector('.menu').innerHTML = out_menu;
    document.querySelector('.content').innerHTML = out_img;
}