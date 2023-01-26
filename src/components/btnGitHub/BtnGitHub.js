import "./style.css";

import gitBlack from "./gitHubBlack.svg";

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitBlack} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
