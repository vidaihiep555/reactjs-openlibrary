function getName(name) {
  alert(name);
}

var KhoaHoc = React.createClass({
  render: function() {
    return (
      <h1>Khoa Hoc</h1>
    );
  }
});

var LeVi = React.createClass({
  addStudent() {
    this.state.tongHocVien = this.state.tongHocVien + 1;
    this.setState(this.state);
  },
  layThongTin: function () {
    alert(this.props.children);
  },
  getInitialState() {
    return {
      tongHocVien: parseInt(this.props.tongHocVien)
    };
  },
  render() {
    return(
      <div>

        <h1 className="mauvang">
          {this.props.ten} - {this.props.giangvien}
        </h1>

        <div>
          Tonghoc vien: {this.state.tongHocVien}
        </div>

        <p>
          {this.props.children}
        </p>

        <button onClick={()=>{
            var str = this.props.ten + ' ' + this.props.giangvien;
            getName(str);}}>
            Click here
        </button>

        <button onClick={this.addStudent}>
          Add Student
        </button>

          <KhoaHoc />

        </div>
    );
  }
});

var InputTag = React.createClass({
  show() {
    var text = this.refs.txt.value;
    var select = this.refs.sl.value;
    alert(text + select);
  },

  render() {
    return (
      <div>

        <input type="text" ref="txt">
        </input>
        <select ref="sl">
          <option value="a">AAA</option>
          <option value="b">BBB</option>
          <option value="c">CCC</option>
        </select>
        <button onClick={this.show}>
          Hien Thi
        </button>

      </div>

    );
  }

});

ReactDOM.render(
  <div>
    <h1>LEVI</h1>
    <LeVi ten="ReactJS" giangvien="Mr.A" tongHocVien="10">ReactjsAA</LeVi>
    <LeVi ten="NodeJS" giangvien="Mr.B" tongHocVien="20">NodejsAA</LeVi>
    <InputTag />
  </div>
, document.getElementById("root"));
