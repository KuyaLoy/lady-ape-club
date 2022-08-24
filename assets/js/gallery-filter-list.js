var LacBackground = [
    "Orange",
    "Yellow",
    "Gray",
    "Army Green",
    "New Punk Blue",
    "Aquamarine",
    "Purple",
    "Blue",
];

var LacClothes = [
    "Black Jacket",
    "Rider Jacket",
    "Stunt Jacket",
    "Yellow Jacket",
    "Leopard Jacket",
    "Blue Tweed Jacket",
    "Black Turtleneck",
    "Belted Tank Top",
    "Black Tank Top",
    "Noodle Strap Top",
    "Military Sleeveless Top",
    "Logo Vintage T-shirt",
    "Sailor T-shirt",
    "Skull T-shirt",
    "Check Collar T-shirt",
    "Silver T-shirt",
    "Lac Black T-shirt",
    "Brown Chess Shirt",
    "Vietnam Shirt",
    "Stone Robe",
    "Geometric Pattern Blouse",
    "Bustier Dress",
    "Unbalanced Ribbon Dress",
    "Olivia Dress",
    "Madonna Dress",
    "Admirals Coat",
    "Flamingo Fur Coat",
    "Jacquard Coat",
    "Space Suit",
    "Vintage Neck Pole",
    "Golf Collar Tee",
    "Lac Red T-shirt",
    "Gold Jacket",
    "Gold Jacket",
    "Blue Striped T-shirt",
    "Bikini",
    "Tie-dye",
    "Sea Dress",
    "Riding Vest",
    "Red Cloth Jacket",
    "Rainbow Belt",
    "Ornament Pattern Bomber",
    "Off The Shoulder",
    "Nurse Jacket",
    "School Uniform"
];

var LacEarring = [
    "Dot Earrings",
    "H Earrings",
    "Sapphire Earrings",
    "Aquamarine Earrings",
    "Bone Earrings",
    "Emerald Earrings",
    "Square Aquamarine Earrings",
    "Flower Pearl Earrings",
    "Sliver Three Earrings",
    "Silver Logo Earrings",
    "Silver Ball Earrings",
    "Silver Feathering",
    "Shield Earrings",
    "Gold Logo Earrings",
    "Gold Three Earrings",
    "Gold Flower Earrings",
    "Gold Cross Earrings",
    "Gold Ball Earrings",
    "Ornament Scarf Earrings",
    "Lucxury Earrings",
    "Pink Long Earrings",
    "Lucifer Earcuff",
    "Can Lid Earrings",
    "Blue Diamond Earrings",
    "Clip Ring Earrings",
    "Big Silver Earrings",
    "Ceylon Blue Earrings",
    "Blue India Earrings",
];

var LacNecklace = [
    "Triple Gold Necklace",
    "Medusa Pendant Necklace",
    "Pearl Flower Necklace",
    "Divas Dream Necklace",
    "Tricolor Pattern Choke",
    "Bag Pendant Necklace",
    "Gold Pendant Necklace",
    "Chandal Pendant",
    "H Necklace",
    "Silver Tennis Necklace",
    "Tricolor Pearl Flower Necklace",
    "Leopard Scarf",
    "Goldpink Choke",
    "Gold Pet Necklace",
    "Gold Cross Necklace",
    "Belt Choke",
    "Cube Necklace",
];

var LacEyes = [
    "Laser",
    "Wink",
    "Sorry",
    "Sad",
    "Bored",
    "Oops",
    "Coin",
    "X",
    "Zombie",
    "Sleepy",
    "Red Beams",
    "Cyborg",
    "Crazy",
    "Closed",
    "Angry",
    "All Night"
];
                                       

var LacMouth = [
    "Boring",
    "Tongue",
    "Surprised",
    "Emotion",
    "Cigarette",
    "Pizza",
    "Bubble Gum",
    "Wide Smile",
    "Yummy",
    "Chu",
    "Yawn",
    "Whistle",
    "Suppress",
    "Discomfort",
    "Silence",
    "Cigar",
    "Mustache Cigarette",
    "Pipe",
    "Rose",
    "Thermometer",
    "Ice",
    "Gold",
    "Rainbow"
];

var LacGlasses = [
    "Zigzag Point Sunglasses",
    "Turbid Glass",
    "Snow Goggles",
    "Silverrimmed Glasses",
    "Red & Blue Sunglasses",
    "Holographic",
    "Blind",
    "Black Eyepatch",
    "Blackpink Eyepatch"
];


var LacFur = [
    "Black",
    "Golden Brown",
    "Dark Brown",
    "Cream",
    "Brown",
    "Blue",
    "White",
    "Tan",
    "Red",
    "Gray",
    "Pink",
    "Noise",
    "Solid Gold",
    "Robot",
    "Plasma",
    "Chaos",
    "Cheetah",
    "Zombie"
];

