const images = [
    {
        src: '../images/project-image.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        area: 81,
        time: 3.5,
        srcC: '../icons/left-c.svg'
    },
    {
        src: '../images/project-image2.png',
        city: 'Sochi<br>Thieves',
        area: 105,
        time: 4,
        srcC: '../icons/mid-c.svg'
    },
    {
        src: '../images/project-image3.png',
        city: 'Rostov-on-Don<br>Patriotic',
        area: 93,
        time: 3,
        srcC: '../icons/right-c.svg'
    }
];

const cityNode = document.querySelector('#js-city');
const areaNode = document.querySelector('#js-area');
const timeNode = document.querySelector('#js-time');
const imgNode = document.querySelector('.js-img');
const circleNode = document.querySelector('#js-circle');
const titleNode1 = document.querySelector('#js-title-1');
const titleNode2 = document.querySelector('#js-title-2');
const titleNode3 = document.querySelector('#js-title-3');

function setTitleNode1() {
    titleNode1.style.color = '#E3B873';
    titleNode2.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode3.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode1.style.borderBottomWidth = '1px';
    titleNode2.style.borderBottomWidth = '0px';
    titleNode3.style.borderBottomWidth = '0px';
}

function setTitleNode2() {
    titleNode1.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode2.style.color = '#E3B873';
    titleNode3.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode1.style.borderBottomWidth = '0px';
    titleNode2.style.borderBottomWidth = '1px';
    titleNode3.style.borderBottomWidth = '0px';   
}

function setTitleNode3() {
    titleNode1.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode2.style.color = 'rgba(255, 255, 255, 0.3)';
    titleNode3.style.color = '#E3B873';
    titleNode1.style.borderBottomWidth = '0px';
    titleNode2.style.borderBottomWidth = '0px';
    titleNode3.style.borderBottomWidth = '1px';
}

setTitleNode1();

const setEntity = (index) => {
    cityNode.innerHTML = images[index].city;
    areaNode.innerHTML = images[index].area + " m2";
    timeNode.innerHTML = images[index].time + " months";
    imgNode.src = images[index].src;
    circleNode.src = images[index].srcC;
    if (index == 0) {
        setTitleNode1();
    } else if (index == 1) {
        setTitleNode2();
    } else if (index == 2) {
        setTitleNode3();
    }
};

const prev = document.getElementById('js-prev');
const next = document.getElementById('js-next');
let currentIndex = 0;

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
});

next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
});
