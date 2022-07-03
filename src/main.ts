import './style.css'

type Email = {
  from: string,
  header: string,
  content: string,
  emailAddress: string,
  img: string,
  read: boolean
}

type State = {
  emails: Email[]
}

const state = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}

function renderSingleEmail() {

  let mainSection = document.querySelector('main')
  mainSection.textContent = ''
  // <section class="single-email">
  // <button class="single-email__button">⬅Back</button>
  // <div class="single-email__sender-section">
  //  <img class="single-email__image" src="assets/nico.JPG" />
  //  <span class="single-email__sender">Nico (nico@email.com)</span>
  //</div>
  //<h1 class="single-email__header">Link to today's video and slides is up!</h1>
  //<p class="single-email__content">
  //Link is up and you know where to find it! Lorem ipsum dolor sit amet
  //consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis
  //incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a
  //architecto earum voluptatibus vel atque.
  //</p>
  //</section>
  

  let emailSectionEl = document.createElement('section')
  emailSectionEl.className = 'single-email'

  let emailButtonEl = document.createElement('button')
  emailButtonEl.className = 'single-email__button'
  emailButtonEl.textContent = '⬅Back'

  let emailDivEl = document.createElement('div')
  emailDivEl.className = 'single-email__sender-section'

  let emailImageEl = document.createElement('img')
  emailImageEl.className = 'single-email__image'
  emailImageEl.src = "assets/nico.JPG"

  let spanEl = document.createElement('span')
  spanEl.className = 'single-email__sender'
  spanEl.textContent = 'Nico (nico@email.com)'

  let emailH1El = document.createElement('h1')
  emailH1El.className = 'single-email__header'
  emailH1El.textContent = "Link to today's video and slides is up!"

  let emailPEl = document.createElement('p')
  emailPEl.className = 'single-email__content'
  emailPEl.textContent = " Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum aarchitecto earum voluptatibus vel atque."

  emailDivEl.append(emailImageEl, spanEl)
  emailSectionEl.append(emailButtonEl, emailDivEl, emailH1El, emailPEl)

  mainSection.append(emailSectionEl)

}

function renderEmailList() {
  let mainSection = document.querySelector('main')
  mainSection.textContent = ''

  //<h1>Inbox</h1>
  //<ul class="emails-list">
  // <li class="emails-list__item">
  // <span class="emails-list__item__read-icon material-symbols-outlined">
  // mark_email_unread
  //</span>
  // <img class="emails-list__item__image" src="assets/nico.JPG" />
  // <p class="emails-list__item__from">Nico</p>
  // <p class="emails-list__item__content">
  //   Link to today's video and slides is up!
  // </p>
  // </li>
  //</ul>
 

  let listH1El =document.createElement('h1')
  listH1El.className='emails-list'
  listH1El.textContent='Inbox'

  let listUlEl=document.createElement('ul')
  listUlEl.className='emails-list'

  for( let email of state.emails){

  let listLiEl=document.createElement('li')
  listLiEl.className='emails-list__item'
 
  if(email.read) listLiEl.classList.add('read')

  let listSpanEl=document.createElement('span')
  listSpanEl.className='emails-list__item__read-icon material-symbols-outlined'
  
  if(email.read) listSpanEl.classList.add('read')

  let listImageEl=document.createElement('img')
  listImageEl.className='emails-list__item__image'
  listImageEl.src= email.img

  let listPEl=document.createElement('p')
  listPEl.className='emails-list__item__from'
  listPEl.textContent=email.from

  let listPE2=document.createElement('p')
  listPE2.className='emails-list__item__content'
  listPE2.textContent=email.header

  listLiEl.append(listSpanEl ,listImageEl, listPEl, listPE2)
  listUlEl.append(listLiEl)

  mainSection.append(listUlEl)

}}

renderEmailList()



