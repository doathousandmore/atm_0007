(function(ab){

	var sheet;

	ab.dynamicStyles = {
		insert: function(styles){
			var style,
				rule;

			if(!sheet){
				style = document.createElement("style");
				style.appendChild(document.createTextNode(""));
				document.head.appendChild(style);
				sheet = style.sheet;
			}

			styles
				.replace(/}/g, '}|')
				.split('|')
				.map(function(declaration){
					rule = declaration.replace(/([{}:;,\s])\s+/g, '$1');
					if(rule.trim()){
						sheet.insertRule(rule, 0);
					}
				});

		}
	}

}(window.ab = window.ab || {}))
