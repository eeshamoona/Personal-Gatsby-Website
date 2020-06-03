import { Helmet } from "react-helmet";
import React from "react"

export default class Comments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                <script src="https://cdn.commento.io/js/commento.js"
                data-css-override="https://gist.githubusercontent.com/eeshamoona/5f8c796033632c08a6634938046dcbba/raw/478fda5532db18a45ba0acb23cf5a4ab05f225d1/comment.css"
                data-auto-init="true">
                </script>
                </Helmet>
                <div id="commento"/>
            </React.Fragment>
        );
    }
}