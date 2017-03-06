import 'spectre-canjs/list-table/list-table';
import stache from 'can-stache';
import DefineList from 'can-define/list/list';

var render = stache(document.getElementById('demo-html').innerHTML);

document.body.appendChild(render({
    primary: [{
      iconClass: 'fa fa-sad-o',
      text: 'Say Goodbye',
      eventName: 'goodbye'
    }],
    buttons: [{
        iconClass: 'fa fa-smile-o',
        eventName: 'hello',
        text: 'Say Hello'
    }],
    // observable list enables sorting
    data: new DefineList([{
        name: 'Peter',
        age: 16,
        favorite_food: 'Pizza'
    }, {
        name: 'Phillip',
        age: 26,
        favorite_food: 'Pizza'
    }, {
        name: 'Todd',
        age: 150,
        favorite_food: 'Ice Cream'
    }, {
        name: 'Andy',
        age: 10,
        favorite_food: 'Pickles'
    }, {
        name: 'Andrew',
        age: 24,
        favorite_food: 'Spaghetti'
    }]),
    sayHello (a, b, c, obj) {
        alert(obj.name + ' says hello!');
    },
    sayGoodbye (a, b, c, obj) {
        alert(obj.name + ' says goodbye!');
    },
    // sorts the observable list
    setSort (a, b, c, sortInfo) {
        const field = sortInfo.fieldName;
        this.data.sort((a, b) => {
            return sortInfo.type === 'asc'
                //if ascending
                ? (a[field] === b[field] ? 0
                    : a[field] > b[field] ? 1 : -1)
                //if descending
                : (a[field] === b[field] ? 0
                    : a[field] > b[field] ? -1 : 1);
        });
    }
}));

window.DEMO_SOURCE = `
import 'spectre-canjs/list-table/list-table';
import stache from 'can-stache';
import DefineList from 'can-define/list/list';

var render = stache(document.getElementById('demo-html').innerHTML);

document.body.appendChild(render({
    primary: [{
      iconClass: 'fa fa-sad-o',
      text: 'Say Goodbye',
      eventName: 'goodbye'
    }],
    buttons: [{
        iconClass: 'fa fa-smile-o',
        eventName: 'hello',
        text: 'Say Hello'
    }],
    // observable list enables sorting
    data: new DefineList([{
        name: 'Peter',
        age: 16,
        favorite_food: 'Pizza'
    }, {
        name: 'Phillip',
        age: 26,
        favorite_food: 'Pizza'
    }, {
        name: 'Todd',
        age: 150,
        favorite_food: 'Ice Cream'
    }, {
        name: 'Andy',
        age: 10,
        favorite_food: 'Pickles'
    }, {
        name: 'Andrew',
        age: 24,
        favorite_food: 'Spaghetti'
    }]),
    sayHello (a, b, c, obj) {
        alert(obj.name + ' says hello!');
    },
    sayGoodbye (a, b, c, obj) {
        alert(obj.name + ' says goodbye!');
    },
    // sorts the observable list
    setSort (a, b, c, sortInfo) {
        const field = sortInfo.fieldName;
        this.data.sort((a, b) => {
            return sortInfo.type === 'asc'
                //if ascending
                ? (a[field] === b[field] ? 0
                    : a[field] > b[field] ? 1 : -1)
                //if descending
                : (a[field] === b[field] ? 0
                    : a[field] > b[field] ? -1 : 1);
        });
    }
}));

`;
