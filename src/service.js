/**
 * @file 服务
 */

import data from './data'


/**
 * 对象属性拷贝
 *
 * @inner
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @return {Object} 返回目标对象
 */
function extend(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }

    return target;
}

export default {
    todos: function (options) {

        var todos = [];
         function arr(arr) {
            var result = []
            for(var i = 0; i < arr.length; i++) {
                if(result.indexOf(arr[i]) == -1) {
                    result.push(arr[i])
                }
            }
            return(result)
        }
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];

            if (options==0) {
                item = extend({}, item);
                todos.push(item);
            }
            else {
              
               for(var j = 0;j < options.length;j++) {
                   if(item.pri == options[j] || item.sta == options[j]) {
                       todos.push(item);
                   }
               }
            }
        }

        return arr(todos);
    },
    todoOne: function () {
        var task = [];
        var list = data.list;
        for(var i = 0;i < list.length;i++) {
            if(list[i].pri=='red'&&list[i].sta=='glyphicon-play') {
                task.push(list[i]);
                break;
            }
        }
        return task;
    },
    todo: function (id) {
        return data.list[id];  
    },

    rmTodo: function (index) {
        
        data.list.splice(index, 1);
               
    },
    addTodo: function (todo) {
        var first = data.list[0];
        todo = extend({}, todo);
        data.list.unshift(todo);
    },
    editTodo: function (todo,id) {
        todo = extend({}, todo);

        data.list[id] = todo;

    }
};

