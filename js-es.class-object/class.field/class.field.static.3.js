let getName;
export class NewClass {
  #name;
  constructor(devName) {
    this.#name = { data: devName };
  }
  static {
    // getName has privileged access to the private state (#name)
    getName = (obj) => obj.#name;
  }
}

export function getNameData(obj) {
  return getName(obj).data;
}
