let bird = {
  name: 'Donald',
  numLegs: 2
}

let boat = {
  name: 'Warrior',
  type: 'race-boat'
}

// Add your code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('gliding, hee-hee')
  }
}

glideMixin(bird)
glideMixin(boat)
