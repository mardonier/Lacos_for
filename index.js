let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let ReplacementChar = prompt("Qual caracter você deseja substituir?")

console.log(spaceship, charToReplace, ReplacementChar)

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if (spaceship[pos] == charToReplace) {
        newSpaceship += ReplacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é: " + newSpaceship)

/* Elemental
e 
h
pos = 0   E != e newSpaceship = E
pos = 1   l !=  e newSpaceship = El
pos = 2   e == e newSpaceship = Elh
pos = 3   E != e newSpaceship = Elhm
pos = 4   e ==  e newSpaceship = Elhmh
pos = 5   n != e newSpaceship = Elhmhn
pos = 6   t != e newSpaceship = Elhmhnt
pos = 7   a !=  e newSpaceship = Elhmhnta
pos = 8   l != e newSpaceship = Elhmhntal

*/
