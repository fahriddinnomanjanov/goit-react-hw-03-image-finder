(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__B0DD2",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1pkXs"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__282VF",Modal:"Modal_Modal__1w06p"}},22:function(e,t,a){e.exports={App:"App_App__2J62k"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__ypEwl"}},24:function(e,t,a){e.exports={Button:"Button_Button__uh1N2"}},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(30),a(13)),i=a(3),s=a(4),u=a(6),h=a(5),d=a(22),p=a.n(d),m=a(7),g=a.n(m),b=a(0),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit;return Object(b.jsx)("header",{className:g.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:t,className:g.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(b.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:e})]})})}}]),a}(n.Component),f=a(10),y=a.n(f),v=a(25),O=a(11),_=a.n(O),S=function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.openModal,o=e.largeImageURL;return Object(b.jsx)("li",{onClick:function(){return r(o)},id:t,className:_.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:a,alt:n,className:_.a.ImageGalleryItemImage})})},x=a(23),k=a.n(x),I=function(e){var t=e.list,a=e.openModal,n=t.map((function(e){return Object(b.jsx)(S,Object(v.a)({openModal:a},e),e.id)}));return Object(b.jsx)("ul",{className:k.a.ImageGallery,children:n})},w=function(){return Object(b.jsx)("h2",{children:"Lodaing ..."})},M=a(12),C=a.n(M),B=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"!==t.code&&"Backspace"!==t.code||e.props.onClose()},e.handleClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(b.jsx)("div",{onClick:this.handleClickBackdrop,className:C.a.Overlay,children:Object(b.jsx)("div",{className:C.a.Modal,children:e})}),B)}}]),a}(n.Component),N=a(24),G=a.n(N),D=function(e){var t=e.handleClick;return Object(b.jsx)("button",{onClick:t,type:"button",className:G.a.Button,children:"Load More"})},q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hits:[],query:"",loading:!1,showModal:!1,src:null,currentPage:1,perPage:12},e.listRef=Object(n.createRef)(),e.handleClick=function(){var t=e.state.currentPage;e.setState((function(){return{currentPage:t+1,loading:!0}})),console.log(e.state)},e.handleQuery=function(t){var a=t.query;e.setState({query:a,loading:!0,hits:[],currentPage:1})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){e.toggleModal(),e.setState({src:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.query,n=t.currentPage,r=t.perPage;y.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=20962897-331ac5a967e647c87b669ac14&image_type=photo&orientation=horizontal&per_page=").concat(r)).then((function(t){var a=t.data;e.setState({hits:a.hits}),console.log(a.hits)}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this,r=this.state,o=r.query,c=r.loading,i=r.currentPage,s=r.perPage;c&&y.a.get("https://pixabay.com/api/?q=".concat(o,"&page=").concat(i,"&key=20962897-331ac5a967e647c87b669ac14&image_type=photo&orientation=horizontal&per_page=").concat(s)).then((function(e){var t=e.data;n.setState((function(e){var a=e.hits;return{hits:[].concat(Object(l.a)(a),Object(l.a)(t.hits)),loading:!1}}))})),null!==a&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.hits.length<this.state.hits.length?this.listRef.current.scrollHeight:null}},{key:"render",value:function(){var e=this.handleQuery,t=this.toggleModal,a=this.openModal,n=this.handleClick,r=this.state,o=r.loading,c=r.showModal,l=r.src;return Object(b.jsxs)("div",{className:p.a.App,children:[Object(b.jsx)(j,{onSubmit:e}),Object(b.jsx)("div",{ref:this.listRef,children:Object(b.jsx)(I,{openModal:a,list:this.state.hits})}),o&&Object(b.jsx)(w,{}),c&&Object(b.jsx)(F,{onClose:t,children:Object(b.jsx)("img",{src:l,alt:""})}),Object(b.jsx)(D,{handleClick:n})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__eUbJw",SearchForm:"Searchbar_SearchForm__ZdfpC",SearchFormButton:"Searchbar_SearchFormButton__1_7hp",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1ApD6",SearchFormInput:"Searchbar_SearchFormInput__ZDmYn"}}},[[50,1,2]]]);
//# sourceMappingURL=main.c9912cf3.chunk.js.map