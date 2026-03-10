document.getElementById('analyzeBtn').addEventListener('click', analyzeText);

function analyzeText() {
    const outputDiv = document.getElementById('output');
    let text = document.getElementById('userText').value;

    if (!text) {
        outputDiv.innerHTML = "<p>Please enter some text!</p>";
        return;
    }

    text = text.replace(/[,?.!:;]/g, "").toLowerCase();
    const arraytext = text.split(" ").filter(word => word !== "");
    let count = arraytext.length;

    let theBiggestWord = "";
    let theSmallestWord = arraytext[0];
    let repeatedWordsHTML = "";

    for (let x = 0; x < arraytext.length; x++) {
        if (arraytext.indexOf(arraytext[x]) !== x) continue;

        let repeatedWordCount = 0;
        for (let v of arraytext) {
            if (arraytext[x] === v) repeatedWordCount++;
            if (v.length > theBiggestWord.length) theBiggestWord = v;
            if (v.length < theSmallestWord.length) theSmallestWord = v;
        }

        if (repeatedWordCount > 1) {
            repeatedWordsHTML += `<p>The word "<strong>${arraytext[x]}</strong>" has been repeated ${repeatedWordCount} times</p>`;
        }
    }

    outputDiv.innerHTML = `
        <p>Total words: <strong>${count}</strong></p>
        <p>Biggest word: <strong>${theBiggestWord}</strong></p>
        <p>Smallest word: <strong>${theSmallestWord}</strong></p>
        ${repeatedWordsHTML}
    `;
}