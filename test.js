const greet=require('./app')

if (greet()==="I AM BATMAN"){
    console.log("WHY SO SERIOUS");
    process.exit(0);
}else{
    console.log("DARK KNIGHT");
    process.exit(1)
}