import { UserContext } from './UserContext';
import { useState } from 'react'

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});

  // const login = (email, password) => {
  //   this.event.preventDefault();
  //   const request = {
  //     email,
  //     password
  //   }
  //   axios.post('http://localhost:3000/login', request)
  //     .then(res => {
  //       setUser(user);
  //       sessionStorage.setItem(user);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     })
  // }


  // const logout = () => {
  //   setUser((user) => { })
  //   sessionStorage.clear()
  // };



  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}



// function loginCheck(event) {
//   event.preventDefault();
//   const request = {
//     email,
//     password
//   }
//   console.log("request", request)
//   axios.post('http://localhost:3000/login', request)
//   .then(res => {
//     const user = res.data[0];
//     props.setUser(user.id)
//     sessionStorage.setItem("user", user.id)
//     // console.log("res: ", user)
//     // alert("Login successful ");
//   })
//   .catch(err => {
//     console.log(err.message);
//   })
// }


// const UserProvider = ({ children }) => {
//   const [name, setName] = useState("John Doe");
//   const [age, setAge] = useState(1);
//   const happyBirthday = () => setAge(age + 1);
//   return (
//     <UserContext.Provider value={{ name, age, happyBirthday }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// const withUser = (Child) => (props) => (
//   <UserContext.Consumer>
//     {(context) => <Child {...props} {...context} />}
//     {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//   </UserContext.Consumer>
// );

// export {UserProvider, withUser}