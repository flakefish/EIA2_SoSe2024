
    namespace zufallsgedicht {

        let subject: string[] = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
        let predicate: string[] = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
        let object: string[] = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", " große Elefanten", "Robben"];
        
        for (let i = subject.length; i >= 1; i--){
            let wort = console.log(getVerse(subject, predicate, object));
    
        }
    
        function getVerse(_subject: string[], _predicate: string [], _object: string[]){
            let verse: string = "";
            let randomNumber1: number = Math.floor(Math.random()*subject.length);
            let randomNumber2: number = Math.floor(Math.random()*predicate.length);
            let randomNumber3: number = Math.floor(Math.random()*object.length);
            verse += subject.splice(randomNumber1, 1)[0] + " " + predicate.splice(randomNumber2, 1)[0] + " " + object.splice(randomNumber3, 1)[0];
            return verse;
            console.log(verse);
        }
        
        }