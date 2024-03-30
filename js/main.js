
window.addEventListener("load", function() {
    truncateTitle();
});

function truncateTitle() {
    let cardList = document.querySelectorAll('#myTabContent .card .card-title')
    cardList.forEach((item,index) => {
        const text = item.innerHTML;
        const newString = truncateString(text, 30)
        item.innerHTML = newString;
    })
}

function truncateString(str, num) {
    if(str.length > num) {
       return str = str.slice(0,num) + "...";
    } else {
        return str;
    }
};

