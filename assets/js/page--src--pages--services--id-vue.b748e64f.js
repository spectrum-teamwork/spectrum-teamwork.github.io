(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+L2f":function(e,t,s){"use strict";s.r(t);var i=s("1Q2W"),a=s("fB/u"),r=s("9shQ"),n=(s("CAgN"),s("EEM0")),c=s("ohq5"),o=s("yCxO"),d=s.n(o),l={name:"CsdServicePost",components:{CsdPriceCalcForm:c.a,CsdPostHeader:n.a},props:{price:{type:Number,required:!0},heading:{type:String,required:!0},content:{type:String,required:!0},certImage:{type:String,required:!0},requirements:{type:String,required:!0},requirementsHeading:{type:String,required:!0}},data:()=>({viewer:void 0}),mounted(){this.viewer=new d.a(document.getElementById("image"),{viewed(){this.viewer.zoomTo(1)}})}},u=(s("uk4c"),s("7uw+")),m=Object(u.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"service-post"},[s("csd-post-header",{attrs:{heading:e.heading}}),s("div",{staticClass:"container"},[s("div",{staticClass:"row d-lg-none"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"price-calc-wrapper"},[s("span",{staticClass:"price-calc-wrapper__price"},[e._v("от "+e._s(e.price)+" ₽")]),s("span",{staticClass:"price-calc-wrapper__description"},[e._v("Стоимость зависит от объёма запущенных работ")])])])]),s("div",{staticClass:"row mb-4 d-lg-none"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"requirements"},[s("div",{staticClass:"ml-0 requirements__content"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"requirements__heading",domProps:{innerHTML:e._s(e.requirementsHeading)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"requirements__text",domProps:{innerHTML:e._s(e.requirements)}})])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"d-none d-lg-flex col-lg-7 service-post__wrapper"},[s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"service-post__content",domProps:{innerHTML:e._s(e.content)}}),s("div",{staticClass:"requirements d-none d-lg-flex"},[s("div",{staticClass:"requirements__cert"},[s("g-image",{attrs:{quality:"80",id:"image",src:e.certImage,alt:"Пример сертификата/протокола испытаний"}})],1),s("div",{staticClass:"requirements__content"},[s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"requirements__heading",domProps:{innerHTML:e._s(e.requirementsHeading)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"requirements__text",domProps:{innerHTML:e._s(e.requirements)}})])])]),s("div",{staticClass:"col-12 col-lg-4 offset-lg-1"},[s("div",{staticClass:"price-calc-wrapper mx-auto mr-lg-0 ml-lg-auto"},[s("span",{staticClass:"d-none d-lg-block price-calc-wrapper__price"},[e._v("от "+e._s(e.price)+" ₽")]),s("span",{staticClass:"d-none d-lg-block price-calc-wrapper__description"},[e._v("Стоимость зависит от объёма запущенных работ")]),s("csd-price-calc-form"),s("span",{staticClass:"price-calc-wrapper__phone-title"},[e._v("Либо уточните по номеру телефона:")]),s("a",{staticClass:"price-calc-wrapper__phone",attrs:{href:"tel:88006001744"}},[e._v("8 (800) 600-17-44")])],1)])])])],1)}),[],!1,null,null,null).exports,p={name:"Service",mixins:[s("S6dz").a],data:()=>({requirementsHeadings:{testing:"Для регистрации декларации и получения протокола испытаний, требуется",certification:"Для регистрации декларации и получения протокола испытаний, требуется"}}),components:{CsdServicePost:m,CsdBackwardButton:r.a,CsdHeader:a.a,CsdPageFooter:i.a}},_=null,v=Object(u.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[e.$page.services?[s("csd-service-post",{attrs:{price:e.$page.services.price,heading:e.$page.services.title,content:e.$page.services.description,"cert-image":e.imageById(e.$page.services.image_document_id),requirements:e.$page.services.requirements,"requirements-heading":e.requirementsHeadings[e.$page.services.service_type]}})]:e._e()],2)}),[],!1,null,null,null);"function"==typeof _&&_(v);t.default=v.exports},EEM0:function(e,t,s){"use strict";var i={name:"CsdPostHeader",props:{heading:{type:String,required:!0},subheading:{type:String,default:null}}},a=s("7uw+"),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 post-header pb-5"},[s("h1",{staticClass:"post-header__heading"},[e._v("\n        "+e._s(e.heading)+"\n      ")]),e.subheading?s("span",{staticClass:"post-header__subheading"},[e._v("\n        "+e._s(e.subheading)+"\n      ")]):e._e()])])])}),[],!1,null,null,null);t.a=r.exports},JDC4:function(e,t,s){},S6dz:function(e,t,s){"use strict";t.a={methods:{imageById:e=>"http://yarlikvid.ru:8000/api/v1/images/"+e}}},ohq5:function(e,t,s){"use strict";var i=s("jNZX"),a=s("VRAt"),r=s("hS4W"),n=s.n(r),c={name:"CsdPriceCalcForm",mixins:[i.a,a.a],data:()=>({submitButtonTimeout:null,submitButtonText:"Отправить",submitButtonClasses:{"price-calc-form__button_error":!1,"price-calc-form__button_success":!1},form:{contact_id:"",service_id:"7334d757-3fae-4b38-8e54-892007162adf",contact_name:"",phone:""}}),methods:{async onFormSubmit(){this.resetSubmitButton(),this.form.contact_id=n.a.get("_region"),await this.createOrder(this.form)},resetSubmitButton(e=0){clearTimeout(this.submitButtonTimeout),this.submitButtonTimeout=setTimeout(()=>{this.submitButtonText="Отправить",this.submitButtonClasses["price-calc-form__button_error"]=!1,this.submitButtonClasses["price-calc-form__button_success"]=!1},e)}},watch:{"createOrderState.success":{handler(e){e&&(this.submitButtonText="Отправлено",this.submitButtonClasses["price-calc-form__button_success"]=!0,this.resetSubmitButton(1500))}},"createOrderState.error":{handler(e){e&&(this.submitButtonText="Ошибка",this.submitButtonClasses["price-calc-form__button_error"]=!0,this.resetSubmitButton(1500))}}},mounted(){var e;addEventListener("onregionupdate",e=>{this.form.contact_id=e.detail.regionId}),null!==(e=this.$refs)&&void 0!==e&&e.serviceIdInput&&(this.form.service_id=this.$refs.serviceIdInput.value)}},o=s("7uw+"),d=s("Kw5r");const{computed:l}=d.a.config.optionMergeStrategies,u={allServices:{edges:[{node:{id:"7170b1a2-77c5-477f-82ef-1057480019a7",title:"Испытания продукции пищевой промышленности"}},{node:{id:"9b8cf084-cddf-482f-9bc7-cb3ebc1763c8",title:"Испытания косметики"}},{node:{id:"fd705f3b-5128-4ffa-ba0f-85e5b4c395ec",title:"Сертификация продукции легкой промышленности"}},{node:{id:"e02f44a8-2415-4232-a89e-76523e8ecca9",title:"Испытания игрушек"}},{node:{id:"e80c25dc-a871-4d49-a61a-bfc922f4d80b",title:"Испытания продукциидля регистрационного удостоверения"}},{node:{id:"ecddb5ac-e0d1-45eb-bb2f-44d0db35302d",title:"Испытания продукции легкой промышленности"}}]}};var m=({options:e})=>{e.__staticData?e.__staticData.data=u:(e.__staticData=d.a.observable({data:u}),e.computed=l({$static:()=>e.__staticData.data},e.computed))},p=Object(o.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"price-calc-form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmit.apply(null,arguments)}}},[s("div",{staticClass:"price-calc-form__heading"},[e._v("\n    Рассчитать стоимость\n  ")]),void 0===e.$context.serviceId?s("select",{directives:[{name:"model",rawName:"v-model",value:e.form.service_id,expression:"form.service_id"}],attrs:{required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"service_id",t.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",hidden:"",selected:"",value:"7334d757-3fae-4b38-8e54-892007162adf"}},[e._v("Выберите услугу из списка")]),e._l(e.$static.allServices.edges,(function(t){var i=t.node;return s("option",{domProps:{value:i.id},model:{value:e.form.serviceId,callback:function(t){e.$set(e.form,"serviceId",t)},expression:"form.serviceId"}},[e._v("\n      "+e._s(i.title)+"\n    ")])}))],2):s("input",{ref:"serviceIdInput",attrs:{type:"text",hidden:""},domProps:{value:e.$context.serviceId}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_name,expression:"form.contact_name"}],staticClass:"price-calc-form__input-name",attrs:{required:"",type:"text",name:"fullname",placeholder:"Имя"},domProps:{value:e.form.contact_name},on:{input:function(t){t.target.composing||e.$set(e.form,"contact_name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],staticClass:"price-calc-form__input-tel",attrs:{type:"tel",name:"tel",placeholder:"Номер телефона"},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}}),s("button",{class:["price-calc-form__button",e.submitButtonClasses]},[e._v(e._s(e.submitButtonText))])])}),[],!1,null,null,null);"function"==typeof m&&m(p);t.a=p.exports},uk4c:function(e,t,s){"use strict";s("JDC4")}}]);