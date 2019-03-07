import React, { Component } from "react";
import { connect } from "react-redux";

class Tree extends Component {
  constructor(props) {
    super(props); //not sure what this line does
    this.state = {
      expanded: true
    };
  }
  onClick(){
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    let treeData = this.props.treeData;
    let treeDepth = this.props.treeDepth;
    let subtree;
    let divstyle = {
      marginLeft: (treeDepth * 5) +'px'
    }
    let arrowStyle= {
      cursor: 'pointer'
    }
    let arrow = () =>{
      if(this.state.expanded){
        return(<b style = {arrowStyle} onClick ={this.onClick.bind(this)}>&#9662;</b>)        
      }
      else{
        return(<b style = {arrowStyle} onClick ={this.onClick.bind(this)}>&#9656;</b>)   
      }  
    }

    let recursiveMenuLogic = () =>{

      if (typeof(treeData.children) === "undefined") {
        return <Tree treeData={treeData[0]} key = {treeData[0].id} treeDepth ={treeDepth + 1} parentExpanded = {this.state.expanded} />;
      }
      
      else if (treeData.children.length > 0 && this.props.parentExpanded) {
        subtree = treeData.children.map(child => {
          return <Tree treeData={child} key ={child.id} treeDepth ={treeDepth + 1} parentExpanded = {this.state.expanded}/>;       
        });  
        return(
          <div style ={divstyle}>
            {arrow()}            
            {treeData.name}          
            {subtree}
          </div>
        )
      }    

      else if(treeData.children.length === 0  && this.props.parentExpanded) {
        return <div style ={divstyle} onClick ={this.onClick.bind(this)}>{treeData.name}</div>;
      }

      else{
        return null
      }
    }

    return (recursiveMenuLogic())    
  }
}
const getTreeData = state => {
  return {
    treeData: state.treeData,
    treeDepth: state.treeDepth
  };
};

export default connect(getTreeData)(Tree);
