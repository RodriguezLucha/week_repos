import React from 'react';


class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = {index: 0};
  }



  render() {
    const content = this.props.content[this.state.index].content;
    const index = this.state.index;

    return (
      <div className="tabs-container">
        <h1>Tabs</h1>
        <ul className="tabs">
          {this.props.content.map((tab) => (
            <li key={tab.id}>
              <h1 onClick={() => this.setState({index: tab.id})}
                  className={tab.id === index ? "activeTab" : ""}>
                {tab.title}
              </h1>
            </li>
          ))}
        </ul>
        <article>{content}</article>
      </div>
    );
  }
}

export default Tab;

/*

  [
    { 
      title: "one",
      content: "this is the first"    
    }
  ]
*/