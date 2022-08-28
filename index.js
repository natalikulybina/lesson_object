const store = {
  name: 'Top Shoes',
  adress: {
    country: 'Ukraine',
    city: 'Odessa',
    street: 'Bazarnaya',
    houseNumber: 75
  }
}

store.clients = {};

store.clients['Nataliia Kulybina'] = {
  quantity: 2,
  bonuses: 20
}

store.clients['Bogdan Onatskiy'] = {
  quantity: 3,
  bonuses: 30
}

store.clients['Mykola Prymachok'] = {
  quantity: 4,
  bonuses: 40
}

store.clients['Yevhen Vuzlov'] = {
  quantity: 5,
  bonuses: 50
}

const name = 'Oleksii Medvediev';
store.clients[name] = {
  quantity: 6,
  bonuses: 60
}

console.log(store);

//for (let key in store) {
//  alert(key);
//}