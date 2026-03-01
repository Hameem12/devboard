// Page Linkup
const newPage = document.getElementById('new-page');
newPage.addEventListener("click", function () {
    window.location.href = "faq.html"
})


// Random Color
const theme = document.getElementById('theme');
const body = document.body;
theme.addEventListener("click", function () {

    const randomColor = `
    #${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.body.style.backgroundColor = randomColor;
})


// Title Function
function turnInnertext(one) {
    const TOne = document.getElementById(one);
    return TOne.innerText;
}

// Button Const
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');

// Title for history
const titletextOne = turnInnertext('title-one');
const titletextTwo = turnInnertext('title-two');
const titletextThree = turnInnertext('title-three');
const titletextFour = turnInnertext('title-four');
const titletextFive = turnInnertext('title-five');
const titletextSix = turnInnertext('title-six');



// Non-repeats
const history = document.getElementById('history');
let task = document.getElementById('task');
let convTask = parseInt(task.innerText);
let total = document.getElementById('total');
let convTotal = parseInt(total.innerText);

// Every Button
btnOne.addEventListener("click", function () {
    btnOne.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextOne} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})

btnTwo.addEventListener("click", function () {
    btnTwo.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextTwo} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})

btnThree.addEventListener("click", function () {
    btnThree.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextThree} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})

btnFour.addEventListener("click", function () {
    btnFour.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextFour} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})

btnFive.addEventListener("click", function () {
    btnFive.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextFive} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})

btnSix.addEventListener("click", function () {
    btnSix.disabled = true;
    convTask = convTask - 1;
    task.innerText = convTask;
    convTotal = convTotal + 1;
    total.innerText = convTotal;
    alert('Board Updated Successfully');
    const newEntry = document.createElement('p');
    newEntry.innerText = `Task Completed for ${titletextSix} at ${new Date().toLocaleTimeString()} `
    history.appendChild(newEntry);
    // All tasks Complete warning
    if (btnOne.disabled === true && btnTwo.disabled === true && btnThree.disabled === true && btnFour.disabled === true && btnFive.disabled === true && btnSix.disabled === true) {
        alert('Congratulations, You have completed all tasks😎')
    }
})



// Clear History
const clear = document.getElementById('clear');
clear.addEventListener("click", function () {
    history.innerHTML = '';
});