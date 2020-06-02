import { Helmet } from "react-helmet";
import React from "react"

export default class Comments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="commento"/>
                <Helmet>
                <script defer src="https://cdn.commento.io/js/commento.js"
                data-css-override="./comment.css"
                data-auto-init="true">
                </script>
                </Helmet>
            </React.Fragment>
        );
    }
}