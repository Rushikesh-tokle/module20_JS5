const Student={
    name:"Rushi",
    roll:74,
    pointer:8.59,
    city:"delhi"
};

const item={
    price:100,
    discount:50,
    color:["red","blue"]
};

const post={
username:"@rushi",
content:"hello guys Good Morning",
likes:150,
repost:5,
tags:["@apnaCollege","@Delta","@theta"]
};

///Accessing the values form the object literal
//2 ways of doing it 
///1
console.log(post.username);
console.log(post.content);
//2
console.log(post["username"]);
console.log(post["content"]);

//object of Objects(Nested Objects)
const classInfo={
    aman:{
        lname:"pathan",
        roll:50,
        marks:90
    },
    pratik:{
        lname:"kamble"
        ,roll:2,
        marsk:95
    },
    rushi:{
        lname:"reddy",
        roll:80,
        marks:91
    }
};

//Array of Objects 
const NClass=[
    {name:"aman",
        roll:10,
        marks:90
    },

    {name:"rushi",
        roll:19,
        marks:91
    },

    {name:"pratik",
        roll:13,
        marks:95
    }
];

//Generating a random number

// let rand_Num=Math.floor(Math.random()*10)+1;
// console.log(rand_Num);
let rand_Number=Math.floor(Math.random()*100)+1;
console.log(rand_Number);

let rand_Numb=Math.floor(Math.random()*5)+1;
console.log(rand_Numb);