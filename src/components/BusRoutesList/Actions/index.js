import { Link } from "react-router-dom";

const Action = ({ text, onClick = () => {}, to = "/" }) => (
  <Link className="link-primary" to={to} onClick={onClick}>
    {text}
  </Link>
);

const Actions = ({ actions = [] }) => {
  return (
    <div className="col flex-center justify-content-end">
      <ol className="breadcrumb">
        {actions?.map((action, index) => (
          <li className="breadcrumb-item" key={`${action.text}-${index}`}>
            <Action {...action} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Actions;
