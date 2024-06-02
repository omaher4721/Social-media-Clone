import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCart";
import SignupCard from "../components/SignupCart";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
