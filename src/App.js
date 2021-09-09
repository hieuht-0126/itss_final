import { useState } from "react";
import "./App.css";
import useCustomHook from "./customHook";

function App() {
  const userList = ["Huyen", "Hoa", "Hung", "Long"];
  const [users, deleteUser] = useCustomHook(userList);
  const [inputName, setInputName] = useState("");
  const handleDelete = () => {
    deleteUser(inputName)
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputName(value);
  };
  return (
    <div>
      <div>学生一覧：[{userList.join(",")}]</div>
      <div>削除値を入力してください。</div>
      <div>
        <input
          value={inputName}
          type="text"
          name="name"
          onChange={handleOnChange}
        ></input>
      </div>
      <div>
        <button onClick={handleDelete}>確定</button>
      </div>
      <div>削除する名前：{inputName}</div>
      <div>新しい一覧：[{users.join(',')}]</div>
    </div>
  );
}

export default App;
