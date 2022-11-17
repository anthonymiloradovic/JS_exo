function Pyramid() {
    let floors = prompt("Salut combien d'étages veux tu ?");
    let output = '';
    for (let i = 1; i <= floors; i++) {
        for (let j = 1; j <= i; j++) {
            output += '#' + ' ';
        }
        console.log(output);
        output = '';
    }
}

Pyramid();