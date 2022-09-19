let fun = require('./functions')

test('should return 2', ()=>{
    expect(fun.returnTwo()).toBe(2)
})

test('return hello name', ()=>{
    expect(fun.greeting('james')).toBe("hello, james")
})
test('return hello name', ()=>{
    expect(fun.greeting('jill')).toBe("hello, jill")
})

test('should add correctly', ()=>{
    expect(fun.add(1,2)).toBe(3)
})
test('should add correctly', ()=>{
    expect(fun.add(5,9)).toBe(14)
})
