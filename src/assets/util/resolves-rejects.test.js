test('resolves to lemon 1', () => { 
  // make sure to add a return statement 
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon'); 
});

test('resolves to lemon 2', async () => { 
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus'); 
});

  
test('rejects to octopus 1', () => { 
  // make sure to add a return statement 
  return  expect(Promise.reject(new Error('octopus'))).rejects.toThrow( 'octopus', ); 
});  

test('rejects to octopus 2', async () => { 
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus'); 
});