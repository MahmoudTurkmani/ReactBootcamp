import React from 'react';

class Machine extends React.Component {
    render(props) {
        let {s1, s2, s3} = this.props;
        let flag = s1 === s3 && s1 === s2;
        let message = flag ? 'You win!' : 'You lose!';
        
        return (
            <section>
                <p>{s1} {s2} {s3}</p>
                <p>{message}</p>
            </section>
        )
    }
}

export default Machine;