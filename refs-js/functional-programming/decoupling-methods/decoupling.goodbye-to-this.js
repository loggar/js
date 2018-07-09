const cat = {
	sound: 'meow',
	speak: function () {
		console.log(this.sound)
	}
}

const catSpeak = cat.speak

cat.speak()
// => 'meow'

catSpeak()
// => undefined

/*
In this example cat.speak works but catSpeak does not work because the this context changes.
What a pain! Instead we can decouple the speak method and never worry about this ever again!
*/

const cat2 = { sound: 'meow' }
const speak = ({ sound }) => console.log(sound)

speak(cat2)
// => 'meow'

/*
Then we can create new functions that use our decoupled functions.
*/

const cat3 = { sound: 'meow' }
const speakNormal = ({ sound }) => console.log(sound)
const speakLoudly = obj =>
	speakNormal({ ...obj, sound: obj.sound.toUpperCase() + '!' })

speakNormal(cat3)
// => 'meow'

speakLoudly(cat3)
// => 'MEOW!'
