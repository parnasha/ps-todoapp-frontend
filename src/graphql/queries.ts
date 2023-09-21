// Import necessary libraries and modules
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
// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({ uri: "http://localhost:5000/graphql" });
// Create an ApolloLink to handle authentication by adding an Authorization header
const authLink = new ApolloLink((operation, forward) => {
    const accessToken = getToken();
    if (accessToken) {
        operation.setContext({
            headers: { Authorization: `Bearer ${accessToken}` },
        });
    }
    return forward(operation);
});
// Initialize the Apollo Client
const client = new ApolloClient({
    // Combine authLink and httpLink
    link: concat(authLink, httpLink),
    cache: new InMemoryCache({ addTypename: true }),
});
// Function to get a list of users
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

    const { data } = await client.query({ query });

    console.log(data);
}

// Function to register a new user
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
// Function to log in a user
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
// Function for adding a new task
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
            refetchQueries: [
                {
                    query: gql`
                        query GetTodosByUser {
                            getTodosByUser {
                                id
                                title
                                description
                                isDone
                            }
                        }
                    `,
                },
            ],
        });

        return data;
    } catch (error) {}
}
// Function for getting a list of todos
export async function getTodo() {
    try {
        const query = gql`
            query GetTodosByUser {
                getTodosByUser {
                    id
                    title
                    description
                    isDone
                }
            }
        `;
        const { data } = await client.query({ query });
        return data.getTodosByUser;
    } catch (error) {
        console.log("getTodo error", error);
    }
}
// Function for deleting a task
export async function deleteTask(id: string) {
    try {
        const mutation = gql`
            mutation ($todoId: ID!) {
                deleteTodo(todoId: $todoId)
            }
        `;
        const { data } = await client.mutate({
            mutation,
            variables: {
                todoId: id,
            },
            refetchQueries: [
                {
                    query: gql`
                        query GetTodosByUser {
                            getTodosByUser {
                                id
                                title
                                description
                                isDone
                            }
                        }
                    `,
                },
            ],
        });

        console.log(data);

        return data;
    } catch (error) {
        return error;
    }
}
