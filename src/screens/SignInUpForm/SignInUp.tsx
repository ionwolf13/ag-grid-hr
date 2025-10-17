import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import ReuseText from "../../components/text/ReuseText";
import hrManagerIcon from "../../assets/hrManager.png";
import { Card } from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/stores/AuthStore";
import { selectIsAuthenticated } from "../../store/selectors/authSelectors";
import { Eye, EyeClosed, User } from "lucide-react";
import { ReuseForm } from "../../components/form/ReuseForm";

export const SignInUp: React.FC = () => {
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

  const singInFormData = [
    {
      placeholder: "Username",
      name: "Username",
      value: username,
      onChange: onChangeUsername,
      icon: User
    },
    {
      placeholder: "Password",
      name: "Password",
      value: password,
      onChange: onChangePassword,
      icon: isPasswordVisible ? Eye : EyeClosed,
      inputType: isPasswordVisible ? "text" : "password",
      iconAction: onChangePasswordVisibility
    }
  ];

  const onSubmitForm = (e) => {
    e.preventDefault();
    callAuthenticateUser(username, password);
  };

  return (
    <ReuseContainer className="flex-col">
      <img src={hrManagerIcon} alt="Hr Manager Icon" className="h-120" />
      <Card
        header={[<ReuseText variant="header2">Welcome</ReuseText>]}
        body={[<ReuseForm data={singInFormData} onSubmitForm={onSubmitForm} />]}
        footer={[
          <ReuseContainer className="flex-col">
            <ReuseText>
              <a>Forgot Password? </a>
            </ReuseText>
          </ReuseContainer>
        ]}
      />
    </ReuseContainer>
  );
};
