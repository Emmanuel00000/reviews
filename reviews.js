const arr = [
    {
        picture: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg',
        name: 'john smith',
        job: 'web developer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque aperiam. Sunt dolore laudantium iusto ducimus officiis autem odit architecto saepe, aut eius impedit, explicabo rem quod eaque alias ex hic ab dicta iure voluptatum, exercitationem quo voluptas? Ea, voluptatibus!',
    },
    {
        picture: 'https://images.pexels.com/photos/7524682/pexels-photo-7524682.jpeg?cs=srgb&dl=pexels-anthony-shkraba-7524682.jpg&fm=jpg',
        name: 'susan pierce',
        job: 'marketing advisor',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque aperiam. Sunt dolore laudantium iusto ducimus officiis autem odit architecto saepe, aut eius impedit, explicabo ',
    },
    {
        picture: 'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?cs=srgb&dl=pexels-trace-constant-2834009.jpg&fm=jpg',
        name: 'mark peterson',
        job: 'event planner',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque aperiam. Sunt dolore laudantium iusto ducimus officiis autem odit architecto saepe, aut eius impedit, explicabo rem quod eaque alias ex hic ab dicta iure voluptatum,!',
    },
    {
        picture: 'https://images.pexels.com/photos/9899387/pexels-photo-9899387.jpeg?cs=srgb&dl=pexels-lucas-alves-9899387.jpg&fm=jpg',
        name: 'jean johnson',
        job: 'branding supervisor',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eaque aperiam. Sunt dolore laudantium iusto ',
    }
];

const arrow1 = document.querySelector('#arrow1');
const arrow2 = document.querySelector('#arrow2');
const photo = document.querySelector('img');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const review = document.querySelector('.review');
let currentItem = 0;

function arrChanger() {
    let item = arr[currentItem];
    photo.src = item.picture;
    name.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
}
window.addEventListener('DOMContentLoaded', arrChanger);
arrow2.addEventListener('click', function () {
    currentItem ++;
    if (currentItem > arr.length - 1) {
        currentItem = 0;
    }
    arrChanger();
});
arrow1.addEventListener('click', function() {
    currentItem --;
    if (currentItem < 0) {
        currentItem = arr.length - 1;
    }
    arrChanger();
});