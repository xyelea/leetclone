import Navbar from "@/components/Navbar/Navbar";
import { FC } from "react";

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default Auth;
