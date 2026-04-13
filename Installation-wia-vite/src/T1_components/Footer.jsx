import { Fragment } from "react";

export function Footer(){
    return(
        <Fragment>
        <footer>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
        </Fragment>
    )
}