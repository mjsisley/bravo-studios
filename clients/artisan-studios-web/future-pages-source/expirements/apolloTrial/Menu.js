import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { NetworkStatus } from "apollo-boost";
import ErrorMessage from "components/ErrorMessage";

const GET_MENU_ITEMS = gql`
  query createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

const Section = styled.section`
  padding-bottom: 20px;
  li {
    display: block;
    margin-bottom: 10px;
  }
  div {
    align-items: center;
    display: flex;
  }
  a {
    font-size: 14px;
    margin-right: 10px;
    text-decoration: none;
    padding-bottom: 0;
    border: 0;
  }
  span {
    font-size: 14px;
    margin-right: 5px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  button:before {
    align-self: center;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #ffffff transparent transparent transparent;
    content: "";
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`;

export const ALL_MENU_QUERY = gql`
  query {
    menuItems(order: DESC, filter: {}) {
      id
      name
      description
      price
    }
  }
`;

export default function PostList() {
  const { loading, error, data } = useQuery(ALL_MENU_QUERY);

  console.log(data ? data : error);

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;

  console.log(data);

  const { menuItems, _menuItemsMeta } = data;

  return (
    <Section>
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.id}>
            <div>
              <span>{index + 1}. </span>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
