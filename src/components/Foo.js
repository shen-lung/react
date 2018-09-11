import React from 'react';

const myFoo = (Component) => {
    class Foo extends React.Component {

        _handleOnClick = () => {
            console.log('hola');
        }

        render() {
            const propsForChildren = {
                onClick: this._handleOnClick,
            };

            return (
                <Component {...propsForChildren} />
            );
        }
    }
    return Foo;
};

export default myFoo;
