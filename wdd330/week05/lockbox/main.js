'use str'

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Your code here.
    let wasLocked = box.locked;
    if (wasLocked) {box.unlock();}

    try {
        body();
    } finally {
        if (wasLocked) {box.lock();}
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
    console.log("Gold added to lockbox.");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked ? "The lockbox is locked." : "Oops! The lockbox was left unlocked!");
