import {createContext, useState,} from 'react'
//type for context api
interface IUserInfo{
    name: string | undefined;
    email: string | undefined;
}
// create a context for user information
const UserInfo = createContext<IUserInfo | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();

    //value to be provided to the context
    const value: IUserInfo = { name, email };
  return (
    <UserInfo.Provider value={value}>{children} </UserInfo.Provider>
  );
};
export default UserProvider;
export { UserInfo, UserProvider };