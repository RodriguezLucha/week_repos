import React from 'react';

class PlankIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPlanks();
  }

  render() {
    if(!this.props.planks) return null;

    let planks = this.props.planks;

    return(
      <div>
        <h1>Planks: </h1>
        <ul>
          {planks.map(plank => (
            <li key={plank.id}>
              {plank.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlankIndex;