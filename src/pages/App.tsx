import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { apolloClient } from "../providers/apolloClient";
import { Routes } from "../routes";

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  );
};
