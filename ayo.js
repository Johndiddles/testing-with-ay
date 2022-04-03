const btnWrapper = document.getElementById("btns");
const clickBtn = document.getElementById("click");

const btnHanlder = (color) => {
  btnWrapper.style.backgroundColor = color;
};

function setButtons() {
  const count = 3;
  const colors = ["red", "blue", "green"];
  let btnArray = [];

  //create and insert buttons into the button container buttons
  for (let i = 0; i < count; i++) {
    console.log(count);
    btnWrapper.innerHTML += `<button class="newButtons">check ${i}</button>`;
  }

  //fetch buttons and push to btnArray
  const newBtns = document.getElementsByClassName("newButtons");
  for (let i = 0; i < newBtns.length; i++) {
    btnArray.push([`btn${i}`, colors[i], newBtns[i]]);
  }

  console.log(btnArray);

  //iterate over btnArray
  btnArray.forEach((btn) => {
    //   assign event listerner to buttons
    btn[2].addEventListener("click", function () {
      btnWrapper.style.backgroundColor = btn[1];
    });
  });
}

window.onload = setButtons();
