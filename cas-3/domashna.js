// 1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza

const parni = ['parnaKoza', 'parnaLokomotiva', 'parenGenerator', 'parichniVrednosti'];

const neparni = ['nepokor', 'neguvatelka', 'neparen', 'nepovtorliv'];

let zbirnaNiza = [];
for(let i = 0; i < (parni.length + neparni.length)/2; i++) {
    zbirnaNiza.push(parni[i],neparni[i]);
}
console.log(zbirnaNiza);

// 2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj

const lista = [14, 16, 2, 6, 20, 13, 50, 42, 13, 2, 6];

for(let i = 0; i < lista.length; i++) {
    for(let j = 0; j < lista.length; j++) {
        if(lista[j] > lista[i]) {
            let privremena = lista[i];
            lista[i] = lista[j];
            lista[j] = privremena;
        }
    }
}
console.log(lista, 'sortirana lista');

// 3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

let duplikati = [];

for(let i = 0; i < lista.length; i++) {
    for(let j = 0; j < lista.length; j++) {
        if(i !== j) {
            if(lista[i] === lista[j]) {
                duplikati.push(lista[j]);
            }
        }
    }
}

console.log(duplikati, 'duplikati vo listata');

// 4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string.
// primer: ["z", "d", "r", "a", "v", "o"] ===> "zdravo"

const zdravoArray = ["z", "d", "r", "a", "v", "o"];

let zdravoString = '';

for(let bukva of zdravoArray) {
    zdravoString += bukva;
}
console.log(zdravoString);

// 5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza.
// Primer: [1, 2, [3, 4], 5, 6] ===> [1, 2, 5, 6, 3, 4]

const originalNiza = [1, 2, [3, 4], 5, 6];
for(let i = 0; i < originalNiza.length; i++) {
    if(originalNiza[i].length > 0) {
        let arrayElement = originalNiza[i];
        originalNiza.splice(i,1)
        for(let elem of arrayElement) {
            originalNiza.push(elem)
        }
    }
}
console.log(originalNiza)