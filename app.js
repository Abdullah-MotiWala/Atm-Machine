const drawBtn = document.querySelector(".withDraw");
notes = [500, 100, 50, 20, 10, 5, 1];

drawBtn.addEventListener("click", findNote);
//funcition to find notes
function findNote() {
  //taking user input
  let amount,
    total = 0;
  let input = document.querySelector(".amount").value;
  let prefCur = document.querySelector(".notes").value;
  //   chekcing if user put more than allowed amount
  if (input > 100000) {
    alert("Out of Limit Amount");
  } else {
    let disNotes = Math.floor(input / prefCur);
    if (disNotes > 200) {
      disNotes = 200;
    }
    //distributing prefer note amount
    distributedAmount = disNotes * prefCur;
    total += distributedAmount;
    console.log(`${prefCur}: ${disNotes} = ${distributedAmount}`);

    input = input - distributedAmount;
    //non prefer remain note amount
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] != prefCur) {
        if (input == 0) {
          break;
        }
        disNotes = Math.floor(input / notes[i]);
        if (disNotes == 0) {
          continue;
        }
        amount = notes[i] * disNotes;
        total += amount;
        console.log(`${notes[i]}: ${disNotes} = ${amount} `);
        distributedAmount = disNotes * notes[i];
        input = input - distributedAmount;
      }
    }
    //total amount
    console.log(`Total Amout : ${total}`);
  }
}
