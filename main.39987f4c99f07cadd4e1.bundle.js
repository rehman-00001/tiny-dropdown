(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(158),_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(149),_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(150),_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(157),_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(151),_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(159),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),TinyDropdown=(__webpack_require__(318),function(_Component){function TinyDropdown(props){var _this;return Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,TinyDropdown),(_this=Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(TinyDropdown).call(this,props))).initializeDefaults=function(){_this.parentDiv.current.style.setProperty("--visible-rows",_this.props.visibleOptions),_this.arrow.current.style.setProperty("border-bottom-color",_this.button.current.style.color),_this.arrow.current.style.setProperty("border-top-color",_this.button.current.style.color)},_this.componentDidMount=function(){document.addEventListener("mousedown",_this.handleOutsideClick),_this.initializeDefaults()},_this.componentWillUnmount=function(){document.removeEventListener("mousedown",_this.handleOutsideClick)},_this.handleOutsideClick=function(event){_this.parentDiv.current.contains(event.target)||_this.setState({showPanel:!1})},_this.toggleDropdownMenu=function(){_this.setState(function(prevState){return{showPanel:!prevState.showPanel}})},_this.onOptionsSelected=function(selectedIndex){var selectedOption=_this.props.options[selectedIndex];_this.setState({selectedOption:selectedOption,selectedIndex:selectedIndex,showPanel:!1}),_this.props.onSelect(selectedOption,selectedIndex)},_this.getOptionsLabel=function(option){return"function"==typeof _this.props.label?_this.props.label(option):option},_this.getSelectedOptionLabel=function(){return _this.getOptionsLabel(_this.state.selectedOption)||_this.state.placeHolder},_this.getDefaultKey=function(option,index){return"".concat(_this.getOptionsLabel(option),"--").concat(index)},_this.state={showPanel:!1,selectedOption:_this.props.selectedIndex?_this.props.options[_this.props.selectedIndex]:"",selectedIndex:_this.props.selectedIndex,placeHolder:_this.props.placeHolder},_this.parentDiv=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef(),_this.button=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef(),_this.arrow=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef(),_this}return Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(TinyDropdown,_Component),Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(TinyDropdown,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"tiny-dropdown",ref:this.parentDiv},this.renderDropdownButton(),this.renderDropdownOptionsPanel())}},{key:"renderDropdownButton",value:function renderDropdownButton(){var isPanelActive=this.state.showPanel,dropdownMenuClasses=["dropdown-menu",isPanelActive?"panel-open":""].join(" "),arrowClass=isPanelActive?"arrow-up":"arrow-down";return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{role:"menu",className:dropdownMenuClasses,style:this.props.cssOverrides.dropdownButton,onClick:this.toggleDropdownMenu,ref:this.button},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"dropdown-label dropdown-text",style:this.props.cssOverrides.dropdownButtonLabel},this.getSelectedOptionLabel()),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:arrowClass,ref:this.arrow}))}},{key:"renderDropdownOptionsPanel",value:function renderDropdownOptionsPanel(){var _this2=this,panelStyles=Object(_home_abdul_Code_Web_tiny_dropdown_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},this.props.cssOverrides.dropdownPanel,{display:this.state.showPanel?"inline-block":"none"}),selectedIndex=this.state.selectedIndex,_this$props$cssOverri=this.props.cssOverrides,dropdownOption=_this$props$cssOverri.dropdownOption,dropdownOptionSelected=_this$props$cssOverri.dropdownOptionSelected;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul",{className:"dropdown-panel",style:panelStyles},this.props.options.map(function(option,index){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li",{role:"option","aria-selected":selectedIndex===index,key:option.key||_this2.getDefaultKey(option,index),className:"dropdown-option dropdown-text",style:selectedIndex===index?dropdownOptionSelected:dropdownOption,onClick:function onClick(){return _this2.onOptionsSelected(index)}},_this2.getOptionsLabel(option))}))}}]),TinyDropdown}(react__WEBPACK_IMPORTED_MODULE_6__.Component));TinyDropdown.defaultProps={placeHolder:"Select an option",label:null,selectedIndex:null,visibleOptions:8,cssOverrides:{dropdownButton:null,dropdownPanel:null,dropdownOption:null,dropdownOptionSelected:null}},__webpack_exports__.a=TinyDropdown},13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return stringTypeOptions}),__webpack_require__.d(__webpack_exports__,"a",function(){return objectTypeOptions});var stringTypeOptions=["Google","Microsoft","Amazon","Facebook","Twitter","Uber"],objectTypeOptions=[{key:"option-1",value:"United States"},{key:"option-2",value:"Russia"},{key:"option-3",value:"India"},{key:"option-4",value:"China"},{key:"option-5",value:"United Kingdom"},{key:"option-6",value:"Germany"},{key:"option-7",value:"France"},{key:"option-8",value:"Japan"},{key:"option-9",value:"Israel"},{key:"option-10",value:"Saudi arabia"},{key:"option-11",value:"United Arab Emirates"},{key:"option-12",value:"Other"}]},148:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.a,label:function label(option){return option.value},placeHolder:"Select your country",onSelect:function onSelect(option){return action("clicked")}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"const options = [ "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-1', value: 'United States' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-2', value: 'Russia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-3', value: 'India' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-4', value: 'China' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-5', value: 'United Kingdom' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-6', value: 'Germany' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-7', value: 'France' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-8', value: 'Japan' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-9', value: 'Israel' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-10', value: 'Saudi arabia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-11', value: 'United Arab Emirates' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-12', value: 'Other' } "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," ]; "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","label={option => option.value}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ",'placeHolder="Select your country"'),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},152:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.a,label:function label(option){return option.value},onSelect:function onSelect(option){return action("clicked")}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"const options = [ "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-1', value: 'United States' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-2', value: 'Russia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-3', value: 'India' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-4', value: 'China' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-5', value: 'United Kingdom' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-6', value: 'Germany' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-7', value: 'France' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-8', value: 'Japan' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-9', value: 'Israel' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-10', value: 'Saudi arabia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-11', value: 'United Arab Emirates' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-12', value: 'Other' } "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," ]; "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","label={option => option.value}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},153:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.b,onSelect:function onSelect(option){return action("clicked")}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"const options = [ 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Twitter', 'Uber' ];"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},154:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.a,label:function label(option){return option.value},selectedIndex:2,onSelect:function onSelect(option){return action("clicked")}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"const options = [ "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-1', value: 'United States' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-2', value: 'Russia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-3', value: 'India' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-4', value: 'China' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-5', value: 'United Kingdom' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-6', value: 'Germany' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-7', value: 'France' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-8', value: 'Japan' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-9', value: 'Israel' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-10', value: 'Saudi arabia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-11', value: 'United Arab Emirates' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-12', value: 'Other' } "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," ]; "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","label={option => option.value}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","selectedIndex={2}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},155:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.a,label:function label(option){return option.value},onSelect:function onSelect(option){return action("clicked")},visibleOptions:4}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"const options = [ "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-1', value: 'United States' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-2', value: 'Russia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-3', value: 'India' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-4', value: 'China' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-5', value: 'United Kingdom' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-6', value: 'Germany' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-7', value: 'France' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-8', value: 'Japan' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-9', value: 'Israel' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-10', value: 'Saudi arabia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-11', value: 'United Arab Emirates' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-12', value: 'Other' } "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," ]; "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","label={option => option.value}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","visibleOptions={4}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},156:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_data__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(31),__webpack_require__(13));__webpack_exports__.a=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,"Select something : "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Components_TinyDropdown_TinyDropdown__WEBPACK_IMPORTED_MODULE_1__.a,{options:_data__WEBPACK_IMPORTED_MODULE_3__.a,label:function label(option){return option.value},selectedIndex:2,onSelect:function onSelect(option){return action("clicked")},cssOverrides:{dropdownButton:{color:"brown",border:"1px solid #ffff7f"},dropdownPanel:{background:"#ffff7f"},dropdownOption:{color:"brown"},dropdownOptionSelected:{background:"lightgreen",fontFamily:"serif"}}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"dropdown-text"},"This is a dummy paragraph added to see how the dropdown behaves when it is expanded. Ideally the paragraph should not be pushed down on expanding the panel. Seems like this dropdown works properly."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Usage"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"code-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"const options = [ "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-1', value: 'United States' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-2', value: 'Russia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-3', value: 'India' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-4', value: 'China' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-5', value: 'United Kingdom' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-6', value: 'Germany' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-7', value: 'France' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-8', value: 'Japan' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-9', value: 'Israel' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-10', value: 'Saudi arabia' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-11', value: 'United Arab Emirates' }, "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","{ key: 'option-12', value: 'Other' } "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," ]; "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markup"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"<TinyDropdown"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","options={options}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","label={option => option.value}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","onSelect={(option, selectedIndex) => console.log(option, selectedIndex)}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","selectedIndex={2}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","cssOverrides={{"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","dropdownButton: {"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","color: 'brown',"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","border: '1px solid #ffff7f'"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","},"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","dropdownPanel: {"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","background: '#ffff7f'"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","},"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","dropdownOption: {"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","color: 'brown'"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","},"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","dropdownOptionSelected: {"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","background: 'lightgreen',"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," "," "," ","fontFamily: 'serif'"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," "," "," ","}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"}," "," ","}}"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{className:"new-line"},"/>"))))}},160:function(module,exports,__webpack_require__){__webpack_require__(161),__webpack_require__(239),module.exports=__webpack_require__(240)},240:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(60),req=__webpack_require__(316);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(109)(module))},31:function(module,exports,__webpack_require__){},316:function(module,exports,__webpack_require__){var map={"./TinyDropdown.stories.js":317};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=316},317:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(60),_variants_WithCustomPlaceholder_story__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(148),_variants_OptionsTypeObject_story__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(152),_variants_OptionsTypeString_story__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(153),_variants_WithPreselectedOption_story__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(154),_variants_WithCustomVisibleRows_story__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(155),_variants_WithCustomStyles_story__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(156);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("TinyDropdown",module).add("Options type: String",_variants_OptionsTypeString_story__WEBPACK_IMPORTED_MODULE_3__.a).add("Options type: Object",_variants_OptionsTypeObject_story__WEBPACK_IMPORTED_MODULE_2__.a).add("With custom placeholder",_variants_WithCustomPlaceholder_story__WEBPACK_IMPORTED_MODULE_1__.a).add("With pre-selected option",_variants_WithPreselectedOption_story__WEBPACK_IMPORTED_MODULE_4__.a).add("With custom visible rows",_variants_WithCustomVisibleRows_story__WEBPACK_IMPORTED_MODULE_5__.a).add("With custom css styles",_variants_WithCustomStyles_story__WEBPACK_IMPORTED_MODULE_6__.a)}.call(this,__webpack_require__(109)(module))},318:function(module,exports,__webpack_require__){}},[[160,1,2]]]);
//# sourceMappingURL=main.39987f4c99f07cadd4e1.bundle.js.map