import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { User } from "../types/api/user"

export type LoginUserContextType = {
	loginUser: User | undefined
	setLoginUser: Dispatch<SetStateAction<User | undefined>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

export const LoginUserProvider = (props: { children: ReactNode}) => {
	const { children } = props;
	const [loginUser, setLoginUser] = useState<User | undefined>();
	return (
		<LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
			{children}
		</LoginUserContext.Provider>
	)
}