var LacHead = [
    "Brown Straight Hair",
    "Pink Straight Hair",
    "White Straight Hair",
    "Pink Ponytail",
    "Gray Ponytail",
    "Red Ponytail",
    "Fez Hat",
    "Ribbon Hairpin",
    "Chain Cap",
    "Party Hat",
    "Brown Sun Cap",
    "Wedding Veil",
    "Blue Bandana",
    "Blackfur Snapback",
    "Silver Point Snapback",
    "Navy Tidy Hair",
    "Brown Tidy Hair",
    "Blonde Madonna Hair",
    "Bunny Headband",
    "Lac Snapback Black",
    "Horns",
    "Green Short Hair",
    "Army Hat",
    "Halo",
    "White Helmet",
    "Beanie",
    "Beret",
    "Elegant Hat",
    "Graceful Lady",
    "Ice Cream",
    "Laurel Wreath",
    "Queens Crown"
];


for( i = 0; i < LacBackground.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacBackground_'+[i]+'';
    label.innerHTML = LacBackground[i];
    input.setAttribute("name","LacBackground");
    input.type = "checkbox";
    input.classList.add('filter-bg')
    input.setAttribute("value", LacBackground[i]);
    input.id = 'LacBackground_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacBackground').appendChild(div);
}

// for( i = 0; i < LacBackground.length; i++ ) {

//     var div = document.createElement('div');
//     var label = document.createElement('label');
//     var input = document.createElement('input');

//     div.classList.add('lacFilter');
//     label.htmlFor = 'LacBackground_'+LacBackground[i]+'';
//     label.innerHTML = LacBackground[i];
//     input.setAttribute("name",LacBackground;
//     input.type = "radio";
//     input.setAttribute("value", "LacBackground[i];
//     input.id = 'LacBackground_'+LacBackground[i]+'';

//     div.appendChild(label);
//     div.appendChild(input);
  
//     document.getElementById('LacBackground').appendChild(div);
// }

for( i = 0; i < LacClothes.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacClothes_'+[i]+'';
    label.innerHTML = LacClothes[i];
    input.setAttribute("name","LacClothes");
    input.type = "radio";
    input.setAttribute("value", LacClothes[i]);
    input.id = 'LacClothes_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacClothes').appendChild(div);
}

for( i = 0; i < LacEarring.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacEarring_'+[i]+'';
    label.innerHTML = LacEarring[i];
    input.setAttribute("name","LacEarring");
    input.type = "radio";
    input.setAttribute("value", LacEarring[i]);
    input.id = 'LacEarring_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacEarring').appendChild(div);
}

for( i = 0; i < LacNecklace.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacNecklace_'+[i]+'';
    label.innerHTML = LacNecklace[i];
    input.setAttribute("name","LacNecklace");
    input.type = "radio";
    input.setAttribute("value", LacNecklace[i]);
    input.id = 'LacNecklace_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacNecklace').appendChild(div);
}

for( i = 0; i < LacEyes.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacEyes_'+[i]+'';
    label.innerHTML = LacEyes[i];
    input.setAttribute("name","LacEyes");
    input.type = "radio";
    input.setAttribute("value", LacEyes[i]);
    input.id = 'LacEyes_'+[i]+' filter-eyes';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacEyes').appendChild(div);
}

for( i = 0; i < LacMouth.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacMouth_'+[i]+'';
    label.innerHTML = LacMouth[i];
    input.setAttribute("name","LacMouth");
    input.type = "radio";
    input.setAttribute("value",LacMouth[i]);
    input.id = 'LacMouth_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacMouth').appendChild(div);
}

for( i = 0; i < LacGlasses.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacGlasses_'+[i]+'';
    label.innerHTML = LacGlasses[i];
    input.setAttribute("name","LacGlasses");
    input.type = "radio";
    input.setAttribute("value", LacGlasses[i]);
    input.id = 'LacGlasses_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacGlasses').appendChild(div);
}

for( i = 0; i < LacFur.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacFur_'+[i]+'';
    label.innerHTML = LacFur[i];
    input.setAttribute("name","LacFur");
    input.type = "radio";
    input.setAttribute("value", LacFur[i]);
    input.id = 'LacFur_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacFur').appendChild(div);
}

for( i = 0; i < LacHair.length; i++ ) {

    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.classList.add('lacFilter');
    label.htmlFor = 'LacHair_'+[i]+'';
    label.innerHTML = LacHair[i];
    input.setAttribute("name","LacHair");
    input.type = "radio";
    input.setAttribute("value", LacHair[i]);
    input.id = 'LacHair_'+[i]+'';

    div.appendChild(label);
    div.appendChild(input);
  
    document.getElementById('LacHair').appendChild(div);
}