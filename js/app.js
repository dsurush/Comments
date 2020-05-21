'use strict';

const rootEl = document.getElementById('root');

const formEl = document.createElement('form');
formEl.dataset.id = 'comment-form';
rootEl.appendChild(formEl);

const textEl = document.createElement('textarea');
textEl.dataset.input = 'comment';
formEl.appendChild(textEl);

const addEl = document.createElement('button');
addEl.dataset.action = 'add';
addEl.textContent = 'Добавить';
formEl.appendChild(addEl);



const CommentListEl = document.createElement('ul');
CommentListEl.dataset.id = 'comment-list';
rootEl.appendChild(CommentListEl);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
formEl.insertBefore(errorEl, formEl.firstElementChild);

let nextId = 1;
const comments = [];

formEl.onsubmit = evt => {
    evt.preventDefault();

    errorEl.textContent = '';
    let error = null;

    const text = textEl.value.trim();
    if (text === '') {
        error = 'Значение поля не может быть пустым';
        errorEl.textContent = error;
        textEl.focus();
        return;
    }
    const comment = {
        id: nextId++,
        text,
    };
    comments.push(comment);
    formEl.reset();
    textEl.focus();

    const rowEl = document.createElement('li');
    rowEl.dataset.commentId = comment.id;
    rowEl.textContent = comment.text;
    CommentListEl.appendChild(rowEl);
};