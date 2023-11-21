const dataList = document.getElementById('data-list');
const selectWinnerButton = document.getElementById('select-winner-button');
const winnersList = document.getElementById('winners-list');
const countdown = document.getElementById('countdown');
let data = [];

let winners = [];

function renderDataList() {
    dataList.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.textContent = data[i];
        dataList.appendChild(li);
    }
}

function renderWinnersList() {
    winnersList.innerHTML = '';
    for (let i = 0; i < winners.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1}.Kazanan: ${winners[i]}`;
        winnersList.appendChild(li);
    }
}

selectWinnerButton.addEventListener('click', () => {
    if (data.length > 0) {
        if (winners.length < 5) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedWinner = data[randomIndex];
            winners.push(selectedWinner);
            data.splice(randomIndex, 1);
            renderDataList();
            renderWinnersList();
        }
    }
});

data = ["Veri 1", "Veri 2", "Veri 3", "Veri 4", "Veri 5", "Veri 6", "Veri 7", "Veri 8", "Veri 9", "Veri 10", "Veri 11", "Veri 12", "Veri 13", "Veri 14", "Veri 15", "Veri 16", "Veri 17", "Veri 18", "Veri 19", "Veri 20", "Veri 21", "Veri 22"];
renderDataList();
