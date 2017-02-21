var React=require('react');
var Numbers=require('./numbers.jsx');
var Operators=require('./operators.jsx');


var Manager=React.createClass(
    {
        getInitialState: function () {
            return(
            {
             displayText:"",
                answer:""
            }

            );
        },
        handleClick: function (e) {
            console.log(e.target.value);
            console.log(e.target);
            var newText=this.state.displayText;
            newText+=e.target.value;
            this.setState({
                displayText:newText,
                answer:""
            });

        },
        handleEquals:function () {
            var Answer=eval(this.state.displayText);
            this.setState({
                displayText:Answer,
                answer:Answer
            });


        },

        clearState: function(){
            this.setState({
                displayText:"",
                answer:""

            });

        },


        render: function () {

            return(
            <div className="container-fluid">
            <div className="panel col-xs-12 col-sm-7 " >
                <div className="panel-heading panel-danger">
                    {this.state.displayText}
                </div>

                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="1" ref="one" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="2" ref="two" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="3" ref="three" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="4" ref="four" onClick={this.handleClick}/>

                        </div>
                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="5" ref="five" onClick={this.handleClick}/>

                        </div>
                        <div className="col-xs-1 col-sm-2">
                            <button className="btn btn-danger" onClick={this.clearState}>Clear </button>
                        </div>




                    </div>

                    <br/>


                    <div className="row">
                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="6" ref="six" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="7" ref="seven" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="8" ref="eight" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="9" ref="nine" onClick={this.handleClick}/>

                        </div>
                        <div className="col-xs-1 col-sm-2">
                            <Numbers value="0" ref="zero" onClick={this.handleClick}/>

                        </div>




                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-xs-1 col-sm-2">
                            <Operators value="+" ref="add" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Operators value="-" ref="subtract" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Operators value="*" ref="multiply" onClick={this.handleClick}/>

                        </div>

                        <div className="col-xs-1 col-sm-2">
                            <Operators value="/" ref="divide" onClick={this.handleClick}/>

                        </div>
                        <div className="col-xs-1 col-sm-2">
                            <Operators value="=" ref="equal" onClick={this.handleEquals}/>

                        </div>




                    </div>




                </div>





            </div>

                </div>
            )


        }

    }
);

module.exports=Manager;