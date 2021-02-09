/************************
 * BeGeneretor is a random 
 * sentence generator that
 * provides you the needed 
 * buzzwords to make an great
 * impact in meaningless 
 * IT meetings with business
 * owners and such.
 * Run me, and delight with 
 * your insightfull business
 * views :)
 ************************/
const first = ['We ','They ','We have to ','You have to ','You must ','We must ','We should ','You Should ','You could ','We could ','We can ','You can '];
const second = ['monetize ','prevent ','transform ','reinvent ','benchmark ','mesh ','enhance ','envision ','seize ','reorganize ','synthesize ','matrix '];
const third = ['sexy ','disruptive ','block-chain ','available ','visionary ','integrated ','enterprice ','collaborative ','cross-media ','wireless ','virtual ','venture '];
const fourth = ['e-business.','convergence.','management.','synergies.','markets.','relationships.','interfaces.','channels.','models.','niches.','communities.','technologies'];

const createPhrase = (array) => {
    return array[Math.floor(Math.random() * 12)];
}
const createWisdom = (arr1, arr2, arr3, arr4) => {
    return createPhrase(arr1)+createPhrase(arr2)+createPhrase(arr3)+createPhrase(arr4);
}

console.log(createWisdom(first, second, third, fourth));