angular.module('app').service('listService', function($http){

  var list = [
    {
      id: 1,
      title: "clean room",
      notes: ''
    },
    {
      id: 2,
      title: "grocery shop",
      notes: ''
    },
    {
      id: 3,
      title: "do homework",
      notes: 'test notes'
    }
  ];

  this.saveEdits = function(item) {
    list.forEach(function(task, i) {
      if(task.id === item.id) {
        list.splice(i, 1, item);
      }
    });
    return list;
  };

  //get
  this.getList = function(){
    return list;
  };

  //post
  this.createList = function(newList){
    if(newList){
      list = [{id: 1, task: newList}];
      return list;
    }
  };

  //put
  this.addToList = function(newItem){
    if(newItem){
      list.push({id:list.length + 1, title: newItem});
      console.log('list', list);
      return list;
    }
  };

  //delete
  this.deleteTask = function(task) {
    var index = list.map(function(t) {return t.id}).indexOf(task.id);
    return list.splice(index, 1);
  };

  //delete
  this.deleteList = function(){
    list = [];
    return list;
  }
});
