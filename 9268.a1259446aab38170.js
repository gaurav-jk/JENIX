"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9268],{9268:(p,l,c)=>{c.r(l),c.d(l,{CheckoutPageModule:()=>F});var u=c(177),d=c(4341),n=c(3152),h=c(70),t=c(3953);let g=(()=>{var e;class r{constructor(){this.cart=[]}getCart(){return this.cart}addToCart(o){const i=this.cart.find(s=>s.id===o.id);i?i.quantity+=1:(o.quantity=1,this.cart.push(o))}removeFromCart(o){const i=this.cart.findIndex(s=>s.id===o.id);if(i>-1){const s=this.cart[i];s.quantity>1?s.quantity-=1:this.cart.splice(i,1)}}clearCart(){this.cart=[]}getSubtotal(){return this.cart.reduce((o,i)=>o+i.price*i.quantity,0)}}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),r})();function C(e,r){if(1&e&&(t.j41(0,"ion-item")(1,"ion-thumbnail",3),t.nrm(2,"img",4),t.k0s(),t.j41(3,"ion-label")(4,"h2"),t.EFF(5),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"currency"),t.k0s()(),t.j41(9,"ion-note",1),t.EFF(10),t.nI1(11,"currency"),t.k0s()()),2&e){const a=r.$implicit;t.R7$(2),t.Y8G("src",a.image,t.B4B),t.R7$(3),t.JRh(a.name),t.R7$(2),t.Lme("",t.i5U(8,5,a.price,"INR")," x ",a.quantity,""),t.R7$(3),t.JRh(t.i5U(11,8,a.price*a.quantity,"INR"))}}const m=[{path:"",component:(()=>{var e;class r{constructor(o){this.cartService=o,this.cart=[],this.subtotal=0,this.taxes=0,this.totalPayable=0,this.taxRate=.18}ngOnInit(){this.loadCart()}loadCart(){this.cart=this.cartService.getCart(),this.calculateTotals()}calculateTotals(){this.subtotal=this.cartService.getSubtotal(),this.taxes=this.subtotal*this.taxRate,this.totalPayable=this.subtotal+this.taxes}}return(e=r).\u0275fac=function(o){return new(o||e)(t.rXU(g))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-checkout"]],decls:43,vars:17,consts:[[4,"ngFor","ngForOf"],["slot","end"],["expand","full","color","primary"],["slot","start"],[3,"src"]],template:function(o,i){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Checkout"),t.k0s()()(),t.j41(4,"ion-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),t.EFF(8,"Products"),t.k0s()(),t.j41(9,"ion-card-content")(10,"ion-list"),t.DNE(11,C,12,11,"ion-item",0),t.k0s()()(),t.j41(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title"),t.EFF(15,"Summary"),t.k0s()(),t.j41(16,"ion-card-content")(17,"ion-item")(18,"ion-label"),t.EFF(19,"Subtotal"),t.k0s(),t.j41(20,"ion-note",1),t.EFF(21),t.nI1(22,"currency"),t.k0s()(),t.j41(23,"ion-item")(24,"ion-label"),t.EFF(25,"Taxable Amount"),t.k0s(),t.j41(26,"ion-note",1),t.EFF(27),t.nI1(28,"currency"),t.k0s()(),t.j41(29,"ion-item")(30,"ion-label"),t.EFF(31,"Taxes"),t.k0s(),t.j41(32,"ion-note",1),t.EFF(33),t.nI1(34,"currency"),t.k0s()(),t.j41(35,"ion-item")(36,"ion-label"),t.EFF(37,"Total Payable"),t.k0s(),t.j41(38,"ion-note",1),t.EFF(39),t.nI1(40,"currency"),t.k0s()()()(),t.j41(41,"ion-button",2),t.EFF(42,"Proceed to Payment"),t.k0s()()),2&o&&(t.R7$(11),t.Y8G("ngForOf",i.cart),t.R7$(10),t.JRh(t.i5U(22,5,i.subtotal,"INR")),t.R7$(6),t.JRh(t.i5U(28,8,i.subtotal,"INR")),t.R7$(6),t.JRh(t.i5U(34,11,i.taxes,"INR")),t.R7$(6),t.JRh(t.i5U(40,14,i.totalPayable,"INR")))},dependencies:[u.Sq,n.Jm,n.b_,n.I9,n.ME,n.tN,n.W9,n.eU,n.uz,n.he,n.nf,n.JI,n.Zx,n.BC,n.ai,u.oe],styles:[".page-checkout[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:10px}.page-checkout[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:auto}button[_ngcontent-%COMP%]{background-color:#000;color:#cbbc82;border:none;padding:.5em 1em;border-radius:5px;cursor:pointer;font-size:1em}button[_ngcontent-%COMP%]:hover{background-color:#cbbc82;color:#000}"]}),r})()}];let k=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[h.iI.forChild(m),h.iI]}),r})(),F=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.MD,d.YN,n.bv,k]}),r})()}}]);