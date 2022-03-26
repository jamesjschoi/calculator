function Footer({copyright, author}) {
    
    return (
        <footer className="footer">
            <p>&copy; {copyright} {author}</p>
        </footer>
    )
}
// Date Utilities

function getYear() {
    const d = new Date();
    return d.getFullYear();
}

Footer.defaultProps = {
    copyright: getYear(),
    author: 'James Choi'
}


export default Footer;
export {getYear};