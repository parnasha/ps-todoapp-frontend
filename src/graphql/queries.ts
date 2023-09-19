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
export async function register(
    name: string,
    email: string,
    password: string,
    gender: string,
    dob: string
) {
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
            email: email,
            dob: dob,
            gender: gender,
            password: password,
        },
    });

    return data;
}

export async function login(email: string, password: string) {
    try {
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

        return data;
    } catch (error) {
        return error;
    }
}
