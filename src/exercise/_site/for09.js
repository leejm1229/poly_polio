let star = '*';
let space = " ";
let starcnt = 1;
let spacecnt = 9;

while (true) {
    if (starcnt == 6) {
    starcnt = 1;
    spacecnt = 1;
    break;
}

if (starcnt == 5) {
    console.log(star.repeat(starcnt) + '?' + star.repeat(starcnt));
} else {
    console.log(star.repeat(starcnt) + space.repeat(spacecnt) + star.repeat(starcnt));
}

starcnt++;
spacecnt -= 2;
}

for (starcnt = 4; starcnt >= 0; starcnt--, spacecnt++) {
    console.log(space.repeat(spacecnt) + star.repeat(starcnt) + '?' + star.repeat(starcnt) + space.repeat(spacecnt))
}