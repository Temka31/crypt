import * as React from "react";
import {ApolloProvider} from "@apollo/react-common";
import client from "../GraphQL/config";

function MyApp({ Component, pageProps }) {


    return(
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>)
}


export default MyApp
