let backPack = [];

backPack.push('pokeball')
backPack.push('potion')
backPack.push('pokedollars')

//backPack.shift();
backPack.splice(0,1);

let stone = 'water stone';

backPack.push(stone);

backPack.pop();

backPack.push('great ball', 'antidote', 'revive');


let satchel = backPack.splice(3, 2);

console.log(backPack);
//console.log(backPack.length);
//console.log(satchel);

/*for(let i = 0; i < backPack.length; i++){
    console.log(`This is the item an the index of ${i}, `, backPack[i]);
}*/

/*for(let i = 0; i < 2; i++){
    console.log(backPack[i]);
}*/

if( backPack.length > 2){
    for(let i = 0; i < 2; i++){
        console.log(backPack[i]);
    }
} else {
    for(let i = 0; i < backPack.length; i++){
        console.log(`This is the item at the index of ${i}: `, backPack[i]);
    }
}

//--------------------------------------------------------------------


let guessMe = 54

while (guessMe < 100) {
    console.log(`-------------`, guessMe);
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('divisible by 4 or 5, added 25, ', guessMe);
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('divisible by 3, subtacted 27, ', guessMe);
    } else {
        guessMe += 3
        console.log('added 3 ', guessMe);
    }
    guessMe += 22
    console.log('added 22, ', guessMe)
}

console.log(`The final value is ${guessMe}`);

//--------------------------------------------------------------------