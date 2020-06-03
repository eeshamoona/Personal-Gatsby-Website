import { Helmet } from "react-helmet";
import React from "react"

export default class Comments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                <script src="https://cdn.commento.io/js/commento.js"
                data-css-override="https://eeshamoona.com/components/comment.css"
                data-auto-init="true">
                </script>
                </Helmet>
                <div id="commento"/>
            </React.Fragment>
        );
    }
}