import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

export async function getUsers() {
    const query = gql`
        query {
            getUsers {
                name
                age
                dob
            }
        }
    `;

    // const { company } = await client.request(query, { id });

    const { data } = await client.query({ query });

    console.log(data);
}
export async function register(name: string, password: string) {
    const mutation = gql`
        mutation (
            $name: String!
            $email: String!
            $dob: Date!
            $gender: String!
            $password: String!
        ) {
            registerUser(
                name: $name
                email: $email
                dob: $dob
                gender: $gender
                password: $password
            ) {
                token
            }
        }
    `;
    const { data } = await client.mutate({
        mutation,
        variables: {
            name: name,
            email: "sekhArkaail.com",
            dob: "1997-12-11",
            gender: "female",
            password: password,
        },
    });

    console.log(data);
}

export async function login(email: string, password: string) {
    const mutation = gql`
        mutation ($email: String!, $password: String!) {
            loginUser(email: $email, password: $password) {
                token
            }
        }
    `;
    const { data } = await client.mutate({
        mutation,
        variables: {
            email: email,

            password: password,
        },
    });

    console.log(data);
}
