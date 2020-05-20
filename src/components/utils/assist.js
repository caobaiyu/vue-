
/*
 *向上找到最近的指定组件
 * 两个参数，
 * 第一个是当前上下文比如你要基于哪个组件来向上寻找，一般都是基于当前的组件，也就是传入 this；
 * 第二个参数是要找的组件的 name
 * */
function findComponentUpward(context ,componentName){
	let parent = context.$parent ;
	let name = parent.$options.name ;
	//while 语句里不断向上覆盖当前的 parent 对象，
	//通过判断组件（即 parent）的 name 与传入的 componentName 是否一致，
	//直到直到最近的一个组件为止。
	while(parent && (!name || [componentName].indexOf(name) < 0)) {
		parent = parent.$parent ;
		if(parent) name = parent.$options.name ;
	}
	return parent ;
	
}


/**
 * 向上找到所有的指定组件
 * 
 */

function findComponentsUpward(context ,componentName){
	let parents = [] ;
	const parent = context.$parent ;
	//这个递归，concat将之合成一个数组，绝了。
	if(parent){
		if(parent.$options.name == componentName) parents.push(parent) ;
		return parents.concat(findComponentsUpward(context ,componentName))
	}else{
		return [] ;
	}
	
}

/**
 * 向下找到最近的指定组件
 */

function findcomponentDownward(context ,componentName){
	const childrens = context.$children ;
	let children = null ;
	
	if(childrens.length){
		for(const child of childrens){
			const name = child.$options.name ;
			
			if(name === componentName){
				children = child ;
				break ;
			}else{
				//递归还可以这么用！！！这个递归只是赋值
				children = findcomponentDownward(child,componentName)
				if(children) break ;
			}
		}
	}
	
	return children ;
}


/**
 * 向下找到所有指定的组件
 */

function findComponentsDownward (context, componentName){
	return conttext.$children.reduce(
		(components , child)=> {
			if(child.$options.name === componentName) components.push(child) ;
			//递归还是这个concat
			const foundChilds = findComponentsDownward(child ,componentName);
			return components.concat(foundChilds) ;
		} , []
	) ;
	
}



/**
 * 找到指定组件的兄弟组件
 * exceptMe 是否把本身除外，默认是 true
 */

function findBrothersComponents(context ,componentName,exceptMe = true){
	let res = context.$parent.$children.filter( (item => item.$options.name === componentName))
	
	let index = res.findIndex(item => item._uid === context._uid) ;
	
	if(exceptMe) res.splice(index , 1) ;
	return res ;
	
	
}	







export {findComponentUpward} ;


