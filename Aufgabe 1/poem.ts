    namespace zufallsgedicht {

    let subject: string[] = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let predicate: string[] = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let object: string[] = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", " große Elefanten", "Robben"];
    
    for (let i = subject.length; i >= 1; i--){
        let wort: string = console.log(getVerse(subject, predicate, object));
        console.log(wort);
    }

    function getVerse(_subject: string[], _predicate: string [], _object: string[]){
        let verse: string = "";
        let randomNumber1: number = Math.floor(Math.random()*_subject.length);
        let randomNumber2: number = Math.floor(Math.random()*_predicate.length);
        let randomNumber3: number = Math.floor(Math.random()*_object.length);
        verse += subject.splice[randomNumber1] + " " + predicate.splice[randomNumber2] + " " + object.splice[randomNumber3];
        return verse;
    }
    
    }