    namespace zufallsgedicht {

    let subject: string[] = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let predicate: string[] = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let object: string[] = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", " große Elefanten", "Robben"];
    
    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        const randomNumber1: number = Math.floor(Math.random()*_subject.length);
        const randomNumber2: number = Math.floor(Math.random()*_predicate.length);
        const randomNumber3: number = Math.floor(Math.random()*_object.length);
        const verse: string = _subject.splice(randomNumber1, 1)[0] + " " + _predicate.splice(randomNumber2)[0] + " " + _object.splice(randomNumber3)[0];
        return verse;
    }

    for (let i = subject.length; i >= 1; i--){
        const wort = console.log(getVerse(subject, predicate, object));
        console.log(wort);
    }
    
    }