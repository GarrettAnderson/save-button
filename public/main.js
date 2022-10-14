const saveButton = (e) => {
  // when clicking the button:
      // change the background of the button to red
        // button.style.backgroundColor = 'red';
        // button.style.color = '#fff';

      button.classList.toggle('liked')
      // hide the hollow heart
      const hollowIcon = document.querySelector('.fa-regular')
      const solidIcon = document.querySelector('.solidHeart')
      const loadingIcon = document.querySelector('.fa-spinner-third')
      const save = document.querySelector('.save')
      const saved = document.querySelector('.saved')

      hollowIcon.classList.toggle('hidden')
      save.classList.toggle('hidden')
      saved.classList.toggle('hidden')
      // solidIcon.classList.toggle('hidden')
      // show the loading icon for a certain amount of time
        setInterval(() => { 
          loadingIcon.classList.remove('hidden')
          console.log('set interval triggered')
        }, 1000)
      // show the solid heart
      // solidIcon.classList.toggle('hidden')
}


const button = document.querySelector('button')
button.addEventListener('click', saveButton)

