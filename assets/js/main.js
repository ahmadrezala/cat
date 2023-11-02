const selftoggle = document.querySelector('.toggle');
const intoggle = document.querySelector('.toggle>div')
const sky = document.querySelector('.window')
const sunn = document.querySelector('.sunn')
const moon = document.querySelector('.mooon')
const eyes = document.querySelectorAll('.eyes')
const cat = document.querySelector('.cat')
const twoeyes = document.querySelectorAll('.twoeye')



selftoggle.addEventListener("click", () => {

    intoggle.classList.toggle('toggle-time');
    sky.classList.toggle('sky-night');
    sunn.classList.toggle('sundown')
    moon.classList.toggle('moonup')

    eyes.forEach((eye) => {
        eye.classList.toggle('groweyes')
    })

})



cat.addEventListener('mouseenter' , () => {
    cat.classList.toggle('catdown');

    if( !sky.classList.contains('sky-night')){
       twoeyes.forEach((twoeye)=>{
           twoeye.classList.toggle('close-eye')

       })
    }
})
cat.addEventListener('mouseleave' , () => {
    cat.classList.toggle('catdown');
    if( !sky.classList.contains('sky-night')){
        twoeyes.forEach((twoeye)=>{
            twoeye.classList.toggle('close-eye')
 
        })
     }
})