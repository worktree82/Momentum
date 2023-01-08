const clockTitle = document.querySelector("#christmas h2");

function getToday() {
    const date = new Date();

    const today = {
        time : date.getTime(),
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
    }

    return today;
}

function getChristmasEve() {
    const date = new Date(2023,11,25);

    const christmasEve = {
        time : date.getTime()
    }

    return christmasEve;
}

function showUntilChristmasEve() {
    const today = getToday();
    const christmasEve = getChristmasEve();

    const calculateForDays = 1000 * 60 * 60 * 24;
    const differenceOfDays = Math.floor((christmasEve.time - today.time) / calculateForDays);

    clockTitle.innerText = `D-${differenceOfDays}`;
}

showUntilChristmasEve();
setInterval(showUntilChristmasEve, 1000);