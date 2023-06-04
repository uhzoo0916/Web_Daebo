/** main7.js */

const person={	
	firstName : 'hyunjue',
	lastName : 'You',
	getFullName : function(){	
		return `${this.firstName} ${this.lastName}`
	}
	,setFristName:function(data){	
		this.firstName =data;
	}
}
console.log(person)
console.log(person.lastName);
person.setFristName('Yuna');
console.log(person.getFullName());
console.log(person)

const any={	
	firstName : 'Any',
	lastName : 'You',
	getFullName : function(){	
		return `${this.firstName} ${this.lastName}`
	}
	,setFristName:function(data){	
		this.firstName =data;
	}
}

console.log(any)
console.log(any.firstName);
person.setFristName('Kim');
console.log(person.getFullName());


function User(first, last){	
	this.firstName = first
	this.lastName = last
	this.getFullName = function(){	
		return  `${this.firstName} ${this.lastName}`
	}
}
const saram = User(`person`, `any`) //사람 클래스 안에 person, any 넣기 
console.log(saram)
console.log();


//this
//일반(Normal) 함수는 호출 위치에서 this 정의
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

/*
 function User(name) {
	this.name = name;
}


User.prototype.arrow = () => {
	console.log(this.name);
}

const doyeon = {
	name : 'DoYeon',
	normal: function(){
		console.log(this.name);
	}
}


const doyeon = {
	name : 'DoYeon',
	normal: function(){
		console.log(this.name);
	},
	arrow: () => {
		console.log(this.name);
	}
}

const doyeon2 = new User('DoYeon')

doyeon.normal()
doyeon.arrow()
*/






