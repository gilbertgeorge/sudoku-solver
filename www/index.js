import * as solver from "sudoku_solver";

const number11Input = document.getElementById("num11");
const number12Input = document.getElementById("num12");
const number13Input = document.getElementById("num13");
const number14Input = document.getElementById("num14");
const number15Input = document.getElementById("num15");
const number16Input = document.getElementById("num16");
const number17Input = document.getElementById("num17");
const number18Input = document.getElementById("num18");
const number19Input = document.getElementById("num19");

const number21Input = document.getElementById("num21");
const number22Input = document.getElementById("num22");
const number23Input = document.getElementById("num23");
const number24Input = document.getElementById("num24");
const number25Input = document.getElementById("num25");
const number26Input = document.getElementById("num26");
const number27Input = document.getElementById("num27");
const number28Input = document.getElementById("num28");
const number29Input = document.getElementById("num29");

const number31Input = document.getElementById("num31");
const number32Input = document.getElementById("num32");
const number33Input = document.getElementById("num33");
const number34Input = document.getElementById("num34");
const number35Input = document.getElementById("num35");
const number36Input = document.getElementById("num36");
const number37Input = document.getElementById("num37");
const number38Input = document.getElementById("num38");
const number39Input = document.getElementById("num39");

const number41Input = document.getElementById("num41");
const number42Input = document.getElementById("num42");
const number43Input = document.getElementById("num43");
const number44Input = document.getElementById("num44");
const number45Input = document.getElementById("num45");
const number46Input = document.getElementById("num46");
const number47Input = document.getElementById("num47");
const number48Input = document.getElementById("num48");
const number49Input = document.getElementById("num49");

const number51Input = document.getElementById("num51");
const number52Input = document.getElementById("num52");
const number53Input = document.getElementById("num53");
const number54Input = document.getElementById("num54");
const number55Input = document.getElementById("num55");
const number56Input = document.getElementById("num56");
const number57Input = document.getElementById("num57");
const number58Input = document.getElementById("num58");
const number59Input = document.getElementById("num59");

const number61Input = document.getElementById("num61");
const number62Input = document.getElementById("num62");
const number63Input = document.getElementById("num63");
const number64Input = document.getElementById("num64");
const number65Input = document.getElementById("num65");
const number66Input = document.getElementById("num66");
const number67Input = document.getElementById("num67");
const number68Input = document.getElementById("num68");
const number69Input = document.getElementById("num69");

const number71Input = document.getElementById("num71");
const number72Input = document.getElementById("num72");
const number73Input = document.getElementById("num73");
const number74Input = document.getElementById("num74");
const number75Input = document.getElementById("num75");
const number76Input = document.getElementById("num76");
const number77Input = document.getElementById("num77");
const number78Input = document.getElementById("num78");
const number79Input = document.getElementById("num79");

const number81Input = document.getElementById("num81");
const number82Input = document.getElementById("num82");
const number83Input = document.getElementById("num83");
const number84Input = document.getElementById("num84");
const number85Input = document.getElementById("num85");
const number86Input = document.getElementById("num86");
const number87Input = document.getElementById("num87");
const number88Input = document.getElementById("num88");
const number89Input = document.getElementById("num89");

const number91Input = document.getElementById("num91");
const number92Input = document.getElementById("num92");
const number93Input = document.getElementById("num93");
const number94Input = document.getElementById("num94");
const number95Input = document.getElementById("num95");
const number96Input = document.getElementById("num96");
const number97Input = document.getElementById("num97");
const number98Input = document.getElementById("num98");
const number99Input = document.getElementById("num99");

const clearButton = document.getElementById("clear");
const solveButton = document.getElementById("solve");

