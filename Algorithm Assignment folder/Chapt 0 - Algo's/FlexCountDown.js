function flexible(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

flexible(2, 9, 3);
