fetch('data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    let namesArray = document.querySelectorAll('.team_photo_place_name');

    for(let i = 0, length = namesArray.length; i < length; i++) {
        namesArray[i].innerText = data.people[i].name
    }
  })
  .catch(err => {
    console.log(err)
  })


  // Scroll to contacts.
document.querySelector('#contact').addEventListener('click', e => {
  e.preventDefault();
  const mailSection = document.querySelector('.mail');
  mailSection.scrollIntoView({block: 'start', behavior: 'smooth'})
});

document.querySelector('#portfolio').addEventListener('click', e => {
  e.preventDefault();
  const mailSection = document.querySelector('.future');
  mailSection.scrollIntoView({block: 'start', behavior: 'smooth'})
});

document.querySelector('#about_us').addEventListener('click', e => {
  e.preventDefault();
  const mailSection = document.querySelector('.team_boxes');
  mailSection.scrollIntoView({block: 'start', behavior: 'smooth'})
});

document.querySelector('#home').addEventListener('click', e => {
  e.preventDefault();
  const mailSection = document.querySelector('.provide');
  mailSection.scrollIntoView({block: 'start', behavior: 'smooth'})
});