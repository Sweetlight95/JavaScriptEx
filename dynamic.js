const circle = {
    radius: 1
};
circle.color = 'red';
circle.draw = function() {}

delete circle.color;
delete circle.radius;

console.log(circle);