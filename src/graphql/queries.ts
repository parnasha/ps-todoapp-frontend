import { getToken } from "../token";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
    ApolloLink,
    createHttpLink,
    concat,
} from "@apollo/client";

const httpLink = createHttpLink({ uri: "http://localhost:5000/graphql" });

const authLink = new ApolloLink((operation, forward) => {
    const accessToken = getToken();
    if (accessToken) {
        operation.setContext({
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    }
    return forward(operation);
});

const client = new ApolloClient({
    link: concat(authLink, httpLink),
    cache: new InMemoryCache({ addTypename: true }),
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

export async function addTask(title: string, description: string) {
    try {
        const mutation = gql`
            mutation ($title: String!, $description: String!) {
                createTodo(title: $title, description: $description) {
                    title
                    description
                    isDone
                }
            }
        `;
        const { data } = await client.mutate({
            mutation,
            variables: {
                title: title,

                description: description,
            },
        });

        return data;
    } catch (error) {}
}

export async function getTodo() {
    try {
        const query = gql`
            query GetTodosByUser {
                getTodosByUser {
                    title
                    description
                    isDone
                }
            }
        `;
        const { data } = await client.query({ query });
        console.log(data);
        return data.getTodosByUser;
    } catch (error) {
        console.log(error);
    }
}
