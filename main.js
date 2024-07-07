const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});

const getElement = (...queries) => document.querySelector(...queries);






// const button1 = getElement(".b1");
// const container1 = getElement(".c1");
// const modal1 = getElement(".m1");
// const tchau1 = getElement(".t1");

// const activeModalClass1 = "modal-show";


// const openModal1 = () => container1.classList.add(activeModalClass1);
// const closeModal1 = () => container1.classList.remove(activeModalClass1);

// button1.addEventListener("click", () => {
//   openModal1();
// });

// container1.addEventListener("click", (event) => {
//   if (modal1.contains(event.target)) return;
//   closeModal1();
// });

// tchau1.addEventListener("click", () => {
//   closeModal1();
//   yesScroll();
// });

// const button2 = getElement(".b2");
// const container2 = getElement(".c2");
// const modal2 = getElement(".m2");
// const tchau2 = getElement(".t2");

// const activeModalClass2 = "modal-show";

// const openModal2 = () => container2.classList.add(activeModalClass2);
// const closeModal2 = () => container2.classList.remove(activeModalClass2);

// button2.addEventListener("click", () => {
//   openModal2();
// });

// container2.addEventListener("click", (event) => {
//   if (modal2.contains(event.target)) return;

//   closeModal2();
// });

// tchau2.addEventListener("click", () => {
//   closeModal2();
// });

// const button3 = getElement(".b3");
// const container3 = getElement(".c3");
// const modal3 = getElement(".m3");
// const tchau3 = getElement(".t3");

// const activeModalClass3 = "modal-show";

// const openModal3 = () => container3.classList.add(activeModalClass3);
// const closeModal3 = () => container3.classList.remove(activeModalClass3);

// button3.addEventListener("click", () => {
//   openModal3();
// });

// container3.addEventListener("click", (event) => {
//   if (modal3.contains(event.target)) return;

//   closeModal3();
// });

// tchau3.addEventListener("click", () => {
//   closeModal3();
// });

// const button4 = getElement(".b4");
// const container4 = getElement(".c4");
// const modal4 = getElement(".m4");
// const tchau4 = getElement(".t4");

// const activeModalClass4 = "modal-show";

// const openModal4 = () => container4.classList.add(activeModalClass4);
// const closeModal4 = () => container4.classList.remove(activeModalClass4);

// button4.addEventListener("click", () => {
//   openModal4();
// });

// container4.addEventListener("click", (event) => {
//   if (modal4.contains(event.target)) return;

//   closeModal4();
// });

// tchau4.addEventListener("click", () => {
//   closeModal4();
// });




const button5 = getElement(".b5");
const container5 = getElement(".c5");
const modal5 = getElement(".m5");
const tchau5 = getElement(".t5");
const video = getElement(".video")

video.volume = 0.7;

const activeModalClass5 = "modal-show";

const openModal5 = () => container5.classList.add(activeModalClass5);
const closeModal5 = () => container5.classList.remove(activeModalClass5);
const pauseVideo = () => video.pause();
const playVideo = () => video.play();

button5.addEventListener("click", () => {
  openModal5();
  playVideo();
});

container5.addEventListener("click", (event) => {
  if (modal5.contains(event.target)) return;

  closeModal5();
  pauseVideo();
});

tchau5.addEventListener("click", () => {
  closeModal5();
  pauseVideo();
});