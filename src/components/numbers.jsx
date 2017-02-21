var React=require('react');

var NumberButtons=React.createClass(
    {
        returnValue: function()
        {
            return this.props.value;

        },
        render: function () {

            return(
                <div>
                <button className="btn btn-sm btn-success" value={this.props.value} onClick={this.props.onClick}>{this.props.value} </button>
                </div>

            )




        }
    }
);

module.exports=NumberButtons;