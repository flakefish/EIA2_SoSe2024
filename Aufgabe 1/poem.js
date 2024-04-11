
var zufallsgedicht;
(function (zufallsgedicht) {
    let subject = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let predicate = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let object = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", "großen Elefanten", "Robben"];

    for (let i = subject.length; i >= 1; i--) {
        let wort = getVerse(subject, predicate, object);
        console.log(wort);
    }
    
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber1 = Math.floor(Math.random() * _subject.length);
        let randomNumber2 = Math.floor(Math.random() * _predicate.length);
        let randomNumber3 = Math.floor(Math.random() * _object.length);
        verse += _subject.splice[randomNumber1] + " " + _predicate.splice[randomNumber2] + " " + _object.splice[randomNumber3];
        return verse;
    }
})(zufallsgedicht || (zufallsgedicht = {}));