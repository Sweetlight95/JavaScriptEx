// REST OPERATOR


const filter = (... args) => {
    return args.filter(el => el === 7);
}
console.log(filter(1, 3, 5, 7));