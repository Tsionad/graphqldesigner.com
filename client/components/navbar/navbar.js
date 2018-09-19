import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

import './navbar.css';



const mapStateToProps = store => ({
  tables: store.data.tables,  
});


const mapDispatchToProps = dispatch => ({
  exportTable: tables => dispatch(actions.exportTable(tables)), 
  saveTable: tables => dispatch(actions.saveTable(tables)) 

});

 
class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
    this.handleSaveTable= this.handleSaveTable.bind(this)
    this.handleExportTable = this.handleExportTable.bind(this);

  }
    
  createTable(event){
    this.props.saveTable(this.props.tables);
  }
    
    handleSaveTable(event){
      this.props.saveTable(this.props.tables);
    }
   
    handleExportTable(event){
    this.props.exportTable(this.props.tables);
    }
  
  
  render() {
    return (
      <nav className="navbar-nav fixed-top navbar-dark bg-light">
        <div className="navbar-nav-container">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-secondary" onClick={this.createTable}>New Table</button>
            <button type="button" className="btn btn-secondary">Load</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleSaveTable}>Save</button>
            <button 
              className="btn btn-secondary"
              onClick={this.handleExportTable}
              >Export
            </button>    
          <div className="btn-group justify-content-end" role="group" aria-label="Basic example">
            <button className="btn btn-outline-success my-2 my-md-0" type="submit">Account</button>
            <button className="btn btn-outline-success my-2 my-md-0" type="submit">Logout</button>
          </div>
        </div>
        </div>
      </nav>
    );
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(MainNav);




