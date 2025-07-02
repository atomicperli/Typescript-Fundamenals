//tsc filename.ts - This does not consider the tsconfig.json file that we have in our project instead it will use very basic ts features like es3 


// tsc - This command will actually use the compiler options we are giving in the tsconfig.json
// When you use a tsc all the ts files in the project will get compiled and their respective js files will be created

// How to over come this problem ?

// We added an include option in the ts file which allows to run compile only specific ts files when tsc command is run