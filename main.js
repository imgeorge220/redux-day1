
// const angry = document.querySelector('#angry');
// const surprised = document.querySelector('#surprised');
// const sparkle = document.querySelector('#sparkle');
// const fallDown = document.querySelector('#fall-down');
// const face = document.querySelector('#face-container');

// angry.addEventListener('click', () => {
//   store.dispatch({ type: 'ANGRY', face: 'ಠ▃ಠ'});
//   face.innerText = store.getState().face;
// })


// surprised.addEventListener('click', () => {
//   store.dispatch({ type: 'SURPRISED', face: '༼⁰o⁰；༽'});
//   face.innerText = store.getState().face;
// })

// sparkle.addEventListener('click', () => {
//   store.dispatch({ type: 'SPARKLE', face: '（☆ω☆*）'});
//   face.innerText = store.getState().face;
// })

// fallDown.addEventListener('click', () => {
//   store.dispatch({ type: 'FALL_DOWN', face: '(ノ_ _)ノ'});
//   face.innerText = store.getState().face;
// })

const angry = document.querySelector('#angry');
const surprised = document.querySelector('#surprised');
const sparkle = document.querySelector('#sparkle');
const fallDown = document.querySelector('#fall-down');
const random = document.querySelector('#random');
const face = document.querySelector('#face-container');

const faces = [
  { face: 'ಠ▃ಠ', color: "red" },
  { face: '༼⁰o⁰；༽', color: "orange" },
  { face: '（☆ω☆*）', color: "pink" },
  { face: '(ノ_ _)ノ', color: "purple" },
]

angry.addEventListener('click', () => {
  store.dispatch({ type: 'ANGRY', face: 'ಠ▃ಠ', color: "red" });
})

surprised.addEventListener('click', () => {
  store.dispatch({ type: 'SURPRISED', face: '༼⁰o⁰；༽', color: "orange" });
})

sparkle.addEventListener('click', () => {
  store.dispatch({ type: 'SPARKLE', face: '（☆ω☆*）', color: "pink" });
})

fallDown.addEventListener('click', () => {
  store.dispatch({ type: 'FALL_DOWN', face: '(ノ_ _)ノ', color: "purple" });
})

random.addEventListener('click', () => {
  const randNum = Math.floor(Math.random()* faces.length);
  store.dispatch({ type: 'RANDOM', ...faces[randNum]});
})

function changeFace() {
  face.innerText = store.getState().face;
  face.style.backgroundColor = store.getState().color;
}

store.subscribe(changeFace);