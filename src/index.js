class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = function (a, b) { 
      return a - b; 
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    // indices - number of elements for sorting
    
    indices.sort(function (a, b) {
      return a - b;
    });

    let tempArray = indices.map((element) => {
      return this.array[element];
    });
    
    tempArray.sort(this.compareFunction);

    indices.forEach((element, index) => {
      this.array[element] = tempArray[index];
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;