// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const names= ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

 function smallestName(names){
    let small = names[0];
    for(let nam of names){
        if(nam.length <small.length){
            small=nam;

    
        }
    }
    return small;
}



console.log(smallestName(names))