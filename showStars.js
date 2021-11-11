showStars(10);

function showStars(rows) {
   
    for (let i = 1; i <= rows; i++){
        let stet = '';
        for (let j = 0; j < i; j++)
            stet += '*';
        console.log(stet);
    }
}