import { UserContext, useState } from './UserContext';

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const login = (name) => {
    setUser((user) => ({

    }));
    sessionStorage.setItem();
  };

  const logout = () => {
    setUser((user) => ({
      
    }))
    sessionStorage.clear()
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}


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