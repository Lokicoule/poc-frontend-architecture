import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apolloClient } from "./clients/apollo/apolloClient";
import { Routes } from "../../routes";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes></Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
      <ToastContainer />
    </ApolloProvider>
  );
};
