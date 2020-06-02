import { Helmet } from "react-helmet";
import React from "react"

export default class Comments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="commento"/>
                <Helmet>
                <script src="https://cdn.commento.io/js/commento.js"
                data-css-override="https://gist.github.com/eeshamoona/5f8c796033632c08a6634938046dcbba.js"
                data-auto-init="true">
                </script>
                </Helmet>
            </React.Fragment>
        );
    }
}