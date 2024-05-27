// Export the taskFirst function
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  // Export the getLast function
  export function getLast() {
    return ' is okay';
  }
  
  // Export the taskNext function
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
