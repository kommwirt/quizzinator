// The given data

let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Novosibirsk","Barcelona","Reykjavik"],
      answer:"Novosibirsk"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
]

// Where to display the whole content

let content = document.getElementById('content')

// Before Content the intro is desplayed
let bodyTag = document.querySelector('body')
let header = document.createElement('header')
bodyTag.insertBefore(header, content)

let h1 = document.createElement('h1')
let p = document.createElement('p')
let h1Text = document.createTextNode('Bienvenidos to the quizzicator')
let introText = document.createTextNode(`It is easy. You get questions. If you answer them correctamente: You will keep your credit. If not: Guess what: You gonna be rápido kaputt by every wrong answer. After the green button is flashing, please wait: You will be teleported to the next question automatically. Got it?`)
header.appendChild(h1)
header.appendChild(p)

h1.appendChild(h1Text)
p.appendChild(introText)
p.classList.add('introtext')

let buttonKepper = document.createElement('div')
let buttonSi = document.createElement('button')
buttonSi.innerHTML = 'Si, claro, Chef'
let buttonNo = document.createElement('button')
buttonNo.innerHTML = 'No, not really...'
header.appendChild(buttonKepper)
buttonKepper.appendChild(buttonSi)
buttonKepper.appendChild(buttonNo)

buttonSi.addEventListener('click', function(){
    buttonSi.classList.add('green')
    buttonSi.innerHTML = 'So get ready'
    buttonSi.disabled = true;
    setTimeout(
        function scrollToStart() {
            
            let scrollDistance = document.documentElement.clientHeight
            window.scrollBy(0, scrollDistance)
            
        },1000)
})

buttonNo.addEventListener('click', function(){
    buttonNo.classList.add('red')
    buttonNo.innerHTML = 'Are you bananas?'
    
    setTimeout(
        function changeText() {
            let change = document.querySelector('p')
           
           change.innerText ='ເຈົ້າເອົາປຸ່ມຊ້າຍໄປດຽວນີ້ຫລືຂ້ອຍຈະເຮັດໃຫ້ເຈົ້າເປັນເພື່ອນຂອງຂ້ອຍ! ຕອບ ຄຳ ຖາມ! ງ່າຍໆ! ທ່ານສາມາດລຽນແຖວແບບນັ້ນໄດ້ແນວໃດ? ໂລບຫລືຫຍັງ? ແທນທີ່ຈະວຸ່ນວາຍ. ວ່າຄົນແບບນັ້ນຕ້ອງໄດ້ນັ່ງຢູ່ທີ່ນີ້ຕໍ່ ໜ້າ ຄອມພິວເຕີທຸກໆຄັ້ງ. ບໍ່, ຂ້ອຍບໍ່ອຸກໃຈ. ຂ້ອຍບໍ່ອຸກໃຈ ... Better?'
           buttonSi.innerHTML = 'Click that button!'
          let min = 0
           let max = 255
           setInterval(() => {
            let r = (Math.random() * (max - min)) + min;
            let g = (Math.random() * (max - min)) + min;
            let b = (Math.random() * (max - min)) + min;
            let rgb = [r, g, b]
            buttonSi.style.backgroundColor=`rgb(${rgb})`
           }, 500);
        },1000)
        
})

//Preparing a container for the score

let scoreContainer = document.createElement('div')
scoreContainer.classList.add("scorecontainer")
content.appendChild(scoreContainer)
let scoreText = document.createElement('div')
scoreText.classList.add("scoretext")
let scoreScore = document.createElement('div')
scoreScore.classList.add("scorescore")
scoreContainer.appendChild(scoreText)

scoreContainer.appendChild(scoreScore)
scoreText.innerHTML = 'Your credit so far:'

// Getting the starting credit done
let startCredit = 1
let reducedCredit
let rightAnswers = 0
data.forEach((part) => {
  
  rightAnswers++
  part.choice.forEach(i => {
    let endCredit = startCredit++
    reducedCredit = endCredit - rightAnswers
    return reducedCredit
  })
})
scoreScore.innerHTML = reducedCredit

// The Footer

let script = document.querySelector('script')
let footer = document.createElement('footer')
bodyTag.insertBefore(footer, script)
let footerContainer = document.createElement('div')
footerContainer.classList.add("footercontainer")
footer.appendChild(footerContainer)
footerContainer.innerHTML="Not so bad, amigo!"

quiz = () => {

    data.forEach(function(question)
    {
        
        //we build a section for each question
        let section = document.createElement('section')
        content.appendChild(section)

         //We need an image for each section 
        let image = document.createElement('img')
        image.src = question.url
        section.appendChild(image)

         //Get the questions for each section
        let questionText = document.createElement('h2')
        questionText.innerHTML = question.question
        section.appendChild(questionText)
        
        // Preparing a container for the buttons

        let buttonContainer = document.createElement('div')
        buttonContainer.classList.add("buttoncontainer")
        section.appendChild(buttonContainer)
    
        // Creating the answer buttons for each question

        question.choice.forEach(answer => {
            
          
            
            let answerButton = document.createElement('button')
            answerButton.innerHTML = answer
            buttonContainer.appendChild(answerButton)
            
            // Now checking the right answer by click
            answerButton.addEventListener('click' , () =>{
                if (answer == question.answer) {
                    answerButton.classList.add('green')
                    answerButton.disabled = true;
                    setTimeout(
                    function scrollToSomewhere() {
                        
                        let scrollDistance = document.documentElement.clientHeight
                        window.scrollBy(0, scrollDistance)
                        
                    },2000)
                   
                }
                else {
                    answerButton.classList.add('red')
                    reducedCredit--
                    scoreScore.innerHTML = reducedCredit
                    answerButton.disabled = true;
                            
                    if(reducedCredit == 0){
                      footer.scrollIntoView()
                      footerContainer.innerHTML="You have lost! What's wrong with you? Wikepedia? Google? Get back to your fax, pager, whatever... Internet is not your world."
                    }
                    
                }
            })
        })
        
       
})

}
quiz()
