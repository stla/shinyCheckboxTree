import { reactShinyInput } from 'reactR';
import React from 'react';
//import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';


function extractValues(nodes){
  var values = nodes.map(function(node){ return node.value; });
  nodes.forEach(function(node){
    var fields = Object.keys(node);
    if(fields.indexOf("children") > -1){
      values = values.concat(extractValues(node.children));
    }
  });
  return values;
}


class Widget extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        checked: this.props.checked,
        expanded: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const nchecked = this.props.checked.length;
    const diff = nchecked !== prevProps.checked.length ||
      nchecked !== (new Set([...this.props.checked,...prevProps.checked])).size;
    if(diff) {
      const checked = this.props.values.filter(x => this.props.checked.includes(x));
      this.setState({checked: checked});
      this.props.setValue(checked);
    }
  }


  render() {
    return (
      <CheckboxTree
        iconsClass="fa5"
        nodes={this.props.nodes}
        checkModel={this.props.checkModel}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={(checked, targetNode) => {
          if(this.props.single) {
            this.props.setValue([targetNode.value]);
          } else {
            this.props.setValue(checked);
          }
        }}
        onExpand={expanded => this.setState({ expanded })}
        onlyLeafCheckboxes={this.props.onlyLeafCheckboxes}
        showExpandAll={this.props.showExpandAll}
      />
    );
  }
}


const Input = ({ configuration, value, setValue }) => {
  if(configuration.single && value.length > 1) {
    value = value[0];
  }
  return (
    <Widget
      nodes={configuration.nodes}
      values={configuration.values}
      single={configuration.single}
      checkModel={configuration.checkModel}
      checked={value}
      setValue={setValue}
      onlyLeafCheckboxes={configuration.onlyLeafCheckboxes}
      showExpandAll={configuration.showExpandAll}
    />
  );
};


reactShinyInput('.checkboxTree', 'shinyCheckboxTree.checkboxTree', Input);
