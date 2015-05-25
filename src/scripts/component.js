(function( ab ){
	
	"use strict";

	ab.component = function(){
		return{
			render: function(templateString, wireFunction){

				var temp = document.createElement('div'),
					element;	
				
				temp.innerHTML = templateString;
				element = temp.firstChild;

				new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation){
						if(element === mutation.addedNodes[0]){
							wireFunction(element);
						}
					});   
				}).observe(document.body, { childList: true , subtree: true});

				return function(){
					return document.createDocumentFragment().appendChild(element);
				}

			}

		}

	}

}(window.ab = window.ab || {}));