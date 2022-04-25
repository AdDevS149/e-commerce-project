import { Link, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const navigate = useNavigate()
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem('authToken') ? <Component {...props} /> : <Link to='/login' />;
      }}
    />
  );
};

export default PrivateRoute;

//  check if anything is in local storage
