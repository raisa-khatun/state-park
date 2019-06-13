import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Gmaps extends React.Component {

   
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadJS('https://maps.googleapis.com/maps/api/js?key=give your key&callback=initMap')
    }

    initMap() {
        map = new google.maps.Map(this.refs.map.getDOMNode(), { });
    }

    render() {
            return (
                <div>
                   
                    <div ref="map" style="height: '500px', width: '500px'"> <⁄div>
                <⁄div>
            );
    }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}