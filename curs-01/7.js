const o = {
  a: 1,
  b: 'somestring'
}

console.log(o)

function f () {
  console.log('I\'m a little function')
}

f()

const f1 = f

f1()

o.doStuff = f1

o.doStuff()
