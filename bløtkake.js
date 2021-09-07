const egg = 5/16; 
const sukker = 150/16;
const hvetemel = 150/16;
const bakepulver = 1/16;
const kremflote = 3/16;
const melis = 2/16;
const melkjuce = 1/16;
const syltetoy = 8/16;
const valnott = 50/16;
const banan = 1/16;
const jordbaer = 2/16;
const porsjoner = 5;



console.log('Ingredienser');
console.log(Math.ceil(egg*porsjoner)+'stk egg');
console.log(Math.ceil(sukker*porsjoner)+'g sukker');
console.log(Math.ceil(hvetemel*porsjoner)+'g hvetemel');
console.log(Math.ceil(bakepulver*porsjoner)+'ts bakepulver');
console.log('');
console.log('fyll og pynt:');
console.log(Math.ceil(melis*porsjoner)+'ss melis');
console.log(Math.ceil(melkjuce*porsjoner)+'dl melk/juice');
console.log(Math.ceil(syltetoy*porsjoner)+'ss syltetoy');
console.log(Math.ceil(valnott*porsjoner)+'g nøtter');
console.log(Math.ceil(banan*porsjoner)+'stk banan');
console.log(Math.ceil(jordbaer*porsjoner)+'pk jordbær');