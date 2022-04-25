import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apolloClient } from "../../core/clients/apollo/apolloClient";
import { Routes } from "../../routes";

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </HelmetProvider>
      <ToastContainer />
    </ApolloProvider>
  );
};
