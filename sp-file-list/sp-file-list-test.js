import QUnit from 'steal-qunit';
import { ViewModel } from './sp-file-list';

// ViewModel unit tests
QUnit.module('public/components/sp-file-list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the sp-file-list component');
});
