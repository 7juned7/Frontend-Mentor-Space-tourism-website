
const crew = [
  {
    name: "Douglas Hurley",
    images: "./assets/crew/image-douglas-hurley.png"   ,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    name: "Mark Shuttleworth",
    images: "./assets/crew/image-mark-shuttleworth.png",

    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
  name: "Victor Glover",
    images:"./assets/crew/image-victor-glover.png",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    name: "Anousheh Ansari",
    images:"./assets/crew/image-anousheh-ansari.png",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]
const tech = [
  {
    name: "Launch vehicle",
    images: "./assets/technology/image-launch-vehicle-portrait.jpg",
 description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: "./assets/technology/image-spaceport-portrait.jpg" ,
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    name: "Space capsule",
    images: "./assets/technology/image-space-capsule-portrait.jpg",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]
const btn = document.querySelectorAll(".dot-indicators div");
const text = document.querySelector(".crew-main")
const techText = document.querySelector(".tech-page")
const techBtn = document.querySelectorAll(".circle")

console.log(techText)
techBtn.forEach((element,index) => {
  
  element.addEventListener("Onclick",()=>{
    
    console.log("good")
    techText.innerHTML= displayDataTech[index];
     console.log(techText.innerHTML);

  
  })
});

btn.forEach((element,index) => {
  
    element.addEventListener("click",()=>{
      
      
      text.innerHTML= displayData[index];
       console.log(text.innerHTML);
  
    
    })
});



    let displayData  = crew.map(function(item){
       return ` 
       <div class="crew-left-side ">
         
        <div class="title ">
         <h2><span>01</span>MEET YOUR CREW</h2
           > </div>
         <div class="about-crew">
           <h3>${item.role}</h3>
           <h2>${item.name}</h2>
           <p> ${item.bio}</p>
         </div>
       
   
         
       </div>
       <div class="crew-right-side">
         <div>
           <img src=${item.images} alt="">
         </div>
       </div>
     `
    });

    let displayDataTech = tech.map(function(item){
      return`<div class="left-side">
      <h2><span>${item.id}</span>Space Launch</h2>
      <div class="left-content">
      <div class="tech-nav">
      
      <button class="circle">1</button>
      <button class="circle">2</button>
      <button class="circle">3</button>

   
   </div>
        <div class="about-tech">
          <h2> The terminology...</h2>
          <h1>${item.name}</h1>
          <p> ${item.description}</p>
        </div>
      </div>
    </div>
    <div class="rigth-side">
      <img src=${item.images} alt="">
    </div>`
    })
   
    




