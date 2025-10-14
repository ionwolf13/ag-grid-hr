import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import ReuseText from "../../components/text/ReuseText";
import hrManagerIcon from "../../assets/hrManager.png";
import { Card } from "../../components/card/Card";
import ReuseButton from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/stores/AuthStore";
import { selectIsAuthenticated } from "../../store/selectors/authSelectors";
import { Input } from "../../components/inputs/Input";
import { Eye, EyeClosed, User } from "lucide-react";

interface SignInUpInterface {}

export const SignInUp: React.FC<SignInUpInterface> = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const callAuthenticateUser = useAuthStore(
    (state) => state.callAuthenticateUser
  );

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  React.useState<boolean>(false);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/overview");
    } else {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onChangePasswordVisibility = () => {
    setIsPasswordVisible((prevState: boolean) => !prevState);
  };

  return (
    <ReuseContainer className="flex-col">
      <img src={hrManagerIcon} alt="Hr Manager Icon" className="h-120" />
      <Card
        header={[<ReuseText variant="header2">Welcome</ReuseText>]}
        body={[
          <form
            className="gap-2"
            name="Sign In"
            onSubmit={(e) => {
              console.log("DEBUGGING", e);
            }}
          >
            <Input
              icon={User}
              placeholder="Username"
              name="Username"
              value={username}
              onChange={onChangeUsername}
            />
            <Input
              icon={isPasswordVisible ? Eye : EyeClosed}
              placeholder="Passwrod"
              name="Password"
              value={password}
              onChange={onChangePassword}
              type={isPasswordVisible ? "text" : "password"}
              iconAction={onChangePasswordVisibility}
            />
            <ReuseButton
              onClick={() => callAuthenticateUser(username, password)}
              name={"Sign In"}
            />
          </form>,
        ]}
        footer={[
          <ReuseContainer className="flex-col">
            <ReuseText>
              <a>Forgot Password? </a>
            </ReuseText>
          </ReuseContainer>,
        ]}
      />
    </ReuseContainer>
  );
};
