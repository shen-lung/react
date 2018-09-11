import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class FBLoginComponent extends Component {
    static PropTypes = {
        appId: PropTypes.string.isRequired,
        version: PropTypes.string,
        cookie: PropTypes.bool,
        language: PropTypes.string,
        fields: PropTypes.string,
        onResponse: PropTypes.func.isRequired,
        scope: PropTypes.string,
        autoLogin: PropTypes.bool,
        xfbml: PropTypes.bool,
    };

    static defaultProps = {
        version: 'v3.1',
        cookie: false,
        language: 'en_US',
        fields: 'name',
        scope: 'public_profile,email',
        autoLogin: true,
        appId: '1771719602924919',
        xfbml: false,
    };

    componentDidMount() {
        this.fbInit();
        this.loadSdk();
    }

    fbInit = () => {
        const {
            appId,
            version,
            cookie,
            xfbml,
            autoLogin,
        } = this.props;

        window.fbAsyncInit = () => {
            window.FB.init({
                appId,
                cookie,
                xfbml,
                version: `${version}`,
            });
            if (autoLogin) {
                window.FB.getLoginStatus(this.checkLoginStatus)
            }
        };
    }

    loadSdk = () => {
        const {language} = this.props;
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = `https://connect.facebook.net/${language}/sdk.js#version=v2.0`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    checkLoginStatus = (response) => {
        const {
            language,
            fields,
            onResponse,
        } = this.props;

        if (response.status === 'connected' && response.authResponse) {
            window.FB.api(
                '/me',
                {
                    locale: language,
                    fields: fields
                },
                (me) => {
                    onResponse(Object.assign(me, response.authResponse));
                }
            )
        }
    }

    facebookLogin = () => {
        const {scope} = this.props;
        window.FB.login(
            this.checkLoginStatus,
            {scope: scope}
        );
    }

    render() {
        return (
            <button onClick={this.facebookLogin}>Fb login</button>
        );
    }
}
