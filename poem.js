"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) 
{
    let subjekt = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let prädikat = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let objekt = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", " große Elefanten", "Robben"];

    for (let i = subjekt.length; i >= 1; i--) 
    {
        let wort = getwort(subject, prädikat, objekt);
        console.log(wort (subjekt, prädikat, objekt));
    }
    function getwort(_subjekt, _prädikat, _objekt) 
    {
        let wort = "";
        let randomNumber1 = Math.floor(Math.random() * _subjekt.length);
        randomNumber2 = Math.floor(Math.random() * _prädikat.length);
        randomNumber3 = Math.floor(Math.random() * _objekt.length);
        wort = _subjekt.splice(randomNumber1, 1 )[0] + _prädikat.splice(randomNumber2, 1)[0] + _objekt.splice(randomNumber3, 1)[0];
        return wort;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=script.js.map