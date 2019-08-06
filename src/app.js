import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy shopping", priority: "High"},
        {name: "Clean bathroom", priority: "Low"},
        {name: "Car's MOT", priority: "Low"}
      ],
      newItem: ''
    },
    methods: {
      saveNewItem: function (e) {
        e.preventDefault();
        this.items.push({
          name: this.newItem,
          priority: this.priority
        });
        this.newItem = '';
      }
    },
  });
});
