import React from "react";
import Link from "gatsby-link";

const styles = {
  post: {
    marginBottom: '30px'
  },
  date: {
    color: '#BBB'
  },
  link: {
    textDecoration: 'none', 
    color: 'inherit'
  }
};

export default ({data}) =>  {
  return (
    <div>
      <h1>Início</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}
          style={styles.link}
        >
          <div style={styles.post} key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <span style={styles.date}>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], 
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`