import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isPending, isAuthenticated, navigate]);

  // While checking authentication status, show a loading spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // If authenticated, render the protected content
  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
