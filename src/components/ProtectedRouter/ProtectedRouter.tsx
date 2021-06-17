import React, { Component } from "react";
import { Route } from "react-router";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export interface ProtectedRouterProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string
}

const ProtectedRouter = ({ component, ...rest }: ProtectedRouterProps) => {
  const auth = useTypedSelector((store) => store.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRouter;
