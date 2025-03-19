const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Destructure animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructure four animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Destructure three colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Destructure rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure rainbow colors except indigo, using initials
const [r, o, y, g, b, , v] = colors;

// 6. Destructure only indigo
const [, , , , , indg] = colors;

// Objects

// 7. Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log({ moo, neigh, baa, oink, cluck });
console.log({ bessie, dolly, babe, little });
console.log({ blackAndWhite, black, pink });
console.log({ red, orange, yellow, green, blue, indigo, violet });
console.log({ r, o, y, g, b, v });
console.log({ indg });
console.log({ muppetName, color, song, job, partner });
console.log({ song2, song4, nestedJob, nestedPartner });
