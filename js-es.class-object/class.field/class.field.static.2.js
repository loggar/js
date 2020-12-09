class NewClass {
  static square = { L: 8, B: 6 };
  static y;
  static z;
  static {
    NewClass.y = square.L; // correct
    NewClass.z = square.B; // correct
  }
}
