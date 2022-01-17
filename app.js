const drawBtn = document.querySelector(".withDraw");
notes = [500, 100, 50, 20, 10, 5, 1];

drawBtn.addEventListener("click", findNote)


function findNote() {
    let amount, total = 0;
    let input = document.querySelector(".amount").value
    let prefCur = document.querySelector(".notes").value;
    // let index = notes.indexOf(+prefCur);
    let disNotes = Math.floor(input / prefCur);
    if (disNotes > 200) {
        disNotes = 200
    }
    distributedAmount = disNotes * prefCur
    total += distributedAmount
    console.log(`${prefCur}: ${disNotes} = ${amount}`)

    input = input - distributedAmount;
    for (let i = 0; i < notes.length; i++) {
        if (input == 0) {
            break;
        }
        disNotes = Math.floor(input / notes[i]);
        if (disNotes == 0) {
            continue;
        }
        amount = notes[i] * disNotes
        total += amount
        console.log(`${notes[i]}: ${disNotes} = ${amount} `)
        distributedAmount = disNotes * notes[i]
        input = input - distributedAmount;
    }

    //total amount 
    console.log(`Total Amout : ${total}`)
}