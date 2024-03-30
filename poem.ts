namespace ZufallsGedicht {

    let subjekt = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let prädikat = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let objekt = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", " große Elefanten", "Robben"];
    
    for (let i = subjekt.length; i >= 1; i--)
    {
        let wort = console.log(getVerse(subjekt, prädikat, objekt));
    }
    function getVerse(_subjekt: string[],_prädikat: string[],_objekt: string[]) 
    {
        let wort: string ="";
        let thisSubjekt: number = Math.floor(Math.random() * _subjekt.length);
        let thisPrädikat: number = Math.floor(Math.random() * _prädikat.length);
        let thisObjekt: number = Math.floor(Math.random() * _objekt.length);
        wort = _subjekt.splice(thisSubjekt, 1)[0] + _prädikat.splice(thisPrädikat, 1)[0] + _objekt.splice(thisObjekt, 1)[0];
        return wort;
    }
    }