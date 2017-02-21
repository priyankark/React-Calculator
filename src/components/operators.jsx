var React=require('react');

var OperatorsButtons=React.createClass(
    {
        render: function () {

            return(
                <div>
                    <button className="btn btn-sm btn-warning" value={this.props.value} onClick={this.props.onClick}>{this.props.value} </button>
                </div>

            )




        }
    }
);

module.exports=OperatorsButtons;