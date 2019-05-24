import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShowMore extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                link: "block",
                info: "none"
            }
        }

        handleClick = () => {
            if (this.state.link === "block") {
                this.setState({
                    link: "none",
                    info: "block"
                });
            }
        }

        render() {
            return(
                <div>
                    <a
                        href="#"
                        onClick={ this.handleClick}
                        style={ {display: this.state.link} }
                    >
                        Pokaż więcej
                    </a>
                    <div style={ {display: this.state.info} }>
                        { this.props.children }
                    </div>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <ShowMore>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.
                    </p>
                </ShowMore>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
