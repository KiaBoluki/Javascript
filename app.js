const animalsEl = document.getElementById('animals')
const titleEl = document.getElementById('title');
const descEl = document.getElementById('desc');
const imgEl = document.getElementById('image');


animalsEl.addEventListener('change' , () => {
    const animal = animalsEl.value ; 

    if ( animal == 'lion' )
    {
        imgEl.src = 'images/lion.jpg'
        titleEl.innerHTML = 'Lion'; 
        descEl.innerHTML = "This is lion a big wild animal who kills another animals and eat them. he also knowns as the king of the jungle.";
    }
    else if ( animal == 'tiger' )
    {
        imgEl.src = 'images/tiger.jpg'
        titleEl.innerHTML = 'Tiger'; 
        descEl.innerHTML = "The tiger, scientifically known as Panthera tigris, is a magnificent and awe-inspiring carnivorous mammal that belongs to the Felidae family. Renowned for its majestic appearance and powerful presence, the tiger is the largest of all big cats and an apex predator in its natural habitat. Strikingly adorned with a coat of distinct orange fur marked with dark stripes, the tiger's camouflage and stealthy nature make it an excellent hunter. Native to various regions of Asia, from dense jungles to grasslands, the tiger's territory spans across diverse landscapes. Sadly, due to habitat loss, poaching, and illegal trade, many tiger subspecies are critically endangered, making their conservation an urgent global concern. Resilient and iconic, the tiger remains a symbol of strength and conservation efforts to protect this magnificent species are vital for preserving the world's biodiversity.";
    }
})