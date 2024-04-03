let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

const removed = secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
//console.log(secretMessage);
secretMessage.unshift('Programming');
//console.log(secretMessage);
secretMessage.splice(6,10, 'know');
console.log(secretMessage.join());

//output Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program