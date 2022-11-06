const hamburger = document.getElementsByClassName('burger-container');
const menu = document.querySelectorAll('.mens');
const sections = document.querySelectorAll('section');
const xmark1 = document.getElementById('xmark-container');

hamburger[0].addEventListener('click', () => {
  for (let i = 0; i < hamburger.length; i += 1) {
    menu[i].style.display = 'grid';

    for (let i = 0; i < sections.length; i += 1) {
      sections[i].style.display = 'none';
    }
  }
});

xmark1.addEventListener('click', () => {
  for (let i = 0; i < hamburger.length; i += 1) {
    menu[i].style.display = 'none';

    for (let i = 0; i < sections.length; i += 1) {
      sections[i].style.display = 'block';
    }
  }
});

const performer = document.getElementById('percontainer');
const featuredPerformers = [
  {
    id: 0,
    name: 'Micheal Jackson',
    featuredImage: 'Images/micheal-jackson.png',
    status: 'The King Of Pop',
    acheievements: 'He his renowned has one of the greatest musicians of all times, he started his singing career when he was eight years ago. Micheal has gone all over the world to perform and his followers are increasing on a daily basis.',
  },
  {
    id: 1,
    name: '2 Pac Shakur',
    featuredImage: 'Images/2pac.png',
    status: 'The Rapper King',
    acheievements: 'He his Awarded has one of the greatest Rapper of all times, he started his singing career when he was eight years ago. Micheal has gone all over the world to perform and his followers are increasing on a daily basis.',
  },
  {
    id: 2,
    name: 'Eminem Stanley',
    featuredImage: 'Images/Eminem.png',
    status: 'The Fastest Rapper',
    acheievements: 'He his Awarded has one of the Fastest Rapper of all times, he started his singing career when he was eight years ago. Micheal has gone all over the world to perform and his followers are increasing on a daily basis.',
  },
];

function theperformers() {
  let performers = '';
  featuredPerformers.forEach((performer) => {
    performers += `<div class="speaker">
                <img id="speaker-photo" src="${performer.featuredImage}" alt="">
            <div class="about">
                <h3>${performer.name}</h3>
                <p class="status">${performer.status}</p>
                <div class="liner">
                   <div class="gray-line">.</div>
                 </div>
                <p class="achievements">${performer.acheievements}</p>
            </div>
        </div> `;
  });

  performer.innerHTML = performers;
}
theperformers();