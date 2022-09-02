class Song {
  #artist;
  checkField() {
    return #artist in this;
  }
}
let foo = new Song();
foo.checkField(); // true