function fillGrid(solution) {
    number11Input.value = solution[0][0];
    number12Input.value = solution[0][1];
    number13Input.value = solution[0][2];
    number14Input.value = solution[0][3];
    number15Input.value = solution[0][4];
    number16Input.value = solution[0][5];
    number17Input.value = solution[0][6];
    number18Input.value = solution[0][7];
    number19Input.value = solution[0][8];

    number21Input.value = solution[1][0];
    number22Input.value = solution[1][1];
    number23Input.value = solution[1][2];
    number24Input.value = solution[1][3];
    number25Input.value = solution[1][4];
    number26Input.value = solution[1][5];
    number27Input.value = solution[1][6];
    number28Input.value = solution[1][7];
    number29Input.value = solution[1][8];

    number31Input.value = solution[2][0];
    number32Input.value = solution[2][1];
    number33Input.value = solution[2][2];
    number34Input.value = solution[2][3];
    number35Input.value = solution[2][4];
    number36Input.value = solution[2][5];
    number37Input.value = solution[2][6];
    number38Input.value = solution[2][7];
    number39Input.value = solution[2][8];

    number41Input.value = solution[3][0];
    number42Input.value = solution[3][1];
    number43Input.value = solution[3][2];
    number44Input.value = solution[3][3];
    number45Input.value = solution[3][4];
    number46Input.value = solution[3][5];
    number47Input.value = solution[3][6];
    number48Input.value = solution[3][7];
    number49Input.value = solution[3][8];

    number51Input.value = solution[4][0];
    number52Input.value = solution[4][1];
    number53Input.value = solution[4][2];
    number54Input.value = solution[4][3];
    number55Input.value = solution[4][4];
    number56Input.value = solution[4][5];
    number57Input.value = solution[4][6];
    number58Input.value = solution[4][7];
    number59Input.value = solution[4][8];

    number61Input.value = solution[5][0];
    number62Input.value = solution[5][1];
    number63Input.value = solution[5][2];
    number64Input.value = solution[5][3];
    number65Input.value = solution[5][4];
    number66Input.value = solution[5][5];
    number67Input.value = solution[5][6];
    number68Input.value = solution[5][7];
    number69Input.value = solution[5][8];

    number71Input.value = solution[6][0];
    number72Input.value = solution[6][1];
    number73Input.value = solution[6][2];
    number74Input.value = solution[6][3];
    number75Input.value = solution[6][4];
    number76Input.value = solution[6][5];
    number77Input.value = solution[6][6];
    number78Input.value = solution[6][7];
    number79Input.value = solution[6][8];

    number81Input.value = solution[7][0];
    number82Input.value = solution[7][1];
    number83Input.value = solution[7][2];
    number84Input.value = solution[7][3];
    number85Input.value = solution[7][4];
    number86Input.value = solution[7][5];
    number87Input.value = solution[7][6];
    number88Input.value = solution[7][7];
    number89Input.value = solution[7][8];

    number91Input.value = solution[8][0];
    number92Input.value = solution[8][1];
    number93Input.value = solution[8][2];
    number94Input.value = solution[8][3];
    number95Input.value = solution[8][4];
    number96Input.value = solution[8][5];
    number97Input.value = solution[8][6];
    number98Input.value = solution[8][7];
    number99Input.value = solution[8][8];
}

solveButton.addEventListener("click", event => {
    let row1 = [Number(number11Input.value), Number(number12Input.value), Number(number13Input.value), Number(number14Input.value), Number(number15Input.value), Number(number16Input.value), Number(number17Input.value), Number(number18Input.value), Number(number19Input.value)];
    let row2 = [Number(number21Input.value), Number(number22Input.value), Number(number23Input.value), Number(number24Input.value), Number(number25Input.value), Number(number26Input.value), Number(number27Input.value), Number(number28Input.value), Number(number29Input.value)];
    let row3 = [Number(number31Input.value), Number(number32Input.value), Number(number33Input.value), Number(number34Input.value), Number(number35Input.value), Number(number36Input.value), Number(number37Input.value), Number(number38Input.value), Number(number39Input.value)];
    let row4 = [Number(number41Input.value), Number(number42Input.value), Number(number43Input.value), Number(number44Input.value), Number(number45Input.value), Number(number46Input.value), Number(number47Input.value), Number(number48Input.value), Number(number49Input.value)];
    let row5 = [Number(number51Input.value), Number(number52Input.value), Number(number53Input.value), Number(number54Input.value), Number(number55Input.value), Number(number56Input.value), Number(number57Input.value), Number(number58Input.value), Number(number59Input.value)];
    let row6 = [Number(number61Input.value), Number(number62Input.value), Number(number63Input.value), Number(number64Input.value), Number(number65Input.value), Number(number66Input.value), Number(number67Input.value), Number(number68Input.value), Number(number69Input.value)];
    let row7 = [Number(number71Input.value), Number(number72Input.value), Number(number73Input.value), Number(number74Input.value), Number(number75Input.value), Number(number76Input.value), Number(number77Input.value), Number(number78Input.value), Number(number79Input.value)];
    let row8 = [Number(number81Input.value), Number(number82Input.value), Number(number83Input.value), Number(number84Input.value), Number(number85Input.value), Number(number86Input.value), Number(number87Input.value), Number(number88Input.value), Number(number89Input.value)];
    let row9 = [Number(number91Input.value), Number(number92Input.value), Number(number93Input.value), Number(number94Input.value), Number(number95Input.value), Number(number96Input.value), Number(number97Input.value), Number(number98Input.value), Number(number99Input.value)];
    let puzzle = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    console.log(`solving ${puzzle}`);
    let solution = solver.solve(puzzle);
    console.log(`solution ${solution}`);
    fillGrid(solution);
});


clearButton.addEventListener("click", event => {
    let nullRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let nullPuzzle = [nullRow, nullRow, nullRow, nullRow, nullRow, nullRow, nullRow, nullRow, nullRow];
    fillGrid(nullPuzzle);
});