function drawCaroTable(colrow) {
    let str = '';

    for (let i = 0; i < colrow; i++) {
        str += `<div class="divrow">`;

        for (let k = 0; k < colrow; k++) {
            let parity = i % 2 === 0 
                ? (k % 2 === 0 ? 'even signxo' : 'odd signxo') 
                : (k % 2 === 0 ? 'odd signxo' : 'even signxo');

            // if (i % 2 === 0) {
            //     if (k % 2 === 0) {
            //         parity = 'even';
            //     }
            //     else {
            //         parity = 'odd';
            //     }
            // }
            // else {
            //     if (k % 2 === 0) {
            //         parity = 'odd';
            //     }
            //     else {
            //         parity = 'even';
            //     }
            // }
            str += `<div class="${parity}"></div>`;
        }
        str += `</div>`;
    }
    
    return str;
}
