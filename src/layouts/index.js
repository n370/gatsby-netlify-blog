import React from "react";
import Link from "gatsby-link";

const styles = {
    listItem: {
        display: 'inline-block',
        marginRight: '1rem'
    },
    wrapper: {
        margin: '0 auto',
        maxWidth: 650,
        border: '1px solid black'
    },
    header: {
        padding: '5px',
        marginBottom: '1.5rem'
    },
    siteTitleLink: {
        textShadow: 'none',
        backgroundImage: 'none'
    },
    siteTitle: {
        display: 'inline'
    },
    list: {
        listStyle: 'none',
        float: 'right'
    },
    main: {
        padding: '5px'
    },
    footer: {
        background: 'black',
        color: 'white',
        padding: '5px'
    }
};

const ListLink = props => (
  <li style={styles.listItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children, data }) => (
    <div style={styles.wrapper}>
        <header style={styles.header}>
            <Link to="/" style={styles.siteTitleLink}>
                <h3 style={styles.siteTitle}>{data.site.siteMetadata.title}</h3>
            </Link>
            <ul style={styles.list}>
                <ListLink to="/">Início</ListLink>
                <ListLink to="/sobre/">Sobre</ListLink>
                <ListLink to="/contacto/">Contacto</ListLink>
            </ul>
        </header>
        <main style={styles.main}>{children()}</main>
        <footer style={styles.footer}>
            <small>{data.site.siteMetadata.title}</small>
        </footer>
    </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`