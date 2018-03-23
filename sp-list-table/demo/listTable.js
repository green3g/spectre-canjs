import 'spectre-canjs/sp-list-table/sp-list-table';
import stache from 'can-stache';
import DefineList from 'can-define/list/list';
import actionTemplate from './templates/actionCell.stache';
import voteTemplate from './templates/voteTemplate.stache';
import 'can-debug';

stache.registerHelper('voteColor', function(val){
  if(val < 0){
    return 'red';
  } else if(val === 0){
    return 'grey';
  }
  return 'green'
});

var render = stache.from('demo-html');

var data = [{
  name: 'Peter',
  age: 16,
  favorite_food: 'Pizza',
  votes: 0
}, {
  name: 'Phillip',
  age: 26,
  favorite_food: 'Pizza',
  votes: 0
}, {
  name: 'Todd',
  age: 150,
  favorite_food: 'Ice Cream',
  votes: 0
}, {
  name: 'Andy',
  age: 10,
  favorite_food: 'Pickles',
  votes: 0
}, {
  name: 'Andrew',
  age: 24,
  favorite_food: 'Spaghetti',
  votes: 0
}];

document.body.appendChild(render({
  fields: [{
    name: 'actions',
    sort: false,
    displayComponent: actionTemplate
  }, 'name', 'favorite_food', {
    name: 'age',
    classes: 'text-italic',
    displayComponent: stache('{{../object.name}} is {{../object.age}} years old')
  }, { name: 'votes', displayComponent: voteTemplate }],

  // observable list enables sorting
  objects: new DefineList(data),
  voteUp(args) {
    const [ev, obj] = args;
    obj.votes++;
  },
  voteDown(args) {
    const [ev, obj] = args;
    obj.votes--;
  }
}));
