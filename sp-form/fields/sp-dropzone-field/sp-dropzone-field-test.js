import QUnit from 'steal-qunit';
import { ViewModel } from './sp-dropzone-field';

// ViewModel unit tests
QUnit.module('public/components/sp-dropzone-field');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the sp-dropzone-field component');
});
