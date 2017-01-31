function Final(p1, p2, p3, p4) {
    var i = p2
    while (i <= p3) {
        if (i % p1 === 0 && i !== p4) {
            console.log(i);
        }
        i++;
    }
}
Final(3, 5, 17, 9);
