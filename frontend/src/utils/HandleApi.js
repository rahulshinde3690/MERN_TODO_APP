import axios from "axios";
const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    setText("");
    getAllTodo(setTodo);
  });
};

const updateTodo = (toDoId, text, setTodo, setText, setIsUpdate) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdate(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { addTodo, getAllTodo, updateTodo, deleteTodo };
