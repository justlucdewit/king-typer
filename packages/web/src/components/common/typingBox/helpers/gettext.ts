// This file contains functions for gettting the random text for the easy and hard mode
// I dont have a hard mode yet, that mode will be added at the same time I add database functionallity

// Get random text for easy mode
const getEasyText = () => {
    const text = (
        "the name of very to through and just form in much is great it think you say " +
        "that help he low was line for before on turn are cause with same as mean " +
        "differ his move they right be boy at old one too have does this tell from " +
        "sentence or set had three by want hot air but well some also what play there " +
        "small we end can put out home other read were hand all port your large when " +
        "spell up add use even word land how here said must an big each high she such " +
        "which follow do act their why time ask if men will change way went about light " +
        "many kind then off them need would house write picture like try so us these " +
        "again her animal long point make mother thing world see near him build two self " +
        "has earth look father more head day stand could own go page come should did " +
        "country my found sound answer no school most grow number study who still over " +
        "learn know plant water cover than food call sun first four people thought may " +
        "let down keep side eye been never now last find door any between new city work " +
        "tree part cross take since get hard place start made might live story where saw " +
        "after far back sea little draw only left round late man run year don't came " +
        "while show press every close good night me real give life our few under stop " +
        "open ten seem simple together several next vowel white toward children war " +
        "begin lay got against walk pattern example slow ease paper love often " +
        "person always money music serve those appear both road mark map book science " +
        "letter rule until govern mile pull river cold car notice feet voice care fall " +
        "second power group town carry fine took certain rain fly eat unit room lead " +
        "friend cry began dark idea machine fish note mountain wait north plan once " +
        "figure base star hear box horse noun cut field sure rest watch correct " +
        "able face pound wood done main beauty enough drive plain stood girl contain " +
        "usual front young teach ready week above final ever gave red green list oh " +
        "though quick feel develop talk sleep bird warm soon free body minute dog strong " +
        "family special direct mind pose behind leave clear song tail measure produce " +
        "state fact product street black inch short lot numeral nothing class course " +
        "wind stay question wheel happen full complete force ship blue area object half " +
        "decide rock surface order deep fire moon south island problem foot piece yet " +
        "told busy knew test pass record farm boat top common whole gold king possible " +
        "size plane heard age best dry hour wonder better laugh true thousand during ago " +
        "hundred ran am check remember game step shape early yes hold hot west miss " +
        "ground brought interest heat reach snow fast bed five bring sing sit listen " +
        "perhaps six fill table east travel weight less language morning among speed " +
        "typing mineral seven eight nine everything something standard distant paint"
    ).split(" ");

    let array = text;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// get hard text function only for testing for now
const getHardText = () => {
    return `Previously the unofficial distinction between classes and function components was "function components don't have state", so we can't hide behind that one anymore: the difference between function components and classes components can be found spread over several pages in the very well-written react documentation (no shortcut one liner explanation to conveniently misinterpret for you!) which you should read so that you know what you're doing and can thus know whether you picked the best (whatever that means for you) solution to program yourself out of a problem you're having.`.split(
        " "
    );
};

// getText function
export const getText = (mode: "easy" | "hard") => {
    return mode === "easy" ? getEasyText() : getHardText();
};
