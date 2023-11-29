function problemA() {
  // callback version
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    exerciseUtils.blue(stanza2);
    exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
      exerciseUtils.blue(stanza3);
    });
  });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt")
    .then(stanza => exerciseUtils.blue(stanza))

}

//* Promise.all([ promise-1, promise-2, promise-3 ])
//* => 2, 1, 3
//* => 3, 1, 2