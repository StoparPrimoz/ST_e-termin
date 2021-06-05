(this["webpackJsonpepdp-frontend"]=this["webpackJsonpepdp-frontend"]||[]).push([[0],{126:function(e,t,a){e.exports=a(254)},131:function(e,t,a){},132:function(e,t,a){},152:function(e,t){},154:function(e,t){},165:function(e,t){},167:function(e,t){},194:function(e,t){},196:function(e,t){},197:function(e,t){},203:function(e,t){},205:function(e,t){},223:function(e,t){},226:function(e,t){},242:function(e,t){},245:function(e,t){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(123),c=a.n(r),s=(a(131),a(132),a(124)),l=a(4),u=a(7),i=a(8),m=a(3),d=a(17),p=a(16),h=a(43),f=a.n(h),b=a(44),v=a.n(b),E="http://studentdocker.informatika.uni-mb.si:20285/wp-json/wc/v3/customers",g=f.a.create();v()(g,{key:"ck_972561c1c9fc45e1a03c9ee8751a0acae3d61cd8",secret:"cs_63446b19dc6f05d9e843980df6d2dc16f8ce7843",algorithm:"HMAC-SHA1"});var C=new(function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,[{key:"getCustomers",value:function(){return g.get(E)}},{key:"createCustomer",value:function(e){return g.post(E,e)}},{key:"getCustomerById",value:function(e){return g.get(E+"/"+e)}},{key:"updateCustomer",value:function(e,t){return g.put(E+"/"+t,e)}},{key:"deleteCustomer",value:function(e){return g.delete(E+"/"+e,{params:{force:!0}})}}]),e}()),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={customers:[]},n.addCustomer=n.addCustomer.bind(Object(m.a)(n)),n.editCustomer=n.editCustomer.bind(Object(m.a)(n)),n.deleteCustomer=n.deleteCustomer.bind(Object(m.a)(n)),n.navigateCoupons=n.navigateCoupons.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"deleteCustomer",value:function(e){var t=this;C.deleteCustomer(e).then((function(a){t.setState({customers:t.state.customers.filter((function(t){return t.id!==e}))})}))}},{key:"editCustomer",value:function(e){this.props.history.push("/add-customer/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;C.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data})}))}},{key:"addCustomer",value:function(){this.props.history.push("/add-customer/_add")}},{key:"navigateCoupons",value:function(){this.props.history.push("/coupons")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"text-center"},"Customers List"),o.a.createElement("div",{className:"row"},o.a.createElement("button",{className:"btn btn-primary",onClick:this.addCustomer}," Add Customer"),"\xa0",o.a.createElement("button",{className:"btn btn-secondary",onClick:this.navigateCoupons}," Coupons")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," First name"),o.a.createElement("th",null," Last name"),o.a.createElement("th",null," Email"),o.a.createElement("th",null," Username"),o.a.createElement("th",null," Actions"))),o.a.createElement("tbody",null,this.state.customers.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null," ",t.first_name," "),o.a.createElement("td",null," ",t.last_name),o.a.createElement("td",null," ",t.email),o.a.createElement("td",null," ",t.username),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.editCustomer(t.id)},className:"btn btn-info"},"Update "),o.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteCustomer(t.id)},className:"btn btn-danger"},"Delete ")))}))))))}}]),a}(n.Component),N="http://studentdocker.informatika.uni-mb.si:20285/wp-json/wc/v3/coupons",k=f.a.create();v()(k,{key:"ck_972561c1c9fc45e1a03c9ee8751a0acae3d61cd8",secret:"cs_63446b19dc6f05d9e843980df6d2dc16f8ce7843",algorithm:"HMAC-SHA1"});var O=new(function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,[{key:"getCoupons",value:function(){return k.get(N)}},{key:"createCoupon",value:function(e){return k.post(N,e)}},{key:"getCouponById",value:function(e){return k.get(N+"/"+e)}},{key:"updateCoupon",value:function(e,t){return k.put(N+"/"+t,e)}},{key:"deleteCoupon",value:function(e){return k.delete(N+"/"+e,{params:{force:!0}})}}]),e}()),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={coupons:[]},n.addCoupon=n.addCoupon.bind(Object(m.a)(n)),n.editCoupon=n.editCoupon.bind(Object(m.a)(n)),n.deleteCoupon=n.deleteCoupon.bind(Object(m.a)(n)),n.navigateCustomers=n.navigateCustomers.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"deleteCoupon",value:function(e){var t=this;O.deleteCoupon(e).then((function(a){t.setState({coupons:t.state.coupons.filter((function(t){return t.id!==e}))})}))}},{key:"editCoupon",value:function(e){this.props.history.push("/add-coupon/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;O.getCoupons().then((function(t){console.log(t),e.setState({coupons:t.data})}))}},{key:"addCoupon",value:function(){this.props.history.push("/add-coupon/_add")}},{key:"navigateCustomers",value:function(){this.props.history.push("/customers")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"text-center"},"Coupon List"),o.a.createElement("div",{className:"row"},o.a.createElement("button",{className:"btn btn-primary",onClick:this.addCoupon}," Add Coupon"),"\xa0",o.a.createElement("button",{className:"btn btn-secondary",onClick:this.navigateCustomers}," Customers")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Code"),o.a.createElement("th",null," Amount"),o.a.createElement("th",null," Discount Type"),o.a.createElement("th",null," Actions"))),o.a.createElement("tbody",null,this.state.coupons.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null," ",t.code," "),o.a.createElement("td",null," ",t.amount),o.a.createElement("td",null," ",t.discount_type),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.editCoupon(t.id)},className:"btn btn-info"},"Update "),o.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteCoupon(t.id)},className:"btn btn-danger"},"Delete ")))}))))))}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loggedIn:window.sessionStorage.getItem("user")},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=window.location.href;return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},o.a.createElement("div",null,o.a.createElement("a",{href:"./",className:"navbar-brand"},"Customer & Coupon Management App")),t?o.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){window.sessionStorage.removeItem("user"),e.setState({loggedIn:!t}),window.location=a},className:"btn btn-primary"},"Log out "):o.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){window.sessionStorage.setItem("user",JSON.stringify({username:"admin",password:"1002335060"})),e.setState({loggedIn:!t}),window.location=a},className:"btn btn-primary"},"Log in "))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"text-muted"},"EPDP")))}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).saveOrUpdateCustomer=function(e){e.preventDefault();var t={first_name:n.state.first_name,last_name:n.state.last_name,email:n.state.email,username:n.state.username};console.log("customer => "+JSON.stringify(t)),"_add"===n.state.id?C.createCustomer(t).then((function(e){n.props.history.push("/customers")})):C.updateCustomer(t,n.state.id).then((function(e){n.props.history.push("/customers")}))},n.changeFirstNameHandler=function(e){n.setState({first_name:e.target.value})},n.changeLastNameHandler=function(e){n.setState({last_name:e.target.value})},n.changeEmailHandler=function(e){n.setState({email:e.target.value})},n.changeUsernameHandler=function(e){n.setState({username:e.target.value})},n.state={id:n.props.match.params.id,first_name:"",last_name:"",email:"",username:""},n.changeFirstNameHandler=n.changeFirstNameHandler.bind(Object(m.a)(n)),n.changeLastNameHandler=n.changeLastNameHandler.bind(Object(m.a)(n)),n.changeEmailHandler=n.changeEmailHandler.bind(Object(m.a)(n)),n.changeUsernameHandler=n.changeUsernameHandler.bind(Object(m.a)(n)),n.saveOrUpdateCustomer=n.saveOrUpdateCustomer.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;"_add"!==this.state.id&&C.getCustomerById(this.state.id).then((function(t){var a=t.data;e.setState({first_name:a.first_name,last_name:a.last_name,email:a.email,username:a.username})}))}},{key:"cancel",value:function(){this.props.history.push("/customers")}},{key:"getTitle",value:function(){return"_add"===this.state.id?o.a.createElement("h3",{className:"text-center"},"Add Customer"):o.a.createElement("h3",{className:"text-center"},"Update Customer")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),o.a.createElement("div",{className:"card-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," First Name: "),o.a.createElement("input",{placeholder:"First Name",name:"first_name",className:"form-control",value:this.state.first_name,onChange:this.changeFirstNameHandler})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Last Name: "),o.a.createElement("input",{placeholder:"Last Name",name:"last_name",className:"form-control",value:this.state.last_name,onChange:this.changeLastNameHandler})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Email: "),o.a.createElement("input",{placeholder:"Email Address",name:"email",className:"form-control",value:this.state.email,onChange:this.changeEmailHandler})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Username: "),o.a.createElement("input",{placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.changeUsernameHandler})),o.a.createElement("button",{className:"btn btn-success",onClick:this.saveOrUpdateCustomer},"Save"),o.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).saveOrUpdateCoupon=function(e){e.preventDefault();var t={amount:n.state.amount,code:n.state.code,discount_type:n.state.discount_type};console.log("coupon => "+JSON.stringify(t)),"_add"===n.state.id?O.createCoupon(t).then((function(e){n.props.history.push("/coupons")})):O.updateCoupon(t,n.state.id).then((function(e){n.props.history.push("/coupons")}))},n.changeAmountHandler=function(e){n.setState({amount:e.target.value})},n.changeCodeHandler=function(e){n.setState({code:e.target.value})},n.changeDiscountTypeHandler=function(e){n.setState({discount_type:e.target.value})},n.state={id:n.props.match.params.id,amount:"",code:"",discount_type:""},n.changeAmountHandler=n.changeAmountHandler.bind(Object(m.a)(n)),n.changeCodeHandler=n.changeCodeHandler.bind(Object(m.a)(n)),n.changeDiscountTypeHandler=n.changeDiscountTypeHandler.bind(Object(m.a)(n)),n.saveOrUpdateCoupon=n.saveOrUpdateCoupon.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;"_add"!==this.state.id&&O.getCouponById(this.state.id).then((function(t){var a=t.data;e.setState({amount:a.amount,code:a.code,discount_type:a.discount_type})}))}},{key:"cancel",value:function(){this.props.history.push("/coupons")}},{key:"getTitle",value:function(){return"_add"===this.state.id?o.a.createElement("h3",{className:"text-center"},"Add Coupon"):o.a.createElement("h3",{className:"text-center"},"Update Coupon")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),o.a.createElement("div",{className:"card-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Amount: "),o.a.createElement("input",{placeholder:"Amount",name:"amount",className:"form-control",value:this.state.amount,onChange:this.changeAmountHandler})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Code: "),o.a.createElement("input",{placeholder:"Code",name:"code",className:"form-control",value:this.state.code,onChange:this.changeCodeHandler})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Discount type: "),o.a.createElement("input",{placeholder:"DiscountType",name:"discount_type",className:"form-control",value:this.state.discount_type,onChange:this.changeDiscountTypeHandler})),o.a.createElement("button",{className:"btn btn-success",onClick:this.saveOrUpdateCoupon},"Save"),o.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component);var A=function(){var e=window.sessionStorage.getItem("user");return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(_,null),o.a.createElement("div",{className:"container"},e?o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",exact:!0,component:y}),o.a.createElement(l.a,{path:"/customers",component:y}),o.a.createElement(l.a,{path:"/coupons",component:j}),o.a.createElement(l.a,{path:"/add-customer/:id",component:H}),o.a.createElement(l.a,{path:"/add-coupon/:id",component:S})):o.a.createElement("div",null,"You need to log in!")),o.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(253);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.b633a786.chunk.js.map