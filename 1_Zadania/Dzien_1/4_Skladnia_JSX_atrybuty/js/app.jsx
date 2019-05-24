import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';

    ReactDOM.render(
        <div>
            <img src={imageUrl} />
        </div>,
        document.getElementById('app')
    );
});
