const { useState} = require("react")


const useCustomHook = (userList) => {
  const [users, setUsers] = useState(userList);
  const deleteUser = (user) => {
    const new_list = users.filter((item => {
      if(item !== user){
        return item;
      }
    }))
    setUsers(new_list)
  }
  return [users, deleteUser]
}
export default useCustomHook;