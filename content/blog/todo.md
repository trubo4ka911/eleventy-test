---
layout: layouts/base.njk
title: Todo App
---

<div class="container">
  <h1>Todo</h1>
  <form id="todo">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" required>
    <label for="priority">Priority</label>
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium" selected>Medium</option>
      <option value="high">High</option>
    </select>
    <button type="submit">Add</button>
  </form>
  <ul id="todo-pane"></ul>
  <footer>
    <small>
      Flag images used with thanks from
      <a href="https://www.iconfinder.com/iconsets/prettyoffice8">Iconfinder</a>.
    </small>
  </footer>
</div>
